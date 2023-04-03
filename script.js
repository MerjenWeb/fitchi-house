const nav = document.querySelector(".navigation-container");
const menuBtn = document.querySelector(".menu-button");
// const menuBtn
const openIcon = document.querySelector(".menu-icon-open");
const closeIcon = document.querySelector(".menu-icon-close");
const navBtns = document.querySelector(".navigation-list");
const randomPhoto = document.querySelectorAll(".random-image");

// Navbar section - Opening menu button
// when i click the menu button navigtion list should open, and krestik should appear, bar menu should disappear
menuBtn.addEventListener("click", function () {
	nav.classList.toggle("active");
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
for (let [i, el] of Object.entries(arr)) {
	i = Number(i) + 1;
	console.log(i, el);
	const random = document.getElementsByClassName("random-image")[i];
	random.src = `images/random-img/${el}.jpeg`;
}
