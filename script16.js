
//  map()

let birthYear = [1990 , 1991,1992 ,1993]
// [33,32,31,30]
let q1 = birthYear.map(function(el,index,arr){
    //console.log(el,index,arr)
    return 2023 - el
})
console.log(q1)

let numbers = [11,22,33,44,55]
//[13,24,35,46,57]
let q2 = numbers.map(function(el,index,arr){
    return el + 2
})
console.log(q2)


// filter()
let marks = [33,44,55,66,33,44,55]
// [55,66,55]

let q3 = marks.filter(function(el){
    return el > 50
})
console.log(q3)

// reduce()
let transaction = [11,22,33] // 66
let q4 = transaction.reduce(function(acc,el,index,arr){
    return el + acc // 66
},0)
console.log(q4)


//forEach() // will not return anything
let cities = ["pune","mumbai","banglore"]
cities.forEach(function(el){
    console.log("welcome "+ el)
})



// find()
//           0  1  2  3  4
let names = [44,55,77,88,44]
// [55,77,88]
let q6 = names.filter(function(el){
    return el > 50
})
console.log(q6)

let q7 = names.find(function(el){
    return el > 50
})
console.log(q7)

let q8 = names.findIndex(function(el){
    return el > 50
})
console.log(q8)


let nums = [55,60,77,33,45,66,77]
let q9 = nums.every(function(el,index,arr){
    return el > 30
})

console.log(q9)

let q10 = nums.some(function(el,index,arr){
    return el < 10
})

console.log(q10)




// findIndex()


// some()


// every()