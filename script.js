'use strict';

// const age = 15

// if (age >= 18) {
//     console.log('Sarah can start driving license')
// } else {
//     const yearsLeft = 18 - age
//     console.log(`Sarah needs ${yearsLeft} more years`)
// }

// let century
// const birthYear = 2012
// if (birthYear <= 2000) {
//     century = 20
// } else {
//     century = 21
// }

// console.log(century)

//type conversion
// const inputYear = '1991'
// console.log(Number(inputYear) + 18)
// console.log(inputYear + 18)
// console.log(String(23), 23)

// type coertion
// console.log('I am ' + 23 + ' years old') // + is converted into string
// console.log('23' - '10' - '3') // - in converted into number
// console.log('23' / '2')

// truthy and falty value
// 5 falsy values: 0, ', undefined, null, NaN

// console.log(Boolean(0))
// console.log(Boolean(undefined))
// console.log(Boolean('Darren'))
// console.log(Boolean(''))
// console.log(Boolean({}))

// const money = 1000
// if (money) {
//     console.log("Don't spend it all")
// } else {
//     console.log('You should get a job!')
// }

// let height = 1023
// if(height) {
//     console.log('Yay! height is defined')
// } else {
//     console.log('Height is UNDEFINED')
// }

// equality operator == / ====
// const age = '18'
// if (age === 18) console.log('You just became an adult (strict)')
// if (age == 18) console.log('You just became an adult (loose)')

// == is performing type quortion === not, only use ===

// const favorite = Number(prompt("What's your favori te number?"))
// console.log(favorite)
// console.log(typeof favorite)

// if (favorite === 23) {
//     console.log('Cool! 23 is an Amazing number!')
// } else if (favorite === 7){
//     console.log('7 is also a cool number')
// } else if (favorite === 9){
//     console.log('9 is also a cool number')
// } else {
//     console.log('Number is not 23 or 7 or 9')
// }

// if(favorite !== 23) console.log('Why not 23?')

// logical operator

// const hasDriversLicense = true // A
// const hasGoodVision = true // B

// console.log(hasDriversLicense && hasGoodVision)
// console.log(hasDriversLicense || hasGoodVision)
// console.log(!hasDriversLicense)

// const shouldDrive = hasDriversLicense && hasGoodVision

// // if (shouldDrive) {
// //     console.log('Sarah is able to drive')
// // } else {
// //     console.log('someone else should drive...')
// // }

// const isTired = true
// console.log(hasDriversLicense && hasGoodVision && isTired)

// switch statement

// const day = 'monday'

// switch(day) {
//     case 'monday':
//         console.log('Plan my todolist')
//         console.log('Go to coding meetup')
//         break;
//     case 'tuesday':
//         console.log('prepare foods')
//         console.log('prepare videos')
//         break;
//     case 'wednesday':
//         break
//     case 'thursday':
//         console.log('Record videos')
//         break
//     case 'friday':
//         console.log('Hang out')
//         break
//     case 'saturday':
//     case 'sunday':
//         console.log('Rest')
//         break
//     default:
//         console.log('Not a valid day!')
// }

// if (day === 'monday') {
//     console.log('its a new begining')
// } else if (day === 'tuesday') {
//     console.log('lets works')
// } else if (day === 'wednesday' || day === 'thursday') {
//     console.log('Let get it done')
// } else if (day === 'friday') {
//     console.log('Enjoy our friday night')
// } else if (day === 'saturday' || day === 'sunday') {
//     console.log('Enjoy your weekend')
// } else {
//     console.log('Not a valid day')
// }

// 27. statement and expression
// 28. the conditional ternary operator
// const age = 17
// age >= 18 ? console.log('I like to drink wine ') :
// console.log('I like to drink water')

// const drink = age >= 18 ? 'wine' : 'water'
// console.log(drink)

// let drink2
// if (age >= 18) {
//     drink2 = 'wines'
// } else {
//     drink2 = 'waters'
// }
// console.log(drink2)

// console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`)

// 'use strict';
// let hasDriversLicense = false
// let passTest = true

// if (passTest) hasDriversLicense = true
// if (hasDriversLicense) console.log('can drive')

// const interface = 'Audio'

