console.log(window);
console.log(window.document);

let head = document.getElementById("head");
let par = document.getElementById("par");

console.log(head);
console.log(par);
head.style.backgroundColor = "black";
head.style.color = "white";

// par.innerText = "Hey there";
par.innerText = par.innerText + " Hey there";
par.style.backgroundColor = "red";
par.style.color = "black";
