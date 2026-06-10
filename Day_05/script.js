//~ Logical Operator
console.log(true || false);  //true
console.log(true && false);  //false
console.log(false && false); //false
console.log(true || true);   //true

let x = false;    //! operator will convert the value into boolean and then it will return the opposite value
console.log(!x);

//^ Concatination Operator
let s1 = "java";
let s2 = "python";
let s3 = "S1l";

console.log("The concatinated string is: ", s1 + s2 + s3);

//! typeof operator
let s = "javascript";
console.log(typeof s);  //string

let n = 100;
console.log(typeof n);  //number

let b = false;
console.log(typeof b);  //boolean

let o = {};
console.log(typeof o);  //object
console.log(typeof typeof o); //If we will use typeof operator more than one time then it will return string
//& Even though it will return object with single typeof, the value which it returns as object in console it is in the form of string

//? important
console.log(true == "true");   //false
console.log(1 == "1");         //true
console.log(0 == "0");         //true

//! Assignment Operator
var c = 100; 
// c += 10;
// c -= 10;
// c *= 10;
// c /= 10;
// c %= 10;
console.log(c);

// Ternary Operator
let n1 = 80;
let n2 = 90;
let big = n1 > n2 ? n1 : n2;
console.log("The bigger value is: ", big);

let n3 = 45;
let res = n3 % 2 == 0 ? "even" : "odd";
console.log("The number is", res);    

let y1 = 5;
console.log(++y1); //6
let y2 = "Viraj";
console.log(++y2); //NaN

let y3 = "V";
console.log(++y3); //NaN

let st = "5";
let y4 = 4 + st++; //"5" will get converted into number here  
let y5 = 4 + ++st;
console.log(y4); //9
console.log(y5); //11

let my = "re"
let myRes = 4 + my; 
console.log(myRes); //"4re" because when we will add number with string then it will convert the number into string and then it will concatenate the two strings