//function decleration n expression
// function calcAge1(birthYear) {
//     return 2017 - birthYear
// }

// const age1 = calcAge1(1991)
// console.log(age1)

// const caclAge2  = function (birthYear) {
//     return 2017 - birthYear
// }
// const age2 = caclAge2(1991)
// console.log(age1, age2)

// arrorw function
// const calcAge3 = birthYear =>  2017 - birthYear
// const age3 = calcAge3(1991)
// console.log(age3)

// const yearsUntillRetirement = (birthYear, firstName) => {
//     const age = 2017 - birthYear
//     const retirement = 65 - age
//     // return retirement
//     return `${firstName} retires in ${retirement} years`
// }

// console.log(yearsUntillRetirement(1991, 'darren'))
// console.log(yearsUntillRetirement(2000, 'ibi'))

// function calling other function
// function cutPieces(fruit) {
//     return fruit * 4
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutPieces(apples)
//     const orangePieces = cutPieces(oranges)

//     const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges`
//     return juice
// }

// console.log(fruitProcessor(2,3))

// 37. reviewing function
// const calcAge = function(year) {
//     return 2037 - year
// }

// const yearsUntillRetirement = function (birthYear, firstName) {
//     const age = calcAge(birthYear)
//     const retirement = 65 - age

//     if (retirement > 0) {
//         console.log(`${firstName} retires in ${retirement} years`)
//         return retirement
//     } else {
//         console.log(`${firstName} has already retired`)
//         return -1
//     }
// }

// console.log(yearsUntillRetirement(1991, 'Darren'))
// console.log(yearsUntillRetirement(1987, 'Mike'))

// 40. coding challenge
// test data 1
// const calcAverage = (a, b, c) => (a + b + c) / 3
// let scoreDolphines = calcAverage(44, 23, 71)
// let scoreKoalas = calcAverage(65, 54, 49)

// console.log(scoreDolphines, scoreKoalas)

// function calculateWinner(avgDolphines, avgKoalas) {
//     if (avgDolphines >= 2 * avgKoalas) {
//         console.log(`Dolphine wins (${avgDolphines} vs. ${avgKoalas})`)
//     } else if (avgKoalas >= 2 * avgDolphines) {
//         console.log(`Koalas wins (${avgKoalas} vs. ${avgDolphines}`)
//     } else {
//         console.log('no team wins ...')
//     }
// }

// calculateWinner(scoreDolphines, scoreKoalas)

// calculateWinner(576, 111)
// // test data 2
// scoreDolphines = calcAverage(85, 54, 41)
// scoreKoalas = calcAverage(23, 34, 27)
// console.log(scoreDolphines, scoreKoalas)
// calculateWinner(scoreDolphines, scoreKoalas).

// 39. intruducing arrays
// const friend1 = 'darren'
// const friend2 = 'bubu'
// const friend3 = 'ibi'

// const friends = ['darren', 'bubu', 'ibi']
// console.log(friend1)

// const y = new Array(1991, 1984, 2020, 2021, 2022)
// console.log(friends[1])
// console.log(friends[2])
// console.log(friends[0])

// console.log(friends.length)
// console.log(friends[friends.length - 1])
// console.log(friends[2 - 1])

// friends[2] = 'Jay'
// console.log(friends)
// // friends = ['bob', 'net']

// const firstName = 'Jonas'
// const jonas = [firstName, 'Wayn', 1991 - 1890, 'teacher', friends]
// console.log(jonas)
// console.log(jonas.length)

// // Excersise
// const calcAge = function(birthYear) {
//     return 2037 - birthYear
// }

// const years = [1990, 1991, 2010, 2022]

// const age1 = calcAge(years[0])
// const age2 = calcAge(years[1])
// const age3 = calcAge(years[years.length -1])
// console.log(age1, age2, age3)

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years.length - 1)]
// console.log(ages)

// 40. basic array operator methods)
// const friends = ['darren', 'bubu', 'ibi']

// // add elements
// const newLength = friends.push('Jay')
// console.log(friends)
// console.log(newLength)

// friends.unshift('John')
// console.log(friends)

