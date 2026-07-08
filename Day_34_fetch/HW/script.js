let data = fetch("https://api.escuelajs.co/api/v1/products");
// let data = fetch("https://api.escuelajs.co/api/v1/categories");

let products = document.querySelector(".products");
data.then((res) => {
  let fdata = res.json();
  fdata.then((d) => {
    console.log(d);
    for (let v of d) {
      //   console.log(v.id);
      let {
        image,
        title,
        price,
        category: { name },
      } = v;
      //   console.log(fimage);
      products.innerHTML += `<div class="card">
        <img 
        src= ${image}
         alt="product image" />
        <div class="name-price">
          <p class="product-title">${title}</p>
          <p class="product-price">₹${price}</p>
          
          </div>
          <div class="category">
          <p class="product-price">Category: ${name}</p>
          </div>
      </div>`;
    }
  });
});
