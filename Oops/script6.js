// single inheritance 

// class Student {
//     constructor(fn,ln,age){
//         this.firstName = fn 
//         this.lastName = ln 
//         this.age = age
//     }
//     displayName(){
//         console.log(this.firstName + this.lastName)
//     }
// }
// class Teacher extends Student {
//     constructor(fn,ln,age,salary){
//         super(fn,ln,age)
//         this.salary = salary
//     }
//     displaySalary(){
//         console.log(this.salary)
//     }
// }
// let amol = new Teacher("chinmay","deshpande",34,55)
// console.log(amol.age)
// console.log(amol.firstName)
// console.logo(amol.lastName)
// console.log(amol.salary)
// amol.displayName()
// amol.displaySalary()


// program 2 multi-level
class Grandfather {

    constructor(fn,ln){
        this.firstName = fn 
        this.lastName  = ln 
    }

    displayGname(){
        console.log(this.firstName + this.lastName)
    }

}

class Father extends Grandfather {
    constructor(fn,ln,ffn){
        super(fn,ln)
        this.fname = ffn
    }
    displayFname(){
        console.log(this.fname + this.lastName)
    }
}
class Son extends Father {
    constructor(fn,ln,ffn,ssn){
        super(fn,ln,ffn)
        this.sname  = ssn
    }
    displaySname(){
        console.log(this.sname + this.lastName)
    }
}

let chinmay = new Son("manohar","deshpane","shirish","chinmay")
chinmay.displayFname()
chinmay.displayGname()
chinmay.displaySname()


// program 3


class Mother {

    constructor(fn,ln){
        this.firstName = fn 
        this.lastName = ln
    }

    displayMName(){
        console.log(this.firstName + this.lastName)
    }
}

class Son extends Mother {
    constructor(fn,ln,sn){
        super(fn,ln)  
        this.sname = sn
    }
    displaySName(){
        console.log(this.sname + this.lastName)
    }
}

class Daughter extends Mother {

    constructor(fn,ln,dn){
        super(fn,ln)  
        this.dname = dn
    }
    displayDName(){
        console.log(this.dname + this.lastName)
    }


}


let chinmayS  = new Son("Kanchan","Deshpande","Chinmay")
let Gauri  = new Daughter("Kanchan","Deshpande","Gauri")


















