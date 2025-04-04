let score = 0; // Начальный счет
let upgrade1Cost = 10; // Стоимость улучшения 1
let upgrade2Cost = 50; // Стоимость улучшения 2

const counterElement = document.getElementById('counter');
const clickButton = document.getElementById('clickButton');
const upgrade1Button = document.getElementById('upgrade1');
const upgrade2Button = document.getElementById('upgrade2');

// Обработчик кликов по кнопке
clickButton.addEventListener('click', () => {
    score++; // Увеличиваем счет
    updateUI(); // Обновляем интерфейс
});

// Функция для обновления интерфейса
function updateUI() {
    counterElement.textContent = `Очков: ${score}`; // Обновляем счет
    // Проверяем, можем ли купить улучшения
    upgrade1Button.disabled = score < upgrade1Cost; // Если очков меньше стоимости, кнопка не активна
    upgrade2Button.disabled = score < upgrade2Cost; // Если очков меньше стоимости, кнопка не активна
}

// Обработчик покупки улучшения 1
upgrade1Button.addEventListener('click', () => {
    if (score >= upgrade1Cost) {
        score -= upgrade1Cost; // Отнимаем очки за улучшение
        updateUI(); // Обновляем интерфейс
    }
});

// Обработчик покупки улучшения 2
upgrade2Button.addEventListener('click', () => {
    if (score >= upgrade2Cost) {
        score -= upgrade2Cost; // Отнимаем очки за улучшение
        updateUI(); // Обновляем интерфейс
    }
});

// Изначальное обновление интерфейса
updateUI();
