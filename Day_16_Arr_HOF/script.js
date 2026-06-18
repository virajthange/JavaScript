// Higher Order Function
let arr = [2, 3, 4, 6, 7, 8];

//* find() - it returns the first element in the array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.
let res1 = arr.find((value, index, arr) => {
  return value > 4;
});
console.log("res1 is: ", res1); //6

//* findIndex() - it returns the index of the first element in the array that satisfies the provided testing function. If no values satisfy the testing function, -1 is returned.
function fun(value, index, arr) {
  return value > 5;
}
console.log(arr.findIndex(fun)); //3

//* findLast() - it returns the last element in the array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.
let res2 = arr.findLast((value, index, arr) => {
  return value > 4;
});
console.log(res2); //8

//* filter() - it creates a new array with all elements that pass the test implemented by the provided function.
let res3 = arr.filter((value, index, arr) => {
  return value < 5;
});
console.log(res3); // [2, 3, 4]

//* some() - it tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value.
let res4 = arr.some((value, index, arr) => {
  return value > 3;
});
console.log(res4); //true

//* every() - it tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
let res5 = arr.every(function (value, index, arr) {
  return value > 1;
});
console.log(res5); //true

//* map() - it creates a new array populated with the results of calling a provided function on every element in the calling array.
console.log("Before", arr); //[2, 3, 4, 6, 7, 8]
let res6 = arr.map((value, index, arr) => {
  console.log(value, index);
  return value * index;
});
console.log(res6); //[0, 3, 8, 18, 28, 40]
console.log("AFter", arr); //[2, 3, 4, 6, 7, 8]  -> Does not change the original array

//* forEach() - it executes a provided function once for each array element.
// arr.forEach((value, index, arr) => {
//   if (arr[index] > 4) arr[index] = arr[index] * 2;
//   else arr[index] = arr[index] + 2;
// });
// console.log(arr);

arr.forEach((val, ind, arr) => {
  arr[ind] = arr[ind] * 5;
});
console.log(arr); //[10, 15, 20, 30, 35, 40]  -> Changes the original array