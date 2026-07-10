// //* Async functions
// // It returns a promise
// async function myFunction() {
//   return "Hello";
// }
// myFunction()
//   .then((value) => console.log(value)); // Hello

async function fetchData() {
  return 100;
}
async function fun() {
  let data = await fetchData(); //using await because it is asynchronous task to fetch data
  console.log("Data: ", data);
}
fun(); // Promise {<fulfilled>: 100}

// //* Await keyword
// await Can be use only inside async function , can be used with function calls or varibles which return promise
// async function myDisplay() {
//   let myPromise = new Promise((resolve) => {
//     setTimeout(() => resolve("I love JavaScript!"), 3000);
//   });
//   console.log(await myPromise);
// }
// myDisplay(); // I love JavaScript! (after 3 seconds)

// //* Error handling with try...catch block
// async function myErrorFunction() {
//   try {
//     let response = await fetch("https://dummyjson.com/products");
//     let data = await response.json(); //Here we are getting data directly, If we will not use await here, it would return a promise
//     console.log(data);
//   } catch (error) {
//     console.log("Error:", error);
//   }
// }
// myErrorFunction();

// //* Async arrow function
// const myArrowFunction = async () => {
//   return "Hello from async arrow function!";
// };
// myArrowFunction().then((value) => console.log(value)); // Hello from async arrow function!

// //* Using async functions with array methods
const urls = [
  "https://dummyjson.com/products/1",
  "https://dummyjson.com/products/2",
  "https://dummyjson.com/products/3",
];
async function fetchUrls() {
  try {
    const fetchPromises = urls.map(async (url) => {
      let response = await fetch(url);
      return response.json();
    });
    const results = await Promise.all(fetchPromises); //Promise.all() is a method that lets you run multiple Promises concurrently and wait until all of them are fulfilled, here all the requests start together and then we wait for all of them to complete, it is more efficient than waiting for each request to complete one by one (sequentially)
    console.log(results); //returns array
  } catch (error) {
    console.log("Error fetching URLs:", error);
  }
}
// fetchUrls();

// //* Async function returning a rejected promise
async function myRejectedFunction() {
  throw new Error("Something went wrong!");
}
// myRejectedFunction()
//   .then((value) => console.log(value))
//   .catch((error) => console.log("Caught error:", error.message)); // Caught error: Something went wrong!

// //* Nested async functions
async function outerFunction() {
  console.log("Outer function start");
  await innerFunction();
  console.log("Outer function end");
}
async function innerFunction() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Inner function executed");
      resolve();
    }, 2000);
  });
}
// outerFunction();
// // Outer function start
// // (after 2 seconds) Inner function executed
// // Outer function end

// //* Async function with fetch and POST request
async function postData() {
  try {
    let response = await fetch("https://dummyjson.com/products/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: "New Product", price: 99.99 }),
    });
    let data = await response.json();
    console.log("Product added:", data);
  } catch (error) {
    console.log("Error adding product:", error);
  }
}
// postData();

// //* Async function with timeout
function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function delayedLog() {
  console.log("Waiting for 2 seconds...");
  await timeout(2000);
  console.log("2 seconds have passed!");
}
// delayedLog();
// Waiting for 2 seconds...
// (after 2 seconds) 2 seconds have passed!

// //* Async function with conditional await
async function conditionalAwait(condition) {
  if (condition) {
    let result = await new Promise((resolve) => {
      setTimeout(() => resolve("Condition met!"), 1000);
    });
    console.log(result);
  } else {
    console.log("Condition not met.");
  }
}
// conditionalAwait(true); // Condition met! (after 1 second)
// conditionalAwait(false); // Condition not met.

// //* Async function with multiple awaits
async function multipleAwaits() {
  let promise1 = new Promise((resolve) =>
    setTimeout(() => resolve("First!"), 1000),
  );
  let promise2 = new Promise((resolve) =>
    setTimeout(() => resolve("Second!"), 2000),
  );
  let promise3 = new Promise((resolve) =>
    setTimeout(() => resolve("Third!"), 3000),
  );
  console.log(await promise1); // First! (after 1 second)
  console.log(await promise2); // Second! (after 2 seconds)
  console.log(await promise3); // Third! (after 3 seconds)
}
// All promies start execution at same time
// multipleAwaits();
// First! (after 1 second)
// Second! (after 2 seconds)
// Third! (after 3 seconds)

