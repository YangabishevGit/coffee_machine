/*
alert('!!!!')

let buttons = document.querySelectorAll('.coffee-item')
let capbut = buttons[1]
let coffelist = capbut.parentElement
let next = capbut.nextElementSibling; 
let prev = capbut.previousElementSibling; 
let chl = capbut.children
let spn = capbut.querySelector('span')

let bigCup = document.querySelector('.cup')
bigCup.style.width = '300px'
bigCup.style.display=''
bigCup.hasAttribute('src')
bigCup.getAttribute('src')
bigCup.setAttribute('src', 'img/americano.png')

document.querySelector('.cup').setAttribute('src', document.querySelectorAll('.coffee-item')[2].querySelector('img').getAttribute('src'))

document.querySelector('.display-text').innerText = "Кофе готово"
document.querySelector('.display-text').innerHTML = "Кофе <b>готово</b>"

let coffeList = document.querySelector('.coffee-list')
for (let i=0; i<2; i++){
    coffeList.innerHTML = coffeList.innerHTML + `
      <div class="coffee-item">
        <img src="img/americano.png" alt="Американо">
        <span>Американо - 50 руб.</span>
      </div>`;
}

let chbtn = document.querySelector('.btn')
chbtn.className
chbtn.className = "btn btn-success btn-block"

chbtn.classList.toggle('my-5')

setTimeout(function(){
  document.querySelector('.coffee-oper').style.backgroundColor = 'red'
},1000)

function changeDisplyText (){
  document.querySelector('.display').innerHTML = "Ваше кофе готовится"
}

setTimeout(changeDisplyText, 5000)

setTimeout(`document.querySelector('.display').innerHTML = "Ваше кофе готовится"`, 1000)

document.querySelector('.btn').onclick = function(){alert('foo bar')}

document.querySelector('.btn').addEventListener('click', function(){alert('boo foo')})

document.querySelector('.btn').addEventListener('click', handler)
document.querySelector('.btn').removeEventListener('click', handler)

document.querySelector('.cup').onclick = function(){document.querySelector('.display').style.backgroundColor = 'red'}

//document.querySelector('.progress-bar')
document.querySelector('.cup').onclick = function(){
for (let i = 0; i<=100; i++){
  document.querySelector('.progress-bar').style = 'width: '+i+'%'
  }
}


for (let i = 0; i < document.querySelectorAll('.coffee-item').length; i++){
  document.querySelectorAll('.coffee-item')[i].onclick = function(){
    console.log(this)
    makeCoffee('Американо', 25, this.span)
  }
}
*/