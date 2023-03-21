const menuButton = document.querySelector('.menu');
const navButtons = document.querySelector('.navbar-links');
const randomPhoto = document.querySelectorAll('.random');

//Navbar section - Opening menu button
const openMenu = () => {
  navButtons.classList.toggle('active');
};
menuButton.addEventListener('click', openMenu);

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
  const random = document.getElementsByClassName('random')[i];
  random.src = `/images/${arr[i]}.jpeg`;
}
