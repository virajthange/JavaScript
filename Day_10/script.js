//* Lexical Scoping - The scope of a variable is determined by its position in the source code, and nested functions have access to variables declared in their outer scope.
var x = 43;
function f1() {
  // var x = 66;
  function f2() {
    // var x = 90;
    console.log(x); //90   66   43
  }
  f2();
}
f1();

//* Variable Hoistingn - JavaScript hoists variable declarations to the top of their scope, but not their initializations. This means that you can reference a variable before it is declared, but it will be undefined until the declaration is reached.
console.log(a); //undefined
// console.log(b); //Error  -  Cannot access 'b' before initialization
// console.log(c); //Error
var a = 42;
let b = 89;
const c = 75;

//* Function Hoisting  - Function declarations are hoisted to the top of their scope, which means you can call a function before it is defined in the code. However, function expressions and arrow functions are not hoisted in the same way, and they will not be available until they are defined.
f5(); //Will run smoothly
function f5() {
  console.log("This is a function");
}

// console.log(ar()); //undefined - doesn't work for arrow function, it acts as variable hoisting and not function hoisting, so it will be undefined at the time of calling

// ar()        //TypeError: ar is not a function
var ar = () => {
  console.log("This is an arrow function");
};
