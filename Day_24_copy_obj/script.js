let x = 10;
let y = x;
console.log(x == y); //it checks the value of x and y, if they are equal then it will return true otherwise false
console.log(x === y); //it checks the value and type of x and y, if they are equal then it will return true otherwise false
console.log(x); //10
console.log(y); //10
// y = 20;
// console.log(x);  //10
// console.log(y);  //20

// == and === operator checks the value and reference of the object. If two objects are pointing to the same memory location then it will return true otherwise false.
let obj1 = { a: 10, b: 20 };
let obj2 = { a: 10, b: 20 };
let obj3 = obj1; //obj3 and obj1 are pointing to the same memory location
console.log(obj1);
console.log(obj2);
console.log(obj1 == obj2); //false
console.log(obj1 === obj2); //false
console.log(obj1 == obj3); //true
console.log(obj1 === obj3); //true

//Shallow Copy -> Object.assign() , Spread Operator, for...in loop
//* Shallow Copy -> only one level deep, if we have nested object then it will not create a new copy of nested object, it will point to the same memory location

//* Object.assign()
const dhoniObj = {
  name: "Dhoni",
  age: 50,
  address: {
    state: "Jharkhand",
  },
};
const obj5 = Object.assign({}, dhoniObj);
obj5.name = "Mahi"; //obj4.name will not change (primitive data type)
obj5.address.state = "Bihar"; //obj4.address.state will change the original object(dhoniObj) also because address is a nested object (reference data type)
console.log("DhoniObj:", dhoniObj);
console.log("obj5:", obj5);

console.log("spread operator");
//* Spread Operator
const obj4 = {
  name: "Dhoni",
  age: 50,
  address: {
    state: "Jharkhand",
  },
};
const spreadCopied = { ...obj4 };
spreadCopied.name = "Captain Cool"; //will not change the original object (obj4) because name is a primitive data type
spreadCopied.address.state = "Delhi"; //obj4.address.state will change because address is a nested object (reference data type)
console.log("obj4:", obj4);
console.log("spreadCopied:", spreadCopied);

//* for in loop
console.log("for in loop");
const myObj = {
  name: "Viraj",
  age: 22,
  address: {
    state: "Maharashtra",
  },
};
const res = {};
for (const key in myObj) {
  res[key] = myObj[key];
}
console.log("res:", res);
res.name = "Rohit";
res.address.state = "Gujrat";
console.log("res:", res);
console.log("myObj:", myObj);

//! ************************* Deep Copy *****************************
//* 1) structuredClone()
const structureObj = {
  name: "Sahil",
  address: {
    state: "Rajasthan",
  },
};
console.log("Structured Clone");
const ob = structuredClone(structureObj);
ob.address.state = "Maharashtra";
console.log(structureObj); //state of original object will not change
console.log(ob);
console.log("Structured Clone");

//* 2) JSON.stringify & JSON.parse()
const str = JSON.stringify(structureObj); //object to json string
console.log(str);
const r1 = JSON.parse(str); //json string to js object
console.log(r1);