// // remove elements
// friends.pop() //delete last
// const popped = friends.pop() //last
// console.log(popped)
// console.log(friends)

// const shift = friends.shift() //delete first
// console.log(shift)

// console.log(friends.indexOf('darren')) // locate the element
// console.log(friends.indexOf('bob')) // will be -1 means doesn't exist

// friends.push(23)
// console.log(friends.includes('darren'))
// console.log(friends.includes('bob'))
// console.log(friends.includes(23))

// if(friends.includes('darren')) {
//     console.log('you have a friends called darren')
// } else {
//     console.log('you have no friends')
// }

// 41. coding challenge 2
// const calcTip = function(bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill + 0.2
// }

// // const calcTip = bill => bill >= 50 && bill <= 300 ? bill + 0.15 : bill + 0.2
// const bills = [125, 555, 44]
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]
// console.log(bills, tips, totals)

// 42. introduction of objects
// const jonasArray = [
//     'Jonas',
//     'Wayn',
//     2037 - 1991,
//     'teacher',
//     ['darren', 'bubu', 'ibi']
// ]

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Jonas',
//     age: 2037 - 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven']
// }

// // 43. dot and bracket
// console.log(`${jonas.firstName} has ${jonas.lastName}`)

// 43. object methods
// const jonas = {
//         firstName: 'Jonas',
//         lastName: 'wayne',
//         birthYear: 1991,
//         job: 'teacher',
//         friends: ['Michael', 'Peter', 'Steven'],
//         hasDriverLicense: true,

// // inside object we only can do function expression
//         // calcAge: function(birthYear) {
//         //     return 2037 - birthYear
//         // },

//         calcAge: function() {
//             console.log(this)
//             return 2037 - this.birthYear
//         },

//         // calcAge: function() {
//         //     this.age = 2037 - this.birthYear
//         //     return this.age
//         // },

//         getSummary: function() {
//             return `${this.firstName} is a ${this.calcAge()}
//             -years old ${jonas.job}, and he has ${this.hasDriverLicense ? 'a' : 'no'} driver's license`
//         },
// }
// // console.log(jonas.calcAge(1991))
// // console.log(jonas['calcAge'](1991))

// console.log(jonas.calcAge())

// console.log(jonas.age)
// console.log(jonas.age)
// console.log(jonas.age)

// console.log(jonas.getSummary())

// 44. coding challange
// const mark = {
//     fullName: 'Mark Miller',
//     mass: '78',
//     height: '1.69',
//     caclBMI: function () {
//         this.bmi = this.mass / this.height ** 2
//         return this.bmi
//     }
// }

// const john = {
//     fullName: 'John Smith',
//     mass: '92',
//     height: '1.95',
//     caclBMI: function () {
//         this.bmi = this.mass / this.height ** 2
//         return this.bmi
//     }
// }

// mark.caclBMI()
// john.caclBMI()
// console.log(mark.bmi, john.bmi)

// if(mark.bmi > john.bmi) {
//     console.log(`${mark.fullName}'s BMI (${mark.bmi})
//     is higher than ${john.fullName}'s BMI (${john.bmi})
//     `)
// } else if (john.bmi > mark.bmi) {
//     console.log(`${john.fullName}'s BMI (${john.bmi})
//     is higher than ${mark.fullName}'s BMI (${john.bmi})
//     `)
// }

//45. control structure beside if else which is loops
// for loop keep running while condition is true
// for(let rep = 1; rep <= 10; rep++) {
//     console.log(`lifting weights repetition ${rep}`)
// }

// 47. loop array
// const jonas = [
//     'Darren',
//     'wayn',
//     2022 - 1998,
//     'coder',
//     ['mimi', 'mumu', 'lala']
// ]

// const types = []
// for (let i = 0; i < jonas.length; i++) {
//     // reading from jonas array
//     console.log(jonas[i], typeof jonas[i])

//     // filling types array with 2 methods
//     // types[i] = typeof jonas[i]
//     types.push(typeof jonas[i])
// }
// console.log(types)

// const years = [1991, 2007, 1969, 2020]
// const ages = []

// for (let i = 0; i < years.length; i++) {
//     ages.push(2037 - years[i])
// }
// console.log(ages)

