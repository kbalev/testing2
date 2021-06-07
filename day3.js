// // let birthday = new Date(`12/13/2021`);
// // let todayDate = new Date();
// // let timeMissing = todayDate.getTime() - birthday.getTime();
// // let daysMissing = timeMissing / (1000 * 3600 * 24);
// // console.log(`my birthday is ${birthday} , today is ${todayDate}, time missing until my birthday ${timeMissing}, days missing until my birthday ${daysMissing}`);

// //  let music = `no music`;
// //  if (music == `classical`) {
// //      console.log("Nice!");
// //  }
// //  else if (music == `no music`) {
// //      console.log(`Arh, peace and quiet`);
// //  }
// //  else {
// //      console.log(`That's some noise`);
// //  }

//  let i = 0;
//  let x = [`classical`, `rap`, `no music`];
//  let music = x[i];
// do{ if  (music = "classical") {console.log("Beautiful",)}
//     else if (music = "rap") {console.log("my ears are bleeding")}
//     else if (music = "no music") {console.log("my ears are bleeding");}
// i++
// music = x[i];}
// while (i <= 2);



//  console.log(1 + `1`);



//  let place = `England`;
//  let weather = `Sunny`;

// if(place == `England` && weather == `Sunny`) {console.log(`Check again`);}
// else if (place == `England` && weather == `Rain`) {console.log(`Obviously`);}
// else {console.log(`Wait, what? It isn't raining?`);}

// let car = "Peugeot";
// if(car == "Ford" || car == "GM"){
// console.log("You've got an American car!");
// }
// else if(car == "Peugeot" || car == "Citroen"){
// console.log("You've got a French boy!");
// }
// else if(car == "Honda" || car == "Toyota" || car == "Suzuki"){
// console.log("Japanese cars are dead quiet!");
// }
// else if(car == "Mercedes"){
// console.log("You are proper posh German!");
// }
// else if(car == "Volkswagen"){
// console.log("German aren't that bad at all!");
// }
// else if(car == "Hyundai" || car == "Kia"){
// console.log("South Korean cars are getting popular!");
// }
// else{
// console.log("Your car is not in the top ten companies in the world!");
// }


// // let car1 = []
// // switch (car){
// //     case x:
// //         break;
// //     case y:
// //         break;
// //     default:
// // }

// let age = 20
// let country = `uk`
// if (age<=17 && country == `uk`) {console.log(`you're too young`)}
// else if (age<=21 && country == `us`) {console.log(`can I see some ID`)}
// else {console.log(`what would you like`)};

// const grade = 87;
// switch (true) {
//     case grade >= 70:
//         console.log(`Distingction`);
//         break;
//     case grade >= 60:
//         console.log(`Merit`);
//         break;
//     case grade >= 50:
//         console.log(`Pass`);
//         break;
//     default:
//         console.log(`Fail`);
// }




// let topping = `mushroom`;
// switch (true){
//     case topping == `ham`:
//     case topping ==`cheese`:
//     case topping ==`pineapple`:
//         console.log(`${topping} is alright on pizza.`)
//         break;
//     case topping ==`mushroom`:
//         console.log(`I definitely like mushroom on my pizza!`)
//         break;
//     default: `I don't mind having ${topping} on my pizza.`};


// let password = `hunterx123!`
// if (password.count < 8) {console.log(`Your password is too short`);}
// else{console.log(`Your password is long enough`);};

// function Roll_d100(min, max) {
//     return Math.round(Math.random() * (max - min) + min);}
//   let min = 0;
//   let max = 100;
//   num = Roll_d100(min, max);
// console.log(num)
// if (num %3 == 0 || num % 5 == 0 ) {console.log(`the number is divisible by 3 or 5`);}
// else {console.log(`the number is not divisible by 3 or 5`);}


// if (num & 1) {
// console.log("It's odd");
// } else {
// console.log("It's even");


// function Roll_d100(min, max) {
//     return Math.round(Math.random() * (max - min) + min);}
//   let min = 0;
//   let max = 100;
//   num = Roll_d100(min, max);
// if (num % 3 == 0 && num % 5 == 0 ) {console.log(`fizz buzz`);}
// else if (num %3 == 0) {console.log(`fizz`);}
// else if (num %5 == 0) {console.log(`buzz`);}
// else {console.log(num)}

// function Roll_d10000(min, max) {
// return Math.round(Math.random() * (max - min) + min);}
// let min = 0;
// let max = 10000;
// num = Roll_d10000(min, max);
// console.log(num);
// num = num + ``;
// let numCheck = num.split(``).reverse().join(``);
// if (num == numCheck) {console.log(`${num} is a palindrome`);}
// else {console.log(`${num} is not a palindrome`);}


//Trying to figure out how the above worked
// let n = 1231
// n = n + ``
// console.log(n)
// console.log(n.split(``))
// console.log(n.reverse())
// console.log(n.join(``))

let time = new Date(`HH:mm`);
let placeOfWork = `the office`;
let townOfHome = `Merseyside`;

console.log(time);



vowels = ["a","y", "e", "o", "u", "i"];
let welshName = `jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuh
gtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi`
welshNameArray = welshName.split()
let loopNum = welshNameArray.length;

for (let i = 0; i < loopNum; i++){
if (array1[i] == array2[i]){
console.log("It's a match!");
} else {
console.log("It's not a match!");
}
}