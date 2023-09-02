// numT > 0 && numT <= 5  -------->  10 % discount
// numT > 5 && numT <= 10 -------->  20 % discount 
// numT > 10              -------->  30 % discount

let numT = 17
if(numT > 0 && numT <=5){
    console.log("10 % discount")
}
if(numT > 5 && numT <= 10){
    console.log("20 % discount")
}
if(numT > 10){
    console.log("30 % discount")
}

// program 2
let numTa = -17

if(numTa > 0 && numTa <=5){
    console.log("10 % discount")
}
else if(numTa > 5 && numTa <= 10){
    console.log("20 % discount")
}
else if(numTa > 10){
    console.log("30 % discount")
}
else {
    console.log("incorrect input")
}

// program 3

let marks = 56

// if(marks > 90){
//     console.log("Grade A")
// }
// if(marks > 75){
//     console.log("Grade B")
// }
// if(marks > 65){
//     console.log("Grade C")
// }

// if(marks > 90){
//     console.log("Grade A")
// }
// else if(marks > 75){
//     console.log("Grade B")
// }
// else if(marks > 65){
//     console.log("Grade C")
// }
// else {
//     console.log("Fail try")
// }

// program 3

let a = 10
let b = 50

if(a > b){
    console.log("a is greater")
}
else {
    console.log("b is greater")
}

// program 4

let x = 10
let y = 50
let z = 300

if(x > y && x > z){
    console.log("x is greater")
}
else if(y > x && y >z){
    console.log("y is greater")
}
else{
    console.log("z is greater")
}


x = 1000
y = 5000
z = 3000

if(x > y){
    if(x > z){
        console.log("x is greater")
    }
    else {
        console.log("z i greater")
    }
}
else if(y > z){
    console.log("y is greater")
}
else {
    console.log("z is greater")
}




































