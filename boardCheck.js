let grid = [
    ['x', 'x', 'x'],
    ['4', '5', '6'],
    ['7', '8', '9']
    ];
    console.log(grid[0]);
    console.log(grid[1]);
    console.log(grid[2]);


if ((grid[0][0] == "x" && grid[0][1] == "x" && grid[0][2] == "x") || (grid[0][0] == "o" && grid[0][1] == "o" && grid[0][2] == "o")){
    console.log(`The winner is ${grid[0][0]}`);}
    //first row check
    else if ((grid[1][0] == "x" && grid[1][1] == "x" && grid[1][2] == "x") || (grid[1][0] == "o" && grid[1][1] == "o" && grid[1][2] == "o")) {
        console.log(`The winndr is ${grid[1][0]}`);}
    //second row check
    else if ((grid[2][0] == "x" && grid[2][1] == "x" && grid[2][2] == "x") || (grid[2][0] == "o" && grid[2][1] == "o" && grid[2][2] == "o")){
        console.log(`The winner is ${grid[2][0]}`);}
    //third row check
    else if ((grid[0][0] == "x" && grid[1][0] == "x" && grid[2][0] == "x") || (grid[0][0] == "o" && grid[1][0] == "o" && grid[2][0] == "o")){
        console.log(`The winner is ${grid[0][0]}`);}
    // first column check
    else if ((grid[0][1] == "x" && grid[1][1] == "x" && grid[2][1] == "x") || (grid[0][1] == "o" && grid[1][1] == "o" && grid[2][1] == "o")){
        console.log(`The winner is ${grid[0][1]}`);}
    // second column check
    else if ((grid[0][2] == "x" && grid[1][2] == "x" && grid[2][2] == "x") || (grid[0][2] == "o" && grid[1][2] == "o" && grid[2][2] == "o")){
        console.log(`The winner is ${grid[0][2]}`);}
    // thrid column check
    else if ((grid[0][0] == "x" && grid[1][1] == "x" && grid[2][2] == "x") || (grid[0][0] == "o" && grid[1][1] == "o" && grid[2][2] == "o")){
        console.log(`The winner is ${grid[1][1]}`);}
    // diagonal check
    else if ((grid[0][2] == "x" && grid[1][1] == "x" && grid[2][0] == "x") || (grid[0][2] == "o" && grid[1][1] == "o" && grid[2][0] == "o")){
        console.log(`The winner is ${grid[1][1]}`);}
    // second diagonal check
    else {console.log(`It's a tie!`)};

