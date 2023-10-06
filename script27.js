
let students = [
    {
        fullName:"poorva vyas",
        city:"ujjain",
        skills:["angular","python","react js","django"],
        age:26
    },
    {
        fullName:"chinmay deshpande",
        city:"pune",
        skills:["cypress","python","react js","js","selenium"],
        age:20

    },
    {
        fullName:"amol rao",
        city:"pune",
        skills:["sql","python","js","MSBI"],
        age:33
    },
    {
        fullName:"mayuri rao",
        city:"nagpur",
        skills:["testing","python","selenium"],
        age:34
    }
]

// program 1

// print full for every user
students.forEach(function(el){
    console.log(el.fullName)
})

// print fullName:numberofSkills
// mayuri rao:3

students.forEach(function(el){
    console.log(el.fullName+":"+ el.skills.length)
})

// program 3 
//print name of user with selenium
students.forEach(function(el){
    if(el.skills.includes('selenium')){
        console.log(el.fullName)
    }
})

// program 4
// add salesforce  skill to every user
students.forEach(function(el){
    el.skills.push("salesforce")
})
console.log(students)

// program 5
// add working city property with value banglore
students.forEach(function(el){
    el.workingCity = "banglore"
})
console.log(students)

// program 6
// average age of all students 
let totalSum = students.reduce(function(acc,el){
    return el.age + acc
},0)
console.log(totalSum/students.length)

// program 7
students.forEach(function(el){
    if(el.city == 'pune'){
        console.log(el.fullName)
    }
})

// program 8 user with city pune

let puneS = students.filter(function(el){
    return el.city == "pune"
})
console.log(puneS)
puneS.forEach(function(el){
    console.log(el.fullName)
})

// program 9 
// print name of user starting with a


students.forEach(function(){
    if(el.fullName.startsWith('a')){
        console.log(el.fullName)
    }
})













