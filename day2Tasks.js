//Create a program that stores someone’s name, age and favourite colour that logs to the console in a complete sentence.

let userName = ` `
let userAge  = 0
let userColour = ` `

userName = `Steve`;
userAge = 20;
userColour = `green`;
console.log(`${userName} is ${userAge} years old and their favourite colour is ${userColour}.`);

// userName = window.prompt(`Please enter your name: `);

// console.log(`Hello, ${userName}, it is great to meet you! Congratulations on making it to ${userAge}! To celebrate this milestone, you have earned a ${userColour} cake, I hear it is your favourite colour.`);


// Create a program that stores what you eat
// today for breakfast, lunch and dinner, log
// these to the console.
// Update each of these variables to what
// you will eat tomorrow, log these to the
// console.

let breakfast = `cereal`;
let lunch = `pizza`;
let dinner = `spaghetti`;
console.log(`For breakfast I had ${breakfast}, at lunch I enjoyed some ${lunch} and for dinner I had ${dinner}.`);
breakfast = `a bagel`;
lunch = `curry`;
dinner = `ramen`;
console.log(`Tomorrow I will have ${breakfast}, ${lunch} and ${dinner} for breakfast lunch and dinner respectively.`);


// Create a program that calculate the
// number of days from today to your birth
// date.
// Create variables that store your birth date,
// and today’s date.

let today = new Date()
console.log(today);
let birthday = new Date('1996-07-14');
console.log(birthday);
daysSince = Math.floor((((((today - birthday)/1000)/60)/60)/24)/365);
console.log(`I am ${daysSince} years old.`);




// (1) Create a 9 variables space1, space2…
// space9
// (2) Assign either the value ‘x’, ‘o’, ‘ ‘ to each
// of these variable
// (3) Insert the variables into the board using
// the ${varName} syntax and make your
// board look like the one displayed

let space1 = `x`
let space2 = `o`
let space3 = ` `
let space4 = `x`
let space5 = `x`
let space6 = ` `
let space7 = `o`
let space8 = ` `
let space9 = ` `
let grid = [ " | | ", `${space1}|${space2}|${space3}`," | | ","-----------"," | | ",`${space4}|${space5}|${space6}`," | | ","-----------"," | | ",`${space7}|${space8}|${space9}`," | | "];
let q = 0
do{console.log(grid[q]);q++}
while(q<11);



