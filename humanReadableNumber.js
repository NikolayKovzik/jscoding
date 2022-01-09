
function toReadable(number) {

    let result = '';

    let arr = String(number).split('');

    console.log(number);

    if(number>=0 && number<=19) {
        switch(number) {
            case 0: result += 'zero';  break;
            case 1: result += 'one';  break;
            case 2: result += 'two';  break;
            case 3: result += 'three';  break;
            case 4: result += 'four';  break;
            case 5: result += 'five';  break;
            case 6: result += 'six';  break;
            case 7: result += 'seven';  break;
            case 8: result += 'eight'; break;
            case 9: result += 'nine';  break;
            case 10: result += 'ten'; break;
            case 11 : result += 'eleven';  break;
            case 12 : result += 'twelve';  break;
            case 13 : result += 'thirteen';  break;
            case 14 : result += 'fourteen';  break;
            case 15 : result += 'fifteen';  break;
            case 16 : result += 'sixteen';  break;
            case 17 : result += 'seventeen';  break;
            case 18 : result += 'eighteen';  break;
            case 19 : result += 'nineteen';   break;
            default: result += 'error';
        }
    }

    if(number>=20 && number <=99) {


        switch(arr[0]) {
            case '2': result += 'twenty';  break;
            case '3': result += 'thirty';  break;
            case '4': result += 'forty'; break;
            case '5': result += 'fifty';  break;
            case '6': result += 'sixty';  break;
            case '7': result += 'seventy';  break;
            case '8': result += 'eighty'; break;
            case '9': result += 'ninety';  break;
            default: return 'error';
        }

        if(arr[1] !== '0') {
            result += ' ' + toReadable(Number(arr[1]));
        } else {
            result += '';
        }

    }


    if(number>=100 && number <=999) {
        switch(arr[0]) {
            case '1': result += 'one hundred';  break;
            case '2': result += 'two hundred';  break;
            case '3': result += 'three hundred';  break;
            case '4': result += 'four hundred'; break;
            case '5': result += 'five hundred';  break;
            case '6': result += 'six hundred';  break;
            case '7': result += 'seven hundred';  break;
            case '8': result += 'eight hundred'; break;
            case '9': result += 'nine hundred';  break;
            default: return 'error ';
        }

        if(arr[1] == '0' && arr[2]!=='0') {
            result += ' ' + toReadable(Number(arr[2]));
        }
        
        if(arr[1] == '0' && arr[2] =='0') {
            result += '';
        }

        if(arr[1] !== '0' ) {
            result += ' ' + toReadable(Number(arr[1] + arr[2]));
        }


    }

    return result;
}




console.log(toReadable(100));
console.log(toReadable(800));
console.log(toReadable(899));
console.log(toReadable(456));
console.log(toReadable(350));
console.log(toReadable(301));


