// <li></li>
// <li>Chikoo</li>
//<ul>
//<li>Chikoo</li>
//</ul>

let ulList = document.querySelector('ul')
let buttonA = document.querySelector('button')
let inputText = document.querySelector('input')
buttonA.addEventListener('click',function(){
    let fruitText = inputText.value // chikoo
    let newList = document.createElement('li') // <li></li>
    newList.textContent = fruitText // <li>chikoo</li>
    ulList.appendChild(newList)
    inputText.value  = " "
})