const draggableList = document.getElementById('draggable-list');
const dropArea = document.getElementById('drop-area');
const draggableImages = document.getElementById('images')
const draggingArea = document.querySelector('.dropdiv')
//for list
draggableList.addEventListener('dragstart', dragStartList);
dropArea.addEventListener('dragover', dragOverList);
dropArea.addEventListener('drop', dropList);

//for images
draggableImages.addEventListener('dragstart', dragStartImage);
draggingArea.addEventListener('dragover', dragOverImage)
draggingArea.addEventListener('drop', dropImage);

function dragStartList(event) {
    event.dataTransfer.setData('text/plain', event.target.innerText);
}
function dragStartImage(event) {
    event.dataTransfer.setData('text/plain', event.target.src);
}
function dragOverList(event) {
    event.preventDefault();
}

function dragOverImage(event) {
    event.preventDefault();
}

function dropList(event) {
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
function dropImage(event){
    event.preventDefault();
    const data = event.dataTransfer.getData('text/plain');
    const newImage = document.createElement('img');
    newImage.src = data;
    const existingImage = draggingArea.querySelector('img')
    if(existingImage){
        existingImage.remove();
    }
    draggingArea.appendChild(newImage);
}

