// let amol = {
//     firstName:"amol",
//     lastName:"rao",
//     rollNo:23,
//     age:34
// }

// let chinmay = {
//     firstName:"chinmay",
//     lastName:"deshpande",
//     rollNo:24,
//     age:45
// }


// program 2

class Person {
    firstName;
    lastName ;
    age ;
    rollNo;
}
let chinmay  = new Person()
console.log(chinmay)
chinmay.firstName = "chinmay"
chinmay.lastName = "deshpande"
chinmay.age = 23
chinmay.rollNo = 55
console.log(chinmay)

// program 3

class PersonC {
    constructor(fn,ln,age,rollNo){
        this.firstName =  fn
        this.lastName = ln 
        this.age = age 
        this.rollNo = rollNo
    }
}

let amolC = new PersonC("amolc","raoC",34,55) 
let mayuriC = new PersonC("mayuriC","raoC",32,53) 
console.log(amolC)
console.log(mayuriC)
mayuriC.language = "hindi"
console.log(mayuriC)










