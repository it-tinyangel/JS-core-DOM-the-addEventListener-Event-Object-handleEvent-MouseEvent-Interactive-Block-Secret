// Get elements from the DOM by their IDs
const box = document.getElementById('box');
const boxInfo = document.getElementById('boxInfo');

// Function to change the element's text
function changeText(text) {
	boxInfo.innerText = text;
}

// Function to handle mouse hover event
function handleHover() {
	box.classList.toggle('hovered');
	const newText = box.classList.contains('clicked') ? 'And I\'ll not say!' : 'Do you want to know which one?';
	changeText(newText);
}

// Function to handle mouse click event
function handleClick() {
	box.classList.toggle('clicked');
	const newText = box.classList.contains('clicked') ? 'And I\'ll not say!' : 'Do you want to know which one?';
	changeText(newText);
}

// Function to handle mouse leave event
function handleMouseLeave() {
	if (!box.classList.contains('clicked')) {
		box.classList.remove('hovered');
		changeText('I have a secret');
	}
}

// Event handlers
box.addEventListener('mouseover', handleHover);
box.addEventListener('mouseout', handleHover);
box.addEventListener('mousedown', handleClick);
box.addEventListener('mouseup', handleClick);
box.addEventListener('mouseout', handleMouseLeave);
