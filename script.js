const display = document.querySelector('#display-text');
const clear = document.querySelector('#clear');
const numbers = Array.from(document.querySelectorAll('.number'));
const operators = Array.from(document.querySelectorAll('.operator'));
const equals = document.querySelector('#equals');

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
    
const clearDisplay = function() {
    display.textContent = '';
}

clear.addEventListener('click', clearDisplay);

const operate = function(operator, num1, num2) {
    switch (operator) {
        case '+':
            return add(num1, num2);
            break;
        case '-':
            return subtract(num1, num2);
            break;
        case 'x':
            return multiply(num1, num2);
            break;
        case '/':
            return divide(num1, num2);
            break;
    }
}

let firstNumber;
let op;
let secondNumber;

numbers.forEach((number => {
    number.addEventListener('click', (e) => {
        if (firstNumber === undefined) {
            firstNumber = Number(e.target.textContent);
            display.textContent = firstNumber;
        } else if (secondNumber === undefined) {
            secondNumber = Number(e.target.textContent);
            display.textContent += secondNumber;
        }
    })
}));

operators.forEach((operator => {
    operator.addEventListener('click', (e) => {
        if (op === undefined) {
            op = e.target.textContent;
        }
    })
}))

equals.addEventListener('click', operate(op, firstNumber, secondNumber));

// numbers.forEach((number => {
//     number.addEventListener('click', (e) => {
//         display.textContent += `${e.target.textContent}`;
//         console.log(e.target);
//     })
// }));



