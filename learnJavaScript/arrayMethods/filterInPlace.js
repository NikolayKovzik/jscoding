let arr = [5, 3, 8, 1, 4, 10, 11, 75, 12, 12, 12, 0, -1, -100, 1000, 9];

function filterRange (array, min, max) {

    for(let i=0; i <array.length; i++) {
        if(array[i] < min || array[i] > max) {
            array.splice(i,1);
            i--;
        }
    }
}


console.log( filterRange(arr, 4, 12) ); 

console.log( arr ); 