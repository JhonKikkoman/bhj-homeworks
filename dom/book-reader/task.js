const fontSize = Array.from(document.querySelectorAll('.font-size'));
const book = document.querySelector('#book');
const bookColor = Array.from(document.querySelector('.book__control_color').querySelectorAll('.color'));
const bookBgColor = Array.from(document.querySelector('.book__control_background').querySelectorAll('.color'));

fontSize.forEach((element) => {
    element.addEventListener('click', (e) => {
        e.preventDefault();
        const activeElem = fontSize.find((el) => el.classList.contains('font-size_active'));
        if (activeElem) {
            activeElem.classList.remove('font-size_active');
            const str = activeElem.dataset.size;
            if (str) {
                book.classList.remove('book_fs-' + str);
            }
        }
        const str2 = e.target.dataset.size;
        book.classList.add('book_fs-' + str2);
        e.target.classList.add('font-size_active');

    })
});

bookColor.forEach((element) => {
    element.addEventListener('click', (e) => {
        e.preventDefault();
        const activeElem = bookColor.find((el) => el.classList.contains('color_active'));
        if (activeElem) {
            activeElem.classList.remove('color_active');
            const str = activeElem.dataset.textColor;
            book.classList.remove('book_color-' + str);
        }
        const str2 = e.target.dataset.textColor;
        book.classList.add('book_color-' + str2);
        e.target.classList.add('color_active');
    });
});

bookBgColor.forEach((element) => {
    element.addEventListener('click', (e) => {
        e.preventDefault();
        const activeElem = bookBgColor.find((el) => el.classList.contains('color_active'));
        if (activeElem) {
            activeElem.classList.remove('color_active');
            const str = activeElem.dataset.bgColor;
            book.classList.remove('book_color-' + str);
        }
        const str2 = e.target.dataset.bgColor;
        book.classList.add('book_color-' + str2);
        e.target.classList.add('color_active');
    });
});