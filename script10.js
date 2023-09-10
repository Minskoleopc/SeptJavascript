
// Logical operator 

// AND  - && 

// true  &&   true  -----> true 
// false &&   true -----> false
// true  &&   false -----> false 
// false &&   false -----> false


console.log(7 == 7 && 8 ==8 )
console.log(7 != 7 && 8 ==8 )
console.log(7 == 7 && 8 !=8 )
console.log(7 != 7 && 8 !=8 )



// OR  -- ||


// true  ||   true  -----> true 
// false ||   true -----> true
// true  ||   false -----> true 
// false ||   false -----> false


console.log(6 == 6 || 7 == 7)
console.log(6 != 6 || 7 == 7)
console.log(6 == 6 || 7 != 7)
console.log(6 != 6 || 7 != 7)


// NOT

// true ------> false 
// false -----> true

console.log(!(7 == 7))
console.log(!(7 != 7))


// conditional statement 
// if(condition){
//     // statement
// }

// numT > 0 && numT <= 5  =====> 10 % discount
// numT > 5 && numT <= 10 =====> 20 % discount
// numT > 10              =====> 30 % discount


let numT = -17

// if(5 > 0 && 5 <= 5){
//     console.log("10 % discount")
// }
// if(numT > 5 && numT <= 10){
//     console.log("20 % discount")
// }
// if(numT > 10){
//     console.log("30 % discount")
// }


if(numT > 0 && numT <= 5){
    console.log("10 % discount")
}
else if(numT > 5 && numT <= 10){
    console.log("20 % discount")
}
else if(numT > 10){
    console.log("30 % discount")
}
else {
    console.log("incorrect input")
}


let marks = 54

// if(marks > 90){
//     console.log("Grade A")
// // }

// if(marks > 75){
//     console.log("Grade C")
// }

// if(marks > 65){
//     console.log("Grade C")
// }

if(marks > 90){
    console.log("Grade A")
}

else if(marks > 75){
    console.log("Grade B")
}

else if(marks > 65){
    console.log("Grade C")
}
else {
    console.log("Fail please try again")
}













 














// NOR