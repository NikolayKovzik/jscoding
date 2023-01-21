const x = new Promise((res, rej) => {
  setTimeout(() => {
    console.log('first promise!')

    const y = new Promise((res, rej) => {
      setTimeout(() => {
        console.log('second promise!')
      }, 5000)
    });

    res(y);
  }, 5000)
});



/********************* */



// function fetchX() {
//   return new Promise((res) => {
//     setTimeout(() => {
//       res(5)
//     }, 3000)
//   })
// }

// function fetchY() {
//   return new Promise((res) => {
//     setTimeout(() => {
//       res(4)
//     }, 4000)
//   })
// }

// function add() {
//   console.log('xPromise ', xPromise)
//   console.log('yPromise ', yPromise)
//   return Promise.all([xPromise, yPromise]).then(function (values) {
//     return values[0] + values[1];
//   });
// }

// const xPromise = fetchX();
// const yPromise = fetchY();


// add().then(function (sum) {
//   console.log('xPromise ', xPromise)
//   console.log('yPromise ', yPromise)
//   console.log(sum);
// });



//medium

// const x = new Promise((res) => {
//   console.log('1')
//   setTimeout(() => {
//     console.log('2')

//     const y = new Promise((resolve) => {
//       console.log('3')
//       setTimeout(() => {
//         console.log('4')
//         resolve(32);
//       }, 1000);
//     });

//     res(y);
//   }, 1000);
// });

// x.then((res) => {
//   console.log("x.then : ", res);
// });

// 1 2 3 4 32
//micro 
//macro