let obj = {
    name: "Viraj",
    id: 2,
    address: {
        location: "Karjat"
    },
    role: "Developer"
}
// console.log(obj);

//* 1) Copying the object by its reference
let obj2 = obj;
console.log("obj2: ", obj2);


//* 2) Copying the object using Object.assign()
let obj4 = Object.assign({}, obj);
console.log("obj4: ", obj4);


//* 3) Copying the object using for in loop
let obj3 = {}
for (const key in obj) {
    obj3[key] = obj[key];
}
console.log("obj3: ", obj3);