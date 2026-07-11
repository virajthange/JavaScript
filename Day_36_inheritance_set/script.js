//* Inheritance
//! class Inheritance
// There can only be one special method with the name "constructor" in a class
class A {
  static animal = "human";
  height = 123; //class field
  val;

  constructor(age, val) {
    this.name = "Viraj";
    this.age = age;
    this.val = val;
  }
  get getName() {
    return this.name;
  }
  meth() {
    console.log("This is method defined in class A");
  }
  static statMeth() {
    console.log("Static method of class A");
  }
}

class B extends A {
  constructor(a, b) {
    super(a, b); //Must call if we are defining constructor in B class
  }
}
class C extends A {}

let objb = new B(33, 490);
let objc = new C(24);

console.log(objb);
console.log(objc);
console.log(objb.getName);
console.log(A.animal); //static variable access
objb.meth();
A.statMeth();

class Photo {
  #width;
  constructor(width) {
    this.#width = width;
  }
  get width() {
    return this.#width;
  }
}
let photo1 = new Photo(43);
console.log(photo1);
console.log(photo1.width);

//! Prototype inheritance
let obj1 = {
  name: "Suhas",
  age: 12,
};
let obj2 = {
  clg: "pillai",
};
obj2.__proto__ = obj1; //obj2 will have all the properties of obj1 also
console.log("Object 2 is: ", obj2);
console.log(obj2.age);
console.log(obj2.name);

const CustomClass = class {
  constructor() {
    this.language = "Marathi";
  }
};
let customObj = new CustomClass();
console.log(customObj);

//* set
let s1 = new Set();
s1.add(10);
s1.add(10).add(20).add(30).add(40).add(50); //because of set it will not add duplicate values
console.log(s1);
console.log(s1.size);
console.log(s1.has(30));
s1.delete(40);
console.log(s1);
console.log(s1.keys());
console.log(s1.values());

const s1Arr = Array.from(s1);
console.log(s1Arr);

const strset = new Set("Viraj");
console.log(strset); // {'V', 'i', 'r', 'a', 'j'}
