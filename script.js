const display = document.querySelector('#display');
const clear = document.querySelector('#clear');
const numbers = Array.from(document.querySelectorAll('.number'));

const add = function(a, b) {
    return a + b;
}

const subtract = function(a, b) {
    return a - b;
}

const multiply = function(a, b) {
    return a * b;
}

const divide = function(a, b) {
    return a / b;
}

const operate = function(operator, num1, num2) {
    switch (operator) {
        case '+':
            return add(num1, num2);
            break;
        case '-':
            return subtract(num1, num2);
            break;
        case '*':
            return multiply(num1, num2);
            break;
        case '/':
            return divide(num1, num2);
            break;
    }
}

const clearDisplay = function() {
    display.textContent = '';
}

let currentValue;

numbers.forEach((number => {
    number.addEventListener('click', (e) => {
        display.textContent = `${e.target.textContent}`;
    })
}));

clear.addEventListener('click', clearDisplay);