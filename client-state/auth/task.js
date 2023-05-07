const signinBlock = document.querySelector('.signin');
const formUser = document.getElementById('signin__form');
const btnSubmit = document.querySelector('.btn');
const welcomePopup = document.querySelector('.welcome');
const userId = document.getElementById('user_id');

btnSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    let xhr = new XMLHttpRequest();
    let formData = new FormData(formUser);
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
    xhr.responseType = 'json';
    xhr.send(formData);
    xhr.addEventListener('load', () => loginResponse(xhr.response));
});

function loginResponse(serverResponse) {
    if (serverResponse.success) {
        localStorage.setItem('userId', serverResponse.user_id);
        changeContent(localStorage.getItem('userId'));
    } else {
        alert('Неверный логин/Пароль');
    }
}

function changeContent(currentUser) {
    userId.textContent = currentUser;
    signinBlock.classList.remove('signin_active');
    welcomePopup.classList.add('welcome_active');
}

if (localStorage.getItem('userId') != undefined) {
    changeContent(localStorage.getItem('userId'));
}

let btnLogout = document.createElement('button');
btnLogout.innerHTML = 'X';
btnLogout.style = "border-radius: 50%; float: right";
welcomePopup.prepend(btnLogout);
btnLogout.addEventListener('click', clickLogout);

function clickLogout() {
    localStorage.removeItem('userId');
    formUser.reset();
    welcomePopup.classList.remove('welcome_active');
    signinBlock.classList.add('signin_active');
}


