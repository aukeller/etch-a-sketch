const gridContainer = document.querySelector('.container');

addSquares(16);

const clearBtn = document.querySelector('button');

clearBtn.addEventListener('click', function() {
    clearGrid();
    setSquares();
});

function addSquares(numberOfSquares) {
    const squaredSquares = Math.pow(numberOfSquares, 2);

    for (let i = 0; i < (squaredSquares); i++) {
        let squareDiv = document.createElement('div');
        squareDiv.classList.add('square');
        gridContainer.appendChild(squareDiv);
    }

    const allSquareDivs = document.querySelectorAll('.square');

    allSquareDivs.forEach(square => (square.addEventListener('mouseenter', changeColor)));
}

function changeColor(square) {
    square.target.style.backgroundColor = '#000000';
}

function clearGrid() {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
}

function setSquares() {
    const numberOfSquares = prompt("Set the number of squares per side (must be no greater than 100)", "16");
    
    gridContainer.style.gridTemplateColumns = `repeat(${numberOfSquares}, auto)`;
    gridContainer.style.gridTemplateRows = `repeat(${numberOfSquares}, auto)`;
    
    addSquares(parseInt(numberOfSquares));
}

