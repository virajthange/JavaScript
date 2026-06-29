//* 3) Using Constructor Function
function Chair(color, style) {
  this.color = color;
  this.style = style;
}
let c = new Chair("Cream", "Slanted");
console.log(c);

//* 4) Object Constructor
let obj4 = new Object();
obj4.height = 5;
obj4["id"] = 43;
console.log(obj4);
//* >>>>>>>>>>>>>>>>>>>>>>>>>

//* Rest Parameters
function fun(a, b, ...rest) {
  console.log(a);
  console.log(b);
  console.log("The type of rest is: ", typeof rest); //object but it follows array properties like indexing and length, loops
  console.log(rest);
  for (const val of rest) {
    if (typeof val == "function") {
      val();
    } else {
      console.log(val);
    }
  }
}

fun(43, 66, 27, 73, "hey", 77, () => {
  console.log("heyy in function");
});
//******************************

//* Spread Operator
let arr = [43, 66, 26, 99, 38, 48];
let arr2 = [49, 55, 22];
let arr3 = [53, 95, 92];

console.log(...arr, ...arr2);
let r1 = [arr, arr2]; //~It will be a 2D array
console.log(r1);

let res = [...arr, ...arr2];
console.log(res);

let str = "Viraj";
console.log([...str]);

let ostr = { ...str };
console.log(ostr);
//**********************************

//& Copying Object
let o1 = {
  state: "Maharashtra",
  capitalCity: "Mumbai",
};
let o2 = { ...o1 }; //~Copying
console.log(o2);

//& Copying array in object
let ar = [43, "hey", 778];
let ob = { ...ar };
console.log(ob);

// let arobj = [...ob]       //Uncaught TypeError: ob is not iterable
// console.log('arobj is: ',arobj);
//& >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//* Array Destructuring
let a = [44, 52, 77, 27, 59];
let [x, y, z, ...r] = a;
console.log(x); //44
console.log("First element of r is: ", r[0]); //27
console.log(r); //[27, 59]

//* Object Destructuring
let color = "red";
let o3 = {
  speed: 250,
  color: "black",
  brand: "RollsRoyce",
  mileage: 4,
};
let { speed, color: c5, ...j } = o3;
console.log(color); //red
console.log(speed); //250
console.log(c5); //black
console.log(j); //{brand: 'RollsRoyce', mileage: 4}

// array/ object in anothter array
console.log(" array/ object in anothter array");
let arr1 = [43, "hello", 78, 90, { name: "Viraj", age: 21 }];
// let [val1, val2, val3, val4,val5] = arr1;
let [val1, val2, val3, val4, { name: n1, age }] = arr1;
console.log(val1);
console.log(val2);
console.log(val3);
console.log(val4);
// console.log(val5);   //{ name: 'Viraj', age: 21 }
// console.log(val5.age);   //21
console.log(n1); //Viraj
console.log("Age is: ", age); //21
// console.log(n2); //21

//~ object/Array in  another object
let std = {
  name: "Viraj",
  skills: ["js", "java"],
  add: {
    city: "karjat",
    pincode: 410201,
    state: {
      sname: "Maharashtra",
      code: "MH",
    },
  },
};

let {
  name,
  add: {
    city,
    state: { code },
  },
  skills: [firstSkill],
} = std;

console.log(name);
// console.log(add.city);
console.log(city); //karjat
console.log(code); //MH

console.log(firstSkill); //js