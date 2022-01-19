/*Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.

Задание состоит из двух частей.

1. Во-первых, реализуйте метод calculate(str), который принимает строку типа "1 + 2" 
   в формате «ЧИСЛО оператор ЧИСЛО» (разделено пробелами) и возвращает результат. 
   Метод должен понимать плюс + и минус -.
2. Затем добавьте метод addMethod(name, func), который добавляет в калькулятор новые операции. 
   Он принимает оператор name и функцию с двумя аргументами func(a,b), которая описывает его.
   Например, давайте добавим умножение *, деление / и возведение в степень **:
*/

function Calculator() {

    this.operators = [];
    this.functions = [];

    this.calculate = function(str) {

        let arr = [];

        if(str.includes("+")) {
             arr=str.split(" + ");
             return +arr[0] + +arr[1];
        }

        if(str.includes("-")) {
            arr = str.split(" - ");
            return +arr[0] - +arr[1];
        }
        
        for(let i=0; i < this.operators.length; i++) {
             if(str.includes(this.operators[i])) {
                arr = str.split(this.operators[i]);
                return this.functions[i](+arr[0], +arr[1]);
             }
        }
    }

    this.addMethod = function(name,func) {
        this.functions.push(func);
        this.operators.push(name);
    }
}


let powerCalc = new Calculator;
powerCalc.addMethod(" * ", (a, b) => a * b);
powerCalc.addMethod(" / ", (a, b) => a / b);
powerCalc.addMethod(" ** ", (a, b) => a ** b);


console.log( powerCalc.calculate("2 ** 3") ); 
console.log( powerCalc.calculate("3 ** 4") ); 
console.log( powerCalc.calculate("2 - 1") ); 
console.log( powerCalc.calculate("12 / 3") ); 
console.log( powerCalc.calculate("17 * 2") ); 



/*
function Calculator() {

  this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b
  };

  this.calculate = function(str) {

    let split = str.split(' '),
      a = +split[0],
      op = split[1],
      b = +split[2]

    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }

    return this.methods[op](a, b);
  }

  this.addMethod = function(name, func) {
    this.methods[name] = func;
  };
}
*/