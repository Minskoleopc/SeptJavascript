//  <p id = "four"  class = 'five' name = "six">Poorva</p>


// id 
let byId = document.querySelector('#four')
console.log(byId)

// className 
let className = document.querySelector('.five')
console.log(className)

// byTagName
let byTagName = document.querySelector('p')
console.log(byTagName)

// byAttribute
// tagName[attribute = "value"]
let byAttribute = document.querySelector("p[name = 'six']")
let byAttributeB = document.querySelector("p[class = 'five']")
let byAttributeC = document.querySelector("p[id = 'four']")
console.log(byAttribute)



//<h1 id = "one" class = "two" name = "three">Chinmay</h1>

// byid 

let byIda = document.querySelector('#one')
let byClassb = document.querySelector('.two')
let byTagNamea = document.querySelector('h1')
let q1  = document.querySelector('h1[id = "one"]')

console.log(byIda)
console.log(byClassb)
console.log(byTagNamea)
console.log(q1)