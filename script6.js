// conditional statement 

// one input and multiple outcomes 


let numT = 17

if(numT > 0 && numT <= 5){
    console.log("10 % discount")
}
if(numT > 5 && numT <= 10){
    console.log("20 % discount")
}
if(numT > 10){
    console.log("30 % discount")
}

let numTa = -17

if(numTa > 0 && numTa <= 5){
    console.log("10 % discount")
}
else if(numTa > 5 && numTa <= 10){
    console.log("20 % discount")
}
else if(numTa > 10){
    console.log("30 % discount")
}
else {
    console.log("Incorrect input")
}

// program 2


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
//     console.log("Fail please try again")
// }


// program 3

let s = 100
let t = 50

if(s > t ){
    console.log("s is greater")
}
else {
    console.log("t is greater")
}

let x = 100
let y = 50
let z = 25

// if(x > y && x > z){
//     console.log("x is greater")
// }
// else if(y > x && y > z){
//     console.log("y is greater")
// }
// else {
//     console.log('z is greater')
// }


if(x > y){
    if(x> z){
        console.log('x is greater')
    }
    else {
        console.log('y is greater')
    }
}
else if(y > z){
    console.log("y is greater")
}
else {
    console.log("z is greater")
}

let q = 8 
let r  =  4
q > r ? console.log("q is greater"):console.log("r is greater")


// Program 1 

// Switch without break

let city = "indore"
switch(city){
    case "pune":
        console.log("MH")
    case "indore":
        console.log("MP")
    case "jaipur":
        console.log("RJ")
    case "varanasi":
        console.log("UP")
    default:
        console.log("incorrect city name")
}


// Program 2

// Switch case with break statement
let city2 = "Nagpur"
switch(city2){
    case "pune":
        console.log("MH")
        break
    case "indore":
        console.log("MP")
        break
    case "varanasi":
        console.log("UP")
        break
    case "jaipur":
        console.log("RJ")
        break
    default:
        console.log("incorrect city name")
}

// program 3

let city3 = "udaipur"
switch(city3){
    case "pune":
    case "nagpur":
        console.log("MH")
        break
    case "indore":
    case "bhopal":
        console.log("MP")
        break
    case "varasani":
    case "lucknow":
        console.log("UP")
        break
    case "jaipur":
    case "udaipur":
        console.log("RJ")
        break
    default:
        console.log("incorrect cityname")
}


// program 4
let a = 10
let b = 50
let c = 300
let isBiggest = true
switch(isBiggest){
    case   a > b && a > c:
        console.log("a is greater")
        break
    case  b > a && b > c:
        console.log("b is greater")
        break
    default:
        console.log("c is greater")


}






























