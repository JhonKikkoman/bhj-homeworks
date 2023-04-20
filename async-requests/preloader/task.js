const loader = document.querySelector('img.loader_active');
const items = document.getElementById('items');
const storage = window.localStorage;


let lastValue = JSON.parse(storage.getItem('lastValue'));
if (lastValue != undefined) {
    loader.classList.remove('loader_active');
    exchangeRate(lastValue);
}

let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.responseType = "json";
xhr.send();
xhr.onload = function () {
    if (xhr.status === 200) {
        if (xhr.readyState === xhr.DONE) {
            storage.setItem('lastValue', JSON.stringify(xhr.response.response.Valute));
            exchangeRate(xhr.response.response.Valute);
        }
    }
};

function exchangeRate(obj) {
    for (let key in obj) {
        items.insertAdjacentHTML('afterbegin',
            `<div class="item"><div class="item__code">${obj[key].CharCode}</div>
<div class="item__value">${obj[key].Value}</div>
<div class="item__currency">руб.</div></div>`);
    }
}