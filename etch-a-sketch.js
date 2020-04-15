const mainContainer = document.querySelector('#main-container');
mainContainer.style.height = '620px';

let defaultColumnSize = 'repeat(16, 1fr)';
let defaultGridSize = 16;

function randomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    } return color;
}


function resetGrid() {
    let resetSize = parseInt(prompt('How many squares per side do you want?'));
    while (mainContainer.firstChild) {
        mainContainer.removeChild(mainContainer.firstChild);
    }
    resetColumnSize =  `repeat(${resetSize}, 1fr)`;
    setGrid(resetSize, resetColumnSize);
    hoverColor();
}

function hoverColor() {
    let allCells = document.querySelectorAll('.cell')
    return allCells.forEach(cell => cell.addEventListener('mouseover', function (){
        cell.style.backgroundColor = randomColor();
    }));
}

function setGrid(gridSize, setColumnSize) {
    const gridContainer = document.createElement('div');
    gridContainer.classList.add('gridContainer');
    gridContainer.style.gridTemplateColumns = setColumnSize;
    mainContainer.appendChild(gridContainer);                               
    
    for(let i = 0; i < (gridSize**2); i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.style.border = '1px solid';
        gridContainer.appendChild(cell);
    } 
} 

setGrid(defaultGridSize, defaultColumnSize);
hoverColor();






