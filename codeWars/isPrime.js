function isPrime(num, div = 2) {
    if(num == 1 || num == -1){
        return false;
    }
    return (div == num) ? true : (num%div === 0) ? false : isPrime(num, ++div);
  }


console.log(isPrime());