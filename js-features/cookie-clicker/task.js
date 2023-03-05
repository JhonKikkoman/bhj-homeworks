const clickCount = document.getElementById('clicker__counter');
const image = document.getElementById('cookie');
let count = 0;
clickCount.textContent = count;

image.onclick = function () {
    count ++;
    clickCount.textContent = count;
    image.width = ++counter.textContent % 2 ? 250 : 200;
};