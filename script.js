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
  const red = randomNumber();
  const green = randomNumber();
  const blue = randomNumber();
  e.target.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

function randomNumber() {
  return Math.floor(Math.random() * 256);
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
