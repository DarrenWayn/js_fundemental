"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

const renderCountry = function (data, className = "") {
  const { name, region, languages, currencies, population, flags } = data;
  const html = `
    <article class="country ${className}">
      <img class="country__img" src="${flags.png}" />
      <div class="country__data">
        <h3 class="country__name">${name.common}</h3>
        <h4 class="country__region">${region}</h4>
        <p class="country__row"><span>👫</span>${(
          +population / 1000000
        ).toFixed(1)} people</p>
        <p class="country__row"><span>🗣️</span>${languages.por}</p>
        <p class="country__row"><span>💰</span>${currencies}</p>
      </div>
    </article>
  `;
  countriesContainer.insertAdjacentHTML("beforeend", html);
  // countriesContainer.style.opacity = 1;
};

// const renderLoading = (loading) => (btn.textContent = "Loading...");

// const renderSuccess = (success) =>
//   setTimeout(() => {
//     btn.textContent = "Success";
//     setTimeout(() => (btn.textContent = success), 2000);
//   }, 2000);

// const renderSuccess = (success) =>
//   setTimeout(
//     () =>
//       (btn.textContent = "Success") &&
//       setTimeout(() => (btn.textContent = success), 2000),
//     2000
//   );

// const renderError = (msg) =>
//   countriesContainer.insertAdjacentText("beforeend", msg);
// countriesContainer.style.opacity = 1;

// const renderError = (msg) =>
//   countriesContainer.insertAdjacentText("beforeend", msg) ||
//   (countriesContainer.style.opacity = 1);

// const renderCountry = function (data, className = '') {
//   const { name, region, languages, currencies, population, flags } = data;
//   const html = `
//     <article class="country ${className}">
//       <img class="country__img" src="${flags.png}" />
//       <div class="country__data">
//         <h3 class="country__name">${name.common}</h3>
//         <h4 class="country__region">${region}</h4>
//         <p class="country__row"><span>👫</span>${(
//           +population / 1000000
//         ).toFixed(1)} people</p>
//         <p class="country__row"><span>🗣️</span>${languages.por}</p>
//         <p class="country__row"><span>💰</span>${currencies}</p>
//       </div>
//     </article>
//   `;
//   countriesContainer.insertAdjacentHTML('beforeend', html);
//   countriesContainer.style.opacity = 1;
// };

// const getCountryAndNeighbour = function (country) {
//   // AJAX Call country
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const [data] = JSON.parse(this.responseText);

//     // get country one
//     renderCountry(data);

//     // get neughbour country
//     const [neighbour] = data.borders;
//     console.log(neighbour);
//     if (!neighbour) return;

//     const requestNeighbour = new XMLHttpRequest();
//     requestNeighbour.open(
//       'GET',
//       `https://restcountries.com/v3.1/alpha/${neighbour}`
//     );
//     requestNeighbour.send();

//     requestNeighbour.addEventListener('load', function () {
//       const [dataNeighbour] = JSON.parse(this.responseText);
//       console.log(dataNeighbour);
//       renderCountry(dataNeighbour, 'neighbour');
//     });
//   });
// };

// getCountryAndNeighbour('united');

// const req = fetch('https://restcountries.com/v3.1/name/portugal');
// console.log(req);

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//     });
// };

// getCountryData('portugal');

// const getCountryData = (country) => {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(
//       (res) => res.json(),
//       (err) => alert(err)
//     )
//     .then((data) => {
//       renderCountry(data[0]);

//       const neighbour = data[0].borders[0];
//       if (!neighbour) return;

//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//     })
//     .then(
//       (res) => res.json(),
//       (err) => alert(err)
//     )
//     .then((data) => renderCountry(data[0], "neighbour"));
// };

// const getJSON = (url, errorMsg = "Something went wrong") =>
//   fetch(url).then((res) => {
//     if (!res.ok) throw new Error(`${errorMsg} (${res.status})`);
//     return res.json();
//   });

// const getCountryData = (country) => {
//   getJSON(`https://restcountries.com/v3.1/name/${country}`, "Country Not Found")
//     .then((data) => {
//       renderLoading("Loading...");
//       renderCountry(data[0]);
//       renderSuccess("Here You Go!");

