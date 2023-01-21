

/********************************* */

// const data = {
//   result: 0,
//   numbers: [1, 2, 3],
//   computeResult() {
//     const getSum = () => {
//       return this.numbers.reduce((total, value) => total + value, 0)
//     }
//     this.result = getSum();
//   }
// }

// data.computeResult();
// console.log(data.result)




/*** */
// 'use strict'

// let name = "MMM"


// setTimeout(() => {
//   let name = 'KKK';
//   sayName();
// }, 100)

// const sayName = () => {
//   console.log(name)
// }

/*** */


// const baseURL = "https://base-url";

// const buildImagePath = () => {
//   const baseURL = "https://image-url";

//   return (url) => { // /image/path
//     return `${baseURL}${url}`;  //"https://image-url";
//   };
// };

// const getImage = (url) => {  
//   const baseURL = "https://image-url-number-2";
//   return buildImagePath()(url);
// };

// console.log(getImage("/image/path")); 

/****** */



// const myPromise = () => Promise.resolve().then(() => console.log('1'));

// const firstFunction = () => {
//   setTimeout(() => console.log('2'), 0);
//   myPromise();
// }

// async function secondFunction() {
//   await new Promise((resolve)=> {
//     console.log('3');
//     resolve();
//   })

//   console.log('4');
// }

// console.log('5');
// firstFunction();
// secondFunction();




/**** */


// let user = {
//   name: "Джон",
//   hi() { console.log(this.name); },
//   bye() { console.log("Пока"); }
// };

// user.hi(); // ok

// (user.name == "Джон" ? user.hi : user.bye)(); // ups


// function Exmp() {
//   console.log(1);

//   setTimeout(() => {
//     console.log(2);
//   }, 0);

//   new Promise((res, rej) => {
//     console.log(3);
//     res(4);
//   }).then((a) => console.log(a));

//   new Promise((res, rej) => {
//     console.log(5);
//     throw new Error("ERROR!");
//     res(6);
//   })
//     .then((a) => console.log(a))

//   console.log(7);
// }

// Exmp();




