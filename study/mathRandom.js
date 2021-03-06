/*Случайное число от min до max

  Напишите функцию random(min, max),
  которая генерирует случайное число с плавающей точкой от min до max (но не включая max).


  Нам нужно преобразовать каждое значение из интервала 0…1 в значения от min до max.
  Это можно сделать в 2 шага:
1. Если мы умножим случайное число от 0…1 на max-min, тогда интервал возможных значений 
   от 0..1 увеличивается до 0..max-min.
2. И, если мы прибавим min, то интервал станет от min до max. Функция:
*/


function random(min, max) {
    return min + Math.random() * (max - min);
  }
  
    console.log( random(1, 5) );
    console.log( random(1, 5) );
    console.log( random(1, 5) );


 /*   Случайное целое число от min до max 

      Напишите функцию randomInteger(min, max), которая генерирует случайное целое (integer) число
      от min до max (включительно).
      Любое число из интервала min..max должно появляться с одинаковой вероятностью.
 

      Есть много правильных решений этой задачи. Одно из них – правильно указать границы интервала.
      Чтобы выровнять интервалы, мы можем генерировать числа от 0.5 до 3.5, это позволит добавить
      необходимые вероятности к min и max:
 */


      function randomInteger(min, max) {
        // получить случайное число от (min-0.5) до (max+0.5)
        let rand = min - 0.5 + Math.random() * (max - min + 1);
        return Math.round(rand);
      }
      
      console.log( randomInteger(1, 3) );


/* Другое правильное решение – это использовать Math.floor для получения случайного числа от min до max+1:*/

        function randomInteger2(min, max) {
            // случайное число от min до (max+1)
            let rand = min + Math.random() * (max + 1 - min);
            return Math.floor(rand);
        }
        
        console.log( randomInteger2(1, 3) );

/* Теперь все интервалы отображаются следующим образом:

число от 1  ... до 1.9999999999  округлится до 1
число от 2  ... до 2.9999999999  округлится до 2
число от 3  ... до 3.9999999999  округлится до 3
Все интервалы имеют одинаковую длину, что выравнивает вероятность получения случайных чисел.*/

















/*Напишите функцию shuffle(array), которая перемешивает (переупорядочивает случайным образом) 
  элементы массива.
  
  Простым решением может быть:



function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }
  
  let arr = [1, 2, 3];
  shuffle(arr);
  

console.log(shuffle(arr));
console.log(shuffle(arr));
console.log(shuffle(arr));
console.log(shuffle(arr));
console.log(shuffle(arr));
console.log(shuffle(arr));
console.log(shuffle(arr));
console.log(shuffle(arr));
console.log(shuffle(arr));




Это, конечно, будет работать, потому что Math.random() - 0.5 отдаёт случайное число, 
которое может быть положительным или отрицательным, следовательно, функция сортировки 
меняет порядок элементов случайным образом.
Но поскольку метод sort не предназначен для использования в таких случаях, 
не все возможные варианты имеют одинаковую вероятность.
Например, рассмотрим код ниже. Он запускает shuffle 1000000 раз и считает вероятность 
появления для всех возможных вариантов arr:

  function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }
  
  // подсчёт вероятности для всех возможных вариантов
  let count = {
    '123': 0,
    '132': 0,
    '213': 0,
    '231': 0,
    '321': 0,
    '312': 0
  };
  
  for (let i = 0; i < 1000000; i++) {
    let array = [1, 2, 3];
    shuffle(array);
    count[array.join('')]++;
  }
  
  // показать количество всех возможных вариантов
  for (let key in count) {
    alert(`${key}: ${count[key]}`);
  }

Результат примера (зависят от движка JS):

123: 250706
132: 124425
213: 249618
231: 124880
312: 125148
321: 125223

Теперь мы отчётливо видим допущенное отклонение: 123 и 213 появляются намного чаще, чем остальные варианты.
Результаты этого кода могут варьироваться при запуске на разных движках JavaScript, но очевидно, 
что такой подход не надёжен.
Так почему это не работает? Если говорить простыми словами, то sort это «чёрный ящик»: 
мы бросаем в него массив и функцию сравнения, ожидая получить отсортированный массив. 
Но из-за абсолютной хаотичности сравнений чёрный ящик сходит с ума, и как именно он сходит с ума, 
зависит от конкретной его реализации, которая различна в разных движках JavaScript.
Есть и другие хорошие способы решить эту задачу. Например, есть отличный алгоритм
под названием Тасование Фишера — Йетса. Суть заключается в том, 
чтобы проходить по массиву в обратном порядке и менять местами каждый элемент со случайным элементом,
который находится перед ним.
*/

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1)); // случайный индекс от 0 до i
  
      // поменять элементы местами
      // мы используем для этого синтаксис "деструктурирующее присваивание"
      // то же самое можно записать как:
      // let t = array[i]; array[i] = array[j]; array[j] = t
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  

console.log(shuffle(arr));
console.log(shuffle(arr));
console.log(shuffle(arr));
console.log(shuffle(arr));
console.log(shuffle(arr));
console.log(shuffle(arr));
console.log(shuffle(arr));
console.log(shuffle(arr));
console.log(shuffle(arr));

/*
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

let count = {
  '123': 0,
  '132': 0,
  '213': 0,
  '231': 0,
  '321': 0,
  '312': 0
};

for (let i = 0; i < 1000000; i++) {
  let array = [1, 2, 3];
  shuffle(array);
  count[array.join('')]++;
}

/*показать количество всех возможных вариантов: //

for (let key in count) {
  alert(`${key}: ${count[key]}`);
}
Пример вывода:

123: 166693
132: 166647
213: 166628
231: 167517
312: 166199
321: 166316
Теперь всё в порядке: все варианты появляются с одинаковой вероятностью.

Кроме того, если посмотреть с точки зрения производительности, то алгоритм «Тасование Фишера — Йетса» 
намного быстрее, так как в нём нет лишних затрат на сортировку.
*/