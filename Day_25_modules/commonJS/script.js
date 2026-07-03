let a = 40;

function sum(a, b) {
  return a + b;
}
function multiply(a, b) {
  return a * b;
}
let arr = [48, 55, 7, 73, 88];

let std = {
  name: "Viraj",
};

module.exports = { std, sum, multiply }; //correct way to export multiple items
//module.exports = std  //correct way to export single item
//exports.std = std  //correct way to export single item
