
class PersonE {
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

}
let snehal = new PersonE()
console.log(snehal)
snehal.firstName = "snehal"
snehal.lastName = "bhor"
console.log(snehal)

console.log(snehal.firstName)
console.log(snehal.lastName)