// // continue and break
// console.log('-- ONLY STRING --')
// for (let i = 0; i < jonas.length; i++) {
//     // if the type of the jonas[i](current element) is not a string
//     if (typeof jonas[i] !== 'string') continue;
//     console.log(jonas[i], typeof jonas[i])
// }

// // as soon as the number is found i want to break the loop
// console.log('-- BREAK THE NUMBER --')
// for (let i = 0; i < jonas.length; i++) {
//     // if the type of the jonas[i](current element) is not a string
//     if (typeof jonas[i] === 'number') break;
//     console.log(jonas[i], typeof jonas[i])
// }

// 48. looping backwards and looping loops
// const jonas = [
//     'Darren',
//     'wayn',
//     2022 - 1998,
//     'coder',
//     ['mimi', 'mumu', 'lala']
// ]
// 0, 1, ... 4
// 4, 3, ... 1

// for (let i = jonas.length - 1; i >= 0; i--) {
//     console.log(i, jonas[i])
// }

// for (let exercise = 1; exercise < 4; exercise++) {
//     console.log(`------- Starting exercise ${exercise}`)

//     for (let rep = 1; rep <= 6; rep++) {
//         console.log(`Lifting weight repetition ${rep}`)
//     }
// }

// let rep = 1
// while (rep <= 10) {
//     rep++
// }

// let dice = Math.trunc(Math.random() * 6) + 1

// // ketika dicenya bukan 6 role trus dicenya sampe ketemu 6
// while (dice !== 6) {
//     console.log(`You rolled a ${dice}`)
//     dice = Math.trunc(Math.random() * 6) + 1
//     console.log('You got a 6')

//     if(dice === 6) console.log('Loop is about to end ...')
// }

// const calcTip = function(bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill + 0.2
// }

// // const calcTip = bill => bill >= 50 && bill <= 300 ? bill + 0.15 : bill + 0.2
// const bills = [22, 296, 176, 440, 37, 105, 10, 1100, 86, 0.2 ]
// const tips = []
// const totals = []

// for (let i = 0; i < bills.length; i++) {
//     const tip = calcTip(bills[i])
//     tips.push(tip)
//     totals.push(tip + bills[i])
// }

// console.log(bills, tips, totals)

// const calcAverage = function(arr) {
//     let sum = 0
//     for(let i = 0; i < arr.length; i++) {
//         // sum = sum = arr[i]
//         sum += arr[i]
//     }
//     return sum / arr.length
// }

// console.log(calcAverage([2, 3, 7]))
// console.log(calcAverage(totals))
// console.log(calcAverage(tips))

// using google, stack overflow and mdn

// PROBLEM:
//  we work for a company building a smat home htermometer. our most recent task is this:
// 'Given an array of temperatures of one daym, calculate the temparature amplitude. Keep in mind
// that sometimes there might be a sensor error'
// const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5]

// 1. Understanding the problem
// -. What is temp amplitude? Answer: difference between highest and lowest temp
// -. How to compute max and min temperatures?
// -. What's a sensor error? And what to do?

// 2. Nreaking up into sub-problems
// -. How to ignore errors?
// -. Find max value in temp array
// -. Find min value in temp array
// -. Substract min from max (amplitude) and return it

// const calcTempAmplitude = function(temps) {
//     let max = temps[0]
//     let min = temps[0]

//     for (let i = 0; i < temps.length; i++) {
//         const curTemp = temps[i]

//         if(typeof curTemp !== 'number') continue
//         // if the curren value in the array is the max then that value should be the max
//         if (curTemp > max) max = temps[i]
//         if (curTemp < min) min = temps[i]
//     }
//     console.log(max, min)
//     return max - min
// }
// // calcTempAmplitude([3, 7, 4, 23])
// const amplitude = calcTempAmplitude(temperatures)
// console.log(amplitude)

// PROBLEM 2:
// Function should now recveive 2 arrays of temps

// 1. Understanding the problem
// -. With 2 arrays, should we implement functionality twice? No! just merge two arras

// 2. Vreaking up into sub problems
// -. Merge 2 arrays
// const calcTempAmplitudeNew = function(t1, t2) {
//     const temps = t1.concat(t2)
//     console.log(temps)

