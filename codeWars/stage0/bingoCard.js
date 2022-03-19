/*

A Bingo card contains 24 unique and random numbers according to this scheme:
5 numbers from the B column in the range 1 to 15
5 numbers from the I column in the range 16 to 30
4 numbers from the N column in the range 31 to 45
5 numbers from the G column in the range 46 to 60
5 numbers from the O column in the range 61 to 75

The card must be returned as an array of Bingo style numbers:
[ 'B14', 'B12', 'B5', 'B6', 'B3', 'I28', 'I27', ... ]
The numbers must be in the order of their column: B, I, N, G, O. 
Within the columns the order of the numbers is random.
*/


function random(min, max) {
    return Math.round(min - 0.5 + Math.random() * (max - min + 1));
  }
  

function getCard() {
    let bingoCard = [];
    let cardString = new Set();
    let min = 1;
    let max = 15;
    let letterNumber = 0;
    let stringLength;
    let current = null;
    let letters = ['B','I','N','G','O'];

    while( letterNumber < letters.length) {
        (letterNumber === 2) ? stringLength = 4 : stringLength = 5;
        while(cardString.size < stringLength) {
            current = random(min,max);
            if(!cardString.has(current)) {
                cardString.add(current);
                bingoCard.push(letters[letterNumber] + current)
            }      
        } 
        cardString.clear();
        min+=15;
        max+=15;
        letterNumber++;
    }
    return bingoCard;
}