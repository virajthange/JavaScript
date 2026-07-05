//* 1)
let para = document.querySelector("#para");
para.innerText = "Hello World";

//* 2)
let li = document.querySelectorAll("li");
console.log("Type of li:", typeof li, li);
li.forEach((val, ind, li) => {
  console.log(val.innerText);
});

//* 3)
let createdDiv = document.createElement("div");
createdDiv.innerHTML = "<h2>Div Container</h2>";
console.log(createdDiv);
document.body.append(createdDiv);

//* 4)
let ulTag = document.createElement("ul");

document.body.append(ulTag);

for (let i = 0; i < 5; i++) {
  ulTag.append((document.createElement("ul").innerHTML = " li tag"));
}

//* 5)
let allPara = document.querySelectorAll("p");
allPara.forEach((val) => {
  val.style.background = "hotpink";
});

//* 6)
let d1 = document.querySelector(".ital");
d1.innerHTML = "<b>Bold Text</b> <i>This is italic text</i>";

//* 7)
let arr = ["img1.avif", "img2.avif", "img3.avif", "img4.avif", "img5.avif"];
let i = 0;
setInterval(() => {
  if (i > arr.length - 1) i = 0;
  document.querySelector("section").style.backgroundImage =
    `url(./tasks/${arr[i]})`;
  i++;
}, 2000);
