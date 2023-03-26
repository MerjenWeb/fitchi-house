const menuBtn = document.querySelector('.menu-button');
const openIcon = document.querySelector('.menu-icon-open');
const closeIcon = document.querySelector('.menu-icon-close');
const navBtns = document.querySelector('.navigation-links');

const randomPhoto = document.querySelectorAll('.random-image');

console.log(menuBtn, open, close);

// Navbar section - Opening menu button
// when i click the menu button navigtion list should open, and krestik should appear, bar menu should disappear
menuBtn.addEventListener('click', function () {
  if (closeIcon.classList.contains('non-active')) {
    closeIcon.classList.remove('non-active');
    openIcon.classList.add('non-active');
    navBtns.style.display = 'flex';
  } else if (openIcon.classList.contains('non-active')) {
    openIcon.classList.remove('non-active');
    closeIcon.classList.add('non-active');
    navBtns.style.display = 'none';
  }
});

//Section 5 - RANDOM and UNIQUE img chosen from images folder
// Create an array of random and unique numbers
const generateRandomNumber = (length, maxNum) => {
  const arr = [];
  while (arr.length < length) {
    const randomNumber = Math.floor(Math.random() * maxNum) + 1;
    // if randomNumber does not exist (-1), then push that randomNumber into the arr
    if (arr.indexOf(randomNumber) === -1) arr.push(randomNumber);
  }
  return arr;
};

//set value of the function to the variable
const arr = generateRandomNumber(10, 19);

//works, but gives an uncaught typeError (setting 'src')
for (let i = 0; i <= arr.length; i++) {
  const random = document.getElementsByClassName('random-image')[i];
  random.src = `/images/random-img/${arr[i]}.jpeg`;
}
