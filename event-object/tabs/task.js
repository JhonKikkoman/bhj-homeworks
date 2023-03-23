const tabs = Array.from(document.querySelectorAll('.tabs'));
const contentTabs = Array.from(document.querySelectorAll('.tab__content'));

tabs.forEach((element, index) => {
    element.addEventListener('click', () => {
        const tabsActive = tabs.findIndex((elem) => elem.classList.contains('tab_active') === true);
        tabs[tabsActive].classList.remove('tab_active');
        contentTabs[tabsActive].classList.remove('tab__content_active');
        element.classList.add('tab_active');
        index.classList.add('tab__content_active');
    });
}); 