// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

//loop reference
//to iterate through an object you use IN
//to iterate through an array you use OF

//1st solution
// a) create a helper function 
// a) create a new object
// b) for of loop
// b) use regex to get rid of the space and special characters and use tolowercase

//create two new variables in the original function and use the helperfunction
//do an if statement and use object.keys to count the length
//then do a for in loop to compare the letters 

//2nd solution
// a) create a helper function 
// a) use regexp .replace . tolowercase . split . sort .join
// you do split sort and join of those because you want to convert it to an array , sort it and then make it an string again 
// use your helper function in the og function
// if statement to compare them
//return true or false




function anagrams(stringA, stringB) {


}




module.exports = anagrams;


//1st
// function anagrams(stringA, stringB) {
//     const aCharMap = buildCharMap(stringA)
//     const bCharMap = buildCharMap(stringB)

//     if (Object.keys(aCharMap).length !==Object.keys(bCharMap).length){
//         return false
//     } 
//     for (let char in aCharMap){
//         if (aCharMap[char]  !== bCharMap[char]){
//             return false
//         }
//     }
//     return true

// }

// function buildCharMap(str){
//     const charMap = {};
//     for (let char of str.replace(/[^\w]/g, '').toLowerCase()){
//         charMap[char] = charMap[char] + 1 || 1;
//     }
//     return charMap
// }


//2nd
// function anagrams(stringA, stringB) {
//     const newStrA = cleanString(stringA)
//     const newStrB = cleanString(stringB)
//     if (newStrA === newStrB){
//         return true
//     } else {
//         return false
//     }
    
//     }
    
//     function cleanString(str){
//         return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('')
//     }