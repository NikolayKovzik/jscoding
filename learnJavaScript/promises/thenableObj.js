class Thenable {
  constructor(num) {
    this.num = num;
  }
  then(resolve, reject) {                           // это не тот же самый then, что и (*)
                                                    // это метод объекта, а на строке (*)
                                                    // находится внутренняя функция JS
    console.log(arguments);
    
    setTimeout(() => resolve(this.num * 2), 1000);  //ТУТ ВЫЗЫВАЕТСЯ ИМЕННО resolve, 
                                                    //на learnjs нет ошибки!
                                                    //затем этот resolve передаёт результат в скобках
                                                    //в сonsole.log/alert
  }
}

new Promise(resolve => resolve(1))
  .then(result => {
    return new Thenable(result); 
  })
  .then(console.log);                               // (*)
  //.then(alert);


// /****************************** */ COMPARE WITH /****************************** */

// class Thenable {
//   constructor(num) {
//     this.num = num;
//   }
//   then(resolve, reject) {
//     console.log(arguments);
//     setTimeout(() => resolve(this.num * 2), 1000);
//   }
// }

// new Promise(resolve => resolve(1))
//   .then(function result(one) {
//     console.log(one);
//     return new Thenable(one);
//   })
//   .then()
//   .then(function x(two) {
//     console.log(two)
//   });


// /****************************** */ COMPARE WITH /****************************** */

// class Thenable {
//   constructor(num) {
//     this.num = num;
//   }
//   then(resolve, reject) {
//     console.log(arguments);
//     setTimeout(() => resolve(this.num * 2), 1000);
//   }
// }

// function FUCK(fuck) {
//   console.log(`FUCK ME PLEASE ${fuck}`)
// }

// new Promise(resolve => resolve(1))
//   .then(function result(one) {
//     console.log(one);
//     return new Thenable(one);
//   })
//   .then(FUCK)
//   .then(function x(two) {
//     console.log(two)
//   });