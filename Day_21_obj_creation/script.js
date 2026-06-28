//* Ways to create an object
//* 1) Literal Way
let obj = {
  name: "Viraj",
  id: 33,
};
console.log(obj);

//* 2) Using class and constructor
class Student {
  constructor(name, roll) {
    this.name = name;
    this.roll = roll;
  }
}
let obj2 = new Student("Yash", 3);
console.log(obj2);

//* 3) Using Constructor Function
function Chair(color, style) {
    this.color = color
    this.style = style
}
let c = new Chair("Cream", "Slanted")
console.log(c);

//* 4) Using Object.create() method
// This method creates a new object, using an existing object as the prototype of the newly created object. It allows you to create an object that inherits properties and methods from another object.
let obj3 = Object.create(obj);
console.log('obj3: ', obj3);

// 5) Using Object.assign() method
let obj4 = Object.assign({}, obj);
console.log('obj4: ', obj4);

//* 6) Using Object.assign() method
let obj6 = Object.assign({}, obj);
console.log('obj6: ', obj6);

//* 7) Using new Object() constructor
// It is a built-in JavaScript function that creates a new object. It can be used to create an empty object or to create an object with properties and methods.
let obj7 = new Object();
obj7.name = "Amit";
obj7.id = 44;
console.log('obj7: ', obj7);