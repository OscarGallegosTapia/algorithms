// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'


// 1st method convert to array

// 2nd method for of loop

//3rd method .split .reduce(which is a function)


function reverse(str) {

}

module.exports = reverse;

















//1st solution
// function reverse(str) {
//     // call split turns it into an array but each character invididually 
// return str.split('').reverse().join('')
// }

//2nd solution
// function reverse(str) {
//     let reversed = '';
//     for (let character of str){
//         reversed = character + reversed;
//     }
//     return reversed
// }

//3rd solution
// function reverse(str) {
//    return str.split('').reduce((rev, char)=> char + rev,'')
// }