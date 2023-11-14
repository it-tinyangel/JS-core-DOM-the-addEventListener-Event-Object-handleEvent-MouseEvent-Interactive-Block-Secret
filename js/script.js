const box = document.getElementById('box');
const boxInfo = document.getElementById('boxInfo');

// Function to change the element's text
function changeText(text) {
	boxInfo.innerText = text;
}

// Function to mouseover event handler
function handleHover() {
	box.classList.toggle('hovered');
	changeText(box.classList.contains('clicked') ? 'And I\'ll not say!' : 'Do you want to know which one?');
}

// Function to mouseclick event handler
function handleClick() {
	box.classList.toggle('clicked');
	changeText(box.classList.contains('clicked') ? 'And I\'ll not say!' : 'Do you want to know which one?');
}

// Function to `mouse exits the block` event handler
function handleMouseLeave() {
	if (!box.classList.contains('clicked')) {
		box.classList.remove('hovered');
		changeText('I have a secret');
	}
}

box.addEventListener('mouseover', handleHover);
box.addEventListener('mouseout', handleHover);

box.addEventListener('mousedown', handleClick);
box.addEventListener('mouseup', handleClick);

box.addEventListener('mouseleave', handleMouseLeave);