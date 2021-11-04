/*
the  main challenge was to create a new grid every time the user choosed to 
and after that having the hover event working on the squares
*/

let grid = document.querySelector(".grid")
let buttonBlack = document.querySelector(".black")
let buttonColors = document.querySelector(".random-color")
let buttonResetBackground = document.querySelector(".reset") 
let buttonGridSize = document.querySelector(".grid-size")


function createGrid(userInput = 16) {
    grid.style.gridTemplateColumns = `repeat(${userInput}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${userInput}, 1fr)`;

    for (let rows = 0; rows < userInput; rows++) {
        for (let columns = 0; columns < userInput; columns++) {
            let square = document.createElement("div");
            square.classList.add("square");
            grid.appendChild(square);
        };
    };
};

createGrid();

function changeColorBlack() {
    let squares = document.querySelectorAll(".square")
    squares.forEach(square => {
        square.addEventListener("mouseover", () => {
            square.style.background = "#5f5959"
        })
    })
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

function changeRandomColor() {
    let squares = document.querySelectorAll(".square")
    squares.forEach(square => {
        square.addEventListener("mouseover", () => {
            square.style.background = getRandomColor()
        })
    })
};

function resetColor() {
    let squares = document.querySelectorAll(".square")
    squares.forEach(square => {
        square.style.background = "rgb(158, 177, 231)"
    })
};

function clearGrid() {
    removeDivs = document.querySelectorAll(".square");
    removeDivs.forEach((div) => {
        div.remove();
    })
};

function reset() {
    let userInput = parseInt(prompt("Choose a number"));
    while(userInput < 1 || userInput > 100) {
        userInput = prompt("Choose a number between 1 and 100:")
    };

    clearGrid();
    createGrid(userInput);
    changeColorBlack();
}

changeColorBlack();

buttonBlack.addEventListener("click", changeColorBlack);

buttonColors.addEventListener("click", changeRandomColor);

buttonResetBackground.addEventListener("click", resetColor);

buttonGridSize.addEventListener("click", reset);