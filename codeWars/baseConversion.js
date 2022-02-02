/*
The function convert() should take an input (string), the source alphabet (string) 
and the target alphabet (string). You can assume that the input value always consists of characters
from the source alphabet. You don't need to validate it.

The function convert() should take an input (string), the source alphabet (string)
and the target alphabet (string). You can assume that the input value 
always consists of characters from the source alphabet. You don't need to validate it.

var Alphabet = {
  BINARY:        '01',
  OCTAL:         '01234567',
  DECIMAL:       '0123456789',
  HEXA_DECIMAL:  '0123456789abcdef',
  ALPHA_LOWER:   'abcdefghijklmnopqrstuvwxyz',
  ALPHA_UPPER:   'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  ALPHA:         'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
  ALPHA_NUMERIC: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
};


convert("15", Alphabet.DECIMAL, Alphabet.BINARY); // should return "1111"
convert("15", Alphabet.DECIMAL, Alphabet.OCTAL); // should return "17"
convert("1010", Alphabet.BINARY, Alphabet.DECIMAL); // should return "10"
convert("1010", Alphabet.BINARY, Alphabet.HEXA_DECIMAL); // should return "a"
convert("0", Alphabet.DECIMAL, Alphabet.ALPHA); // should return "a"
convert("27", Alphabet.DECIMAL, Alphabet.ALPHA_LOWER); // should return "bb"
convert("hello", Alphabet.ALPHA_LOWER, Alphabet.HEXA_DECIMAL); // should return "320048"
convert("SAME", Alphabet.ALPHA_UPPER, Alphabet.ALPHA_UPPER); // should return "SAME"

Additional Notes:

The maximum input value can always be encoded in a number without loss of precision in JavaScript. 
The function must work for any arbitrary alphabets, not only the pre-defined ones
You don't have to consider negative numbers
*/


function convert(input, source, target) {
    let targetBase = target.length;
    let result = [];
    
    input = input.split('').reverse().reduce((result,current,index)=>{
      return result + source.indexOf(current)*Math.pow(source.length,index);
                            },0);

    if(input < targetBase)
      return target[input].toString();
  
    while(input >= targetBase){
        result.push(target[input%targetBase]);
        input = Math.floor(input/targetBase);
    }
    result.push(target[input]);
    return result.reverse().join('');
  }


  console.log(convert("27",'0123456789','abcdefghijklmnopqrstuvwxyz'));
  console.log(convert("10000",'0123456789','01'));
  console.log(convert("1024",'0123456789','01'));
  console.log(convert("f1e2a",'0123456789abcdef','0123456789'));
  console.log(convert("56322",'0123456789','0123456789abcdef'));
  console.log(convert("999",'0123456789','01234567'));
  console.log(convert("103421",'012345','01234567'));