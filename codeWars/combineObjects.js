/*Your task is to write a function that takes two or more objects and returns 
a new object which combines all the input objects.

All input object properties will have only numeric values. Objects are combined together 
so that the values of matching keys are added together.

An example:
const objA = { a: 10, b: 20, c: 30 }
const objB = { a: 3, c: 6, d: 3 }
combine(objA, objB) // Returns { a: 13, b: 20, c: 36, d: 3 }
The combine function should be a good citizen, so should not mutate the input objects.

*/



function combine(...args) {
        
    return args.reduce(function(current,item) {
      let keys = Object.keys(item);

      for (let key of keys) {
        if(current[key])
            current[key] += item[key];
        else
            current[key] = item[key];
         }
       return current;
    }, {});

}

let objA = { a: 10, b: 20, c: 30 };
let objB = { a: 3, c: 6, d: 3 };
let objC = { a: 5, d: 11, e: 8 };
let objD = { a: 15, b: 111, e: 33};

console.log(combine(objA, objB, objC, objD));


/* Alternative way

const combine = (...params) => params.reduce((current, item) => {
  for (const x in item) { current[x] = x in current ? current[x] + item[x] : item[x] };
  return a;
 }, {});

 */