let grid = [
  [``, ``, ``],
  [``, ``, ``],
  [``, ``, ``]
];
console.log(grid[0]);
console.log(grid[1]);
console.log(grid[2]);


function rollD9() {
//rolls a 9 sided dice
  min = 1;
  max = 9;
  return Math.round(Math.random() * (max - min) + min)
  ;
}
function exOrNought() {
// flips a coin and decides x or o
  if (Math.random() <= 0.5) { return `x`;}
  else { return `o`;}
  }

function boardChanger() {
//rolls a dice, checks if the space corresponding to the dice roll is empty and if it is, flips a coin and assigns he coinflip value to the empty space
  r9 = rollD9();
  coinflip = exOrNought();
  if (r9 == 1 && grid[0][0] == ``) {grid[0][0] = `${coinflip}`;}
  else if (r9 == 2 && grid[0][1] == ``) {grid[0][1] = `${coinflip}`;}
  else if (r9 == 3 && grid[0][2] == ``) {grid[0][2] = `${coinflip}`;}
  else if (r9 == 4 && grid[1][0] == ``) {grid[1][0] = `${coinflip}`;}
  else if (r9 == 5 && grid[1][1] == ``) {grid[1][1] = `${coinflip}`;}
  else if (r9 == 6 && grid[1][2] == ``) {grid[1][2] = `${coinflip}`;}
  else if (r9 == 7 && grid[2][0] == ``) {grid[2][0] = `${coinflip}`;}
  else if (r9 == 8 && grid[2][1] == ``) {grid[2][1] = `${coinflip}`;}
  else if (r9 == 9 && grid[2][2] == ``) {grid[2][2] = `${coinflip}`;}
  }

function playGame() { while (grid[0][0] == ``|| grid[0][1] == ``|| grid[0][2] == ``|| grid[1][0] == ``|| grid[1][1] == ``|| grid[1][2] == ``|| grid[2][0] == ``|| grid[2][1] == ``|| grid[2][2] == ``)
  {boardChanger();}
}

playGame()
console.log(grid[0]);
console.log(grid[1]);
console.log(grid[2]);