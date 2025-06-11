let zagadanoeChislo = Math.floor(Math.random() * 100) + 1;
let popytki = 0;

function proverkaChisla() {
    const ugadai = parseInt(document.getElementById('ugadai').value);
    const resultDiv = document.getElementById('result');
    popytki++;

    if (isNaN(ugadai) || ugadai < 1 || ugadai > 100) {
        resultDiv.textContent = 'Введите число от 1 до 100.';
    } else if (ugadai === zagadanoeChislo) {
        resultDiv.textContent = `Поздравляю! Вы угадали число ${zagadanoeChislo} за ${popytki} попыток!`;
        zagadanoeChislo = Math.floor(Math.random() * 100) + 1; // Сброс
        popytki = 0;
    } else if (ugadai < zagadanoeChislo) {
        resultDiv.textContent = 'Загаданное число больше.';
    } else {
        resultDiv.textContent = 'Загаданное число меньше.';
    }
}