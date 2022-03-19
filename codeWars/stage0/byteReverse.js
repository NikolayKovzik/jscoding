/*A stream of data is received and needs to be reversed.

Each segment is 8 bits long, meaning the order of these segments needs to be reversed, for example:

11111111  00000000  00001111  10101010
 (byte1)   (byte2)   (byte3)   (byte4)
should become:

10101010  00001111  00000000  11111111
 (byte4)   (byte3)   (byte2)   (byte1)
 */

 function dataReverse(data) {
    let arr = [];
     
    while(data.length){
      arr.push(data.splice(0,8))
    }

    arr.reverse();

     for(let item of arr){
       data = data.concat(item);
     }
    
     return data;
   }


   console.log(dataReverse([1,1,1,1,1,1,1,1, 0,0,0,0,0,0,0,0, 0,0,0,0,1,1,1,1, 1,0,1,0,1,0,1,0]));


   /* best practice
   function dataReverse(data) {
        let a = [];
        while (data.length)
        a.unshift(...data.splice(0, 8));
        return a;
    }
   */