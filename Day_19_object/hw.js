//* 1) Remove the duplicates from an array
let arr = [14, 53, 66, 22, 14];
let ans = [];
for (let elem of arr) {
  if (!ans.includes(elem)) {
    ans.push(elem);
  }
}
console.log(ans); //[ 14, 53, 66, 22 ]

//* 2) Remove the duplicates from a string
let str = "VirajV";
let res = "";
for (const val of str) {
  if (!res.includes(val)) {
    res = res + val;
  }
}
console.log(res);

//* Count the number of elements in an array
let count = 0;
for (const val of arr) {
  count++;
}
console.log(count);

let s = "fokhr4324lklkjlfa";
function removeDigits(s) {
  let r1 = "";
  for (let ind in s) {
    if (s.charCodeAt(ind) < 47 || s.charCodeAt(ind) > 58) {
      r1 = r1 + s[ind];
    }
  }
  console.log("Value after removeal is: " + r1);
}

removeDigits(s);

//* Create an object containing multiple datatypes as value
let obj = {
  name: "Viraj",
  age: 21,
  course: "java",
  id: 2,
  address: {
    loc: "Karjat",
  },
  getAge() {
    console.log(this.age);
  },
  nickName: () => {
    console.log("Nothing");
  },
  isMarried: false,
  skills: ["js", "sql"],
};
console.log(obj);