"use strict";

async function generateActivity() {
  const res = await fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
  return await res.json()
}

const wrapper = document.querySelector(".wrapper")
async function getActivity() {
  wrapper.innerHTML = "";
  const activities = await Promise.all([
    generateActivity(),
    generateActivity(),
    generateActivity()
  ])
  console.log(activities);
  for (let i = 0; i < activities.length; i++){
    const el = document.createElement("div");
    el.innerHTML = `<div>${activities[i].deck_id}</div>`
    wrapper.appendChild(el)
  }
}