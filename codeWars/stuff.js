/*Given an array/list [] of n integers, find maximum triplet sum in the array
 (do not count duplicate numbers)
*/
function maxTriSum(numbers){
   
   return Array.from(new Set(numbers)).sort((a,b) => a - b).slice(-3).reduce((sum, current) => sum + current);
   
}

/* figure out how it works

const maxTriSum = numbers => {
  const [a,b,c,...rest] = [...new Set([...numbers])].sort((a,b)=>b-a)
  return a+b+c
}
*/