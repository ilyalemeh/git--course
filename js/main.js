function appendNumber(number) {
    document.getElementById('display').value += number;
}

function appendOperator(operator) {
    document.getElementById('display').value += operator;
}

function appendDecimal() {
    var displayValue = document.getElementById('display').value;
    if (!displayValue.includes('.')) {
        document.getElementById('display').value += '.';
    }
}

function calculateResult() {
    var displayValue = document.getElementById('display').value;
    try {
        var result = eval(displayValue);
        document.getElementById('display').value = result;
    } catch (error) {
        alert('Invalid input');
    }
}

function clearDisplay() {
    document.getElementById('display').value = '';
}