//       const neighbour = data[0].borders[0];
//       console.log(neighbour);
//       // const neighbour = "adkfjhadfkj";
//       if (!neighbour) throw new Error("No neighbour found!");

//       return getJSON(
//         `https://restcountries.com/v3.1/alpha/${neighbour}`,
//         "Country Not Found"
//       );
//     })
//     .then((data) => renderCountry(data[0], "neighbour"))
//     .catch(
//       (err) =>
//         console.error(err.nessage) ||
//         renderError(`Something went wrong ${err.message}. Try Again!`) ||
//         ((btn.textContent = err.message) && console.error(err.nessage))
//     )
//     .finally(() => (countriesContainer.style.opacity = 1));
// };

// const getCountryData = (country) => {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then((res) => {
//       console.log(res);
//       if (!res.ok) throw new Error(`Country Not Found (${res.status})`);

//       return res.json();
//     })
//     .then((data) => {
//       renderLoading("Loading...");
//       renderCountry(data[0]);
//       renderSuccess("Here You Go!");

//       // const neighbour = data[0].borders[0];
//       const neighbour = "adkfjhadfkj";
//       if (!neighbour) return;
//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//     })
//     .then((res) => {
//       console.log(res);
//       if (!res.ok) throw new Error(`Country Not Found (${res.status})`);

//       return res.json();
//     })
//     .then((data) => renderCountry(data[0], "neighbour"))
//     .catch(
//       (err) =>
//         renderError(`Something went wrong ${err}. Try Again!`) ||
//         ((btn.textContent = err.message) && console.error(err.nessage))
//     )
//     .finally(() => (countriesContainer.style.opacity = 1));
// };

// btn.addEventListener("click", () => {
//   getCountryData("german");
// });

// getCountryData("australia");
// getCountryData("asdjfkakjfhd");

// btn.addEventListener("click", () => {
//   btn.textContent = "Loading...";
//   getCountryData("germany");
//   setTimeout(() => {
//     btn.textContent = "Success";
//     setTimeout(() => (btn.textContent = "Here You Go!"), 3000);
//   }, 3000);
// });

///////////////////////////////////////
// Coding Challenge #1

/* 
In this challenge you will build a function 'whereAmI' which renders a country ONLY based on GPS coordinates. For that, you will use a second API to geocode coordinates.
Here are your tasks:
PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding: https://geocode.xyz/api.
The AJAX call will be done to a URL with this format: https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and promises to get the data. Do NOT use the getJSON function we created, that is cheating 😉
3. Once you have the data, take a look at it in the console to see all the attributes that you recieved about the provided location. Then, using this data, log a messsage like this to the console: 'You are in Berlin, Germany'
4. Chain a .catch method to the end of the promise chain and log errors to the console
5. This API allows you to make only 3 requests per second. If you reload fast, you will get this error with code 403. This is an error with the request. Remember, fetch() does NOT reject the promise in this case. So create an error to reject the promise yourself, with a meaningful error message.
PART 2
6. Now it's time to use the received data to render a country. So take the relevant attribute from the geocoding API result, and plug it into the countries API that we have been using.
7. Render the country and catch any errors, just like we have done in the last lecture (you can even copy this code, no need to type the same code)
TEST COORDINATES 1: 52.508, 13.381 (Latitude, Longitude)
TEST COORDINATES 2: 19.037, 72.873
TEST COORDINATES 2: -33.933, 18.474
GOOD LUCK 😀
*/

// const API_KEY = "149835439199698144755x48312";
// let lat = 52.508;
// let long = 13.381;

// const whereAmI = (lat, long) => {
//   fetch(`https://geocode.xyz/${lat},${long}?geoit=json`)
//     .then((res) => {
//       if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
//       return res.json();
//     })
//     .then((data) => {
//       console.log(data);
//       console.log(`You are in ${data.city}, ${data.country}`);

//       return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
//     })
//     .then((res) => {
//       if (!res.ok) throw new Error(`Country Not Found (${res.status})`);
//       return res.json();
//     })
//     .then((data) => {
//       const [country] = data;
//       return renderCountry(country);
//     })
//     .catch((err) => console.error(err.message) && err.message)
//     .finally(() => (countriesContainer.style.opacity = 1));
// };

