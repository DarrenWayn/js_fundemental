'use strict';

///////////////////////////////////////
// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.
Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:
1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets
HINT: Use tools from all lectures in this section so far 😉
TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
GOOD LUCK 😀
*/

// const checkDogs = function (dogJulia, dogKate) {
//   const dogJuliaCorrected = dogJulia.slice();
//   dogJuliaCorrected.splice(0, 1);
//   dogJuliaCorrected.splice(-2);

//   // dogJulia.slice(1, 3)
//   console.log(dogJuliaCorrected);

//   const dogs = dogJuliaCorrected.concat(dogKate);
//   console.log(dogs);

//   dogs.forEach(function (dog, i) {
//     if (dog >= 3) {
//       console.log(`Dog number ${i + 1} is an adult and is ${dog} years old`);
//     } else {
//       console.log(`Dog number ${i + 1} is an adult and is still puppy`);
//     }
//   });
// };

// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. 
This time, they want to convert dog ages to human ages and calculate 
the average age of the dogs in their study.
Create a function 'calcAverageHumanAge', which accepts an arrays 
of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: 
if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, 
humanAge = 16 + dogAge * 4.

2. Exclude all dogs that are less than 18 human years old 
(which is the same as keeping dogs that are at least 18 years old)

3. Calculate the average human age of all adult dogs 
(you should already know from other challenges how we calculate averages 😉)

4. Run the function for both test datasets
TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]
GOOD LUCK 😀
*/

// const ageRange = (start, end) => {
//   return Array(end - start + 1)
//     .fill()
//     .map((_, idx) => start + idx);
// };

// const dogAge = ageRange(1, 15);
// const humanAge = ageRange(1, 95);
// // console.log({ dogAge, humanAge });

// const calcAverageHumanAge = (dogAge, humanAge) => {
//   const newAverageDogAge = dogAge / 100;
//   const newAverageHumanAge = humanAge / 100;

//   if ((newAverageDogAge = newAverageDogAge)) return true;
// };

// calcAverageHumanAge({ dogAge, humanAge });

// const calcAverageHumanAge = function(ages) {
//   const humanAges = ages.map(age => (age <= 2 ? 2 + age : 16 + age * 4));
//   const adults = humanAges.filter(age => age >= 18);
//   console.log(humanAges);
//   console.log(adults);

//   // const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;
//   const average = adults.reduce(
//     (acc, age, i, arr) => acc + age / arr.length,
//     0
//   );

//   // 2 3. (2+3)/2 = 2.5 === 2/2+2/3 = 2.5

//   return average;
// };

// const avg1 = calcAverageHumanAge([5, 4, 2, 1, 15, 8, 3]);
// const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
// console.log({ avg1, avg2 });

// Coding Challenge #3

/* 
Rewrite the function from the previous challenge, 
but this time as an arrow function, and use chainning!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]
GOOD LUCK 😀
*/

// const calcAverageHumanAge = ages =>
//   ages
//     .map(age => (age <= 2 ? 2 + age : 16 + age * 4))
//     .filter(age => age >= 18)
//     .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

// const avg1 = calcAverageHumanAge([5, 4, 2, 1, 15, 8, 3]);
// const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
// console.log({ avg1, avg2 });

///////////////////////////////////////
// Coding Challenge #4

/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).
1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. 
Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. 
(The result is in grams of food, and the weight needs to be in kg)

2. Find Sarah's dog and log to the console whether it's eating too much or too little. 
HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, 
and so this one is a bit tricky (on purpose) 🤓

3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') 
and an array with all owners of dogs who eat too little ('ownersEatTooLittle').

4. Log a string to the console for each array created in 3., 
like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"

5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)

6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)

7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)

8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order 
(keep in mind that the portions are inside the array's objects)
HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.
TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];
GOOD LUCK 😀
*/

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// 1.
dogs.forEach(dog => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));
console.log(dogs);

// const caclFood = (weight, curFood) => {
//   const recommendedFood = weight ** 0.75 * 28;
//   return recommendedFood;
// };

// caclFood(it.weight, it.curFood);

// 2.
// const dogSarah = dogs.forEach(dog => dog.owners.find('Sarah'));
const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));

// const dogEatingToMuch = (curFood, recFood) => {
//   if (curFood > recFood)
//     return console.log(
//       `Sarah dogs is eating ${curFood} when it should be eating ${recFood}`
//     );
// };

// dogEatingToMuch(dogSarah.curFood, dogSarah.recFood);

console.log(
  `Sarag dog is eating to ${
    dogSarah.curFood > dogSarah.recFood ? 'much' : 'little'
  }`
);

// 3.
// const ownersEatTooMuch = []
// const ownersEatTooLittle = []

// const findDogOwnersCurrentFood = dogs.find(dog => dog.owners.curFood);
// const findDogOwnersRecFood = dogs.find(dog => dog.owners.recFood);

// if (findDogOwnersCurrentFood > findDogOwnersRecFood) return dog.owners.push()

const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recFood)
  .flatMap(dog => dog.owners)
  .join(' and ');
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recFood)
  .flatMap(dog => dog.owners)
  .join(' and ');
console.log(ownersEatTooLittle);

// 4. Log a string to the console for each array created in 3.,
// like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
console.log(`${ownersEatTooMuch}'s dogs is eating to much `);
console.log(`${ownersEatTooLittle}'s dogs is eating to little `);

// 5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
const exactly = dogs.some(dog => dog.curFood === dog.recFood);
console.log(
  `${
    exactly ? 'there is' : 'there is no'
  } dog eating exactly the amount of food that is recommended`
);

// 6.
const checkEatingOkay = dog =>
  dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;

console.log(dogs.some(checkEatingOkay));

// 7.
console.log(dogs.filter(checkEatingOkay));

const dogsSorted = dogs.slice();
console.log(dogsSorted);
