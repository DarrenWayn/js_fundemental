// 'use strict';

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

console.log("Test start");
