// // program 1
// class Student {
//     firstName = "chinmay"
//     lastName = "deshpande"
//     adharNo = 123

//     displayName(){
//         console.log(this.firstName + this.lastName)
//     }
// }

// class Teacher {
//     firstName = "chinmay"
//     lastName = "deshpande"
//     adharNo = 123
//     salary = 10000

//     displayName(){
//         console.log(this.firstName + this.lastName)
//     }
//     displaySalary(){
//         console.log(this.salary)
//     }
// }


// let amol = new Teacher()
// console.log(amol.firstName)
// console.log(amol.lastName)
// console.log(amol.salary)
// console.log(amol.adharNo)

// amol.displayName()
// amol.displaySalary()


// let chinmay = new Student()
// console.log(chinmay.firstName)
// console.log(chinmay.lastName)
// console.log(chinmay.adharNo)

// program 2
// class Student {
//     firstName = "chinmay"
//     lastName = "deshpande"
//     adharNo = 123

//     displayName(){
//         console.log(this.firstName + this.lastName)
//     }
// }

// class Teacher extends Student {
//     salary = 10000
//     displaySalary(){
//         console.log(this.salary)
//     }
// }

// let amolB = new Teacher()
// console.log(amolB.firstName)
// console.log(amolB.lastName)
// console.log(amolB.adharNo)
// console.log(amolB.salary)
// amolB.displayName()
// amolB.displaySalary()

// program 3

class Student {
    constructor(fn,ln,adharNo){
        this.firstName = fn 
        this.lastName = ln 
        this.adharNo = adharNo
    }
    displayName(){
        console.log(this.firstName + this.lastName)
    }

}

class Teacher extends Student {
    salary = 1000
    displaySalary(){
        console.log(this.salary)
    }
}

let chinmay = new Teacher("chinmay s ","deshpande",123213)
console.log(chinmay.firstName)
console.log(chinmay.lastName)
console.log(chinmay.adharNo)
console.log(chinmay.salary)
chinmay.displayName()
chinmay.displaySalary()