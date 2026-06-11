//~ Parameters and arguments

function fn(a, b, c = 400) {
  //parameters
  console.log(c); //400
  console.log(a); //300
  console.log(b); //200
  // return (a, b, c); //c will be returned
  return (a, b, c);
}

let va = fn(300, 200); //arguments
console.log(`The value returned by fn is : ` + va);

//* Explicit Typecasting
let r1 = parseInt("43"); //convert string to number
let r12 = parseInt("43.3"); //convert string to number but it will not consider the decimal part and it will return only 43
let r2 = parseInt("str"); // NaN -> Will not be able to perform the calculation
console.log(r2);
console.log(r1);
console.log(typeof r1); //number
console.log(r12); //43
console.log(typeof r12); //number

let x = "10n431jfoa";
console.log("Value of 10n431jfoa after parseInt is: " + parseInt(x)); //10 -> parseInt will consider the number from the starting of the string and it will ignore the rest of the string and it will return 10
console.log("parseInt of true is : " + parseInt(true)); //NaN -> parseInt is only applicable for string not boolean value

console.log("Value of 10n431jfoa after parseFloat is: " + parseFloat(x)); //10 -> parseFloat will consider the number from the starting of the string and it will ignore the rest of the string and it will return 10
console.log("parseFloat of true is : " + parseFloat(true)); //NaN -> parseFloat is only applicable for string not boolean value
let v = parseFloat("43.3");
console.log(v, typeof v);

let k = 43;
let s = k.toString(); //will not change directly the value of k but it will return the string value of k
let s2 = (89).toString();
console.log(s, typeof s); //43 string
console.log(s2, typeof s2); //89 string
let s3 = true.toString(); //true string
console.log("Value of true after toString is : " + s3, typeof s3); //true string

console.log(typeof 43); //number