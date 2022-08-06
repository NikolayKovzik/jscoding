//МЕТОДЫ МАССИВОВ



// создание копии массива 

let arr = [1,2,3];


// (данные методы копируют элементы массива по ссылке, т.е.  без глубокого копирования) (Shallow copy)
//console.log(arr, clone);
// [[1, 300], [2]]
// [[1, 300], [2]]

//clone0 -- just use for/while/for of/
//       -- map with (x) => x/ 
//       -- filter with () => true/
//       -- reduce with (newArr, e) => {return newArr.push(e); }
let clone1 = arr.slice(0)  // or just slice()
let clone2 = [...arr];
let clone3 = arr.concat()  
let clone4 = Array.from(arr);

//These methods safely copies deeply nested objects/arrys
//console.log(arr, clone);
// [[1], [2]]
// [[1, 300], [2]]

let clone5 = JSON.parse(JSON.stringify(arr))  
//_.cloneDeep()


console.log(clone1)