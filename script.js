"use strict"

let state = "idle"

let makeCoffee = (name, price,element) => {
  if (state != "idle") return
  if (+document.querySelector('.form-control').value >= price) {
    document.querySelector('.form-control').value -= price
    document.querySelector('.form-control').style.backgroundColor = ''
    changeDisplayText(`Ваш ${name} готовится`)
    state = "cooking"
    document.querySelector('.cup').setAttribute("src", element.querySelector("img").getAttribute("src"))
    document.querySelector('.cup').style.display = 'inline'
    
    let readyPercent = 0
    let cookingInterval = setInterval(function(){
      readyPercent++
      document.querySelector('.cup').style.opacity = readyPercent + '%'
      document.querySelector('.progress-bar').style.width = readyPercent + '%'
      changeDisplayText(`Ваш ${name} готовится. ${readyPercent}%`)
      if(readyPercent>=100){
        clearInterval(cookingInterval)
        changeDisplayText(`Ваш ${name} готов.`)
        state = "ready"
        document.querySelector('.cup').style.cursor = "pointer"
        document.querySelector('.cup').onclick = function(){
          takeCoffee()
        }
      }
    },30)
  }else{
    document.querySelector('.form-control').style.backgroundColor = 'red'
    changeDisplayText("Недостаточно средств")
  }
}

function takeCoffee(){
  document.querySelector('.cup').style.display = 'none'
  document.querySelector('.cup').style.opacity = 0
  document.querySelector('.cup').style.cursor = ""
  document.querySelector('.progress-bar').style.width = 0
  changeDisplayText('Выбирите кофе')
  document.querySelector('.cup').onclick = null
  state = "idle"
}

let changeDisplayText = (message) =>{
  document.querySelector('.display-text').innerHTML = message;
}