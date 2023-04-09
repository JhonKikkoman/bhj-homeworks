const isOpen = document.querySelector('.chat-widget');
const inPutText = document.querySelector('.chat-widget__input');
const messages = document.querySelector('.chat-widget__messages');
const parentMessages = document.querySelector('.chat-widget__messages-container');
const dirtyPhrases = [
    'До свидания',
    'Тут вам не рады',
    'А чего вы ждали?',
    'Не стоит ждать помощи!',
    'Не пишите нам больше',
    'У вас вообще есть совесть ?',
    'Операторы дерутся  за возможность вам оветить',
];

let currentTime = new Date();
let timerCount = 0;


isOpen.addEventListener('click', () => {
    isOpen.classList.add('chat-widget_active');
    if (isOpen.classList.contains('chat-widget_active')) {
        let timerId = setInterval(() => {
            timerCount++;
            if (timerCount === 30) botPhrases();
        }, 1000);
    }
});

inPutText.addEventListener('keydown', (e) => {
    if (inPutText.value === '' && e.code === 'Enter') return;
    if (e.code === 'Enter') {
        messages.innerHTML += `
        <div class="message message_client">
        <div class="message__time">${currentTime.getHours()}:${currentTime.getMinutes()}</div>
        <div class="message__text">${inPutText.value.trim()}</div>
     </div>`
        botPhrases();
        timerCount = 0;
        e.target.value = '';
    }
    parentMessages.scrollTop = messages.scrollHeight;
});

function randomPhrases() {
   return Math.floor(Math.random() * dirtyPhrases.length);
}

function botPhrases() {
    return messages.innerHTML += `<div class="message ">
    <div class="message__time">${currentTime.getHours()}:${currentTime.getMinutes()}</div>
    <div class="message__text">${dirtyPhrases[randomPhrases()]}</div>
 </div>`
}

