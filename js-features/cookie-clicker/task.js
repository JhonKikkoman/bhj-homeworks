const clickCount = document.getElementById('clicker__counter');
const image = document.getElementById('cookie');
let count = 0;
clickCount.textContent = count;

image.onclick = function () {
    count ++;
    clickCount.textContent = count;
    if (clickCount.textContent % 2) {
        image.width = 250;
    } else {
        image.width = 200;
    }
};