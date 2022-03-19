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






/* The input will be an array of dictionaries.

Return the values as a string-seperated sentence in the order of 
their keys' integer equivalent (increasing order).
Example: 

Input:
List = [{'4': 'dog' }, {'2': 'took'}, {'3': 'his'},{'-2': 'Vatsan'}, {'5': 'for'}, {'6': 'a'}, {'12': 'spin'}]
Output:
'Vatsan took his dog for a spin'
*/


function sentence(List) {
  return List.sort((a,b) => Object.keys(a)[0]-Object.keys(b)[0])
             .map((item) => Object.values(item)[0])
             .join(' ');
}



/*
Given a dictionary with all the names of the suspects and everyone that 
they have seen on that day which may look like this:
{'James': ['Jacob', 'Bill', 'Lucas'],
 'Johnny': ['David', 'Kyle', 'Lucas'],
 'Peter': ['Lucy', 'Kyle']}

and also a list of the names of the dead people:
['Lucas', 'Bill']

return the name of the one killer, in our case 'James' 
because he is the only person that saw both 'Lucas' and 'Bill'
*/

function killer(suspectInfo, dead) {
  let values = Object.values(suspectInfo);
  let keys = Object.keys(suspectInfo);
  let count = 0;
  for(let item of values) {
      for(let corp of dead) {
        item.includes(corp) ? count++ : count;
    }
    if(count == dead.length)  return keys[values.indexOf(item)];
    else count = 0;
  }
}

/* Clever best practice 
function killer(suspectInfo, dead) {
 return Object.keys(suspectInfo).find(x => dead.every(y => suspectInfo[x].includes(y)))
}
*/