// let p1 = Promise.resolve()
// console.log(p1);

let data = window.fetch("data.json");
console.log(data);

const tbody = document.querySelector("tbody");
data
  .then((res) => {
    const finalData = res.json().then((d) => {
      for (let v of d) {
        console.log(v.price);
        tbody.innerHTML += `<tr>
                <td>${v?.id}</td>
                <td>${v?.product}</td>
                <td>${v?.price}</td>
            </tr>`;
      }
    });
  })
  .catch((e) => {
    console.log(e);
  });
