


function mergeArrays(arr1, arr2) {

    for(let item of arr2) {
      if(!arr1.includes(item)) {
        arr1.push(item);
      }
    }
    return arr1.sort((a, b) => a - b);
    
  }
    

  console.log(mergeArrays([1,3,5,7,9,11,12], [1,2,3,4,5,10,12]));


  /*function mergeArrays(arr1, arr2) {
    return Array.from(new Set(arr1.concat(arr2).sort((a,b) => (a-b))));
  }
  

  /*
 function mergeArrays(a, b) {
  return [...new Set(a.concat(b))].sort((a,b)=>a-b)
} 
  */