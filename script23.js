let names = ["mayuri","sham","ram","sachin"]
//retrive 
console.log(names[0])
//add 
names.push("maya")
names.unshift("sham")
console.log(names)
//update 
names[0] = "nitesh"
console.log(names)
//delete 
names.pop()
names.shift()
names.splice(2,1)

// object literal 
let info2 = ["chinmay","deshpande",23,45]

let info3 = {
    // prop : value 
    // key :value
    firstName:"chinmay",
    lastName:"deshpadne",
    age:23,
    rollNo:45,
    age:45
}

// object stores the value by index ???
console.log(info3[0])
// object allowed duplicate values
console.log(info3)


// retrive  (dot notation and bracket notation )

let info4 = {
    first_name:"chinmay",
    lastName:"deshpande"
}

console.log(info4.first_name)
console.log(info4['lastName'])

// update (dot notation and bracket notation )
info4.first_name = "tanmay"
info4['lastName'] = "dani"
console.log(info4)
// add (dot notation and bracket notation )
info4.city = "pune"
info4['language'] = "hindi"
console.log(info4)
// delete  (dot notation and bracket notation )
delete info4.city
delete info4['lanaguage']

let vehicle = {
    color:"blue",
    type:"sedane"
}

console.log(vehicle.color)
vehicle.color = "blue"
vehicle.city = "pune"
delete vehicle.city


console.log(vehicle['type'])
vehicle['type'] = "SUV"
vehicle['regNo'] = 1234
delete vehicle['type']


let numbers = [11,22,33,44,55]
for(let i = 0 ; i < numbers.length ; i++){
    console.log(numbers[i])
}

// dot notation will not work in loop
let animal = {
    color:"red",
    namee:"tiger"
}

for(let x in animal){
    console.log(x)
    console.log(animal[x])
}



