const checked = Array.from(document.querySelectorAll('.interest__check'));

checked.forEach((element) => {
    element.addEventListener('click', (e) => {
        const checkClick = e.target.checked;
        const interset = e.target.closest('li.interest').querySelector('ul.interests_active');
        if (interset) {
            Array.from(interset.querySelectorAll('.interest__check')).forEach((el) => el.checked = checkClick);
        }

        const parentUl = e.target.closest('ul.interests_active');
        if (parentUl) {
            const parentLi = parentUl.closest('li.interest').querySelector('.interest__check');
            const arrParent = Array.from(parentUl.querySelectorAll('.interest__check'));
            const arrTemp = arrParent.filter((item) => item.checked === checkClick);
            if (arrParent.length === arrTemp.length) {
                parentLi.checked = checkClick;
                parentLi.indeterminate = false;
            } else {
                parentLi.indeterminate = true;
            }
        }
    });
});


