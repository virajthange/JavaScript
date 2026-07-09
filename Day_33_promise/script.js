//* Promise in js

let p1 = new Promise((res, rej) => {
  // let t = false;
  window.setTimeout(function () {
    res(["js", "java"]);
    // console.log("The promise has been fulfilled");
  }, 1000);

  window.setTimeout(function () {
    rej("Reason to reject");
    console.log("The promise has not been fulfilled");
  }, 2000);

  //if rej will be executed first because it has a shorter timeout than the resolve function. So, the promise will be rejected after 2 seconds, and the catch block will be executed.

  // if (t){
  // res(["js"]);
  // console.log("The promise has been fulfilled");
  // }
  // else{
  //   console.log("The promise has not been fulfilled");
  //   rej("Reason to fail promise")
  // }
});

console.log(p1);

// .then returns a new promise
// let thenprom = p1.then((data) => {
p1.then((data) => {
  // This will be executed if the promise is fulfilled
  console.log(data);
});
// console.log('Promise returned by .then', thenprom);

p1.catch((reason) => {
  // This will be executed if the promise is rejected
  console.log(reason);
});

p1.finally(() => {
  console.log("This finally block will get executed for both the cases");
});

// Short syntax
// p1.then((data) => {
//   console.log(data);
// })
//   .catch((reason) => {
//     console.log(reason);
//   })
//   .finally(() => {
//     console.log("This finally block will get executed for both the cases");
//   });