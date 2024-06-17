'use strict';

function convertCurrency(sum, from, to) {
  const allCurrency = [
    { name: "USD", mult: 1 },
    { name: "RUB", mult: 1 / 60 },
    { name: "EUR", mult: 1.1},
  ]
  const fromExist = allCurrency.find(c => c.name === from);
  if (!fromExist){
    return null
  }
  const toExist = allCurrency.find(c => c.name === to);
  if (!toExist){
    return null
  }
  
  return new Intl.NumberFormat("ru-RU", {style: "currency", currency: to}).format(sum * fromExist.mult / toExist.mult)
}

console.log(convertCurrency(100, "RUB", "USD")); 