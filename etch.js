const gridContainer = document.querySelector('.container');

for (let i = 0; i < 256; i++) {
    let squareDiv = document.createElement('div');
    squareDiv.classList.add('square');
    gridContainer.appendChild(squareDiv);
}