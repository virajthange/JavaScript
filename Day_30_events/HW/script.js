let loginBtn = document.querySelector(".login-btn");
const form = document.querySelector(".form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let formData = new FormData(form);
  const skillsData =
    formData.getAll(
      "skills"
    ); /* It takes exactly one parameter, which must be the name of a form field (a string).
It returns an array containing all values associated with that name.  */
  let data = Object.fromEntries(formData);
  data.skills = skillsData;
  console.log(data);
});

const marks = document.querySelector(".marks-input");
marks.addEventListener("change", (event) => {
  document.querySelector(".span-marks").innerHTML = event.target.value;
});

let name = "Viraj";
let obj = {
  name,
  age: 34,
};
console.log(obj.name); //Works
console.log(obj);

function product() {
  let name = "pencil";
  function setName(name) {
    this.name = name;
    return name;
  }
  return {
    name,
    setName,
  };
}
let p1 = product();
console.log(p1.setName("pen"));
console.log(p1.name);
