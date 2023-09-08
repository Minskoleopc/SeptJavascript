
// numT > 0 && numT <= 5  ======> 10 % discount
// numT > 5 && numT <= 10 ======> 20 % discount
// numT > 10              ======> 30 % discount

// if(condition){
//     // statement
// }

let numT = -56

// if(numT > 0 && numT <= 5){
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

// program 2

let marks = 50

// if(marks > 90){
//     console.log("Grade A")
// }
// if(marks > 76){
//     console.log("Grade B")
// }
// if(marks > 66){
//     console.log("Grade C")
// }

if(marks > 90){
    console.log("Grade A")
}
else if(marks > 76){
    console.log("Grade B")
}
else if(marks > 66){
    console.log("Grade C")
}
else {
    console.log('Fail please try again')
}

// program 3


let d = 10
let e = 5

if( d > e){
    console.log("d is greater")
}
else {
    console.log("e is greater")
}

let z = 100
let x = 66
let y = 44

if(x > y && x > z){
    console.log("x is greater")
}
else if(y > x && y > z){
    console.log("y is greater")
}
else {
    console.log("z is greater")
}


let q = 8
let r = 40

if(q > r){
    console.log("q is greater")
}
else {
    console.log("r is greater")
}

q > r ? console.log("q is greater"):console.log("r is greater")
let age = 18
let q2 = age >= 18 ? "can drive":"cannot drive"
console.log(q2)


let city = "bhopal"
// switch(city){
//     case "nagpur":
//         console.log("MH")
//     case "jaipur":
//         console.log("RJ")
//     case "indore":
//         console.log("MP")
//     default:
//         console.log("incorrect city name")
// }

// switch(city){
//     case "nagpur":
//         console.log("MH")
//         break
//     case "jaipur":
//         console.log("RJ")
//         break
//     case "indore":
//         console.log("MP")
//         break
//     default:
//         console.log("incorrect city name")
// }

switch(city){
    case "nagpur":
    case "wardha":
        console.log("MH")
        break
    case "jaipur":
    case "udaipur":
        console.log("RJ")
        break
    case "indore":
    case "bhopal":
        console.log("MP")
        break
    default:
        console.log("incorrect city name")
}


let x1 = 10
let x2 = 500
let x3 = 3000

let flag = true

switch(flag){
    case x1 > x2 && x1 > x3:
        console.log("x1 is greater")
        break
    case x2 > x1 && x2 > x3:
        console.log("x2 is greter")
        break
    default:
        console.log("x3 is greater")
}



//Truthy // Falsy values 


// 0 , undefined , null , NaN , 6 < 7 , false ,""

// "A", "@14", 124 ,-234 , [], {},4.6 , 8 == 8 , true


if(8 == 8){
    console.log("Hello")
}
else {
    console.log("Bye")
}




















