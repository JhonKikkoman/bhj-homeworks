const title = document.querySelector('.poll__title');
const pollAnswers = document.querySelector('.poll__answers');

const xhr = new XMLHttpRequest();
xhr.open('GET', ' https://students.netoservices.ru/nestjs-backend/poll');
xhr.responseType = 'json';
xhr.send();
xhr.addEventListener('load', preLoad);

function preLoad() {
    if (xhr.status === 200) {
        title.textContent = xhr.response.data.title;
        const idResponse = xhr.response.id;
        const answer = xhr.response.data.answers;
        answer.forEach(element => pollAnswers.insertAdjacentHTML('afterbegin', `<button class="poll__answer">${element}</button>`));
        const arrBtn = Array.from(document.querySelectorAll('.poll__answer'));
        arrBtn.forEach((el, index) => el.addEventListener('click', () => click(idResponse, index)));
    }
}

function click(response, index) {
    const xhrStatistic = new XMLHttpRequest();
    xhrStatistic.open('POST', 'https://students.netoservices.ru/nestjs-backend/poll');
    xhrStatistic.responseType = 'json';
    xhrStatistic.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhrStatistic.send(`vote=${response}&answer=${index}`);
    xhrStatistic.addEventListener('load', () => afterLoad(xhrStatistic.response));
}

function afterLoad(arr) {
    const delElemCollection = document.getElementsByTagName('button');
    for (let i = delElemCollection.length - 1; i >= 0; i--) {
        delElemCollection[i].remove();
    }
    let divStatic = arr.stat;
    let arrVotes = [];
    divStatic.forEach(el => arrVotes.push(el.votes));
    let sumVotes = arrVotes.reduce((accum, item) => accum + item);
    divStatic.forEach(element => {
        let result = element.votes / sumVotes * 100;
        pollAnswers.insertAdjacentHTML('afterbegin', `<div class="poll__answer">${element.answer}: <strong>${result.toFixed(2)}%</strong></div>`)
    });
}
