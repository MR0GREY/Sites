function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operation = document.getElementById('operation').value;
    const resultDiv = document.getElementById('result');
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        result = 'Введите числа';
    } else {
        switch (operation) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                if (num2 === 0) {
                    result = 'Деление на ноль!';
                } else {
                    result = num1 / num2;
                }
                break;
            default:
                result = 'Неверная операция';
        }
    }

    resultDiv.textContent = 'Результат: ' + result;
}