let arr = [10, 20, 50, 90];
console.log("Is it an array?: ", Array.isArray(arr));
console.log("Is it an array?: ", Array.isArray({ 43: 43, 2: 42 }));
console.log("Is it an array?: ", Array.isArray(null));
console.log("Is it an array?: ", Array.isArray([]));

//* Methods of Array creation
//^ 1) Literal way
let ar = [3, 5, 99, 22];

//^ 2) new Array()
let ar2 = new Array(4, 53, 2);
console.log(ar2);

//^ 3) Array.of()
let r3 = Array.of(42, 66);
console.log(r3);

//~ *******************************************************************************

//* Array Nonstatic Methods
console.log("The length of array is: ", arr.length);
console.log(arr);

//! push()
let r1 = arr.push(44, 55, 66); //modifies the original array, inserts elements at the end and returns the new length of the array
console.log(r1); // 7
console.log(arr);

//! unshift()
let r2 = arr.unshift(94, 53, 26); //modifies the original array , inserts elements at the beginning and returns the new length of the array
console.log(r2); // 10
console.log(arr);

//! pop()
let poppedElem = arr.pop(); //modifies the original array, removes the last element and returns that element
console.log("Popped element is: ", poppedElem);

//! shift
let poppedFromFront = arr.shift(); //modifies the original array, removes the first element and returns that element
console.log(poppedFromFront);
console.log(arr);

function f1() {
  var x = "me";

  function f2() {
    console.log(x);
  }
  f2();
}
f1();
