let display = document.getElementById('display');
let currentInput = '';
let previousInput = '';
let operator = '';


function appendNumber(number) {
    if (currentInput.length < 12) {
        currentInput += number;
        display.innerText = currentInput;
    }
}


function appendOperator(op) {
    if (currentInput !== '') {
        previousInput = currentInput;
        currentInput = '';
        operator = op;
    }
}


function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operator = '';
    display.innerText = '0';
}


function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    display.innerText = currentInput || '0';
}


function calculateResult() {
    let result;
    const prev = parseFloat(previousInput);
    const curr = parseFloat(currentInput);
    if (isNaN(prev) || isNaN(curr)) return;

    switch (operator) {
        case '+':
            result = prev + curr;
            break;
        case '-':
            result = prev - curr;
            break;
        case '*':
            result = prev * curr;
            break;
        case '/':
            result = prev / curr;
            break;
        case '%':
            result = prev*curr / 100;
            break;
        default:
            return;
    }


    currentInput = result.toString();
    operator = '';
    display.innerText = result;

}
