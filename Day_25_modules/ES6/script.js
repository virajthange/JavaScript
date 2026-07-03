export let a = 50;

function print() {
  console.log("This is print statement");
}

let obj1 = {
  name: "Rohit",
  age: 30,
};

// export default print;
export default { obj1, print };
// Only one default export is allowed in a file. So, if you want to export multiple items, you can use named exports. In this case, we are exporting 'a' and 'print' as named exports, and 'obj1' as the default export.
