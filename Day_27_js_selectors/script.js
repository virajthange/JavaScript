let head = document.getElementById("head");
console.log(head);

let c1 = document.getElementsByClassName("c1");
console.log(c1);

let tag = document.getElementsByTagName("p");
console.log(tag);

let qs = document.querySelector("#head"); //Selects only single element (first)
// console.log(qs);

let qsa = document.querySelectorAll("p"); //Selects all elements
console.log("qsa ", qsa, " Type of qsa is: ", typeof qsa); //NodeList of all p tag

qsa[0].innerText = "This is para 1"; //To change text of element
qsa[1].innerHTML = "<h3>This is para 2</h3>"; //To change html of element
qsa[2].innerText = "This is para 3";

let ar = Array.from(qsa); //Converting nodelist to array
console.log("Array by converting nodelist: ", ar); //Array of all p tag

for (let v of ar) {
  console.log("v is: ", v);
}
let ar2 = [...qsa]; //^ Another way to convert nodelist to array
// console.log(ar2);

//*Creating Element

let celem = document.createElement("h1");
celem.innerText = "This is created using JS";
console.log(celem);
// document.querySelectorAll(".para").appendChild(celem);          //Can't append to nodelist
document.querySelector(".c2").appendChild(celem);

let elem2 = document.createElement("h3");
elem2.innerHTML = "<h3>This is created using JS using append</h3>";
document.body.append(elem2); //To add multiple element in end of body

document.body.prepend(celem); //To add element in starting of body

// document.body.removeChild(head);   //To remove child element
// head.remove();                    //To remove element directly

// document.body.replaceChild(elem2, head);   //To replace child element
head.replaceWith(elem2); //To replace element directly

// console.log(head, c1, tag, qs, qsa);

// console.log(document.body, document.head, document.documentElement, document.URL);
