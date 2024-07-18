function appendNumber(number) {
    const display = document.getElementById('display');
    display.value = display.value + number;
    clearError();
}

function appendOperator(operator) {
    const display = document.getElementById('display');
    display.value = display.value + ' ' + operator + ' ';
    clearError();
}

function clearDisplay() {
    document.getElementById('display').value = '';
    clearError();
}

function calculateResult() {
    const display = document.getElementById('display');
    const expression = display.value;

    try {
        const result = eval(expression);
        if (isNaN(result) || result === Infinity) {
            throw new Error('Invalid calculation');
        }
        display.value = result;
    } catch {
        showError('ERROR');
    }
}

function clearError() {
    document.getElementById('error').innerText = '';
}

function showError(message) {
    document.getElementById('error').innerText = message;
}