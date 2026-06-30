//* Synchronous JS
// console.log("hello");
// console.log("hello");
// console.log("hello");
// console.log("hello");
// console.log("hello");
// // alert("This is an alert popup")
// console.log("hello");
// console.log("hello");
// console.log("hello");
// **********************************
let val = "java";
let r1 = setTimeout(
  (a, b, obj) => {
    console.log(a, b);
    obj.name = "harsh";
    console.log(obj);
    console.log("hello");
  },
  2000,
  "js",
  val,
  { name: "Viraj" },
);

let r2 = setInterval(
  (a, b) => {
    console.log(a, b);
    document.writeln("Viraj" + "<br>");
  },
  1000,
  "Welcome",
  58,
);

let r3 = setInterval(
  (a, b) => {
    console.log("This is from r3");
  },
  1000,
  "Welcome",
  58,
);

window.setTimeout(
  function (a) {
    console.log(a);
    clearTimeout(r1);
  },
  5000,
  "setTimeout has been stopped",
);

setTimeout(function () {
  clearInterval(r2);
}, 5000);

setTimeout(function () {
  clearInterval(r3);
}, 10000);
