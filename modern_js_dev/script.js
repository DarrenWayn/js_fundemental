// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// console.log('Importing modules');
// // addToCart('bread', 5);
// console.log(price, tq);

// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);

// import add, { cart } from './shoppingCart.js';
//
// add('pizza', 2);
// add('bread', 3);
// add('nasi goreng', 1);
//
// console.log(cart);

// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);

// const getLastPost = async function () {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//   const data = await res.json();
//   // console.log(data);
//
//   return {
//     title: data.at(-1).title,
//     text: data.at(-1).body,
//   };
// };
//
// const lastPost = getLastPost();
// lastPost.then(last => console.log(last));

// const lastPost = await getLastPost();
// console.log(lastPost);

const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to cart`);
  };
  const orderStock = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
    shippingCost,
  };
})();

ShoppingCart2.addToCart('apple', 2);
ShoppingCart2.addToCart('pizza', 3);

console.log(ShoppingCart2);
console.log(ShoppingCart2.shippingCost);
