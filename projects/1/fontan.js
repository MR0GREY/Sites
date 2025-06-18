document.addEventListener('DOMContentLoaded', function() {
 const buttons = document.querySelectorAll('.product button');

 buttons.forEach(button => {
     button.addEventListener('click', function() {
         alert('Детальная информация о ' + this.parentElement.querySelector('h3').innerText);
     });
 });
});

// Получаем ссылку на селект-тему
const themeSelect = document.getElementById("theme-select");

// Функция изменения темы при выборе
themeSelect.addEventListener("change", () => {
    const selectedTheme = themeSelect.value;
    const bodyEl = document.querySelector("body");

    // Удаляем предыдущие классы тем
    bodyEl.className = "";

    // Устанавливаем новую тему согласно выбору
    switch(selectedTheme) {
        case 'light':
            bodyEl.classList.add('light-theme');
            break;
        case 'dark':
            bodyEl.classList.add('dark-theme');
            break;
        case 'green':
            bodyEl.classList.add('green-theme');
            break;
        case 'darkblue':
            bodyEl.classList.add('darkblue-theme');
            break;
    }
});
/* prac 8 */
/* 1 */
window.onload = function() {
    console.log("страница загрузилась");
};

document.getElementById('myButton').onclick = function() {
    console.log("событие onclick");
};

document.getElementById('myButton').addEventListener('click', function() {
    console.log("событие addEventListener");
});
/* 2 */
document.querySelectorAll('.numbered-buttons').forEach(button => {
    button.addEventListener('click', () => {
        const number = button.dataset.number;
        console.log(`Номер нажатой кнопки: ${number}`);
    });
});

let clickCount = 0;

document.getElementById('counting-button').addEventListener('click', () => {
    clickCount++;
    console.log(`Количество нажатий на кнопку №4: ${clickCount}`);
});

document.getElementById('change-text-button').addEventListener('click', () => {
    this.textContent = 'Вы нажали на эту кнопку';
});
/* 3 */
document.getElementById('add-header-btn').addEventListener('click', () => {
    const newHeader = '<h1>Новый заголовок</h1>';
    document.getElementById('add-header-btn').insertAdjacentHTML('afterend', newHeader);
});

document.getElementById('remove-header-btn').addEventListener('click', () => {
    const headerToRemove = document.querySelector('h1');
    if (headerToRemove) {
        headerToRemove.remove();
    }
});

const hoverCounterButton = document.getElementById('hoverCounter');
const counterDisplay = document.getElementById('counterDisplay');
// Переменная для хранения количества наведений
let count = 0;
// Обработчик события mouseover (наведение)
hoverCounterButton.addEventListener('mouseover', () => {
    count++; // Увеличим счётчик на единицу
    counterDisplay.textContent = `Кол-во наведений: ${count}`; // Обновим текст
});
/* 4 */
// Список
const list = document.getElementById('list');
// Создаем начальные пункты списка
['Первый пункт', 'Второй пункт', 'Третий пункт'].forEach(itemText => {
    const item = document.createElement('li');
    item.textContent = itemText;
    list.appendChild(item);
});

// Кнопка добавления нового элемента
document.getElementById('add-item-btn').addEventListener('click', () => {
    const newItem = document.createElement('li');
    newItem.textContent = 'Новый элемент списка';
    list.appendChild(newItem);  
});

// Кнопка удаления первого элемента
document.getElementById('delete-first-btn').addEventListener('click', () => {
    if (list.firstElementChild) { // Проверяем наличие хотя бы одного элемента
        list.removeChild(list.firstElementChild);
    }
});

// Кнопка добавления класса (не работает:( )
document.getElementById('class-click-btn').addEventListener('click', () => {
    this.classList.toggle ('click'); // Переключаем класс 'click'
});
/* 5 */
// Контейнер div.content
const contentDiv = document.querySelector(".content");

// Создаем новую кнопку
const newButton = document.createElement("button");
newButton.textContent = "Отправить";

// Добавляем кнопку в контейнер
contentDiv.appendChild(newButton);

