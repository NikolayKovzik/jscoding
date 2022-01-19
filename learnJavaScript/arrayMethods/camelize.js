/* Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
   То есть дефисы удаляются, а все слова после них получают заглавную букву.
*/
function camelize (str) {

 let arrWithoutDash = str.split("-");

 arrWithoutDash.forEach((item,index,array) =>{

     if(index !== 0 && item!=='')
        array[index] = array[index][0].toUpperCase() + array[index].slice(1);
 });

 let arrWithoutEmptyElement = arrWithoutDash.filter((item,index,array) => item === "" ? false : true);

 return arrWithoutEmptyElement.join('');
}

console.log(camelize("----background----color----"));// 'backgroundColor';
console.log(camelize("---list----style----image----"));  // 'listStyleImage';
console.log(camelize("webkit---transition---"));//'WebkitTransition';
console.log(camelize("background-color----"));// 'backgroundColor';
console.log(camelize("list-style-image---"));  // 'listStyleImage';
console.log(camelize("webkit-transition---"));//'WebkitTransition';









  

  
  