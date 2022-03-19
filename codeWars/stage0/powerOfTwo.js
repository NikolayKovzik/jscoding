/* function, that determines that determines if a given non-negative integer is a power of two. */

function isPowerOfTwoRec(n){
    return n === 0? false : n === 1 ? true : n%2 === 0 ? isPowerOfTwo(n/2) : false ; 
  }


function isPowerOfTwo(n){
   return n === 0? false : n === 1 ? true : n.toString(2).slice(1).includes('1') ? false : true;   
  }

  console.log(isPowerOfTwoRec(2));
  console.log(isPowerOfTwoRec(2096));
  console.log(isPowerOfTwoRec(4194304));
  console.log(isPowerOfTwoRec(8388608));
  console.log(isPowerOfTwoRec(444));
  console.log(isPowerOfTwoRec(375));
  console.log(isPowerOfTwoRec(1111111110));



  /* Clever & best practice

  function isPowerOfTwo(n){
    return Number.isInteger(Math.log2(n));
    }
*/