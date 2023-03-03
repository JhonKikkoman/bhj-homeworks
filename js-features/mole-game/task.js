const kills = document.getElementById('dead');
const miss = document.getElementById('lost');
const field = document.querySelectorAll('.hole');

let countKills = 0;
let countMiss = 0;
kills.textContent = countKills;
miss.textContent = countMiss;

field.forEach(element => {
    element.onclick = function () {
        if (element.classList.contains('hole_has-mole')) {
            countKills++;
            kills.textContent = countKills;
            if (countKills === 10) {
                alert("Вы победили!")
            }
        } else {
            countMiss++;
            miss.textContent = countMiss;
            if (countMiss === 5) {
                alert("Вы проиграли!")
            }
        }
    }

});