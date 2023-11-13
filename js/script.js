// Get an element from the DOM by its ID
const box = document.getElementById('box');
const boxInfo = document.getElementById('boxInfo');

box.addEventListener('mouseover', function () {
changeBackgroundColor(box, 'khaki');
changeTextColor(boxInfo, 'midnightblue');
changeText(boxInfo, 'Do you want to know which one?');
});

box.addEventListener('mouseout', function () {
changeBackgroundColor(box, null);
changeTextColor(boxInfo, null);
changeText(boxInfo, 'I have a secret');
});

box.addEventListener('mousedown', function () {
changeBackgroundColor(box, 'black');
changeTextColor(boxInfo, 'white');
changeText(boxInfo, 'And I\'ll not say!');
});

box.addEventListener('mouseup', function () {
changeBackgroundColor(box, 'khaki');
changeTextColor(boxInfo, 'cornflowerblue');
changeText(boxInfo, 'Do you want to know which one?');
});

// Function to change the background color of the element
function changeBackgroundColor(element, color) {
element.style.backgroundColor = color;
}

// Function to change the color of the element's text
function changeTextColor(element, color) {
element.style.color = color;
}

// Function to change the text of the element
function changeText(element, text) {
element.innerText = text;
}