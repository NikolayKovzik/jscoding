// Array.prototype.length will give you the number of top-level elements in an array.
// Your task is to create a function deepCount that returns the number of ALL elements within an array, including any within inner-level arrays.

// For example:
// deepCount([1, 2, 3]);  
// >>>>> 3
// deepCount(["x", "y", ["z"]]);  
// >>>>> 4
// deepCount([1, 2, [3, 4, [5]]]);  
// >>>>> 7


function deepCount(a){
    let num = 0;
    a.forEach((item)=>{
      num += Array.isArray(item) ? deepCount(item)+1  : 1;
    })
    return num
  }

  console.log(deepCount([1, 2, [3, 4, [5]]]));