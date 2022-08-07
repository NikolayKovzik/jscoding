function curryPartial(...args1) {
  let func = args1[0];
  let params = args1.slice(1);
  if(params.length >= func.length)
    return func(...params);
  
  return function curried(...args2) {
    if (params.length + args2.length >= func.length) 
      return func(...params.concat(args2));

    return (...args3) => curried(...args2.concat(args3));
  };

}




console.log(curryPartial(add)(1)(2)(3)); //6
console.log(curryPartial(add, 1)(2)(3)); //6
console.log(curryPartial(add, 1)(2, 3)); //6
console.log(curryPartial(add, 1, 2)(3)); //6
console.log(curryPartial(add, 1, 2, 3)); //6
console.log(curryPartial(add)(1, 2, 3)); //6
console.log(curryPartial(add)(1, 2)(3)); //6
console.log(curryPartial(add)()(1, 2, 3)); //6
console.log(curryPartial(add)()(1)()()(2)(3)); //6
console.log(curryPartial(add)()(1)()()(2)(3, 4, 5, 6)); //6
console.log(curryPartial(add, 1)(2, 3, 4, 5));