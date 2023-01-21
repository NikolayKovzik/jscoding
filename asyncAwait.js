// async function asyncFirst() {
//   console.log('asyncFirst')
//   await new Promise((res, rej) => {
//     setTimeout(() => { console.log('timeoutFirst'); }, 4000)
//     res('ultima')
//   }).then((x) => { console.log(x) });
//   console.log('don')
// }


// async function asyncSecond() {
//   console.log('asyncSecond')
//   await new Promise((res, rej) => {
//     setTimeout(() => { console.log('timeoutSecond'); }, 2000)
//     res('flex')
//   }).then((x) => { console.log(x) });
//   console.log('rondondon');
// }

// function sync() {
//   Promise.resolve(() => {
//     console.log('OMAGAD')
//   }).then((lol) => {
//     lol();
//   })
// }

// asyncFirst()
// asyncSecond()
// sync()
// console.log('end');


// asyncFirst asyncSecond end ultima flex OMAGAD don rondondon timeoutSecond timeoutFirst

// macro  
// micro


//*****************************/

function start3() {
	Promise.all([
    (async () => console.log(await resolveHello()))(),
    (async () => console.log(await resolveWorld()))(),
  ]);
}

