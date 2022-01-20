let str = "Hello";

// делает то же самое, что и
// for (let char of str) alert(char);

let iterator = str[Symbol.iterator]();

while (true) {
  let result = iterator.next();
  if (result.done) break;
  alert(result.value); // выводит символы один за другим
}



/*Такое редко бывает необходимо, но это даёт нам больше контроля над процессом, чем for..of. 
Например, мы можем разбить процесс итерации на части: перебрать немного элементов, затем остановиться, 
сделать что-то ещё и потом продолжить.*/