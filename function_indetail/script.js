'use strict';

// const bookingArray = [];

// const createBooking = function (
//   flightNum,
//   numPassanger = 1,
//   price = 199 * numPassanger
// ) {
//   // ES5
//   //   numPassanger = numPassanger || 1;
//   //   price = price || 199;

//   const booking = {
//     flightNum,
//     numPassanger,
//     price,
//   };

//   console.log(booking);
//   bookingArray.push(booking);
// };

// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123', 2);
// createBooking('LH123', 5);

// createBooking('LH123', undefined,  1000);

// const flight = 'LH234';
// const darren = {
//   name: 'Darren Wayn',
//   passport: 2372349598,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Mr. ' + passenger.name;

//   if (passenger.name === 2372349598) {
//     alert('Check in');
//   } else {
//     alert('Wrong Passport!');
//   }
// };

// // checkIn(flight, darren);
// // console.log(flight);
// // console.log(darren);

// // // Is the same as doing ...
// // const flightNum = flight;
// // const passenger = darren;

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 1000000000);
// };

// newPassport(darren);
// console.log(flight, darren);

// const oneWord = function (str) {
//   return str.replace(/ /g, ''.toLowerCase());
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// // Higher-order function
// const transform = function (str, fn) {
//   console.log(`Orginal string: ${str}`);
//   console.log(`Transform string: ${fn(str)}`);

//   console.log(`Transform by ${fn.name}`);
// };

// transform('Javascript is the best!', upperFirstWord);
// transform('Javascript is the best!', oneWord);

// const high5 = function () {
//   console.log('Hi');
// };

// document.body.addEventListener('click', high5);

// ['Jonas', 'Martha', 'Adam'].forEach(high5);

// Function returning function
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Darren');

greet('Hello')('Darren');

// Challenge
const greetArr = greeting => name => console.log(`${greeting} ${name}`);

greetArr('Hi')('Darren');
