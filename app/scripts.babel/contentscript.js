

document.body.addEventListener('mouseover', function(evt) {
  console.log(evt.target);
  evt.target.classList.add('web2sketch--highlighted')
})

document.body.addEventListener('mouseout', function(evt) {
  evt.target.classList.remove('web2sketch--highlighted')
})

document.body.addEventListener('click', function(evt) {
  evt.preventDefault()
  evt.stopPropagation()
})
