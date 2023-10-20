

let ulList = document.querySelector('ul')
let buttonA = document.querySelector('#one')
let inputText = document.querySelector('input')

console.log(ulList)
console.log(buttonA)
console.log(inputText)


buttonA.addEventListener('click',function(){
    let text = inputText.value // "papaya"
    let newLi = document.createElement('li') // <li></li>
    newLi.textContent = text // <li>papaya</li>
    createButtons(newLi)
    ulList.appendChild(newLi)
    inputText.value = ""
})

function createButtons(li){

   let r =  document.createElement('button')  // <button></button>
   r.textContent = "Remove"  // <button>Remove</button>
   r.classList.add("remove") // <button class = "remove">Remove</button>
   li.appendChild(r)

   let u =  document.createElement('button')  // <button></button>
   u.textContent = "Up"  // <button>Up</button>
   u.classList.add("up") // <button class = "up">Up</button>
   li.appendChild(u)

   let d =  document.createElement('button')  // <button></button>
   d.textContent = "Down"  // <button>Down</button>
   d.classList.add("down") // <button class = "down">Down</button>
   li.appendChild(d)


}

// remove up down
// 11 -- Oops 

ulList.addEventListener('click',function(event){
    //console.log(event.target)
    //console.log(event.target.tagName)
    // console.log(event.target.className)

    if(event.target.tagName === "BUTTON"){

        if(event.target.className === "remove"){
            let li = event.target.parentElement
            let ul = li.parentElement
            ul.removeChild(li)
        }

        else if(event.target.className === "up"){
            // up

        }

        else if(event.target.className === "down"){
            // down
        }
    }




})










