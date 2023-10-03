
let names = ["chinmay","sarika","poorva"]
let [x,y,z] = names
console.log(x)
console.log(y)
console.log(z)


let states = [["Wardha","Nagpur"],["Jaipur","Udaipur"],["Bhopal","Indore"]]
let [[c1,c2],[c3,c4],[c5,c6]] = states
console.log(c1)
console.log(c2)
console.log(c5)
console.log(c6)

let info = {
    firstName:"chinmay",
    lastName:"deshpande"
}
let {firstName,lastName}  = info
console.log(firstName)
console.log(lastName)


let information = {
    city:"pune",
    person:{
        firstName:"chinmay",
        lastName:"deshpande"
    }
}

let {city:cy,person:{firstName:fn,lastName:ln}} = information
console.log(cy)
console.log(fn)
console.log(ln)


let students = [
    {
        firstName:"chinmay",
        lastName:"deshpande"
    },
    {
        firstName:"poorva",
        lastName:"vyas"
    }
]

let [{firstName:f11,lastName:l22} , {firstName:f22,lastName:l33}] =  students
console.log(f11)
console.log(l33)



let info6 ={
    fullName:"chinmay deshpande",
    skills:["python","java","javascript"]
} 

let {fullName:w3,skills:[w1,w2,w4]} = info6
console.log(w3)
console.log(w2)
console.log(w4)













