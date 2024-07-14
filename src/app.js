"use strict"

const request = new XMLHttpRequest();
let number = 1;
let id = 1

request.open("GET", "https://dummyjson.com/products/" );
request.send();

request.addEventListener("load", function () {
  const data = JSON.parse(this.responseText)
  const sum = data.products.reduce((acc, product) => {
    acc = acc + product.price
    return acc
  }, 0)
  console.log(sum/data.products.length);
})


