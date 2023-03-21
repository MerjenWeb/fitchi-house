'use strict';
const toggleButton = document.querySelector('.toggle-button');
const navbar = document.querySelector('.navbar-links');
console.log(navbar);

toggleButton.addEventListener('click', function () {
  navbar.classList.toggle('active');
  //make sure its a dot in css navbar links active
});
