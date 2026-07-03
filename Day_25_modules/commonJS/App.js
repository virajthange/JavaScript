let x = require("./script.js");
console.log(x);      //{std: { name: 'Viraj' },sum: [Function: sum],multiply: [Function: multiply]}

let { std:st } = x;
console.log(st);
console.log(x.sum(10, 20));
console.log(x.multiply(10, 20));




// console.log(a); //error: a is not defined
//because a is not exported from script.js  
//module.exports = {std,sum}  //correct way to export multiple items
//module.exports = std  //correct way to export single item
//exports.std = std  //correct way to export single item
//exports.sum = sum  //correct way to export multiple items 
//exports.multiply = multiply  //correct way to export multiple items
//module.exports.sum = sum  //correct way to export single item
//module.exports.multiply = multiply  //correct way to export multiple items    