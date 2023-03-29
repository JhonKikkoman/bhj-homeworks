const reveal = Array.from(document.querySelectorAll('.reveal'));
const windowHeight = window.innerHeight;

window.addEventListener('scroll', () => {
    reveal.forEach((el) => {
        const { top, bottom } = el.getBoundingClientRect();
        (top > 0 && bottom < windowHeight)
            ? el.classList.add('reveal_active')
            : el.classList.remove('reveal_active');
    });
});