// const getGeoCode = (request) => {
//   fetch(`https://geocode.xyz/[${request}]&auth=${API_KEY}`)
//     .then((res) => res.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err.message) && err.message);
// };
// getGeoCode("indonesia");

// btn.addEventListener("click", () => {
//   whereAmI(lat, long);
// });

// whereAmI(52.508, 13.381);
// whereAmI(19.037, 72.873);
// whereAmI(-33.933, 18.474);

// console.log("Test start");
// setTimeout(() => console.log(`0 sec timer`, 0));
// Promise.resolve("Resolved promise 1").then((res) => console.log(res));

// Promise.resolve("Resolved promise 2").then((res) => {
//   for (let i = 0; i < 10000000; i++) {}
//   console.log(res);
// });

// console.log("Test end");

// const lotteryPromise = new Promise(function (resolved, reject) {
//   console.log("Lottery draw is happening 😛");
//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       resolved("You WIN 😍");
//     } else {
//       reject(new Error("You Lose your money 🥲"));
//     }
//   }, 3000);
// })
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err));

// lotteryPromise
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err));

// Promisifying setTimeout
// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// wait(1)
//   .then(() => {
//     console.log(`1 second passed`);
//     return wait(1);
//   })
//   .then(() => {
//     console.log(`2 second passed`);
//     return wait(1);
//   })
//   .then(() => {
//     console.log(`3 second passed`);
//     return wait(1);
//   })
//   .then(() => {
//     console.log(`4 second passed`);
//     return wait(1);
//   });

// setTimeout(() => {
//   console.log('1 second passed')
//   setTimeout(() => {
//     console.log('2 second passed')
//     setTimeout(() => {
//       console.log('3 second passed')
//       setTimeout(() => {
//         console.log('4 second passed')
//       }, 1000)
//     }, 1000)
//   }, 1000)
// }, 1000)

// Promise.resolve("abc").then((x) => console.log(x));
// Promise.reject(new Error("Problem")).catch((x) => console.error(x));
// console.log("Getting position");

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     // navigator.geolocation.getCurrentPosition(
//     //   (position) => resolve(position),
//     //   (error) => reject(new Error(error)) && console.error(error)
//     // );
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// getPosition().then((pos) => console.log(pos));

// const getPosition = function () {
//   return new Promise(function (resolve, reject) {
//     // navigator.geolocation.getCurrentPosition(
//     //   position => resolve(position),
//     //   err => reject(err)
//     // );
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };

// const whereAmI = () => {
//   getPosition()
//     .then((position) => {
//       const { latitude: lat, longitude: lng } = position.coords;
//       return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//     })
//     .then((res) => {
//       if (!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
//       return res.json();
//     })
//     .then((data) => {
//       console.log(data);
//       console.log(`You are in ${data.city}, ${data.country}`);

//       return fetch(`https://restcountries.com/v3.1/name/${data.country}`);
//     })
//     .then((res) => {
//       if (!res.ok) throw new Error(`Country Not Found (${res.status})`);
//       return res.json();
//     })
//     .then((data) => {
//       const [country] = data;
//       return renderCountry(country);
//     })
//     .catch((err) => console.error(err.message) && err.message)
//     .finally(() => (countriesContainer.style.opacity = 1));
// };

// btn.addEventListener("click", whereAmI);

///////////////////////////////////////
// Coding Challenge #2

/* 
Build the image loading functionality that I just showed you on the screen.
Tasks are not super-descriptive this time, so that you can figure out some stuff on your own. Pretend you're working on your own 😉
PART 1
1. Create a function 'createImage' which receives imgPath as an input. This function returns a promise which creates a new image (use document.createElement('img')) and sets the .src attribute to the provided image path. When the image is done loading, append it to the DOM element with the 'images' class, and resolve the promise. The fulfilled value should be the image element itself. In case there is an error loading the image ('error' event), reject the promise.
If this part is too tricky for you, just watch the first part of the solution.
PART 2
2. Comsume the promise using .then and also add an error handler;
3. After the image has loaded, pause execution for 2 seconds using the wait function we created earlier;
4. After the 2 seconds have passed, hide the current image (set display to 'none'), and load a second image (HINT: Use the image element returned by the createImage promise to hide the current image. You will need a global variable for that 😉);
5. After the second image has loaded, pause execution for 2 seconds again;
6. After the 2 seconds have passed, hide the current image.
TEST DATA: Images in the img folder. Test the error handler by passing a wrong image path. Set the network speed to 'Fast 3G' in the dev tools Network tab, otherwise images load too fast.
GOOD LUCK 😀
*/
// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// const imgContainer = document.querySelector(".images");

