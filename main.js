// Variables
let num1 = 0;
let num2 = 0;
let operator = undefined;
let result = undefined;

// Elements
let display = document.getElementById('display');
let clear = document.getElementById('clear');
let buttons = document.querySelectorAll('.button-row > button');
let operatorButtons = document.querySelectorAll('.operator');

// Operator functions
function add(a, b) {
    result = Number(a) + Number(b);
    reset();
};

function subtract(a, b) {
    result = Number(a) - Number(b);
    reset();
};

function multiply(a, b) {
    result = Number(a) * Number(b);
    reset();
};

function divide(a, b) {
    result = Number(a) / Number(b);
    reset();
};

// Clear button
clear.addEventListener("click", function(){
    display.textContent = 0;
    num1 = 0;
    num2 = 0;
    operator = undefined;
    result = undefined;
    resetOperatorButton();
});

// Reset operator button border
function resetOperatorButton() {
    for (let i = 0; i < operatorButtons.length; i++) {
        operatorButtons[i].style.border = '';
    };
};

// Reset variables
function reset() {
    result = parseFloat(result.toFixed(6));
    display.textContent = result;
    num1 = result;
    num2 = 0;
    resetOperatorButton();
};

// Operate function
function operate(a, b) {
    switch (operator) {
        case '+':
            add(a, b);
            break;
        case '-':
            subtract(a, b);
            break;
        case '*':
            multiply(a, b);
            break;
        case '/':
            divide(a, b);  
            break;            
    };
};

// Calculations
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
       
        // If operator is undefined, num1 is not 0, and this.id is is a number, append this.id to num1
        if (operator === undefined && num1 !== 0 && this.id <= 9) {
            num1 += "" + this.id;
            display.textContent = num1;
        };

        // If operator is undefined, num1 is 0, and this.id is a number other than 0, put this.id in num1 and show num1 on display
        if (operator === undefined && num1 === 0 && this.id > 0) {
            num1 = this.id;
            display.textContent = num1;
        };

        // If this.id is is either +, -, *, or /, put this.id in operator
        if (this.id === '+'  || this.id === '-'  || this.id === '*'  || this.id === '/') {
            operator = this.id;
            this.style.border = '4px solid #333333';
        };  

        // If operator is not undefined, num2 is not 0, and this.id is is a number, append this.id to num2
        if (operator !== undefined && num2 !== 0 && this.id <= 9) {
            num2 += "" + this.id;
            display.textContent = num2;
        };

        // If operator is not undefined, and this.id is a number other than 0, put this.id in num2 and show num2 on display
        if (operator !== undefined && num2 === 0 && this.id > 0) {
            num2 = this.id;
            display.textContent = num2;
        };

        if (this.id === '='  && (num1 !== 0 || num2 !== 0)) {
            operate(num1, num2);
        };

    });
};