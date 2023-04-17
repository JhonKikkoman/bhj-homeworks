const loader = document.querySelector('img.loader_active');
const items = document.getElementById('items');

let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.responseType = "json";
xhr.send();
xhr.onload = function () {
    if (xhr.readyState === xhr.DONE) {
        loader.classList.remove('loader_active');
        for (let key in xhr.response.response.Valute) {
            items.insertAdjacentHTML('afterbegin',
                `<div class="item"><div class="item__code">${xhr.response.response.Valute[key].CharCode}</div>
        <div class="item__value">${xhr.response.response.Valute[key].Value}</div>
        <div class="item__currency">руб.</div></div>`);
        }
    }
};

