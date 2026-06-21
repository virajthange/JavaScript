let red = [4, 52, 66, 2, 8];
let redRes = red.reduce((pv, cv) => {
  return pv + cv;
}, 4);
console.log(redRes); // 136

//* 12)
//* 13) Sort method
var ar3 = [89, 53, 66, 26, 90, 44];
// let res3 = ar3.sort((a,b) => {
ar3.sort((a, b) => {
  //It modifies the original array
  return b - a; //a - b => ascening order  & b - a => descending order
});
console.log(ar3);

//* String Methods
let str = "javascript";
console.log(str.slice(3, 5)); //as
console.log(str.substring(3, 6)); //asc
console.log(str.includes("ava")); //true
console.log(str.indexOf("ava")); //1
console.log(str.lastIndexOf("ava")); //1
console.log(str.charAt(6)); //r
console.log(str.charCodeAt(7)); //105
console.log(str.replace("a", "v")); //jvvascript
console.log(str.replaceAll("a", "v")); //jvvvscript

let str2 = "          Hello           World           ";
console.log(str2.trim()); //Hello           World
console.log(str2.trimStart()); //Hello           World
console.log(str2.trimEnd()); //          Hello           World
console.log(str.toLowerCase()); //javascript
console.log(str.toUpperCase()); //JAVASCRIPT

console.log(str.split("")); // ['j', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't']
console.log(str.split(" ")); //['javascript']
console.log(str.split("a")); //['j', 'v', 'script']

let arr = [42, 4, 5, 11, 63];
let st = arr.join(""); //parameter is optional, if not provided it will join the array elements with a comma by default
console.log(arr.join()); //42,4,5,11,63 - it will join the array elements with a comma by default
console.log(typeof st, st); //string 42451163
