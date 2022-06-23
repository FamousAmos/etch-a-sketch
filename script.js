const grid = document.getElementById("grid");

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

createGrid();
