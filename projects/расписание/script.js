// Исходные данные о занятиях
const initialData = [{
        id: 1,
        name: "Йога",
        time: "08:00 - 09:00",
        maxParticipants: 10,
        currentParticipants: 3
    },
    {
        id: 2,
        name: "Фитнес",
        time: "10:00 - 11:00",
        maxParticipants: 15,
        currentParticipants: 15
    },
    {
        id: 3,
        name: "Плавание",
        time: "12:00 - 13:00",
        maxParticipants: 8,
        currentParticipants: 2
    }
];

// Загружаем данные из localStorage или используем начальные
let scheduleData = JSON.parse(localStorage.getItem('scheduleData')) || initialData;
let userRegistrations = JSON.parse(localStorage.getItem('userRegistrations')) || {};

const container = document.getElementById('scheduleContainer');

function saveData() {
    localStorage.setItem('scheduleData', JSON.stringify(scheduleData));
    localStorage.setItem('userRegistrations', JSON.stringify(userRegistrations));
}

function renderSchedule() {
    container.innerHTML = '';
    scheduleData.forEach((activity, index) => {
        const card = document.createElement('div');
        card.className = 'card mb-3';

        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        const title = document.createElement('h2');
        title.className = 'card-title';
        title.textContent = activity.name;

        const details = document.createElement('p');
        details.className = 'card-text';
        details.innerHTML = `
      <strong>Время:</strong> ${activity.time}<br>
      <strong>Максимум участников:</strong> ${activity.maxParticipants}<br>
      <strong>Записанных участников:</strong> ${activity.currentParticipants}
    `;

        const btnGroup = document.createElement('div');
        btnGroup.className = 'mt-3';

        const registerBtn = document.createElement('button');
        registerBtn.className = 'btn btn-success me-2';
        registerBtn.textContent = 'Записаться';

        const cancelBtn = document.createElement('button');
        cancelBtn.className = 'btn btn-warning';
        cancelBtn.textContent = 'Отменить запись';

        const userKey = activity.id;
        const isRegistered = userRegistrations[userKey];

        // Обновляем состояние кнопок
        if (isRegistered) {
            registerBtn.disabled = true;
            cancelBtn.disabled = false;
        } else {
            if (activity.currentParticipants >= activity.maxParticipants) {
                registerBtn.disabled = true;
            }
            cancelBtn.disabled = true;
        }

        registerBtn.onclick = () => {
            if (activity.currentParticipants < activity.maxParticipants) {
                activity.currentParticipants++;
                userRegistrations[userKey] = true;
                saveData();
                renderSchedule();
            }
        };

        cancelBtn.onclick = () => {
            if (activity.currentParticipants > 0 && userRegistrations[userKey]) {
                activity.currentParticipants--;
                delete userRegistrations[userKey];
                saveData();
                renderSchedule();
            }
        };

        btnGroup.appendChild(registerBtn);
        btnGroup.appendChild(cancelBtn);

        cardBody.appendChild(title);
        cardBody.appendChild(details);
        cardBody.appendChild(btnGroup);

        card.appendChild(cardBody);
        container.appendChild(card);
    });
}

// Изначальный рендер
renderSchedule();