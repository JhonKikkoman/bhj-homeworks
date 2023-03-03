const startTimer = document.getElementById("timer");
const countdown = function () {
    const current = new Date();
    startTimer.textContent = Math.floor(((start - current) / 1000) % 60);
    if (Number(startTimer.textContent) === 0) {
        alert('Вы победили в конкурсе!');
        clearInterval(timerInterval);
    }
}
const date = new Date();
const start = date.getTime() + 60000;

const timerInterval = setInterval(countdown, 1000);






