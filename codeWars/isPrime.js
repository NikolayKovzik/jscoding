/*
Define a function that takes one integer argument and returns logical value true or false
 depending on if the integer is a prime.

Per Wikipedia, a prime number (or a prime) is a natural number greater than 1 
that has no positive divisors other than 1 and itself.
*/


function isPrime(num) {
  if(num <= 0 || num == 1) {
    return false;
  }
  let i = 2;
  let j = 0;
  while(i*i <=num && j!=1) {
    (num%i == 0) ? j=1 : ++i; 
  }
  
  return j==1 ? false : true; 
}



console.log(isPrime(2));
console.log(isPrime(3));
console.log(isPrime(5));
console.log(isPrime(193));
console.log(isPrime(199));
console.log(isPrime(71));
console.log(isPrime(2999));
console.log(isPrime(3541));
console.log(isPrime(99194853094755497));
console.log(isPrime(1066340417491710595814572169));
console.log('------------------------------');
console.log(isPrime(22));
console.log(isPrime(64));
console.log(isPrime(12300));
console.log(isPrime(2222222222));
console.log(isPrime(100000000000000));
console.log(isPrime(2222222222222222222222));
console.log(isPrime(123331112342432452345348));
console.log(isPrime(2134234234114324132));
console.log(isPrime(21341234123412343555));


/*
function isPrimeRec(num, div = 2) {
    if(num <= 0 || num == 1){
        return false;
    }
    return (div == num) ? true : (num%div === 0) ? false : isPrime(num, ++div);
  }
  */

