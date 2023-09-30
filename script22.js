
//    program 1
let info = ["chinmay","deshpande",23,44]
console.log(info[0])
console.log(info[1])
console.log(info[2])
console.log(info[3])

// retrive  by index
console.log(info[0])
// update 
info[0] = "tanmay"
console.log(info)
// add 
info.push("pune")
info.unshift("Mr")
// delete
info.pop() 
info.shift()
info.splice(2,1)

// Object literal 

let  info2 = {
    // key:"value"
    // property:"value"
    firstName:"chinmay",
    lastName:"deshpande",
    age:23,
    rollNo:44
}
console.log(info2)


// object stores the by by index??
console.log(info2[0])


// object allow duplicate keys 
let vehicle = {
    color:"red",
    type:"sedane",
    model:"Q4",
    color:"blue"
}
console.log(vehicle)


let info3 = {
    firstName:"chinmay",
    lastName:"deshpande",
    age:45,
    rollNo:77
}
// retrive  // dot notation and bracket notation
console.log(info3.firstName)
console.log(info3['age'])
// update  // dot notation and bracket notation
info3.firstName = "tanmay"
console.log(info3)
info3['lastName'] = "dani"
console.log(info3)
// add  // dot notation and bracket notation
info3.city = "pune"
info3['language'] = "hindi"
console.log(info3)
// delete // dot notation and bracket notation
delete info3.city
delete info3['language']
console.log(info3)


let names = ["chinmay","deshpande",35,66]
for(let i = 0 ; i < names.length; i++){
    console.log(names[i])
}

// looping over object (dot notation will not work)
// bracket notation
let animal = {
    color:"blue",
    eye:2,
    city:"pune",
    life:50
}

for(let x in animal){
    console.log(x,animal[x])
}
















