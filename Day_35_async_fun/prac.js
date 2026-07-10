async function getData() {
  //   return JSON.stringify({
  //     name: "Viraj",
  //   });
  return {
    name: "Yash",
    age: 20,
  };
}
console.log(getData()); //Promise
// getData().then((value) => console.log(JSON.parse(value)));

getData().then(function (data) {
  console.log(data);
});

async function fetchData() {
  const res = await getData(); //Direct data not promise
  console.log(res);
}
fetchData();

async function getProduct() {
  const response = await fetch("https://dummyjson.com/products");
  console.log(response);
  const data = await response.json(); //json() returns a promise
  console.log(data);
}
getProduct();

// JSON.parse() works on json string not directly on response body
// .json() is a mixture of .text() and JSON.parse()
