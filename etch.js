const gridContainer = document.querySelector('.container');

for (let i = 0; i < 256; i++) {
    let squareDiv = document.createElement('div');
    squareDiv.classList.add('square');
    gridContainer.appendChild(squareDiv);
}

const allSquareDivs = document.querySelectorAll('.square');

allSquareDivs.forEach(square => (square.addEventListener('mouseenter', changeColor)));

function changeColor(square) {
    square.target.style.backgroundColor = '#000000';
}

const clearBtn = document.querySelector('button');
