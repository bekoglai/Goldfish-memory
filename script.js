let clickCount = 0;
let autoClickerCost = 100;
let speedUpCost = 50;
let autoClickerActive = false;
let speedUpActive = false;

const clickButton = document.getElementById('click-button');
const clickCountDisplay = document.getElementById('click-count');
const buyAutoClickerButton = document.getElementById('buy-auto-clicker');
const buySpeedUpButton = document.getElementById('buy-speed-up');

// Обработчик кликов по кнопке
clickButton.addEventListener('click', () => {
  clickCount++;
  updateClickCount();
  if (speedUpActive) {
    clickCount++; // Ускорение кликов
    updateClickCount();
  }
});

// Обновление отображения кликов
function updateClickCount() {
  clickCountDisplay.textContent = clickCount;
}

// Купить автоматический кликер
buyAutoClickerButton.addEventListener('click', () => {
  if (clickCount >= autoClickerCost && !autoClickerActive) {
    clickCount -= autoClickerCost;
    autoClickerActive = true;
    updateClickCount();
    startAutoClicker();
  }
});

// Купить ускорение кликов
buySpeedUpButton.addEventListener('click', () => {
  if (clickCount >= speedUpCost && !speedUpActive) {
    clickCount -= speedUpCost;
    speedUpActive = true;
    updateClickCount();
  }
});

// Автоматический кликер
function startAutoClicker() {
  setInterval(() => {
    if (autoClickerActive) {
      clickCount++;
      updateClickCount();
    }
  }, 1000);
}