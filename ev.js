
new Promise((res) => {   // {value: undefined, state pending}
  setTimeout(() => {
    console.log('firstTimeout')
		res(Promise.resolve(333)) // {value 333 state fullfilled}
  }, 1000)
}).then((x) => {   
  console.log(x);
})

new Promise((res) => {
  setTimeout(() => {      
		console.log('secondTimeout')
    res('secondProm')
  }, 1000)
}).then((x) => {          
  console.log(x)          
})