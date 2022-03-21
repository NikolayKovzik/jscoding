// Pair of gloves
// Winter is coming, you must prepare your ski holidays. The objective of this kata 
// is to determine the number of pair of gloves you can constitute from the gloves you have in your drawer.

// Given an array describing the color of each glove, return the number of pairs you can constitute, 
//assuming that only gloves of the same color can form pairs.

// Examples:
// input = ["red", "green", "red", "blue", "blue"]
// result = 2 (1 red pair + 1 blue pair)
// input = ["red", "red", "red", "red", "red", "red"]
// result = 3 (3 red pairs)

function numberOfPairs(gloves){
    let obj = {};
    let res = 0;
    gloves.forEach((item)=>{
      obj[item] ? ++obj[item] : obj[item]=1
    })
    
    for(key in obj){
      res += Math.floor(obj[key]/2)
    }
    
    return res
  }


  //best practice 
/*  function numberOfPairs(gloves) {

    var pairs = 0
    ,  counts = {};
    
    for (var color of gloves) {
    
      if (!counts.hasOwnProperty(color))
        counts[color] = 0;
  
      if (++counts[color] === 2) {
        counts[color] -= 2;
        pairs++;
      }
    }
      
    return pairs;
  }
  */