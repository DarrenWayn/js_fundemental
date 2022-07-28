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
// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeterHey = greet('Hey');
// greeterHey('Jonas');
// greeterHey('Darren');

// greet('Hello')('Darren');

// // Challenge
// const greetArr = greeting => name => console.log(`${greeting} ${name}`);

// greetArr('Hi')('Darren');

// The call and apply methods
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // book: function () {}
  book(flightNum, name) {
    console.log(
      `${name} booked on ${this.airline} flight ${this.iataCode} ${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode} ${flightNum}, name` });
  },
};

lufthansa.book(239, 'Darren Wayn');
lufthansa.book(325, 'John Smith');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

book.call(eurowings, 23, 'Sarah William');
console.log(eurowings);

book.call(lufthansa, 239, 'Marry Coopers');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 239, 'Marry Coopers');
console.log(swiss);

// Apply Method (this apply method is rarely use in modern javascript)
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);

// Bind Method (Most Important)
// Bind return a new function

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Williams');

const bookEW23 = book.bind(eurowings, 12345);
bookEW23('Darren Wayn');
bookEW23('Martha Wayn');

// With Event Listeners
lufthansa.planes = 300
lufthansa.buyPlane() = function () {
    console.log(this)

    this.planes++
    console.log(this.planes);
}

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa))

  // Partial Application means we can preset parameters
  const addTax = (rate, value) => value + value * rate
console.log(addTax(0.1, 200))

const addVat = addTax.bind(null, 0.23)
// addVat = value => value + value * 0.23
  
console.log(addVat(100))
console.log(addVat(23))

const addTaxRate = function (rate) {
  return function (value) {
    return value + value + rate
  }
}

const addVat2 = addTaxRate(0.23)


console.log(addVat2(100))
console.log(addVat2(23))

