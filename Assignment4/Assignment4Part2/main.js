/*
	Name: Christian Maglalang
    Student Number: 100911001
	File: INFT 1206 Assignment 4 Part 2
	Date: March 22, 2024
	Description: 
*/

function darkenImage() {
	const image = btn.getAttribute('class')
	if (image === 'dark') {
		overlay.backgroundColor = 'rgba(0,0,0,1)'
		btn.setAttribute('class', 'light')
	} else {
		overlay.style.backgroundColor = 'rgba(0,0,0,0)'
		btn.setAttribute('class', 'dark')
	}
}
const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg']

/* Declaring the alternative text for each image file */
const imageText = {
    'pic1.jpg': "Closeup of a human eye",
    'pic2.jpg': "Image of Swirling Lines",
    'pic3.jpg': "Purple Flowers",
    'pic4.jpg': "Egyption Painting",
	'pic5.jpg': "Yellow Butterfly"
};

/* Looping through images */
function nextImage({ target }) {
	displayedImage.setAttribute('src', target.getAttribute('src'))
	displayedImage.setAttribute('alt', target.getAttribute('alt'))
}

images.forEach((image) => {
	const makeImage = document.createElement('img')
	makeImage.setAttribute('src', `images/${image}`)
	makeImage.setAttribute('alt', imageText[image])
	thumbBar.appendChild(makeImage)
	makeImage.addEventListener('click', nextImage)
})

/* Wiring up the Darken/Lighten button */
function darkenImage() {
	let brightness = btn.getAttribute('class')
	if (brightness === 'dark') {
		overlay.style.backgroundColor = 'rgba(0,0,0,0.5)'
		btn.setAttribute('class', 'lit')
		btn.textContent = 'Lighten'
	} else {
		overlay.style.backgroundColor = 'rgba(0,0,0,0)'
		btn.setAttribute('class', 'dark')
		btn.textContent = 'Darken'
	}
}

btn.addEventListener('click', darkenImage)