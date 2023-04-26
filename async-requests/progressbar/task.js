const progress = document.getElementsByTagName('progress');
const form = document.getElementById('form');
const inputBtn = document.getElementById('file');
const btn = document.getElementById('send');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    const file = inputBtn.files[0];
    if (file != undefined) {
        let formData = new FormData();
        formData.append('file', file);
        let xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
        xhr.upload.addEventListener('progress', (e) => {
            if (e.loadstart) {
                progress.value = 0.2;
            }
        });
        xhr.send(formData);
    }
});

