/*
Create a function strCount (takes an object as argument) that will count all string values inside an object. For example:

strCount({
  first: "1",
  second: "2",
  third: false,
  fourth: ["anytime",2,3,4],
  fifth:  null
  })
  
  (возвращает 3)
*/


function strCount(obj){
  let count = 0;
  for(let item of Object.values(obj)) {
    typeof item === "string" ? count++ : typeof item === "object" && item!== null ? (count += strCount(item)) : count;
    
  }
  return count;
}