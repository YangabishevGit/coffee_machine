"use strict"

let makeCoffee = (name, price) => {
  if (+document.querySelector('.form-control').value >= price) {
    document.querySelector('.form-control').value -= price
    document.querySelector('.form-control').style.backgroundColor = ''
    changeDisplayText(`Ваш ${name} готовится`)
  }else{
    document.querySelector('.form-control').style.backgroundColor = 'red'
    changeDisplayText("Недостаточно средств")
  }
}

let changeDisplayText = (message) =>{
  document.querySelector('.display-text').innerHTML = message;
}
