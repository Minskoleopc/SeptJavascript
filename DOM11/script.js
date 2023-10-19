

let ulList = document.querySelector('ul')
let inputText = document.querySelector('input')
let buttonA = document.querySelector('#addButton')


buttonA.addEventListener('click',function(){
    let txt = inputText.value
    let newE = document.createElement("li") // <li></li>
    newE.textContent = txt // <li>Papaya</li>
    CreatButtons(newE)
    ulList.appendChild(newE)
    inputText.value = ""

})

{/* <button class = "remove">Remove</button>
<button class = "up">Up</button>
<button class = "down">Down</button> */}

function CreatButtons(li){
    let r = document.createElement('button') // <button></button>
    r.textContent = "Remove" // <button>Remove</button>
    r.classList.add('remove') // <button class ="remove">Remove</button>
    li.appendChild(r)

    let u = document.createElement('button') // <button></button>
    u.textContent = "Up" // <button>Up</button>
    u.classList.add("up") // <button class = "up">Up<button>
    li.appendChild(u) 

    let d = document.createElement("button")
    d.textContent = "Down"
    d.classList.add('down')
    li.appendChild(d)

}