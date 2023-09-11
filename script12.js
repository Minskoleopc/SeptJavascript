
// for(let i = 1 ; i <= 5 ; i++){ // 2 // 3 // 4 // 5 // 6
//    if(i == 2){
//         continue
//    }
//    console.log(i) // 1 // 3 // 4 // 5
// }


// for(intialization ; conditionCheck ; increment/decrement){
//     // statement
// }

// intilialization
// while(condition){
//     // statement
//     // increment / decrement
// }


// program 1

let i1 = 1
while(i1 <= 3){
    console.log("hello") // "hello" , "hello" , "hello"
    i1++ ; // 2 // 3 // 4
    // cntrl + c
}
// program 2 print 1 to 5
let i2 = 1
while(i2 <= 5){
    console.log(i2)
    i2 ++
}

// program 3 print 5 to 1
let i3 = 5
while(i3 >= 1){
    console.log(i3)
    i3 --
}

// program 4 table of 2
let i4 = 2
while(i4 <= 20){
    console.log(i4)
    i4 = i4 + 2
}

let i5 = 1
while(i5<= 10){
    console.log(i5 * 2)
    i5 ++
}

// program 5 table of 5 in reverse
let i6 = 50
while(i6 >= 5){
    console.log(i6)
    i6 = i6 - 5
}


// break statement with while loop
let i7 = 1 
while(i7 <= 5){
    if(i7 == 3){
        break
    }
    console.log(i7) // 1 // 2
    i7 ++ //2 // 3
}


let i8 = 5
while(i8 >= 1){
    if(i8 == 2){
        break
    }
    console.log(i8)
    i8 --
}

let i9 = 1
while(i9 <= 5){
    if(i9 == 3){
        i9 ++ // 4
        continue
    }
    console.log(i9) //1 // 2 // 4 // 5
    i9 ++ // 2 // 3 // 5 // 6
}































