const popup = document.querySelectorAll('.modal');
const arrPopup = Array.from(popup);
arrPopup[0].classList.add('modal_active');

const closebtn = document.querySelectorAll('.modal__close_times');
const arr = Array.from(closebtn);
arr.forEach((element, index) => {
    element.onclick = function () {
        arrPopup[index].classList.remove('modal_active');
    }
});

const red = document.querySelector('.btn_danger');
red.onclick = function () {
    arrPopup[0].classList.remove('modal_active');
    arrPopup[1].classList.add('modal_active');
}

const green = document.querySelector('.btn_success');
green.onclick = function () {
    arrPopup[1].classList.remove('modal_active');
}



