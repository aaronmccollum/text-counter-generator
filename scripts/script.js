// Getting nodes for HTML elements
const counterButton = document.getElementById('counter-submit-button');
const generatorButton = document.getElementById('generator-submit-button');
const counterTextarea = document.getElementById('text-counter-textarea');
const generatorInput = document.getElementById('text-generator-input');
const counterResults = document.getElementById('counter-results');
const generatorResults = document.getElementById('generator-results');
const generatorInputValue = generatorInput.value;

const dummyText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

// Function to count chars in string
let countChar = str => { return str.length; }

// Event listener function to count text and post in counter-results tab
counterButton.addEventListener('click', function() {
    let counterTextareaValue = counterTextarea.value;
    counterResults.innerText = '';
    counterResults.innerText = `Character count: ${countChar(counterTextareaValue)}`;
});
