
let a = 10
console.log(a)
a = 1000
console.log(a)


const h = 10000
console.log(h)
//h = 100000


// Arithmetic 

let s = 10
let t = 5

console.log(s + t)
console.log(s - t)
console.log(s * t)
console.log(s / t)
console.log(s * t)

let q = 8
let r = 4

console.log(q + r)
console.log(q - r)
console.log(q * r)
console.log(q / r)
console.log(q % r)

function Calculator(x, y) {
    console.log(x + y)
    console.log(x - y)
    console.log(x * y)
    console.log(x / y)
    console.log(x % y)
}
Calculator(1, 4)
Calculator(11, 4)
Calculator(10, 4)


function addA() {
    console.log(9 + 9)
}
addA()
addA()
addA()
addA()
addA()


function addB(x, y) {
    console.log(x + y)
}
addB(12, 4)
addB(8, 4)
addB(12, 2)
addB(8, 1)

function addC(x, y) {
    return x + y
}
let a1 = addC(12, 4)
console.log(a1)
console.log(a1 + a1)
console.log(a1 - a1)
console.log(a1 * a1)
console.log(a1 * 0.10)


// types 

let x = 10
console.log(x)
console.log(typeof x)
// 10 ,-10, 10.8 ,-10.9

let y = true
console.log(y)
console.log(typeof y)
// true or false

let z = "chinmay"
console.log(z)
console.log(typeof z)
// " ", '' , ``
// "A", "a", "1", "2", "a", "342#@!314", " "

//comaprison ---- operator

console.log(typeof '10')
console.log(typeof 10)

// <, > , <= , >=
// != , ==    // value 
// === , !== // value and type 


console.log(3 === "3") // false
console.log(3 !== "3") // true
console.log(3 == "3") // true
console.log(3 === 3) // true
console.log(3 !== 3) // false
console.log(3 != 3) // false
console.log(3 < 3) // false
console.log(3 > 2) // true
console.log(3 >= 2) // true
console.log(3 <= 2) // false 
console.log(3 <= 3) // true
console.log(3 >= 3) // true

// logical

// AND - &&

// true  &&  true  =====> true
// true  &&  false  =====> false
// false  &&  true  =====> false
// false  &&  false  =====> false

console.log(22 == 22 &&  33 == 33)
console.log(22 != 22 &&  33 == 33)
console.log(22 == 22 &&  33 != 33)
console.log(22 != 22 &&  33 != 33)



// OR -- ||

// true  ||  true  =====> true
// true  ||  false  =====> true
// false  ||  true  =====> true
// false  ||  false  =====> false

console.log(22 == 22 ||  33 == 33)
console.log(22 != 22 ||  33 == 33)
console.log(22 == 22 ||  33 != 33)
console.log(22 != 22 ||  33 != 33)

// Not - !

//true ==> false 
//false ==> true 
console.log( !(7 == '7'))
console.log( !(7 === '7'))
console.log("Added the code from a branch")
// conditional statements , tenary operator , switchCase , truthy/falsy value r




























































