// slice   ====> array
//               0        1        2         3        4
let names = ["chinmay","shirish","sarika","poorva","mayuri"]
//             -5         -4       -3        -2        -1
console.log(names[0])
//names.slice(startIndex,endIndex(not included))
let q1 = names.slice(1)
let q2 = names.slice(1,4)
console.log(q1)
console.log(q2)
console.log(names.slice(0,4))
console.log(names.slice(-5,-1))
console.log(names.slice(-5,3))
console.log(names.slice(-3))
console.log(names.slice(1,-1))
console.log(names.slice(-1,-3))


// flat()

//               0          1           2
//             0  1  2   0  1  2    0  1  2
let marks = [[11,22,33],[44,55,66],[77,88,99]]
console.log(marks[0])
console.log(marks[1])
console.log(marks[2])
console.log(marks[2][2])
console.log(marks[1][2])
let q3 = marks.flat()
console.log(q3)


// at()
let animals = ["tiger","lion","rabbit","snake"]
console.log(animals[-2])
let q4 = animals.at(-2)
console.log(q4)

// join()
let info = ["chinmay","deshpande","7709192441"]
console.log(info)
let q5 = info.join(' ')
console.log(q5)
console.log(typeof q5)

//concat()

let numbersA = [11,22,33]
let numbersB = [44,55,66]
let q6 = numbersA.concat(numbersB)
console.log(q6)

// map()
let numbers = [11,22,33,44,55]
// [16,27,38,49,60]
let q7 = numbers.map(function(el,arr,index){
    return el + 5
})
console.log(q7)

// reduce()
let n = [11,22,33]
let q8 = n.reduce(function(acc = 0,el,index,arr){
    return acc + el // 66
},0)
console.log(q8)







