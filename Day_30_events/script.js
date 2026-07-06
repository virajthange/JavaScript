const btn = document.querySelector(".btn");
const inp = document.querySelector(".inp");

//When the user will release the key
// inp.addEventListener("keyup", function(event) {
//   console.log(event.target.value);
// })

//When the user will press the key
// inp.addEventListener("keydown", function(event) {
//   console.log(event.target.value);
// })

//When the user will press the key  (only for the characters and Enter key)
inp.addEventListener("keypress", function (event) {
  console.log(event.target.value);
});

const login = document.querySelector(".login");
const form = document.querySelector(".form");
const usernameInput = document.querySelector("#username");
const passwordInput = document.querySelector("#password");

form.onsubmit = (event) => {
  event.preventDefault();
  // console.log(event);
  //~Method 1 (to get the data from form)
  // console.log(usernameInput.value);
  // console.log(passwordInput.value);

  //~Method 2 (to get the data from form)
  const data = new FormData(form);
  let skillsData = data.getAll("skills"); //getAll() method is used to get all the values of the checkboxes with the same name attribute (in this case, "skills"). It returns an array of selected skills.
  console.log("Formdata object is: ", data);
  let jsdata = Object.fromEntries(data); //Object.fromEntries() method is used to convert the FormData object into a plain JavaScript object. It takes an iterable (in this case, the FormData object) and returns an object with key-value pairs corresponding to the form fields and their values.
  jsdata.skills = skillsData;
  const marks = document.querySelector("#marks");
  console.log(jsdata);
};

marks.addEventListener("change", (event) => {
  document.querySelector(".span-marks").innerHTML = event.target.value;
  console.log(event.target.value);
});
