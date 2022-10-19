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

const renderLoading = (loading) => (btn.textContent = "Loading...");

// const renderSuccess = (success) =>
//   setTimeout(() => {
//     btn.textContent = "Success";
//     setTimeout(() => (btn.textContent = success), 2000);
//   }, 2000);

const renderSuccess = (success) =>
  setTimeout(
    () =>
      (btn.textContent = "Success") &&
      setTimeout(() => (btn.textContent = success), 2000),
    2000
  );

const renderError = (msg) =>
  countriesContainer.insertAdjacentText("beforeend", msg);
// (countriesContainer.style.opacity = 1);

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

const getJSON = (url, errorMsg = "Something went wrong") =>
  fetch(url).then((res) => {
    if (!res.ok) throw new Error(`${errorMsg} (${res.status})`);
    return res.json();
  });

const getCountryData = (country) => {
  getJSON(`https://restcountries.com/v3.1/name/${country}`, "Country Not Found")
    .then((data) => {
      renderLoading("Loading...");
      renderCountry(data[0]);
      renderSuccess("Here You Go!");

      const neighbour = data[0].borders[0];
      console.log(neighbour);
      // const neighbour = "adkfjhadfkj";
      if (!neighbour) throw new Error("No neighbour found!");

      return getJSON(
        `https://restcountries.com/v3.1/alpha/${neighbour}`,
        "Country Not Found"
      );
    })
    .then((data) => renderCountry(data[0], "neighbour"))
    .catch(
      (err) =>
        console.error(err.nessage) ||
        renderError(`Something went wrong ${err.message}. Try Again!`) ||
        ((btn.textContent = err.message) && console.error(err.nessage))
    )
    .finally(() => (countriesContainer.style.opacity = 1));
};

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

btn.addEventListener("click", () => {
  getCountryData("german");    
});

getCountryData("australia");
// getCountryData("asdjfkakjfhd");

// btn.addEventListener("click", () => {
//   btn.textContent = "Loading...";
//   getCountryData("germany");
//   setTimeout(() => {
//     btn.textContent = "Success";
//     setTimeout(() => (btn.textContent = "Here You Go!"), 3000);
//   }, 3000);
// });
