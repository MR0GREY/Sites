function generateRandom() {
    const min = parseInt(document.getElementById('min').value);
    const max = parseInt(document.getElementById('max').value);
    const resultDiv = document.getElementById('result');

    if (isNaN(min) || isNaN(max) || min >= max) {
        resultDiv.textContent = 'Введите корректные значения.';
        return;
    }

    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    resultDiv.textContent = 'Случайное число: ' + randomNumber;
}