//* Map
let myFun = () => {};

let m1 = new Map();
m1.set(() => {}, "arrFn");
m1.set(100, "number");
m1.set(100, "number2"); //will get updated
m1.set("100", "number3");
m1.set(true, "boolean value");
m1.set(function () {}, "fun");
m1.set(myFun, "Value associated with myFun");

console.log(m1.get(true));
console.log(m1.get(100));
console.log(m1.get("100"));

console.log(m1.get(() => {})); //undefined->   Non primitive compares address
// Because the address of this function is different
console.log(m1.get(function () {})); //undefined->   Non primitive compares address
console.log(m1);

m1.forEach((val, key, m1) => {
  console.log(key, val);
});

console.log("Does map has 100", m1.has(100)); //true
console.log(m1.has("true")); //false
console.log(m1.has(true)); //true
m1.delete(true);
console.log(m1);

m1.set("mapobj", { name: "Yash" });
console.log(m1.get(myFun));
console.log(m1.keys());
console.log(m1.values());
console.log(m1.entries());

//* Generator function
function* gnFn(val) {
  console.log("First");
  yield val + 1;
  console.log("Second");
  yield val + 2;
}

let gnObj = gnFn(10);
console.log(gnObj);

console.log(gnObj.next().value); //{value: 2, done: false}
console.log(gnObj.next()); //{value: 3, done: false}
console.log(gnObj.next()); //{value: undefined, done: true}
console.log(gnObj.next()); //{value: undefined, done: true}

// We have to use next() keyword for (number of yield used) + 1 times

function* idMaker() {
  let index = 0;
  while (true) {
    yield index++;
  }
}
const idFun = idMaker();
console.log(idFun.next().value);
console.log(idFun.next().value);
console.log(idFun.next().value);
