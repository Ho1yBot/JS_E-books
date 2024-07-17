"use strict"
function getDataOrErrorText(url, errorText) {
  return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(errorText);
      }
    })
}

getDataOrErrorText("https://dummyjson.com/products", "Can not get products")
  .then(({ products }) => {
    return getDataOrErrorText("https://dummyjson.com/products/" + products[0].id, "Can not get products")
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    const el = document.querySelector(".filter")
    el.innerHTML = error.message
  })




