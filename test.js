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


console.log(myLanguages({"Java" : 10, "Ruby" : 80, "Python" : 65}));