// const createImage = function (imgPath) {
//   return new Promise(function (resolve, reject) {
//     const img = document.createElement("img");
//     img.src = imgPath;

//     img.addEventListener("load", function () {
//       imgContainer.append(img);
//       resolve(img);
//     });
//     img.addEventListener("error", function () {
//       reject(new Error("Image not found"));
//     });
//   });
// };

// let currentImg;

// createImage("img/img-1.jpg")
//   .then((img) => {
//     currentImg = img;
//     console.log("Image 1 loaded");
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = "none";
//   })
//   .catch((err) => console.error(err));

const wait = (seconds) =>
  new Promise((resolve) => {
    setTimeout(resolve, seconds * 1000);
  });

const imgContainer = document.querySelector(".images");

const createImage = (imgPath) => {
  const img = document.createElement("img");
  img.src = imgPath;

  return new Promise((resolve, reject) => {
    img.addEventListener(
      "load",
      () => imgContainer.append(img) || resolve(img)
    );
    img.addEventListener("error", () =>
      reject(new Error(console.log("Image not found")))
    );
  });
};

let currentImg;

createImage("img/img-1.jpg")
  .then((img) => {
    currentImg = img;
    console.log("Image 1 loaded");
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = "none";
    return createImage("img/img-2.jpg");
  })
  .then((img) => {
    currentImg = img;
    console.log("Image 2 loaded");
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = "none";
    return createImage("img/img-3.jpg");
  })
  .then((img) => {
    currentImg = img;
    console.log("Image 3 loaded");
    return wait(2);
  })
  .catch((err) => console.error(err));

// SOAL PERTAMA
// Terdapat string "NEGIE1", silahkan reverse alphabet nya dengan angka tetap diakhir kata Hasil = "EIGEN1"

// let str = "NEGIE1";
// const reverseStr = (str) => [...str].reverse().join("");
// console.log(reverseStr(str));

// SOAL KEDUA
// Diberikan contoh sebuah kalimat, silahkan cari kata terpanjang dari kalimat tersebut,
// jika ada kata dengan panjang yang sama silahkan ambil salah satu

// const sentence = "Saya sangat senang mengerjakan soal algoritma";
// const longest = (sentence) => {
//   // Split the string into array
//   str = sentence.split(" ");
//   // Get the index of largest item of the array
//   let index = str.reduce((accumulator, current, i) => {
//     if (current.length > str[accumulator].length) {
//       return i;
//     }
//     return accumulator;
//   }, 0);

//   return str[index];
// };

// console.log(longest(sentence));

// SOAL KETIGA
// Terdapat dua buah array yaitu array INPUT dan array QUERY,
// silahkan tentukan berapa kali kata dalam QUERY terdapat pada arra
// INPUT = ["xc", "dz", "bbb", "dz"];
// QUERY = ["bbb", "ac", "dz"];

// const sameStr = (input, query) => {
//   input.forEach((duplicates) => {
//     let curr = query.indexOf(duplicates);
//     if (curr !== -1) {
//       return console.log(duplicates);
//     }
//   });
// };
// console.log(sameStr(INPUT, QUERY));

// SOAL KEEMPAT
// Silahkan cari hasil dari pengurangan dari jumlah diagonal sebuah matrik NxN Contoh:

// Matrix = [
//   [1, 2, 0],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// const diagonalDifference = (matrix) => {
//   let firstSum = 0,
//     secondSum = 0;
//   for (let row = 0; row < matrix.length; row++) {
//     firstSum += matrix[row][row];
//     secondSum += matrix[row][matrix.length - row - 1];
//   }
//   console.log(firstSum + " " + secondSum);
//   return firstSum - secondSum;
// };
// console.log(diagonalDifference(Matrix));
