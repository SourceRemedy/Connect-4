const grid = [];
const turns = ["red", "blue"];
let turn = 0;

const table = document.querySelector("div#game table");
const $colorChoices = document.querySelectorAll("select");
$colorChoices[0].onchange = pickColor
$colorChoices[1].onchange = pickColor
for (let i = 0; i < 8; i++) {
  grid[i] = [];
  const $row = document.createElement("tr");
  table.append($row);
  for (let j = 0; j < 8; j++) {
    grid[i][j] = null;
    const $cell = document.createElement("td");
    $cell.data = { r: i, c: j};
    $cell.onclick = onClickSpace;
    $row.append($cell);
  }
  
}

function onClickSpace(event) {
  const space = event.target;
  space.style.backgroundColor=turns[turn];
  grid[space.data.r][space.data.c] = turns[turn];
  turn = turn == 1 ? 0 : 1;
  console.log(grid);
}

function pickColor(event) {
  console.log(event.target.getAttribute("data"))
  const whichPlayer = event.targetgetAttribute("data")
  turns[whichPlayer-1] = event.target.value
  console.log(turns)
}

console.log(grid);