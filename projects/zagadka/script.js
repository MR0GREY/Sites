function proverka() {
    const otvet = document.getElementById('otvet').value.toLowerCase();
    const resultDiv = document.getElementById('result');
    if (otvet === 'гриб') {
        resultDiv.textContent = 'Правильно!';
    } else {
        resultDiv.textContent = 'Неправильно. Попробуйте еще раз.';
    }
}