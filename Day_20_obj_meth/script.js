//* Object Static Methods

let emp = {
  name: "Yash",
  id: 4,
  address: {
    location: "Uran",
  },
  phone: 5329399537,
  salary: 50000,
};
console.log(emp);

// Object.freeze(emp)
// emp.salary = 400;  //it will not change the value of salary because object is frozen
// delete emp.name;  //it will not delete the name property because object is frozen
// emp.role = "sql";  //it will not add the role property because object is frozen
// console.log('object after freeze and then changes: ');
// console.log(emp);

Object.seal(emp);
emp.name = "Swaraj"; //it will change the value of name because object is sealed but not frozen
emp.role = "developer"; //it will not add the role property because object is sealed
delete emp.address; //it will not delete the address property because object is sealed
console.log("object after seal: ");
console.log(emp);

console.log("Is object frozen?: ", Object.isFrozen(emp));
console.log("Is object sealed?: ", Object.isSealed(emp)); //it will return true in both the cases even if the object is frozen because frozen is a type of sealed object

let keys = Object.keys(emp);
let val = Object.values(emp);
console.log("Keys: ", keys); //[ 'name', 'id', 'address', 'phone', 'salary' ]
console.log("Values: ", val); //[ 'Swaraj', 4, { location: 'Uran' }, 5329399537, 50000 ]

let ent = Object.entries(emp); //it returns the values in the form of array of arrays where each inner array contains key and value pair
console.log("Entries: ", ent);
