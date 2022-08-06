console.log(null > undefined); // false
console.log(null < undefined); // false
console.log(null ==  undefined); //true  -- равны только сами себе


//Объекты при численном преобразованнии приводятся к NaN (если нет специального метода)
//сравнение чего либо с NaN будет возвращать false, даже сравнение NaN с NaN
console.log(NaN < 100); // false
console.log(NaN > 100); // false
console.log(NaN == 100); // false
console.log({} < 100); // false
console.log({} > 100); // false
console.log({} == 100); // false