//     let max = temps[0]
//     let min = temps[0]

//     for (let i = 0; i < temps.length; i++) {
//         const curTemp = temps[i]
//         if(typeof curTemp !== 'number') continue

//         // if the curren value in the array is the max then that value should be the max
//         if (curTemp > max) max = temps[i]
//         if (curTemp < min) min = temps[i]
//     }
//     console.log(max, min)
//     return max - min
// }
// // calcTempAmplitude([3, 7, 4, 23])
// const amplitudeNew = calcTempAmplitudeNew([3, 5, 1] [9, 0, 5])
// console.log(amplitudeNew)

// Debugging with console and breakpoints
// const measureKelvin = function() {
//     const measurement = {
//         type: 'temp',
//         unit: 'celcius',
//         // C Fix
//         // value: Number(prompt('Degree Celcius'))
//         value: 10
//     }
//     //  Find
//     console.log(measurement)
//     console.table(measurement)

//     console.log(measurement.value)
//     console.warn(measurement.value)
//     console.error(measurement.value)

//     const kelvin = measurement.value + 273
//     return kelvin
// }

// // A indeitify the problem
// console.log(measureKelvin())

// Using a debugger
// const calcTempAmplitudeBug = function(t1, t2) {
//     const temps = t1.concat(t2)
//     console.log(temps)

//     let max = 0
//     let min = 0

//     for (let i = 0; i < temps.length; i++) {
//         const curTemp = temps[i]
//         if(typeof curTemp !== 'number') continue

//         debugger
//         // if the curren value in the array is the max then that value should be the max
//         if (curTemp > max) max = temps[i]
//         if (curTemp < min) min = temps[i]
//     }
//     console.log(max, min)
//     return max - min
// }
// // calcTempAmplitude([3, 7, 4, 23])
// const amplitudeBug = calcTempAmplitudeBug([3, 5, 1] [9, 0, 5])

// // Identify the bug
// console.log(amplitudeBug)

// coding challange
// const data1 = [17, 21, 23];
// const data2 = [12, 5, -5, 0, 4];

// console.log(` ... ${data1[0]}C ... ${data1[1]}C ... ${data1[2]}C ...`);

// const printForecast = function (arr) {
//   let str = '';
//   for (let i = 0; i < arr.length; i++) {
//     str = str + `${arr[i]}C in ${i + 1} days ... `;
//   }
//   console.log('...' + str);
// };
// printForecast(data1);

// console.log(this);

// const calcAge = function (birthYear) {
//   console.log(2017 - birthYear);
//   console.log(this);
// };

// calcAge(1991);

// const calcAgeArrow = birthYear => {
//   0;
//   console.log(2017 - birthYear);
//   console.log(this);
// };

// calcAgeArrow(1991);

// const jonas = {
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },
// };

// jonas.calcAge();

// const matilda = {
//   year: 2017,
// };

// matilda.calcAge = jonas.calcAge;
// matilda.calcAge();

// const f = jonas.calcAge;

// arrow function don't get its own this function
// its gets it by its surrounding
// const jonas = {
//   firstName: 'Jonas',
//   year: 1991,
//   calcAge: function () {
//     // console.log(this);
//     console.log(2037 - this.year);

//     // solution 1
//     // const self = this; // self or that
//     // const isMillenial = function () {
//     //   console.log(this);
//     //   // console.log(this.year >= 1981 && this.year <= 1996);
//     //   console.log(self.year >= 1981 && self.year <= 1996);
//     // };

//     // solution 2
//     const isMillenial = () => {
//       console.log(this);
//       // console.log(this.year >= 1981 && this.year <= 1996);
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };
//     isMillenial();
//   },
//   greet: () => {
//     console.log(this);
//     console.log(`Hey ${this.firstName}`);
//   },
// };
// jonas.greet();
// jonas.calcAge();

// arguments keywoard
// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };
// addExpr(2, 5);
// addExpr(2, 5, 8, 9);

// const addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };
// addArrow(2, 5);
// // argument keywoard are not exsist in arrow function

// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(age);
// console.log(oldAge);

// const me = {
//   name: 'Jonas',
//   age: 30,
// };

