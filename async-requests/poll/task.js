const title = document.querySelector('.poll__title');
const pollAnswers = document.querySelector('.poll__answers');

const xhr = new XMLHttpRequest();
xhr.open('GET', ' https://students.netoservices.ru/nestjs-backend/poll');
xhr.responseType = 'json';
xhr.send();
xhr.onload = function () {
    if (xhr.status === 200) {
        const idResponse = xhr.response.id;
        title.textContent = xhr.response.data.title;
        const answer = xhr.response.data.answers;
        answer.forEach(element => pollAnswers.insertAdjacentHTML('afterbegin', `<button class="poll__answer">${element}</button>`));
        const arr = Array.from(document.querySelectorAll('.poll__answer'));
        arr.forEach((el, index) => el.addEventListener('click', () => {
            const indexResponse = index;
            xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/poll');
            xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
            xhr.send(`vote=${idResponse}&answer=${indexResponse}`);
            xhr.responseType = 'json';
            xhr.onload = function () {
                
                answer.forEach(element => pollAnswers.insertAdjacentHTML('afterbegin', `<div class="poll__answer">${element}: </div>`));;
            }
        }));
    }
}