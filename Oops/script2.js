
// 10 minutes 
// set and get  
// static keyword
// inheritance 
// 10 am  ------>   polymorphism
// DOM ------ remove , up down

// object literal 

// let amol = {
//     firstName:"amol",
//     lastName:"rao",
//     rollNo:34,
//     skills:["python","html","css"],
//     displayName:function(){
//         console.log(this.firstName + this.lastName)
//     }
// }
// amol.displayName()

// let chinmay = {
//     firstName:"chinmay",
//     lastName:"deshpande",
//     rollNo:33,
//     skills:["python","html","css"],
//     displayName:function(){
//         console.log(this.firstName + this.lastName)
//     }
// }
// chinmay.displayName()

// Template 


class Person {
    firstName
    lastName
    age 
    roll
    displayName(){
        console.log(this.firstName + this.lastName)
    }
}
let amol = new Person()
console.log(amol)
amol.firstName = "amol"
amol.lastName = "rao"
amol.age = 44
amol.roll = 56
amol.displayName()


class PersonB {
    constructor(fn,ln,ag,roll){
        this.firstName = fn 
        this.lastName = ln 
        this.ag = ag 
        this.roll = roll
    }

    displayName(){
        console.log(this.firstName + this.lastName)
    }
}

let amolB = new PersonB("amolB","raoB",45,66)
amolB.displayName()

class PersonC {
    setFirtName(fn){
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
    displayName(){
        console.log(this.firstName + this.lastName)
    }
}
let amolC = new PersonC()
console.log(amolC)
amolC.setFirtName("chinmay")
amolC.setLastName("deshpande")
amolC.setAge(34)
amolC.setRollNo(32)
amolC.displayName()

// set and get keyword


// let info = {
//     firstName:"chinmay",
//     lastName:"deshpande"
// }

// console.log(info.firstName)
// console.log(info.lastName)
// info.city = "pune"
// console.log(info)


class PersonD{

    set firstName(fn){
        this.first_name = fn
    }
    get firstName(){
        return this.first_name
    }

    set lastName(ln){
        this.last_name = ln
    }
    get lastName(){
        return this.last_name
    }

    set rollNo(rn){
        this.roll_no = rn
    }
    get rollNo(){
        return this.roll_no
    }

    set Age(ag){
        this.age = ag
    }
    get Age(){
        return this.age
    }


    displayName(){
        console.log(this.first_name + this.last_name)
    }



}

let abc = new PersonD()
console.log(abc)

abc.firstName = "chinmay"
abc.lastName = "deshpande"
abc.Age = 10
abc.rollNo = 45

console.log(abc.firstName)
console.log(abc.lastName)
console.log(abc.Age)
console.log(abc.rollNo)




console.log(abc.firstName)
console.log(abc)

































