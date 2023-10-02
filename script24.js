
// unpack or destructure
//             0         1      2      3
let names = ["chinmay","ram","sham","ritesh"]
let a = names[0]
let b = names[1]
let c = names[2]
let d = names[3]

console.log(a)
console.log(b)
console.log(c)
console.log(d)
let [x1,x2,x3,x4]  = names
console.log(x1)
console.log(x2)
console.log(x3)
console.log(x4)

names = ["chinmay","ram","sham","ritesh"]
let [x11,,x22,x33]  = names
console.log(x11)
console.log(x22)
console.log(x33)

// program 2
let marks = [[11,22,33],[44,55,66],[77,88,99]]
let [[s1,s2,s3],[s4,s5,s6],[s7,s8,s9]] = marks
console.log(s7)
console.log(s4)


// program 3 

let info = {
    firstName:"chinmay",
    lastName:"deshpande",
    age:34
}

// dot notation and bracket notation
let a1 = info.firstName
let a2 = info.lastName
let a3 = info.age

console.log(a1)
console.log(a2)
console.log(a3)

let {firstName,lastName,age} = info
console.log(firstName)
console.log(lastName)
console.log(age)

let vehicle = {
    color:"red",
    type:"sedane"
}
let {color:cl,type:ty} = vehicle
console.log(cl)
console.log(ty)


// program 4
let info4 = {
    fullName:"chinmay deshpande",
    parent:{
        mother:"kanchan deshpande",
        father:"shirish deshpande"
    }
}

let {fullName:fn,parent:{mother:m2,father:f2}} = info4
console.log(fn)
console.log(m2)
console.log(f2)


// program 5 

let students = [

    {
        firstName:"chinmay",
        lastName:"deshpande"
    },

    {
        firstName:"sarika",
        lastName:"pansare"
    }
]

let [{firstName:f11,lastName:l11},{firstName:f22,lastName:l22}] = students
console.log(l11)
console.log(f22)










