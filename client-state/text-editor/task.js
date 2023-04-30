const editorArea = document.getElementById('editor');
const card = document.querySelector('.card');

editorArea.addEventListener('input', (e) => {
    const notes = e.target.value;
    localStorage.setItem('lastNotes', notes);
})

editorArea.textContent = localStorage.getItem('lastNotes');

let btn = document.createElement('button');
btn.innerHTML = 'Очистить';
card.append(btn);

btn.addEventListener('click', () => {
    editorArea.value = '';
    localStorage.removeItem('lastNotes');
});