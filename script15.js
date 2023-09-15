

let names = ["chinmay","shirish","ram","satish"]
// ["satish","ram","shirish","chinmay"]

let q1 = names.push("sam")
console.log(names)
let q2 = names.unshift("sam")
console.log(q2)
let q3  = names.pop()
console.log(q3)
let q4 = names.shift()
console.log(q4)
let q5 = names.reverse()
console.log(q5)
let q6 = names.includes('ram')
console.log(q6)
let q7 = names.indexOf('shirish')
console.log(q7)

// program 1
//                0       1     2    3 
let birthYear = [1989,1990 ,1991 ,1992]
let calAge = [] 
// [34,33,32,31]

for(let i = 0 ; i < birthYear.length ; i++){
    //console.log(i)
    //console.log(birthYear[i])
    //console.log(2023 - birthYear[i])
    let ag = 2023 - birthYear[i]
    calAge.push(ag)
}
console.log(calAge)

// program 2 

let numbers = [45,66,77,44,88,99,33,55]
let above50 = [] // [66,77,88,99,55]
//[66,77,88,99,55]

for(let i = 0 ; i < numbers.length ; i++){
    //console.log(i)
    console.log(numbers[i])
    if(numbers[i] > 50){
        above50.push(numbers[i])
    }
}
console.log(above50)

// program 3

let marks = [11,22,33]
// 11+22+33  ==> 66
let total = 0

for(let i = 0 ; i < marks.length ; i++){
    //console.log(i)
    //console.log(marks[i])

    total = total + marks[i]

    //        0   +   11  ======> 11
    //        11  +    22 ======> 33
    //        33  +    33  ======> 66
}

console.log(total)

