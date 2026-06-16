//& Window Object
console.log(window);
console.log(this);
console.log(window === this); //true

// window.alert("This is a alert dialogue")      //will work with window reference also, or without also

var a = 43; //Members declared with var keyword becomes part of window object
let b = 743; //Doesn't become part of window object

function f1() {
  var a = 78;
  console.log(a); //78
  console.log(window.a); //43
  console.log(this.a); //43
}
f1();
//& *******************

//~ Array
var arr = [
  98,
  10,
  "str",
  [10, 20],
  10,
  true,
  () => {
    console.log("This is a function");
  },
];
console.log(arr);
console.log(arr[0]);
console.log(arr.length);
arr[6]();

//~ *******************
