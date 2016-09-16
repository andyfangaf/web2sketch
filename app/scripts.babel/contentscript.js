document.body.addEventListener('mouseover', function(evt) {
  evt.target.classList.add('web2sketch--highlighted')
})

document.body.addEventListener('mouseout', function(evt) {
  evt.target.classList.remove('web2sketch--highlighted')
})

document.body.addEventListener('click', function(evt) {
  console.log('clicked');
  chrome.runtime.sendMessage('screenshot', function(response) {
    createImage(response)
  })
})

function appendToBody(dataURL) {
  const imageTag = document.createElement('img')
  imageTag.setAttribute('src', dataURL)
  document.body.appendChild(imageTag)
}

function createImage(dataURL) {
  const canvas = createCanvas(window.innerWidth, window.innerHeight)
  const context = canvas.getContext('2d')
  const croppedImage = document.createElement('img')

  croppedImage.onload = function() {
    debugger; // NOT BEING FIRED
    // parameter 1: source image (screenshot)
    // parameter 2: source image x coordinate
    // parameter 3: source image y coordinate
    // parameter 4: source image width
    // parameter 5: source image height
    // parameter 6: destination x coordinate
    // parameter 7: destination y coordinate
    // parameter 8: destination width
    // parameter 9: destination height

    context.drawImage(croppedImage, 10, 10, 300, 300, 0, 0, 250, 250)
    appendToBody(canvas.toDataURL())
  }

}

function createCanvas(canvasWidth, canvasHeight) {
    var canvas = document.createElement("canvas");

    // size of canvas in pixels
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    return canvas;
}
