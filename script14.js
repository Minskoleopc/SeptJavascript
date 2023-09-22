
//             0         1     2       3        4
let names = ["chinmay","sham","ram","satish","vijeet"]

// Array stores the value by index
console.log(names[0])

for(let i = 0 ; i < 5 ; i++){ // 1 // 2 // 3 // 4 // 5
    //console.log(i) // 0 // 1 // 2 // 3 // 4
    console.log(names[i])
}

// i = 0
// i = 1
// i = 2
// i = 3
// i = 4

// program 2
// Human 
// Properties - color , age
// Methods - talk(), walk()

//           0        1         2        3
let city = ["pune","mumbai","banglore","nagpur"]
console.log(city.length)
let q1 = city.length
console.log(q1)

console.log(city[0])
console.log(city[city.length-1])

// length-1 is always the last index

//                0     1        2        3
let flowers = ["lily","rose","jasmine","sunflower"]
for(let i = flowers.length -1 ; i >= 0 ; i--){
    //console.log(i)
    console.log(flowers[i])
}

// Gym -- 
// action - excercise 
// return - health


// push()
// action - add the element at last of array
// new lenth of array 

let city2 = ["karachi","lahore","delhi","banglore"]
let q22 = city2.push("wardha")
console.log(city2)
console.log(q22)

// unshift()
// action - add the element at start if array
// return - new length of array
let q33 = city2.unshift("pune")
console.log(q33)
console.log(city2)

// pop()
// action - removes the last element 
// return - same element

let vegetables = ["cabbage","carrot","potato","tomato"]
let q44 = vegetables.pop()
console.log(q44)
console.log(vegetables)

// shift()
// action - removes the firstName element 
// return - return same element

let q55 = vegetables.shift()
console.log(q55)
console.log(vegetables)

// includes()
// action - search for element
// if found return true else false 

let city3 = ["goa","banglore","delhi"]
let q66 = city3.includes('Goa')
console.log(q66)

// reverse()
let q77 = city3.reverse()
console.log(q77)





































