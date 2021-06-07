console.log(Math.random());


let random_number = Math.trunc((Math.random() * 10));

console.log(random_number);


function Roll_d100(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }
  
  let min = 0;
  let max = 100;
  
  random_number = Roll_d100(min, max);
  
  console.log(random_number);
  
console.log(Math.floor(Math.random()*10));
console.log(Math.ceil(Math.random()*10));

let num = Math.random()*10;
console.log(Math.floor(num));
console.log(Math.ceil(num));
console.log(Math.round(num));