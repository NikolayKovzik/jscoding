/*
Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.

Например:

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

alert( aclean(arr) ); // "nap,teachers,ear" или "PAN,cheaters,era"
*/



function aclean(arr) {

    let unic = new Set();
    let normalize;
    let result = [];
    for(item of arr){
       normalize = item.toLowerCase().split('').sort().join('');
       if(!unic.has(normalize)) {
            unic.add(normalize);
            result.push(item);
       }
    }
    return result;
}


let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];


 console.log( aclean(arr) );