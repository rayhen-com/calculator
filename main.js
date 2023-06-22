function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return a / b;
};

function clearDisplay() {
    display.textContent = '';
};

// Variables
let num1;
let num2;
let operator;

// Calls the operating functions
function operate(num1, num2, operator) {

};

// Numbers
let display = document.getElementById('display');
let numbers = document.getElementsByClassName('number');
let clear = document.getElementById('clear');

// Clear button
clear.addEventListener("click", function(){
    clearDisplay();
});

numbers.addEventListener("click", function(){
    console.log("test");
});