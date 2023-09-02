
// Logical operator

// AND - && 
// True   &&  True  -------> True
// False  &&  True  -------> False
// True   &&  False -------> False
// False  &&  False -------> False

console.log(3 === 3 && 7 < 8)
console.log(6 != 6 && 8 == 8)
console.log(7 == 7 && 8 == 7)
console.log(7 == 6 && 8 == 9)

// OR - ||
// True   ||  True  -------> True
// False  ||  True  -------> True
// True   ||  False -------> True
// False  ||  False -------> False

console.log(4 == 4 || 5 == 5)
console.log(4 != 4 || 5 == 5)
console.log(7 == 7 || 6 != 6)
console.log(8 === '8' || 9 === '9')

// NOT !
console.log(!(7 === 7))
console.log(!(7 !== 7))

// conditional statements
// one and multiple outcomes
// numT > 0 && numT <= 5  -------> 10 % discount
// numT > 5 && numT <= 10 -------> 20 % discount 
// numT > 10              -------> 30 %
// if(condition){
//    // statements
// }

let numT = -67
// if(numT > 0 && numT <= 5){
//     console.log("10 % discount")
// }
// if(numT > 5 && numT <= 10){
//     console.log("20 % discount")
// }
// if(numT > 10){
//     console.log("30 % discount")
// // }

// if(numT > 0 && numT <= 5){
//     console.log("10 % discount")
// }
// else if(numT > 5 && numT <= 10){
//     console.log("20 % discount")
// }
// else if(numT > 10){
//     console.log("30 % discount")
// }
// else {
//     console.log("Incorrect input")
// }
// console.log('hello')





























