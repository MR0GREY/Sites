document.addEventListener('DOMContentLoaded', () => {
    const schetyDiv = document.getElementById('schety');
    let currentNumber = 0; // Текущее число (от 0 до 99)

    function renderSchety() {
        schetyDiv.innerHTML = ''; // Очищаем старое содержимое

        const numberString = String(currentNumber).padStart(2, '0'); // Преобразуем в строку и добавляем нули
        const rows = [];

        for (let i = 0; i < 2; i++) {  // Создаем 2 ряда (десятки и единицы)
            const digit = parseInt(numberString[i]); // Получаем цифру (десятки или единицы)
            const rowDiv = document.createElement('div');
            rowDiv.classList.add('schety-row');

            for (let j = 0; j < 5; j++) {  // 5 "костяшек" в ряду
                const bead = document.createElement('div');
                bead.classList.add('bead');
                if (i === 0 && j < digit) {  // Для десятков
                    bead.classList.add('filled');
                }
                if (i === 1 && j < digit) {  // Для единиц
                    bead.classList.add('filled');
                }
                rowDiv.appendChild(bead);
            }
            rows.push(rowDiv);
        }

        rows.forEach(row => schetyDiv.appendChild(row));
    }

    window.changeNumber = (delta) => { // Функция для кнопок
        currentNumber += delta;
        if (currentNumber < 0) {
            currentNumber = 0;
        } else if (currentNumber > 99) {
            currentNumber = 99;
        }
        renderSchety();
    };


    renderSchety(); // Изначальная отрисовка
});