//* this keyword

// "use strict";
console.log(this); // Window object in browser

function showThis() {
  console.log("Inside function ", this); // Window object in non-strict mode, undefined in strict mode
}
showThis();

const obj = {
  name: "Alice",
  greet: function () {
    console.log(this); // current object (obj)
    console.log(this.name); // 'Alice'
  },
};
obj.greet();

const anotherObj = {
  name: "Bob",
};
anotherObj.greet = obj.greet;
anotherObj.greet(); // current object (anotherObj), 'Bob'

obj.greet = function () {
  console.log("Changed greet function");
};
console.log("After changing greet:");
obj.greet(); //Changed greet function
anotherObj.greet(); //value of this

//* Constructor function example
function Person(name) {
  this.name = name;
  console.log(this); // newly created object
}
const person1 = new Person("Charlie");
const person2 = new Person("Dave");
console.log("Person1 is: ", person1);
console.log("Person2 is: ", person2);

//* Arrow function example
const arrowObj = {
  // Arrow functions do not have their own 'this',  it always takes 'this' from the surrounding lexical context ->from parent scope (here, the global scope)
  name: "Eve",
  greet() {
    console.log(this); // current object (arrowObj)
  },
  arrowGreet: () => {
    console.log(this); // Window object (lexical this)
  },
};
arrowObj.greet(); //arrowObj
arrowObj.arrowGreet(); // Window object

//* Event listener example
// document.body.addEventListener('click', function() {
//     console.log(this);  // the element that received the event (document.body)
// });
document.body.addEventListener("click", () => {
  console.log(this); // Window object
});

console.log("Call, apply & bind");
//* call(), apply(), bind() --> used to explicitly set the value of 'this' for a function, applicable to regular functions, not arrow functions.
function gr(a, b) {
  console.log(this);
  console.log(this.name);
  console.log(a);
  console.log(b);
}
// gr();

let obj2 = {
  name: "Viraj",
  age: 22,
};
// gr.call(obj2, 33, "Student") -> call() method calls a function with a given 'this' value and arguments provided individually.
// gr.apply(obj2, [67, "st"]);  -> apply() method calls a function with a given 'this' value and arguments provided as an array (or an array-like object).

// let boundFun = gr.bind(obj2);
// boundFun(48, 'hi')

let boundFun = gr.bind(obj2, 89, "son");
boundFun();

//* Summary
// 1. In the global context, 'this' refers to the global object (Window in browsers).
// 2. In regular functions, 'this' refers to the global object in non-strict mode and undefined in strict mode.
// 3. In object methods, 'this' refers to the object that called the method.
// 4. In constructor functions, 'this' refers to the newly created object.
// 5. In arrow functions, 'this' is lexically bound and takes the value from the surrounding context.
// 6. In event listeners, 'this' refers to the element that received the event (unless an arrow function is used).

console.log(isNaN("str")); // true
console.log(isNaN(NaN)); // true
console.log(isNaN(true)); // false
console.log(isNaN("100")); // false

console.log(Number.isNaN(45)); // false
console.log(Number.isNaN("200")); // false
console.log(Number.isNaN("str")); // false
console.log(Number.isNaN(NaN)); // true