//* 1) Square each & every element in an array
let arr = [2, 3, 5, 6, 13, 24];
let res = arr.map((val) => {
  return val ** 2;
});
console.log(res); //[ 4, 9, 25, 36, 169, 576 ]

//* 2)

//* 10)
let max = (arr) => {
  arr.sort((a, b) => {
    return b - a;
  });
  console.log("Sorted array is: ", arr); //[ 24, 13, 6, 5, 3, 2 ]
  let found = arr.find((val, ind, arr) => {
    return val < arr[0];
  });
  return found;
};
console.log("Second max value is: " + max(arr)); //13

let min = (arr) => {
  arr.sort((a, b) => {
    return a - b;
  });
  let found = arr.find((val, ind, arr) => {
    return val > arr[0];
  });
  return found;
};
console.log("Second min value is: " + min(arr));