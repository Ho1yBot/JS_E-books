'use strict';

// Написать функцию, которая принимает min и max 
// и возвращает случайное целое число между ними, вкл их

function random(min, max) {
  return Math.floor(Math.random() * (max-min+1) + min);
}

console.log(random(3, 10));