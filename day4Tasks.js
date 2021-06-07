// // ticket machine 
// function rollD100(min, max) {
//     return Math.round(Math.random() * (max - min) + min);
//   }
  
//   let min = 0;
//   let max = 100;
  
//   randomNumber = rollD100(min, max);
// let age = randomNumber
// console.log(age)
// if (age < 18) {console.log(`The price of the children's ticket is £8.`);}
// else if (18 <= age && age < 60) {console.log(`The price of an adult ticket is £10.95.`);}
// else {console.log(`The price for Seniors is £7.50.`);}


// let str = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi";
// let vowels = str.match(/[aeiouy]/gi);
// let result = str.lastIndexOf(vowels);
// console.log(vowels);

// let coffeeIsGrinding = true
// const pressGrindBeans = () => {
//     if (coffeeIsGrinding) {console.log(`Stop the grind`);
//         coffeeIsGrinding = false;}
//     else {console.log(`Grinding is about to begin`);
//         coffeeIsGrinding = true;
//     }
// }
// pressGrindBeans();

// let accnumber = 50449921;
// let cashAmount
// const cashWithdrawal = (amount, accnum) => {console.log(`Withdrawing £${amount} from account ${accnum}`);}
// cashWithdrawal(cashAmount, accnumber);
// cashWithdrawal(30, 50449921);
// cashWithdrawal(200, 50447921);

// const addUp = (num1, num2) => {
//     return num1 + num2;
// }

// let total = addUp(7,3);
// console.log(total);
// console.log(addUp(2, 5));

// const In = () => {return Ception();}
// const Ception = () => {return In();}


// const multiplyByNineFifths = (celsius) => {return celsius * (9/5);};
// const getFahrenheit = (celsius) => { return multiplyByNineFifths(celsius) + 32;};
// console.log(`The temperature is ${getFahrenheit(15)}F.`);
// //illustrating how to put a function inside a function.
// //below is the same but in a single function.
// const straightToFahrenheit = (celsius2) => {return (celsius2 * (9/5)) + 32;};
// console.log(`The temperature is ${straightToFahrenheit(30)}F.`)
// //Output: the temperature is 59F.

// function square(number) {return number * number};
// console.log(square(25.8089));

// function factorial (n) {
//     if ((n === 0) || (n === 1)) {return 1;}
//     else {return (n * factorial (n-1));}
// }
// console.log(factorial(33));

// //arrow function
// //const function = (number) => {....}

// //declaration
// //fucntion square(number){....}

// //anonymous function
// //const square = function (number){....}


// function coffeeOrder(size,type) {
//     console.log(`Thank you for your order of a ${size} ${type}.`);
// }
// coffeeOrder(`medium`,`latte`);

// const factorial = (n) => {
//     if ((n === 0) || (n === 1)) {return 1;}
//     else {return (n * factorial (n-1));}
// }
// console.log(factorial(33));

// let orderCount = 1;
// const takeOrder = (topping1, topping2) => {
//     console.log(`Pizza with ${topping1} and ${topping2}. This is orer number ${orderCount}.`);
//     orderCount++;
// }
// takeOrder(`fish`, `beans`);
// takeOrder(`chicken`, `carrots`);
// takeOrder(`mushroom`,`cabbage`);

// let availableCash = 1000
// const cashWithdrawal = (cash) => {
//     availableCash = availableCash - cash;
//     console.log(`You have withdrawn ${cash} from your account. Your remaining balance is ${availableCash}`);
// }
// const amountCredentials = (amount, pin) => {
// if (pin !== 0000) {console.log(`Your PIN number was incorrect.`)}
// else if (amount > availableCash) {`You have insufficient funds to make this withdrawal.`}
// else {cashWithdrawal(amount)}
// }
// amountCredentials(800, 0000)

