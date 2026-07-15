//* Local Storage and Session Storage
// localStorage is similar to sessionStorage, except that while localStorage data has no expiration time, sessionStorage data gets cleared when the page session ends — that is, when the page is closed
// localStorage returns a different object than localStorage for the corresponding site loaded over HTTPS , i.e, different object for http and https

console.log(localStorage);
console.log(sessionStorage);

let address = {
  city: "Karjat",
  state: "Maharashtra",
};
localStorage.setItem("name", "John Doe");
localStorage.setItem("add", JSON.stringify(address));
sessionStorage.setItem("sessionName", "Jane Doe");

console.log(localStorage.getItem("name"));
let addr = JSON.parse(localStorage.getItem("add"));
console.log(addr);

console.log(sessionStorage.getItem("sessionName"));

let arr = `["item1", "item2", "item3"]`;
localStorage.setItem("arr", arr);

let getArr = JSON.parse(localStorage.getItem("arr"));
console.log(getArr);       // ['item1', 'item2', 'item3']
console.log(localStorage.getItem("arr").split(", "));  
console.log(getArr);

localStorage.removeItem("arr");
localStorage.clear()
//* Date
let date = new Date();
console.log(date);

//* Math
console.log(Math.max());
console.log(Math.min());
console.log(Math.round(5.5));
console.log(Math.round(5.3));

console.log(Math.floor(3.5));
console.log(Math.floor(3.4));

console.log(Math.ceil(2.3));
console.log(Math.ceil(2.7));
console.log(Math.ceil(2.5));

console.log(Math.trunc(2010221.556));  //2010221

console.log("cube root of 27 is: ", Math.cbrt(27));  //3

console.log("Sqrt of 25 is: ", Math.sqrt(25));   //5

console.log(Math.pow(5, 2));  //25

console.log(Math.random());
console.log(Math.trunc(Math.random() * (9999 - 1000) - 1000));