// Назначаем обработчик события клика
newButton.addEventListener("click", () => {
    newButton.textContent = "Текст отправлен";
});

/* samrab 8 prac */
"use strict";
document.addEventListener("DOMContentLoaded", () => {
    console.log("Все теги прогрузились"); 
});

window.addEventListener("load", () => {
    console.log("Страница загрузилась"); 
});

document.addEventListener("click", event => {
    const element = event.target; const tagName = element.tagName.toLowerCase();
    const hasSuperElement = element.classList.contains("super_element");
    if (hasSuperElement) {
        console.log(`Класс "super_element" присутствует в элементе "${tagName}".`);
    } else { console.log(`Класс "super_element" отсутствует в элементе "${tagName}".`); }
});

document.querySelector("textarea").addEventListener("mouseover", () => {
    console.log("Вы навели на textarea."); 
}); 
document.querySelector("ul").addEventListener("click", event => {
    const clickedElement = event.target;
    if (clickedElement.tagName === "BUTTON") {
        console.log(clickedElement.textContent.trim())
    }
});

document.querySelectorAll("li:nth-child(even)").forEach(li => { });

/* prac 9 */
/* 1 */
const checkbox = document.getElementById('agreementCheckbox');
const submitButton = document.getElementById('submitButton');
const warningMessage = document.getElementById('warningMessage');
submitButton.addEventListener('click', function (event) {
    if (!checkbox.checked) {
        warningMessage.style.display = 'block';
        event.preventDefault();
    } else {
warningMessage.style.display = 'none';
}
}); 
/* 2 */
const sendButton = document.getElementById('sendButton');
const messageOutput = document.getElementById('messageOutput');
sendButton.addEventListener('click', function () { 
const selectedDrink = document.querySelector('input[name="drink"]:checked');
if (selectedDrink) {
if (selectedDrink.value === 'tea') {
messageOutput.textContent = 'Чай закончился';
} else if (selectedDrink.value === 'coffee') {
messageOutput.textContent = 'Кофе закончился';
} } else { messageOutput.textContent = 'Нужно выбрать напиток!'; }
});
/* 3 */
// Проверка пароля
document.getElementById('check-password').addEventListener('click', () => {
    const passwordInput = document.getElementById('password-input');
    const messageElement = document.getElementById('password-message');
    
    // Удаляем предыдущие классы
    passwordInput.classList.remove('correct', 'incorrect');
    messageElement.textContent = '';
    
    if (passwordInput.value.toLowerCase() === 'пароль') {
        passwordInput.classList.add('correct');
    } else {
        passwordInput.classList.add('incorrect');
        messageElement.textContent = 'Пароль неверный';
    }
});
document.getElementById('password-input').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        document.getElementById('check-password').click();
    }
});

// Динамическое изменение заголовка
document.getElementById('title-input').addEventListener('input', function() {
    const heading = document.getElementById('dynamic-heading');
    heading.textContent = this.value || 'Заголовок'; // Если поле пустое, вернется "Заголовок"
});
// Часть 1: Отображение значения input в span
document.getElementById('from').addEventListener('input', function() {
    document.getElementById('output').textContent = this.value;
});

// Часть 2: Анимация по клику
// Получаем элементы
const button = document.querySelector('.messageBtn');
const messageElement = document.querySelector('.message');

// Обработчик события click
button.addEventListener('click', () => {
    // Добавляем классы для анимации
    messageElement.classList.add('animate_animated', 'animate_fadeInLeftBig');

    // Изменяем видимость элемента
    messageElement.style.visibility = 'visible';
});

// Часть 3: Валидация формы
const form = document.getElementById('validationForm');
const inputs = form.querySelectorAll('input');

// Проверка при отправке формы
form.addEventListener('submit', function(e) {
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.classList.add('error');
            isValid = false;
        }
    });
    
    if (!isValid) {
        e.preventDefault();
    }
});

// Проверка при вводе
inputs.forEach(input => {
    input.addEventListener('input', function() {
        if (this.value.trim()) {
            this.classList.remove('error');
        } else {
            this.classList.add('error');
        }
    });
});