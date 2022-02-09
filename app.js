// let a = '';
// let b = 'bongos';
// let c = 'get your';

// a = b;
// b = c;
// c = a;

// //a is bongos
// //b is get your
// // c is bongos

// console.log("Please " + "squeez " + "the " + "cheese.")

// const word = "belive"

// console.log("Please " + word + " the " + "cheese.")

// const num1 = 10, num2 = 5;
// const sum = num1 + num2
// console.log("The sum of 5 and 10 is " + sum)

// // Check: is -10 greater-than-or-equal-to -100?
// console.log(-10 >= -100)
// // Check: is 0 less than 1000?
// console.log(0 < 100)
// // Check: is 888 the same as 889?
// console.log(888 == 889)
// // Check: is 20 less-than-or-equal-to 20?
// console.log(20 <= 20)

// //Write a while loop that counts from 1 to 100.
// let num = 1;

// while(num <= 100)
// {
//   console.log(num)
//   num++
// }

// for (let i=999; i <= 9999; i++) {
// 	console.log(i);
// }

// // confetti_ball: Bonus:

// // Write a for loop that prints 'This is the song that never ends' to the console 100 times.
// for(let i = 1; i <= 100; i++){
//   console.log('This is the song that never ends')
// }
// // Write a for loop that counts backwards from 1000 to 1, using the postfix operator i--.
// for(let i = 100; i >= 1; i--){
//   console.log(i)
// }

// const random = require('./utilities/random');
// for (let i = 0; i < 10; i++) {
//     console.log( random(100, 200) );
// }

const circle = require('./utilities/circle');
console.log( circle.area(50) );  // 7853.98...
console.log( circle.circumference(75) );  // 471.23...