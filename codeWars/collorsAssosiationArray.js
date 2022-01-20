
/*You are given a 2D array, composed of a colour and its 'common' association in each array element.
 The function you will write needs to return the colour as 'key' and association as its 'value'.
 For Example:

 var array = [["white", "goodness"], ...] //returns [{white: 'goodness'}, ...]
*/

function colourAssociation(array) {
 return array.map( function(item) { 
        return {[item[0]] : item[1]};
  });
}



/* or 

function colourAssociation(array){
 return array.map( (item) => ( {[item[0]] : item[1]}) );
}

*/