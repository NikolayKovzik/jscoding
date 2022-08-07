function print(a,b,c,d) {
  console.log({a,b,c,d})
}

function transform(fn) {
  console.log(`baseLength: ${fn.length}`)

  function step(arg) {
    fn = fn.bind(null, arg);
    console.log(`Length: ${fn.length}`)
    if(fn.length) {
      return step;
    }
    return fn();
  }

  return step;
}

let transformedPrint = transform(print);
transformedPrint(1)(2)(3)(4);