const draggableList = document.getElementById('draggable-list');
const dropArea = document.getElementById('drop-area');

draggableList.addEventListener('dragstart', dragStart);
dropArea.addEventListener('dragover', dragOver);
dropArea.addEventListener('drop', drop);

function dragStart(event) {
    event.dataTransfer.setData('text/plain', event.target.innerText);
}

function dragOver(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData('text/plain');
    const newItem = document.createElement('li');
    newItem.innerText = data;

    const existingItem = dropArea.querySelector('li');
    if (existingItem) {
        existingItem.remove();
    }
    dropArea.appendChild(newItem);
}
