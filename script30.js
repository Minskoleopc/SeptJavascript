// object literal
let chinmay = {
    firstName:"chinmay",
    lastName:"deshpande",
    age:34,
    rollNo:34

}
let amol = {
    firstName:"amol",
    lastName:"rao",
    age:24,
    rollNo:14

}

// class Person {

//     firstName
//     lastName
//     age 
//     rollNo

// }
// let amolA = new Person()
// console.log(amolA)
// amolA.firstName = "amolA"
// amolA.lastName = "raoA"
// amolA.age = 12
// amolA.rollNo = 34
// console.log(amolA)
class PersonB {
    constructor(fn,ln,age,rollNo){
        this.firstName = fn 
        this.lastName = ln 
        this.age = age 
        this.rollNo  = rollNo
    }
}
let amolB = new PersonB("amolB","raoB",34,456)
let chinmayB = new PersonB("chinmayB","raoB",31,456)
console.log(amolB)
console.log(chinmayB)

class PersonC {

    setFirstName(fn){
        this.firstName = fn 
    }
    setLastName(ln){
        this.lastName = ln 
    }
    setAge(ag){
        this.age = ag
    }
    setRollNo(rn){
        this.rollNo = rn 
    }
}

let amolC = new PersonC()
console.log(amolC)
amolC.setFirstName("amolC")
console.log(amolC)


