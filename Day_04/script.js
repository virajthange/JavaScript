// Variable

// var = 1a
var a4681693143 = 900;
console.log(a4681693143);

const $ = "str";   //! $ not recommended to use it but it is allowed
const _ = "java";   //! _ is allowed as a variable declaration name but it is not recommended to use it
console.log($);
console.log(_);

// var for = 90        //'for' is not allowed as a variable declaration name

// var first Name = "xyz";          //!space is not allowed
var firstName = "xyz";

// Operators in js
// Arithmetic
console.log(10 + 20);  // 30
console.log(50 - 20);  // 30
console.log(100 * 20); // 2000
console.log(100 / 20); // 5
console.log(100 % 20); // 0
console.log(105 % 10); // 5

let a = 10;
let b = a++;
console.log(a, b); //11 , 10

console.log(--a);   //10
console.log(a--);   //10
console.log(a);    //9

// Comparison
console.log(20 == 20);    //true
console.log(20 == "20");    //* true because of type coercion, it converts the string "20" to number 20 before comparison

console.log(20 === 20);   //true
console.log(20 === "20");   //^ false because of strict equality, it does not perform type coercion

console.log(10 >= 20);    //false

console.log(10 != 20);    //true
console.log(10 != "20");   //false
console.log(10 !== 20);    //true
console.log(10 !== "20");  //true

console.log("true" == 1);  //true
console.log(true == 1);    //true
console.log(false == 1);   //false
console.log("false" == 1); //false
console.log(false == "false"); //*doesn't get converted in case of boolean

console.log(null == undefined); //true
console.log(null === undefined); //false
console.log(NaN == null); //false
console.log(+1);     //1
console.log(true);  //true
console.log(+true);  //1
console.log(+true); //1
console.log(+false); //0
console.log(+""); //0
console.log(+"abc"); //NaN