// //* Async function with finally block
async function myFinallyFunction() {
  try {
    let response = await fetch("https://dummyjson.com/products/1");
    let data = await response.json();
    console.log("Data fetched:", data);
  } catch (error) {
    console.log("Error:", error);
  } finally {
    console.log("Execution completed.");
  }
}
// myFinallyFunction();
// Data fetched: {id: 1, title: "iPhone 9", description: "An apple mobile which is nothing like apple", price: 549, …}
// Execution completed.

// //* Async function with recursion
// async function recursiveAsyncFunction(count) {
//   if (count <= 0) return;
//   console.log("Count:", count);
//   await recursiveAsyncFunction(count - 1);
// }
// recursiveAsyncFunction(5);
// Count: 5
// Count: 4
// Count: 3
// Count: 2
// Count: 1

// //* Async function with event listener
document.getElementById("myButton").addEventListener("click", async () => {
  console.log("Button clicked!");
  let data = await new Promise((resolve) => {
    setTimeout(() => resolve("Data loaded after button click!"), 2000);
  });
  console.log("Data is: ", data);
});
// When the button with id "myButton" is clicked:
// Button clicked!
// (after 2 seconds) Data loaded after button click!

// //* Async function with destructuring
async function fetchAndDestructure() {
  let response = await fetch("https://dummyjson.com/products/1");
  let { title, price } = await response.json();
  console.log(`Title: ${title}, Price: ${price}`);
}
// fetchAndDestructure();
// Title: iPhone 9, Price: 549

// //* Async function with default parameters
async function greetUser(name = "Guest") {
  return `Hello, ${name}!`;
}
// greetUser().then((message) => console.log(message)); // Hello, Guest!
// greetUser("Alice").then((message) => console.log(message)); // Hello, Alice!

// //* Async function with rest parameters
async function sumAll(...numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}
// sumAll(1, 2, 3, 4, 5).then((total) => console.log("Total sum:", total)); // Total sum: 15
// sumAll(10, 20, 30).then((total) => console.log("Total sum:", total)); // Total sum: 60
// //* Async function with spread operator
async function multiply(a, b, c) {
  return a * b * c;
}
const nums = [2, 3, 4];
// multiply(...nums).then((result) =>
//   console.log("Multiplication result:", result)
// ); // Multiplication result: 24

// //* Async function with template literals
async function fetchProductInfo() {
  let response = await fetch("https://dummyjson.com/products/1");
  let data = await response.json();
  console.log(`Product: ${data.title}, Price: $${data.price}`);
}
// fetchProductInfo();
// // Product: iPhone 9, Price: $549
// //* Async function with chaining
async function fetchAndProcess() {
  let response = await fetch("https://dummyjson.com/products/1");
  return response.json();
}
fetchAndProcess()
  .then((data) => {
    console.log("Product title:", data.title);
    return data.price;
  })
  .then((price) => {
    console.log("Product price:", price);
  })
  .catch((error) => {
    console.log("Error:", error);
  });
// Product title: iPhone 9
// Product price: 549

// //* Async function with generator
async function* asyncGenerator() {
  const urls = [
    "https://dummyjson.com/products/1",
    "https://dummyjson.com/products/2",
    "https://dummyjson.com/products/3",
  ];
  for (const url of urls) {
    let response = await fetch(url);
    let data = await response.json();
    yield data;
  }
}
// (async () => {
//   for await (const product of asyncGenerator()) {
//     console.log("Product from generator:", product);
//   }
// })();

// Product from generator: {id: 1, title: "iPhone 9", description: "An apple mobile which is nothing like apple", price: 549, …}
// Product from generator: {id: 2, title: "iPhone X", description: "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with …", price: 899, …}
// Product from generator: {id: 3, title: "Samsung Universe 9", description: "Samsung's new variant which goes beyond Galaxy to the Universe", price: 1249, …}
