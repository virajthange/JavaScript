// import print from "./script.js";
import data from "./script.js"; //without {} -> default import
import { a } from "./script.js"; //with {} -> named import
import info from "../data.json" with { type: "json" }; //importing data from json file

console.log(data);
console.log(data.obj1.name);
data.print();
console.log(a);

console.log(info);   
