
// function onFullfillment(data) {
//   console.log('OnFullFillment Method: ', data)
// }

// function onRejection(err) {
//   console.log('onRejection Method: ', err)
// }


//! IT'S WORKING

// new Promise((resolve, reject) => {
//   throw new Error("Ошибка!");
// }).catch(console.log);                           //? РАБОТАЕТ ТОЛЬКО В БРАУЗЕРЕ


//***********************************/


// new Promise((resolve, reject) => {
//   reject(new Error("Ошибка!"));
// }).catch(console.log);                            //? РАБОТАЕТ ТОЛЬКО В БРАУЗЕРЕ


//************************************/


// new Promise((resolve, reject) => {
//   reject(new Error("Ошибка!"));
// }).catch(onRejection);                            //? РАБОТАЕТ ТОЛЬКО В БРАУЗЕРЕ


//*********************************/


// new Promise((resolve, reject) => {
//   throw new Error("Ошибка!");
// }).catch(onRejection);                                //? РАБОТАЕТ ТОЛЬКО В БРАУЗЕРЕ


//**************************************/


// const x = new Promise((resolve, reject) => {
//   throw new Error("Ошибка!");
// })

// x.catch(console.log);                                 //? РАБОТАЕТ ТОЛЬКО В БРАУЗЕРЕ


//*************************************/



// const x = new Promise((resolve, reject) => {
//   throw new Error("Ошибка!");
// })

// x.catch(onRejection);                                //? РАБОТАЕТ ТОЛЬКО В БРАУЗЕРЕ



// new Promise((resolve, reject) => {
//   throw new Error("Ошибка!");
// }).then(console.log, console.log);                    //? РАБОТАЕТ ТОЛЬКО В БРАУЗЕРЕ


//********************************/


// new Promise((resolve, reject) => {
//   reject(new Error("Ошибка!"));
// }).then(console.log, console.log);                    //? РАБОТАЕТ ТОЛЬКО В БРАУЗЕРЕ



//********************************/



// new Promise((resolve, reject) => {
//   reject(new Error("Ошибка!"));
// }).then(onFullfillment, onRejection);                   //? РАБОТАЕТ ТОЛЬКО В БРАУЗЕРЕ


//********************************/

// new Promise((resolve, reject) => {
//   throw new Error("Ошибка!");
// }).then(onFullfillment, onRejection);                       //? РАБОТАЕТ ТОЛЬКО В БРАУЗЕРЕ


//********************************/


// const x = new Promise((resolve, reject) => {
//   throw new Error("Ошибка!");
// })

// x.then(onFullfillment, onRejection);                          //? РАБОТАЕТ ТОЛЬКО В БРАУЗЕРЕ                    


//*************************************/


// const x = new Promise((resolve, reject) => {
//  throw new Error("Ошибка!");
// })

// x.then(onFullfillment, onRejection);                            //? РАБОТАЕТ ТОЛЬКО В БРАУЗЕРЕ     


//********************************/




//********************************/




//********************************/




//********************************/

// function onFullfillment(data) {
//   throw new Error('err')
//   console.log('OnFullFillment Method: ', data)
// }


// new Promise((resolve, reject) => {  
//   resolve(32)
// }).then(onFullfillment).catch(onRejection);  // catch error


// new Promise((resolve, reject) => {
//   resolve(32)
// }).then(onFullfillment, onRejection)      // don't work



//! IT'S NOT WORKING












// const prom = new Promise(function(resolve, reject) { 
// 	throw new Error('my message');
//  // reject(444);
// }).catch(onRejection);



// prom.then(onFullfillment, onRejection)

// prom.then(onFullfillment).catch(onRejection)
// prom.catch(onRejection)



// fetch('https://no-such-server.blabla') // ошибка
//   .then(response => response.json())
//   .catch(err => console.log(err)) 