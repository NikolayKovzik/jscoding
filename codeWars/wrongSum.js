function add(num1, num2) {
  
    let arr1 = num1.toString().split('');
    let arr2 = num2.toString().split('');

    if(arr1.length > arr2.length) {
        for(let i = 0; i < arr2.length; i++ ) {
            arr1[arr1.length-1-i] = +arr1[arr1.length-1-i] + +arr2[arr2.length-1-i];
        }
        return +arr1.join('');
    }   else {
             for(let i = 0; i < arr1.length; i++ ) {
                    arr2[arr2.length-1-i] = +arr1[arr1.length-1-i] + +arr2[arr2.length-1-i];
              }
              return +arr2.join('');
    }

  }


  /*
    function add(num1, num2) {
  let arr1 = num1.toString().split('').reverse()
  let arr2 = num2.toString().split('').reverse()
  let arr3 = []
  for(let i=0; i < (arr1.length < arr2.length ? arr2.length : arr1.length); i++) {
    arr3.push((parseInt(arr1[i]) || 0) + (parseInt(arr2[i]) || 0))
  }
  return parseInt(arr3.reverse().join(''));
}
/*

function add(a,b) {
  return a*b ? +`${add(a/10|0,b/10|0)}${a%10+b%10}` : a+b
}


  */



  console.log(add(2, 11)); //13
  console.log(add(26, 39)); //515
  console.log(add(122, 81)); //1103
  console.log(add(1222, 30277)); //31499
