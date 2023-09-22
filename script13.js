let x = 10
console.log(x)
x = 300
console.log(x)

// Array 

//              0         1        2         3
let names = ["chinmay","sarthak","sham","ganesh"]
// Index always starts from zero

// Type -- Human ---- amol 
// Properties - age , color , gender
// Methods    - talk() , walk()

let q1 = names.length
console.log(q1)
//           0  1  2  3  4  5  6   7  8
let marks = [11,22,33,44,55,66,77,88,99]
console.log(marks[2])

// length-1 is always lastIndex
for(let i = 0 ; i < marks.length; i++){ // 1 // 2 // 3 // 4 // 5 // 6 // 7 // 8 // 9
    //console.log(i) // 0 // 1 // 2 // 3 // 4 // 5 // 6 // 7 // 8
    console.log(marks[i])

}
//           0        1       2      3          4
let city = ["pune","jaipur","goa","bangalore","nagpur"]
for(let i = 0 ; i < city.length ; i++){
    //console.log(i)
    console.log(city[i])
}

for(let i = city.length-1 ; i >= 0 ; i--){
    //console.log(i)
    console.log(city[i])
}














