"use strict";
const item = document.querySelector(".items")
for (let i = 0; i < 5; i++) {
  const p = document.createElement("p")
  p.innerHTML = `${i * 23}`
  item.append(p)
}
console.log([...item.children][0].innerHTML);

const input = document.querySelector(".input")
input.addEventListener("change", function onchange(e) {
  for (const el of [...item.children]) {
    if (el.innerHTML.includes(e.target.value)) {
      el.classList.add("yellow")
      continue
    } else {
      el.classList.remove("yellow")
    }
  }
})