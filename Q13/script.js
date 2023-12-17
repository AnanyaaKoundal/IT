function calculate() {
    const expression = document.getElementById('expression').value;
    const squareChecked = document.getElementById('square').checked;
    const doubleChecked = document.getElementById('double').checked;

    if (expression.trim() === '') {
        alert('Please enter a mathematical expression.');
        return;
    }

    if (!squareChecked && !doubleChecked) {
        alert('Please select an operation (Square or Double).');
        return;
    }

    try {
        const result = eval(expression);

        if (squareChecked) {
            document.getElementById('result').value = result ** 2;
        } else if (doubleChecked) {
            document.getElementById('result').value = result * 2;
        }
    } catch (error) {
        alert('Invalid mathematical expression. Please enter a valid expression.');
    }
}