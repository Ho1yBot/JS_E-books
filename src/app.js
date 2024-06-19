'use strict';
const product = { id: 1, name: "Bread", count: 1 };

const Cart = function () {
  this.products = [];
}

Cart.prototype.addGood = function (product) {
  if (this.products.find(good => good.id === product.id)) {
    return;
  }
  this.products.push(product);
}

Cart.prototype.increaseCount = function (id) {
  this.products = this.products.map((product) => {
    if (product.id == id) {
      product.count++
      return product
    }
    return product
  })
}

Cart.prototype.decreaseCount = function (id) {
  this.products = this.products
    .map((product) => {
      if (product.id == id) {
        product.count--
        return product
      }
      return product
    })
    .filter((product)=> product.count > 0);
}

const cart1 = new Cart(product)
cart1.addGood(product);
cart1.increaseCount(1);
cart1.decreaseCount(1);

const cart2 = new Cart(product)
cart2.addGood({id: 2, name: "Ham", count: 2})

console.log(cart1);
console.log(cart2);



