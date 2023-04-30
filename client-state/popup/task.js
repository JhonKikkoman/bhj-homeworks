const modalWindow = document.querySelector('.modal');
const modalClose = document.querySelector('.modal__close');


modalWindow.classList.add(getCookie('popup'));
document.cookie = 'popup=' + 'modal_active';

function getCookie(name) {
    const pairs = document.cookie.split('; ');
    const cookieValue = pairs.find(el => el.startsWith(name + '='));
    if (cookieValue != undefined) {
        return cookieValue.substring(name.length + 1);
    } else
        return console.log('Cookie is not defined');
}

modalClose.addEventListener('click', () => {
    modalWindow.classList.remove(getCookie('popup'));
    let date = new Date(Date.now() - 86400e3);
    date = date.toUTCString();
    document.cookie = `popup=modal_active; expires=${date};`;
});

