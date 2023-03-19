let dropValue = document.querySelector('.dropdown__value');
const dropDownList = document.querySelector('.dropdown__list');
const dropDown = document.querySelector('.dropdown__list');

dropValue.addEventListener('click', () => dropDown.classList.toggle('dropdown__list_active'));
dropDownList.addEventListener('click', (e) => {
    console.log(e)
    e.preventDefault();
    if (e.target.tagName !== 'A') {
        return;
    }
    dropValue.textContent = e.target.textContent;
    dropDown.classList.toggle('dropdown__list_active');
});


