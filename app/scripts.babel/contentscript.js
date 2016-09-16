document.body.addEventListener('mouseover', function(evt) {
  evt.target.classList.add('web2sketch--highlighted')
  console.log(evt.target);
})

document.body.addEventListener('mouseout', function(evt) {
  evt.target.classList.remove('web2sketch--highlighted')
})

document.body.addEventListener('click', function(evt) {
  console.log('clicked');
  chrome.runtime.sendMessage('screenshot', function(response) {
    console.log(response);
  })
})
