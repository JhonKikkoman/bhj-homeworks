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
    xhr.addEventListener('load', () => {
        if (xhr.readyState === xhr.DONE) {
            if (xhr.response.success) {
                localStorage.setItem('userId', xhr.response.user_id);
                signinBlock.classList.remove('signin_active');
                welcomePopup.classList.add('welcome_active');
                let currentUser = localStorage.getItem('userId');
                userId.textContent = currentUser;
            } else {
                alert('Неверный логин/Пароль');
            }
        }
    });
});

let btnLogout = document.createElement('button');
btnLogout.innerHTML = 'X';
btnLogout.style = "border-radius: 50%; float: right";
welcomePopup.prepend(btnLogout);

btnLogout.addEventListener('click', () => {
    localStorage.removeItem('userId');
    formUser.reset();
    welcomePopup.classList.remove('welcome_active');
    signinBlock.classList.add('signin_active');
});


