//~  Scopes in js
var a = 10; //global scope
console.log(a); //10

let b = 30; //script scope
const c = 50; //script scope
console.log(b); //30
console.log(c); //50

//global scope
function f1() {
  let a = 4; //local scope
  var b = 63; //local scope
  const v = 5; //local scope

  console.log(a); //4
  console.log(b); //63
  console.log(c); //50
  console.log(v); //5

  function f2() {
    //local scope
    console.log("Inner function");
    console.log(b); //63
  }
  f2();
}
f1();

{
  var g = "js";
  let b = "java";
  const c = "python";
  console.log(g); //js
  console.log(b); //java
  console.log(c); //python
}
