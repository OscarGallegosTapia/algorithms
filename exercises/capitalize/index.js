// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

//1st soliution
//set up a new array
//for let of loop
//split and empty string
//push it to the new array
//only get the first letter and uppercase it
// slice it
//return the new array with join and empty string

//2nd solution
// set up a new variable that takes the arguments first character to uppercase
//for let loop
//if else statement
// first check if the current character youre on is preceeded by an empty string
// if so you want to add it to the new variable you decalre and touppercase
//else you just add it to the new varibale
//finally make syre you return

function capitalize(str) {

}

module.exports = capitalize;












//1st solution
// function capitalize(str) {
//     const words = [];

//     for (let word of str.split(' ')){
//        words.push(word[0].toUpperCase() + word.slice(1))
//     }
// return words.join(' ')
// }



//2ns solution
// function capitalize(str) {
//     let result = str[0].toUpperCase();
 
//     for (let i = 1; i < str.length; i++){
//         if (str[i-1] === " "){
//             result += str[i].toUpperCase()
//         } else {
//             result +=str[i]
//         }
//     }
//     return result
//  }