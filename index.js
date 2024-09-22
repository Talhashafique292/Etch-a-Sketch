const container = document.querySelector('.container');
const newGridButton = document.getElementById('new-grid-button');

function createGrid(size) {
    container.innerHTML = ''; 

    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        const square = document.createElement('div');
        square.classList.add('square');
        
        // generate random rgb colors
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    square.style.backgroundColor = `rgb(${r},${g},${b})`;
    square.addEventListener('mouseover',()=>{
        const currentColor = window.getComputedStyle(square).backgroundColor;
        const rgbValues = currentColor.match(/\d+/g).map(Number);
        const newR = Math.max(0, rgbValues[0]-25.5);
        const newG = Math.max(0, rgbValues[1]-25.5);
        const newB = Math.max(0, rgbValues[2]-25.5);
        square.style.backgroundColor = `rgb(${newR},${newG},${newB})`;
    });

    container.appendChild(square);
      }
    }

    const squareSize = 800 / size; 
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
      square.style.width = `${squareSize}px`;
      square.style.height = `${squareSize}px`;   

    });
  }

newGridButton.addEventListener('click', () =>{
    const size = prompt('Enter the number of squres per side (max=100): ')
    if (size <=100 && size >0){
        createGrid(size)
    } else {
        alert('Please enter a valid number between 1 and 100')
    }
});

createGrid(16);




