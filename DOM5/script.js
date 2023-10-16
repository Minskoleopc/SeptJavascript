// <h1 id = "one" class = "two" name = "nm">Chinmay</h1>


let headOne = document.querySelector('h1')
let byId = document.querySelector('#one')
let byClass = document.querySelector('.two')
let byAttri = document.querySelector("h1[name = 'nm']")

console.log(headOne)
console.log(byId)
console.log(byClass)
console.log(byAttri)
console.log(headOne.textContent)
//headOne.textContent = "poorva"

headOne.addEventListener('click',function(){
    headOne.textContent = "poorva"
    headOne.style.color = "red"
    headOne.style.backgroundColor = "yellow"
})







// let info2 = {
//     firstName:"chinmay",
//     lastName:"deshpande",
//     parent:{
//         mother:"kanchan deshpande",
//         father:"shirish deshpande"
//     }
// }
//info2.parent.mother = "kanchan s deshpande"

// let info = {
//     firstName:"chinmay",
//     lastName:"deshpande"
// }

// console.log(chinmay.firstName)
// console.log(info['lastName'])
// chinmay.firstName = "chinmay s"







