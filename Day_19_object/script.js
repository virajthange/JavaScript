//* Objects
let std = {
  name: "Viraj",
  age: 21,
  id: 3,
  perc: 66.45,
  getAge() {
    console.log(this.age);
    // console.log("hey");
  },
  isMarried: false,
  getPer: () => {
    // return 342;    //it will works in arrow function
    return this.perc; //this does not work in arrow function
  },
  skills: ["java", "js", "sql"],
  address: {
    loc: "Karjat",
    pin: 410201,
  },
  loc: "Thane",
  loc: "Khopoli", //The value will get updated
};

std.getAge(); //21

console.log(std.skills[0]); //java
console.log(std["skills"][0]); //java
std["getAge"]();
console.log(std.getPer()); //undefined
console.log(std.address.pin); //410201

//! Iterating the keys of object
for (const key in std) {
  // console.log(key);
  // console.log(std.key);     //Here key doesn't work - because it is not a property of std object, it is a variable which holds the key name
}

for (const key in std) {
  // console.log(key);
  console.log(std[key]); //This works because key is a variable which holds the key name
}

console.log("a".charCodeAt(0)); //97
console.log("a" == 97); //false
console.log("a" == 97); //false
console.log(`a` == 97); //false
console.log("1" == 1); //true - because of type coercion, JS converts string to number and then compares