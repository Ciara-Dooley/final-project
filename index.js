const character = document.getElementById('character');

let offsetX, offsetY;
let isDragging = false;

character.addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.clientX - character.getBoundingClientRect().left;
    offsetY = e.clientY - character.getBoundingClientRect().top;
    character.style.cursor = 'grabbing';
});

document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        character.style.left = `${e.clientX - offsetX}px`;
        character.style.top = `${e.clientY - offsetY}px`;
    }
});

document.addEventListener('mouseup', () => {
    isDragging = false;
    character.style.cursor = 'grab';
});
