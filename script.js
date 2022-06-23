const grid = document.getElementById("grid");
const sizeButton = document.querySelector(".size");

sizeButton.addEventListener("click", getSize);

function createGrid(size = 16) {
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.addEventListener("mouseover", changeColor);
    grid.appendChild(square);
  }
}

function changeColor(e) {
  e.target.style.backgroundColor = "#808080";
}

function clearGrid() {
  grid.innerHTML = "";
}

function getSize() {
  let size = -1;

  while (size > 100 || size < 0) {
    size = prompt("How many columns do you want in the grid?");
  }

  if (size == null) return;
  else clearGrid();
  createGrid(size);
}

createGrid();
