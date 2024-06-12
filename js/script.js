const container = document.querySelector("#container");

const square = document.createElement("div");
square.classList.add("square");
square.style.width = "90px";
square.style.height = "90px";
square.style.border = "thin solid black";


for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        let clone = square.cloneNode(true);
        container.appendChild(clone);
    }
}