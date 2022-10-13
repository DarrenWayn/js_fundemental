// 'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

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

const renderCountry = function (data, className = '') {
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
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const getCountryData = country => {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(res => res.json())
    .then(data => {
      renderCountry(data[0]);

      const neighbour = data[0].borders[0];
      if (!neighbour) return;

      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then(res => res.json())
    .then(data => renderCountry(data[0], 'neighbour'));
};

btn.addEventListener('click', () => {
  const loading = btn.addEventListener(
    'load',
    (btn.textContent = 'loading...')
  );
  if (loading) return;

  const success = (btn.textContent = 'success...');
  getCountryData('germany') && success;
});
