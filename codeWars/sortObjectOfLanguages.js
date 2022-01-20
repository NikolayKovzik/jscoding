/*
You are given a dictionary/hash/object containing some languages and your test results in the given languages.
Return the list of languages where your test score is at least 60, in descending order of the results.

Examples
{"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
{"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
{"C++": 50, "ASM": 10, "Haskell": 20}     -->  []
*/

function myLanguages(results) {
    let arr = [];
    let entries = Object.entries(results);
    entries.sort((a,b) => b[1]-a[1]);
    
    for(let item of entries) {
      if( item[1] >= 60) 
        arr.push(item[0]);
    }
      
    return arr;
}


/* Best practices

function myLanguages(results) {
  return Object.keys(results).filter(r => results[r] > 59).sort((a,b) => results[b] - results[a]);
}

*/