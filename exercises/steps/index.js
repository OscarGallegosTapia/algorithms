// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

//1st solution
//for loop that iteriates through rows, row less than n
//declaire a new variable to an empty string
//for loop that iteriates through columns, columns less than n
//if statement 
//check if column is less than or equal to row
//if so return new variable string + a pound sign
//if not return an empty string + variable string


//2nd soltuon
//recursion
// add row and stair to arguements  row is equal to zero and stair is an empty string
// if statement that compares n and row
//return nothing
// if statement that checks if n is equal to stair length
//return steps and the arguements followed by + 1
//if statement that checks whether stair length is less than or equal to row
// 'return' stair + pound sign
// else return stair + empty string
// 'return' the 3 arguments

function steps(n) {
 
}

module.exports = steps;














//1st solution
// function steps(n) {
//     for (let row = 0; row < n; row++){
//         let stair = '';
//     for (let column = 0 ; column < n ; column++){
//         if (column <= row){
//             stair += '#'
//         } else {
//             stair += ' '
//         }
//     }
//     console.log(stair)
//     }
//     }


//2nd solutuin
// function steps(n, row = 0 , stair = '') {
//     if (n === row){
//         return;
//     }
//     if (n === stair.length){
//         console.log(stair);
//         return steps(n, row + 1)
//     }
//     if (stair.length <= row){
//         stair += '#'
//     } else {
//        stair += ' '
//     }
//     steps(n, row, stair)
//    }