const menuLink = Array.from(document.querySelectorAll('.menu__link'));
menuLink.forEach((element) => {
    element.onclick = function () {
        const menuItem = element.closest('.menu__item');
        const subMenu = menuItem.querySelector('.menu_sub');
        if (subMenu) {
            const subMenuCheck = subMenu.classList.contains('menu_active');
            const arraySubMenu = Array.from(document.querySelectorAll('ul.menu_active'));
            arraySubMenu.forEach((elem) => {
                elem.classList.remove('menu_active');
            });
            if (!subMenuCheck) {
                subMenu.classList.add('menu_active');
            }
        }
        return false
    }
});


