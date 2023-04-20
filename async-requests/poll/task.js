const title = document.querySelector('.poll__title');
const pollAnswers = document.querySelector('.poll__answers');



const xhr = new XMLHttpRequest();
xhr.open('GET', ' https://students.netoservices.ru/nestjs-backend/poll');
xhr.responseType = 'json';
xhr.send();
xhr.onload = function () {
    if (xhr.status === 200) {
        title.textContent = xhr.response.data.title;
        const answer = xhr.response.data.answers;
        answer.forEach(element => pollAnswers.insertAdjacentHTML('afterbegin', `<button class="poll__answer">${element}</button>`));
        const arr = Array.from(document.querySelectorAll('.poll__answer'));
        arr.forEach((el) => el.addEventListener('click', () => alert('Спасибо, ваш голос засчитан!')));
    }
}