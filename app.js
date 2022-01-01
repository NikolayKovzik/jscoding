 /*
function camelize (str) {

 let arrWithoutDash = str.split("-");

 arrWithoutDash.forEach((item,index,array) =>{

     if(index !== 0 && item!=='')
        array[index] = array[index][0].toUpperCase() + array[index].slice(1);
 });

 let arrWithoutEmptyElement = arrWithoutDash.filter((item,index,array) => item === "" ? false : true);

 return arrWithoutEmptyElement.join('');
}

alert(camelize("----background----color----"));// 'backgroundColor';
alert(camelize("---list----style----image----"));  // 'listStyleImage';
alert(camelize("webkit---transition---"));//'WebkitTransition';
alert(camelize("background-color----"));// 'backgroundColor';
alert(camelize("list-style-image---"));  // 'listStyleImage';
alert(camelize("webkit-transition---"));//'WebkitTransition';



/*
function copySorted(arr) {

  let sortedArr = arr.slice(0);

  return sortedArr.sort();
}


let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); 
*/



function repeatStr (n, s) {
    let res = "";
    
    while(n!=0) {
      
    res += s;
    --n;
    } 
    return res;
  }
  
  
  alert(repeatStr(1, 'c'));
  alert(repeatStr(2, 'ha'));
  alert(repeatStr(3, 'e'));
  
  