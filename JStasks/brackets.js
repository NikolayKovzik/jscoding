/*
  Implement function check(str, bracketsConfig), that for given brackets sequence will return true if it is correct and false otherwise

In the second param there is bracketsConfig - the array of pairs open-closed brackets. Each subarray includes only 2 elements - opening and closing bracket

check('()', [['(', ')']]) // -> true
check('((()))()', [['(', ')']]) // -> true
check('())(', [['(', ')']]) // -> false
check('([{}])', [['(', ')'], ['[', ']'], ['{', '}']]) // -> true
check('[(])', [['(', ')'], ['[', ']']]) // -> false
check('[]()', [['(', ')'], ['[', ']']]) // -> true
check('[]()(', [['(', ')'], ['[', ']']]) // -> false

special case: opening and closing bracket can be the same :)

check('||', [['|', '|']]) // -> true
check('|()|', [['(', ')'], ['|', '|']]) // -> true
check('|(|)', [['(', ')'], ['|', '|']]) // -> false
check('|()|(||)||', [['(', ')'], ['|', '|']]) // -> true

My solution:
*/


function check(str, bracketsConfig) {
    
  let openings= Array.from(new Map( bracketsConfig).keys());
  let closings = Array.from(new Map( bracketsConfig).values());
  let arr = str.split('');
  let stack = [];
  let twins = [];
  openings.forEach((item) => closings.includes(item) ? twins.push(item) : item);
  let twinsCounter = {};
  let unicIndicador;

  if(openings.includes(arr[arr.length-1]) && !twins.includes(arr[arr.length-1]))
      return false;
  
  for(let i = 0; i < arr.length; i++) {
      if(twins.includes(arr[i]) ) { 

          if(twinsCounter[arr[i]])
              twinsCounter[arr[i]] += 1;
          else
              twinsCounter[arr[i]] = 1;

          unicIndicador = false;
      }
      else
          unicIndicador = true;

      if(closings.indexOf(arr[i]) === -1 || (twinsCounter[arr[i]]%2 !== 0 && unicIndicador!==true)) {
          stack.push(arr[i])
      }  else if( closings.indexOf(arr[i]) !== openings.indexOf(stack.pop()) ){
               return false;
          }
      }
  
  
  return true;
}







// solution from top
/*
function check(str, bracketsConfig) {
    const arrPair = bracketsConfig.map((pair) => pair.join(''))//?
    for (let i = 0; i < arrPair.length;) {
      if (str.includes(arrPair[i])) {
        str = str.replace(arrPair[i], '')
        i = 0
      }
      else { i++ }
    }
    return Boolean(!str.length);
  }

  */




// solution from top
  /*
  function check(str, bracketsConfig) {
    const config = new Map(bracketsConfig);
        let stack = [];
        for (let i = 0; i < str.length; i++) {
            if (str[i] === config.get(stack[stack.length-1])) {
                stack.pop();
            } else stack.push(str[i]);
        }
        return stack.length === 0;
    }
    */