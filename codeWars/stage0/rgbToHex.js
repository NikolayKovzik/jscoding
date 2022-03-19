/*
Complete rgbToHex function so that passing in RGB decimal values will result in 
a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255.
 Any values that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.
The following are examples of expected output values:

redgreenblue(255, 255, 255) // returns FFFFFF
redgreenblue(255, 255, 300) // returns FFFFFF
redgreenblue(0,0,0) // returns 000000
redgreenblue(148, 0, 211) // returns 9400D3
*/


function redgreenblue(...arr){
    return arr.map((item) => {
         return (item < 0) ? '00' 
                           : (item > 255) ? 'FF'
                           : (15 >= item  && item >=0) ? '0' + item.toString(16).toUpperCase() 
                           : item.toString(16).toUpperCase();
    }).join('');
  }


console.log(redgreenblue(1,1,1));
console.log(redgreenblue(0,0,0));
console.log(redgreenblue(173,255,47));
console.log(redgreenblue(255,255,255));
console.log(redgreenblue(-255,-255,-255));


console.log(redgreenblue(255, 255, 255) );
console.log(redgreenblue(255, 255, 300));
console.log(redgreenblue(0,0,0));
console.log(redgreenblue(148, 0, 211) );