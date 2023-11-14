// Get elements from the DOM by their IDs
const box = document.getElementById('box');
const boxInfo = document.getElementById('boxInfo');

// Event handler when hovering over a block
box.addEventListener('mouseover', function () {
	applyHoverStyles();
});

// Event handler when exiting the block
box.addEventListener('mouseout', function () {
	applyDefaultStyles();
});

// Event handler when a block is clicked
box.addEventListener('mousedown', function () {
	applyClickStyles();
});

// Event handler after the click is released
box.addEventListener('mouseup', function () {
	applyHoverStyles();
});

// Function to apply default styles
function applyDefaultStyles() {
	changeBackgroundColor(box, null);
	changeTextColor(boxInfo, null);
	changeText(boxInfo, 'I have a secret');
}

// Function to apply styles on hover
function applyHoverStyles() {
	changeBackgroundColor(box, 'khaki');
	changeTextColor(boxInfo, 'royalblue');
	changeText(boxInfo, 'Do you want to know which one?');
}

// Function to apply styles on click
function applyClickStyles() {
	changeBackgroundColor(box, 'black');
	changeTextColor(boxInfo, 'white');
	changeText(boxInfo, 'And I\'ll not say!');
}

// Function to change the element's background color
function changeBackgroundColor(element, color) {
	element.style.backgroundColor = color;
}

// Function to change the color of the element's text
function changeTextColor(element, color) {
	element.style.color = color;
}

// Function to change the element's text
function changeText(element, text) {
	element.innerText = text;
}
