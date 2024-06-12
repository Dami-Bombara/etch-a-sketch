let divs = [];

const container = document.querySelector("#container");

const square = document.createElement("div");
square.classList.add("square");

const button = document.querySelector("#set-grid");
button.addEventListener("click", function() { grid = prompt("Please select your grid: ")});
button.addEventListener("click", function() { deleteGrid() });
button.addEventListener("click", function() { drawGrid(grid) });

function changeColor(index) {
    divs[index].style.backgroundColor = "red";
}

function addListeners() {
    for (let i = 0; i < divs.length; i++) {
        divs[i].addEventListener("mouseover", function() { changeColor(i); });
    }
}

function deleteGrid() {
    for (let i = 0; i < divs.length; i++) {
        divs[i].remove();
    }
}

function drawGrid(grid) {
    for (let i = 0; i < grid; i++) {
        for (let j = 0; j < grid; j++) {
            let clone = square.cloneNode(true);
            divs.push(clone);
            container.appendChild(clone);
        }
    }
    addListeners();
}