
function reverseInt(number) {

    return Math.abs(number).toString(10).split('').reverse().join('');
}

console.log(reverseInt(124353));
console.log(reverseInt(7755443));
console.log(reverseInt(-345324356678999));
console.log(reverseInt(-111112222));
console.log(reverseInt(34455667981111));