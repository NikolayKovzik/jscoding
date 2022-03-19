// The goal of this exercise is to convert a string to a new string where each character 
// in the new string is "(" if that character appears only once in the original string,
//  or ")" if that character appears more than once in the original string. 
//  Ignore capitalization when determining if a character is a duplicate.
// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 

function duplicateEncode(word) {
    let obj = {};
    let arr = word.toLowerCase().split('');
    arr.forEach((item) => {
        obj[item] ? obj[item]++ : obj[item] = 1
    })

    return arr.map((item) => {
        return (obj[item] && obj[item] !== 1) ? ')' : '('
    }).join('');
}


/*Best practice*/
function duplicateEncode(word) {
    word = word.toLowerCase();
    return word.replace(/./g, m => word.indexOf(m) == word.lastIndexOf(m) ? '(' : ')');
  }