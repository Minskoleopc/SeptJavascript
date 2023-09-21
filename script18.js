

// slice 

//             0          1         2       3        4
let names = ["chinmay","sarika","poorva","satish","ram"]
//             -5        -4       -3         -2       -1
///names.slice(startIndex,endIndex(not included))
console.log(names.slice(2))
console.log(names.slice(1,4))
console.log(names.slice(-5,4))
console.log(names.slice(1,-2))
console.log(names.slice(-4))
console.log(names.slice(-1,-4))

// flat()
//                   0                      1                 2
//                0        1         0           1        0         1
let states  = [["wardha","nagpur"],["jaipur","udaipur"],["bhopal","indore"]]
console.log(states[0][0])
console.log(states[1][1])
console.log(states[2][1])
let q1 = states.flat()
console.log(q1)

//at()
//            0       1         2
let city = ["pune","wardha","kolkata"]
//            -3        -2         -1
console.log(city[-2])
console.log(city.at(-2))


// concat()
let numsA = [11,22,33]
let numsB = [44,55,66]
let numsC = numsA.concat(numsB)
console.log(numsC)

// join()
let info = [11,12,13]
let info2 = info.join(' ')
console.log(info2)
console.log(info2)
console.log(typeof info2)

// splice()
//               0         1       2         3        4
let namesB = ["chinmay","sarika","poorva","satish","ramesh"]

// namesB.pop()
// console.log(namesB)

// namesB.shift()
// console.log(namesB)
//namesB.splice(startIndex,numeberoFelementTobeDeleted)
// namesB.splice(3,1)
// console.log(namesB)

// namesB.splice(3,2,"rahul","rohit")
// console.log(namesB)


// fill()
//          0  1  2  3  4  5  6  7  8
// let mrks = [11,22,33,44,55,88,99,44,55]
// mrks.fill("pass" , 2,4)
// console.log(mrks)


// let country = ["india","bangladesh","china","america"]
// let r2 = country.sort()
// console.log(r2)









