//* JavaScript Output methods
//! console.log
console.log("This is a printing statement");

//! document.write / writeln
document.write("This is me"); //No space
document.writeln("This is me"); //Add an extra space
document.writeln("This is me");

//! alert()
// alert("This is an alert message");

//! confirm()
// let ret =  confirm("Do you really want to continue ?");
// console.log("Continue: ", ret);

//! prompt()
// let store = prompt("Enter your favourite number here");
// console.log(store);

//* Types of functions
//~ Anonymous Functions
// function () {
//     console.log("Anonymous functions");
// }

//~ Named Functions
function fun() {
  console.log("This is a named function");
}

//~ Function with expression
let p1 = function () {
  console.log("This is a function with expression");
};
console.log(p1);
p1();

function d1(a, b) {
  a();
  console.log(b);
}
d1(function () {
  console.log("This is a callback function");
}, 300);
d1(function f4() {
  console.log("This is a callback function");
}, 300);
d1(() => {
  console.log("This is a callback function");
}, 300);

function getter(a, b) {
  a();
  console.log(b);
}
function getFun() {
  console.log("This is a get function");
}
getter(getFun, 400);

//~ Arrow Function
let ar = () => {
  console.log("We have created this arrow function");
};
ar();

let ar2 = a => {
  console.log("If we have only single parameter, we can skip the parenthesis");
};
ar2();

// Paranthesis are mandatory for 0 and multiple parameters
let ar3 = () =>
  console.log(
    "If we have only single statement to reutrn we can skip the curli braces",
  );
ar3();

let ar4 = (a) => a * 3; //If we want to just return a value, no need of return statement
console.log(ar4(54));
