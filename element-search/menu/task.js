const menuLink = Array.from(document.querySelectorAll('.menu__link'));
menuLink.forEach((element) => {
    element.onclick = function () {
        const menuItem = element.closest('.menu__item');
        const subMenu = menuItem.querySelector('.menu_sub');
        if (subMenu) {
            subMenu.classList.add('menu_active');
        }
        return false
    }
});
