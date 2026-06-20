let arr = [10, 20, 30, 40, 50, 60];
console.log(arr);

//~ includes() -
console.log("Presence of 30 is: ", arr.includes(30, 3)); //It will start searching from index 3 and it will return false because 30 is present at index 2

// let ar = arr.slice(2, 2);  //Will return the empty array
let ar = arr.slice(2, 3);
console.log("ar after slice is: ", ar); //It will return the array with element 30 because it will start from index 2 and it will end at index 3 but it will not include the element at index 3

let ar2 = arr.splice(2, 0, 99, 88); //It will start from index 2 and it will delete 0 elements and it will add 99 and 88 at index 2
console.log("arr after splice is: ", arr);
console.log("Deleted elements are: ", ar2);

arr.reverse();
console.log("arr after reverse is: ", arr);

let x = [39, 43];
let y = [49, 56];
let z = [36, 78];
let ar3 = x.concat(x, z, y);
console.log("ar3 after concat is: ", ar3);

console.log("The index value of element 30 is: ", arr.indexOf(30)); //It will return the index of the first occurrence of 30
console.log("The last index value of element 30 is: ", arr.lastIndexOf(30)); //It will return the index of the last occurrence of 30

arr.fill("js", 2, 4); //It will fill the array with "js" from index 2 to index 4 but it will not include the element at index 4
console.log("arr after fill is: ", arr); //[60, 50, 'js', 'js', 88, 99, 20, 10]

let arr2 = [10, 20, [30, 40, [70, 80]], 50, 60];
let flatRes = arr2.flat(2); //[10, 20, 30, 40, 70, 80, 50, 60] -  It will flatten the array to a depth of 2 and it will return a new array with all the elements of the original array and all the sub-arrays flattened into it
// let flatRes = arr2.flat(1)  //[10, 20, 30, 40, Array(2), 50, 60]
// let flatRes = arr2.flat(Infinity);  //It will flatten the array to any depth and it will return a new array with all the elements of the original array and all the sub-arrays flattened into it
//  [10, 20, 30, 40, 70, 80, 50, 60]
console.log(flatRes);
