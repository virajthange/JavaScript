//* Conditional Statements
// if else
let a = 5;
if (a > 5) console.log("It will get executed if condition will be true");
else console.log("It will get executed if condition will be false");

switch (a > 4) {
  case 1:
    console.log("This is the case 1 ");
    break;
  case true: {
    console.log("This is true case");
    console.log("This is second line of case 1");
    break;
  }
  case false: {
    console.log("This is false");
    break;
  }
  default: {
    console.log("This is a default case");
  }
}

//* Looping statements

for (let i = 0; i < 5; i++) console.log("hi"); //{ } are not mandatory if we have only single line of code

let i = 3;
while (i < 6) console.log(i++);