// const friend = me;
// friend.age = 27;
// console.log('Friend', friend);
// console.log('Me', me);

// primitive type
// let lastName = 'Williams';
// let oldLastName = lastName;
// lastName = 'Davis';
// console.log(lastName, oldLastName);

// // references type
// const jessica = {
//   firstname: 'Jessica',
//   lastName: 'Williams',
//   age: 27,
// };

// const marriedJessica = jessica;
// marriedJessica.lastName = 'Davis';
// console.log('Before Married', jessica);
// console.log('After Married', marriedJessica);

// // marriedJessica = {}

// // copying objects
// const jessica2 = {
//   firstname: 'Jessica',
//   lastName: 'Williams',
//   age: 27,
//   family: ['Alice', 'Bob'],
// };

// const jessicaCopy = Object.assign({}, jessica2);
// jessicaCopy.lastName = 'Davis';

// jessicaCopy.family.push('Mary');
// jessicaCopy.family.push('John');

// console.log('Before Married', jessica2);
// console.log('After Married', jessicaCopy);

// 103. Destructring array
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0,
    close: 24,
  },
};

const restaurants = {
  name: 'Classical Italiano',
  location: 'Pluit Kencana 5 No 12',
  categories: ['chinese', 'thai', 'malaysia'],
  starterMenu: ['capcay', 'crab', 'dimsum'],
  mainMenu: ['Pizza', 'Pasta', 'Meat'],

  // es6 enhance object literals
  openingHours,

  // function experssion
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order Receive ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// property name
// const properties = Object.keys(openingHours);
// console.log(properties);

// let openStr = `We are open on ${properties.length} days: `;

// for (const day of properties) {
//   openStr += `${day}, `;
// }
// console.log(openStr);

// // property values
// const values = Object.values(openingHours);
// console.log(values);

// // Entries that turn object into arrays
// const entries = Object.entries(openingHours);
// // console.log(entries);

// // [key, value]
// for (const [day, { open, close }] of entries) {
//   console.log(`On ${day} we open at ${open} and close at ${close}`);
// }

// if (restaurants.openingHours && restaurants.openingHours.mon)
//   console.log(restaurants.openingHours.mon.open);

// // optional chainning
// console.log(restaurants.openingHours.mon?.open);
// console.log(restaurants.openingHours?.mon?.open);

// Example
// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// for (const day of days) {
//   console.log(day);
//   // if we want to use a varaible name as property name we have to use the bracket notation
//   const open = restaurants.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day}, we open at ${open}`);
// }

// // Methods
// console.log(restaurants.order?.(0, 1) ?? 'Method does not exist');
// console.log(restaurants.orderRisoto?.(0, 1) ?? 'Method does not exist');

// // Arrays
// const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];

// console.log(users[0]?.name ?? 'User arary empty');

// if(users.length > 0) console.log(users[0]?.name) else console.log('users array empty)
// const menu = [...restaurants.starterMenu, ...restaurants.mainMenu];

// // for of loop
// for (const item of menu) console.log(item);

// // get the current index
// for (const [i, el] of menu.entries()) {
//   // console.log(`${item[0] + 1}: ${item[1]}`);
//   console.log(`${i + 1}: ${el}`);
// }

// console.log(...menu.entries());

// const rest1 = {
//   name: 'Capri',
//   // numGuests: 20,
//   numGuests: 0,
// };

// // there's no guest so the value will be undefined
// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Giovanni Rossi',
// };

// OR Assignmeent Operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// assign a varaibles if the current one is currently falsy
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// AND assignment operator
// rest2.owner is truthy value so <ANONYMOUS> get executed with AND OPERATOR
// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>';

// rest1.owner &&= '<ANONYMOUS>';
// rest2.owner &&= '<ANONYMOUS>';

// // nullish assignment operator (null, undefined)
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// console.log(rest1);
// console.log(rest2);

// console.log('----- OR -----');
// // USE ANT data type, return ANY data type, short-circuting
// // it will return the first truelty value of all the operants  or the last value if any of them are faulty
// // in practical situation you can use OR operator to set default value
// console.log(3 || 'Jonas');
// console.log('' || 'Jonas');
// console.log(true || 0);
// console.log(undefined || null);

// console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// restaurants.numGuest = 0;
// const guests1 = restaurants.numGuest ? restaurants.numGuest : 10;
// console.log(guests1);

// // Nullish: null and undefined (Not 0 or '')
// const guestCorrect = restaurants.numGuest ?? 10;
// console.log(guestCorrect);

// const guest2 = restaurants.numGuest || 10;
// console.log(guest2);

// // it will return the faulty truelty value of all the operants  or the last value if any of them are truelty
// // in practical situation you can use AND operator to execute code in the second operant if the first one is true
// console.log('----- AND -----');
// console.log(0 && 'Jonas');
// console.log(7 && 'Jonas');
// console.log('Hello' && 23 && null && 'Jonas');

// if (restaurants.orderPizza) {
//   restaurants.orderPizza('Mushrooms', 'Spinach');
// }

// // if restaurants.orderPizza do not exist then the scond part will be evaluated
// restaurants.orderPizza && restaurants.orderPizza('Mushrooms', 'Spinach');

// // 1) Destructuring

// // SPREAD, because on Right side of =
// // seperated by value
// const arr = [1, 2, ...[3, 4]];

// // REST, because on Left side of =
// // seperated by variables
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, , meat, ...otherFood] = [
//   ...restaurants.mainMenu,
//   ...restaurants.starterMenu,
// ];
// console.log(pizza, meat, otherFood);

// // Objects
// const { sat, ...weekDays } = restaurants.openingHours;
// console.log(weekDays);

// // 2) Functions
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };

// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);

// const x = [23, 5, 7];
// add(...x);

// restaurants.orderPizza('Mushrooms', ' Onions', 'Olives', 'Spinanch');
// restaurants.orderPizaa('Mushrooms');

// spread operator
// const arr = [7, 8, 9];
// const badNewArray = [1, 2, [arr[0]], arr[1], arr[2]];
// console.log(badNewArray);

// const newArr = [1, 2, ...arr];
// console.log(newArr);

// console.log(...newArr);

// const newMenu = [...restaurants.mainMenu, 'Gnocci'];
// console.log(newMenu);

// //  copy array
// const mainMenuCopy = [...restaurants.mainMenu];

// // join 2 arrays
// const menu = [...restaurants.starterMenu, ...restaurants.mainMenu];
// console.log(menu);

// // iterable: arrays, string,m maps, sets. not objects
// const str = 'Darren';
// const letters = [...str, '', 'S.'];
// console.log(letters);

// console.log(...str);

// // Real world example
// const ingredients = [
//   // prompt("Let's make pasta! Ingredients 1?"),
//   // prompt('Ingredients 2?'),
//   // prompt('Ingredients 3?'),
// ];
// console.log(ingredients);

// restaurants.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurants.orderPasta(...ingredients);

// // Objects
// const newRestaurants = { foundIn: 1988, ...restaurants, founder: 'Darren' };
// console.log(newRestaurants);

// const restaurantsCopy = { ...restaurants };
// restaurantsCopy.name = 'Ristorante Roma';
// console.log(restaurantsCopy.name);
// console.log(restaurants.name);

// console.oog(`${...str} Wayn`) // won't work

// restaurants.orderDelivery({
//   time: '23:30',
//   address: 'Vullar del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurants.orderDelivery({
//   address: 'Via del Solle, 21',
//   starterIndex: 1,
// });

// const { name, openingHours, categories } = restaurants;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurants;

// console.log(restaurantName, hours, tags);

// // default value
// const { menu = [], starterMenu: starters = [] } = restaurants;
// console.log(menu, starters);

// // Mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);

// // Nested Objects
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);

// let [main, , secondary] = restaurants.categories;
// console.log(main, secondary);

// const temp = main;
// main = secondary;
// secondary = temp;

// console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// // receive 2 return values from a function
// // console.log(restaurants.order[2, 0])
// const [starter, mainCourse] = restaurants.order(2, 0);
// console.log(starter, mainCourse);

// // nested destrucuting
// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// // console.log(i, j);

// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// // Default values
// const [p = 1, q = 1, r = 1] = [8, 9]
// console.log(p, q, r)
