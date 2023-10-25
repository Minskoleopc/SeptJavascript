// class Person {
//     constructor(fn,ln){
//         this.firstName = fn 
//         this.lastName = ln
//     }
//     displayName(){
//         console.log(this.firstName + this.lastName)
//     }
// }
// class Teacher extends Person {
//     salary = 10000
//     displaySalary(){
//         console.log(this.salary)
//     }

// }
// let amol = new Teacher("chinmay","deshpande")
// console.log(amol.firstName)
// console.log(amol.lastName)
// console.log(amol.salary)
// amol.displayName()
// amol.displaySalary()
// Single inheritance 
class Teacher {
    constructor(fn,ln,salary){
        this.firstName = fn 
        this.lastName = ln 
        this.salary  = salary
    }
    displayName(){
        console.log(this.firstName + this.lastName)
    }
}

class Professor extends Teacher {
    constructor(fn,ln,salary,spec){
        super(fn,ln,salary)
        this.specialization = spec
    }
    displaySpec(){
        console.log(this.specialization)
    }
}

let chinmayP = new Professor("chinmay d","deshpande",12321321,"marathi")
console.log(chinmayP.firstName)
console.log(chinmayP.lastName)
console.log(chinmayP.salary)
console.log(chinmayP.specialization)
chinmayP.displayName()
chinmayP.displaySpec()

// program 3
class Grandfather{
    constructor(fn,ln){
        this.firstName = fn 
        this.lastName = ln
    }
    displayGName(){
        console.log(this.firstName + this.lastName)
    }
}
class Father extends Grandfather  {
    constructor(fn,ln,ffn){
        super(fn,ln)
        this.fname = ffn
    }
    displayFName(){
        console.log(this.fname + this.lastName)
    }
}

class Son extends Father {
    constructor(fn,ln,ffn,ssn){
        super(fn,ln,ffn)
        this.sname = ssn
    }
    displaySName(){
        console.log(this.sname + this.lastName)
    }
}

let chinmay = new Son("manohar","deshpande","shirish","chinmay")

console.log(chinmay.firstName)
console.log(chinmay.lastName)
console.log(chinmay.sname)
console.log(chinmay.fname)

chinmay.displayFName()
chinmay.displayGName()
chinmay.displaySName()















