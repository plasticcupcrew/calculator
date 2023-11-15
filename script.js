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

let input = '';
let num1;
let num2;
let op;

const operate = function(num1, op, num2) {
    switch (op) {
        case "+":
            return add(num1, num2);
            break;
        case "-":
            return subtract(num1, num2);
            break;
        case "*":
            return multiply(num1, num2);
            break;
        case "/":
            return divide(num1, num2);
            break;
    }
}

function addButtonListeners() {
    const buttons = document.querySelectorAll('button');
    console.log(buttons);
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', () => {
        input += buttons[i].textContent;
        console.log(input);
        })
    }
}

addButtonListeners();