let grid = [
    [``, ``, ``],
    [``, ``, ``],
    [``, ``, ``]
];
console.log(grid[0]);
console.log(grid[1]);
console.log(grid[2]);
let isWin = false;

const rollD9 = () => {
//rolls a 9 sided dice
    min = 1;
    max = 9;
    return Math.round(Math.random() * (max - min) + min)
    ;
  }
const exOrNought = () => {
// flips a coin and decides x or o
    if (Math.random() <= 0.5) { return `x`;}
    else { return `o`;}
    }
function changeTurn() {
// changes which player's turn it is
    if (turn == `x`) {turn = `o`}
    else if (turn == `o`) {turn = `x`}
}

function boardChanger() {
//rolls a dice, checks if the space corresponding to the dice roll is empty and if it is, flips a coin and assigns he coinflip value to the empty space
    r9 = rollD9();
    if (r9 == 1 && grid[0][0] == ``) {grid[0][0] = `${turn}`;}
    else if (r9 == 2 && grid[0][1] == ``) {grid[0][1] = `${turn}`;}
    else if (r9 == 3 && grid[0][2] == ``) {grid[0][2] = `${turn}`;}
    else if (r9 == 4 && grid[1][0] == ``) {grid[1][0] = `${turn}`;}
    else if (r9 == 5 && grid[1][1] == ``) {grid[1][1] = `${turn}`;}
    else if (r9 == 6 && grid[1][2] == ``) {grid[1][2] = `${turn}`;}
    else if (r9 == 7 && grid[2][0] == ``) {grid[2][0] = `${turn}`;}
    else if (r9 == 8 && grid[2][1] == ``) {grid[2][1] = `${turn}`;}
    else if (r9 == 9 && grid[2][2] == ``) {grid[2][2] = `${turn}`;}
    else {boardChanger()};
}

const winCheck = () =>
{
// checks the various win conditions possible and if it hits a win condition, announces the winner and changes the game-state to Won
if ((grid[0][0] == "x" && grid[0][1] == "x" && grid[0][2] == "x") || (grid[0][0] == "o" && grid[0][1] == "o" && grid[0][2] == "o")){
    console.log(`The winner is ${grid[0][0]}`);
    isWin = true;}
    //first row check
    else if ((grid[1][0] == "x" && grid[1][1] == "x" && grid[1][2] == "x") || (grid[1][0] == "o" && grid[1][1] == "o" && grid[1][2] == "o")) {
        console.log(`The winndr is ${grid[1][0]}`);
        isWin = true;}
    //second row check
    else if ((grid[2][0] == "x" && grid[2][1] == "x" && grid[2][2] == "x") || (grid[2][0] == "o" && grid[2][1] == "o" && grid[2][2] == "o")){
        console.log(`The winner is ${grid[2][0]}`);
        isWin = true;}
    //third row check
    else if ((grid[0][0] == "x" && grid[1][0] == "x" && grid[2][0] == "x") || (grid[0][0] == "o" && grid[1][0] == "o" && grid[2][0] == "o")){
        console.log(`The winner is ${grid[0][0]}`);
        isWin = true;}
    // first column check
    else if ((grid[0][1] == "x" && grid[1][1] == "x" && grid[2][1] == "x") || (grid[0][1] == "o" && grid[1][1] == "o" && grid[2][1] == "o")){
        console.log(`The winner is ${grid[0][1]}`);
        isWin = true;}
    // second column check
    else if ((grid[0][2] == "x" && grid[1][2] == "x" && grid[2][2] == "x") || (grid[0][2] == "o" && grid[1][2] == "o" && grid[2][2] == "o")){
        console.log(`The winner is ${grid[0][2]}`);
        isWin = true;}
    // thrid column check
    else if ((grid[0][0] == "x" && grid[1][1] == "x" && grid[2][2] == "x") || (grid[0][0] == "o" && grid[1][1] == "o" && grid[2][2] == "o")){
        console.log(`The winner is ${grid[1][1]}`);
        isWin = true;}
    // diagonal check
    else if ((grid[0][2] == "x" && grid[1][1] == "x" && grid[2][0] == "x") || (grid[0][2] == "o" && grid[1][1] == "o" && grid[2][0] == "o")){
        console.log(`The winner is ${grid[1][1]}`);
        isWin = true;}
    else {console.log(`No winner yet! Here's what the board looks like:`)
    console.log(grid[0]);
    console.log(grid[1]);
    console.log(grid[2]);}
    // second diagonal check
    }

const playGame = () => { 
    //if there is no winstate and a spot in the array is empty, run one instance of boardChanger and check if it causes a win. Repeat until there is a win or all the spaces are full and it is a draw.
if (isWin == true) {
    console.log(`Congratulations!`);} 
else if ((isWin == false) && (grid[0][0] == ``|| grid[0][1] == ``|| grid[0][2] == ``|| grid[1][0] == ``|| grid[1][1] == ``|| grid[1][2] == ``|| grid[2][0] == ``|| grid[2][1] == ``|| grid[2][2] == ``)) {
    boardChanger()
    changeTurn(turn);
    winCheck();
    playGame();}
else if ((isWin == false) && (grid[0][0] !== `` && grid[0][1] !== ``&& grid[0][2] !== ``&& grid[1][0] !== ``&& grid[1][1] !== ``&& grid[1][2] !== ``&& grid[2][0] !== ``&& grid[2][1] !== ``&& grid[2][2] !== ``)) {
    console.log(`It was a TIE!`);}
}


let turn = exOrNought()
console.log(`The ${turn} will go first`)
playGame();
console.log(grid[0]);
console.log(grid[1]);
console.log(grid[2]);