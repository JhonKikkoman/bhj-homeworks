const sliderArrowPrev = document.querySelector('.slider__arrow_prev');
const sliderArrowNext = document.querySelector('.slider__arrow_next');
const sliderItem = Array.from(document.querySelectorAll('.slider__item'));
const sliderDots = Array.from(document.querySelectorAll('.slider__dot'));
sliderArrowNext.addEventListener('click', () => sliderItemFunc('next'));
sliderArrowPrev.addEventListener('click', () => sliderItemFunc('prev'));

sliderDots.forEach((elem, index) => {
    elem.addEventListener('click', () => {
        let dotActive = sliderDots.findIndex((elem) => elem.classList.contains('slider__dot_active') === true);
        sliderDots[dotActive].classList.remove('slider__dot_active');
        sliderItem[dotActive].classList.remove('slider__item_active');
        elem.classList.add('slider__dot_active');
        sliderItem[index].classList.add('slider__item_active');
    });
});

function sliderItemFunc(arg) {
    let counter = sliderItem.findIndex((elem) => elem.classList.contains('slider__item_active') === true);
    sliderItem[counter].classList.remove('slider__item_active');
    sliderDots[counter].classList.remove('slider__dot_active');
    if (arg === 'next') {
        counter === sliderItem.length - 1 ? counter = 0 : counter++;
    } else {
        counter === 0 ? counter = sliderItem.length - 1 : counter--;
    }
    sliderDots[counter].classList.add('slider__dot_active');
    sliderItem[counter].classList.add('slider__item_active');

}

