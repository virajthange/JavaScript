"use strict";
// a = 12            //Will work without "use strict" - script.js:2 Uncaught ReferenceError: a is not defined
var a = 23;
console.log("a value is: ", a);

//! ***********
// In strict mode duplicate variables are not allowed
// function demo(a, b, b) {  //As we are not passing any third value, then it will take undefined for b
//     console.log(a);
//     console.log('b is: ', b);   //undefined
// }
// demo(43,64);
//! ***********

//~ ***********
// function demo(a, b, b) {      //As we are passing third value, then it will update the value of b in non strict mode
//     console.log(a);
//     console.log(b);       //22
// }
// demo(43,64, 22);
//~ ***********

// Keywords are not allowed as an identifier in strict mode
// var let = 43;
// console.log('let value is: ', let);      //Uncaught SyntaxError: Unexpected strict mode reserved word

//* IIFE function
// Will get executed as the file executes, calling this function is possible only for one time , memory will not get allocated
(function () {
  let r = 43;
  console.log("r is: ", r);
  console.log("Hey there, I am Viraj");
})();
//* ************

//& Pure Functions
// Function which gives same output for same inputs
function sum(a, b) {
  return a + b;
}
console.log(sum(43, 98)); //141
console.log(sum(43, 98)); //141
console.log(sum(43, 98)); //141
//& *************

//! Impure Functions
let i = 1;
function num(a, b) {
  i++;
  return a + b + i;
}
console.log(num(4, 4));
console.log(num(4, 4));
console.log(num(4, 4));
console.log(num(4, 4));
//! ************

//~ Currying Function
// function add(a, b, c) {
//   return a + b + c;
// }
// let rs = add(4, 3, 2);

function add(a) {
  console.log(a);
  return function (b) {
    console.log(b);
    return function (c) {
      console.log(c);
      return a + b + c;
    };
  };
}
let res1 = add(2);
// console.log(res1);
let res2 = res1(3);
// console.log(res2);
let res3 = res2(5);
console.log("res3 is: ", res3);
//~ ****************

//todo Argument keyword
function fun(a) {
  //arguments is an array like object which contains all the arguments passed to the function
  console.log("a is: ", a);
  console.log(arguments[0]);
  console.log(arguments); //acts as an object
  console.log(arguments[3]);
}
fun(43, 66, 3, "Hey", { name: "Viraj" });
//todo *****************
