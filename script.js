const add = function(a, b) {
    let result = +a + +b;
    return result.toFixed(2);
}

const subtract = function(a, b) {
    let result = a - b;
    return result.toFixed(2);
}

const multiply = function(a, b) {
    let result = a * b;
    return result.toFixed(2);
}

const divide = function(a, b) {
    let result = a / b;
    if (+b === 0) {divideByZero = true};
    return result.toFixed(2);
}

let num1 = '';
let num2 = '';
let op = '';
let displayText = num1 + ' ' + op + ' ' + num2;
let lastPressed;
let divideByZero = false;

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
        case "%":
            return divide(num1, num2);
            break;
    }
}

const display = document.querySelector('#display');

//Add Event Listeners for Number Buttons
/*if the operator is empty, num1 gets update, otherwise
num2 gets updated*/

const numButtons = document.querySelectorAll('.number');
for (let i = 0; i < numButtons.length; i++) {
    numButtons[i].addEventListener('click', () => {
        if (op === '' && lastPressed !== 'equals') {
            num1 += numButtons[i].textContent;
        } else if (lastPressed !== 'equals') {
            num2 += numButtons[i].textContent;
        }
        displayText = num1 + ' ' + op + ' ' + num2;
        display.textContent = displayText;
    });
}

//Add Event Listeners for Operator Buttons
/*if num1 is empty, nothing happens. If num2 is not empty, operate is called on the numbers entered already. The result becomes num 1 and is displayed with the pressed operator next to it. If num2 is empty, the operator is updated to the one pressed.*/

const opButtons = document.querySelectorAll('.op');
for (let i = 0; i < opButtons.length; i++) {
    opButtons[i].addEventListener('click', () => {
        if (num1 !== '') {
            if (num2 !== '') {
                num1 = operate(num1, op, num2);
                num2 = ''
            } 
            op = opButtons[i].textContent;
            lastPressed = 'op';
            displayText = num1 + ' ' + op + num2;
            if (divideByZero === true) {
                displayText = "% zero no no!!";
                num1 = '';
                num2 = '';
                op = '';
            } 
            display.textContent = displayText;
            divideByZero = false;
        }
    });
}

//Add Event Listener for Clear Button
/*display and all variables are cleared when pressed*/
let clearButton = document.querySelector('#clear-button');
clearButton.addEventListener('click', () => {
    display.textContent = '';
    num1 = '';
    num2 = '';
    op = '';
    lastPressed = 'clear';
});  

//Add Event Listener for Equals Button
/*if a number or the operator is not provided, this does nothing. Otherwise, operate is called, the result is displayed, and variables are cleared.*/
let equalsButton = document.querySelector('#equals');
equalsButton.addEventListener('click', () => {
    if (num1 !== '' && num2 !== '' && op !== '') {
        num1 = operate(num1, op, num2);
        if (divideByZero === false) {
            displayText = num1;
            num2 = '';
            op = '';
            lastPressed = 'equals';
        } else {
            displayText = "% zero no no!!"
            num1 = '';
            num2 = ''
            op = '';
        }
        display.textContent = displayText;
        console.log(divideByZero);
        divideByZero = false;
    };
});
