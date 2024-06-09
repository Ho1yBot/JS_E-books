'use strict';

let weatherMap = new Map ([
    ["London", 10],
    ["Moscow", 7],
    ["Paris", 14]
]);

let arrWeater = [...weatherMap];
arrWeater = arrWeater.map(([key, value]) =>{
    return [value, key]
}) 
weatherMap = new Map(arrWeater);
console.log(weatherMap);