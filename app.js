// let elem1 = document.querySelector("#elem1")
// let elem2 = document.querySelector("#elem2")
// let elem3 = document.querySelector("#elem3")
// console.log(elem1)
// console.log(elem2)
// console.log(elem3)
// let block1 = document.querySelector("#block p")
// let block2 = document.querySelector(".block p")
// let www = document.querySelector(".www p")
// let button1 = document.querySelector("#button1")
// let button2 = document.querySelector("#button2")
// let button3 = document.querySelector("#button3")
// let result = document.querySelector("#result")
// let button12 = document.querySelector("#button1-2")
// let button22 = document.querySelector("#button2-2")
// function func1() {
//     console.log(1);
// }
//
// function func2() {
//     console.log(2);
// }
// button12.addEventListener('click', func1)
// button22.addEventListener('click', func2)
// button1.addEventListener('click', function (){
//     result.innerHTML = `<h1>1</h1>`
// })
// button2.addEventListener('click', function (){
//     result.innerHTML = `<h1>2</h1>`
// })
// button3.addEventListener('click', function (){
//     result.innerHTML = `<h1>3</h1>`
// })
// let elem1 = document.querySelector("#elem1")
// let elem2 = document.querySelector("#elem2")
// let elem3 = document.querySelector("#elem3")
// let elem4 = document.querySelector("#elem4")
// let elem5 = document.querySelector("#elem5")
// function func() {
//     console.log('message');
// }
// elem1.addEventListener('click',func)
// elem2.addEventListener('click',func)
// elem3.addEventListener('click',func)
// elem4.addEventListener('click',func)
// elem5.addEventListener('click',func)
// let elem = document.querySelector("#elem")
// function func12() {
//     console.log('1');
// }
//
// function func22() {
//     console.log('2');
// }
//
// function func32() {
//     console.log('3');
// }
// elem.addEventListener('click', func12)
// elem.addEventListener('click', func22)
// elem.addEventListener('click', func32)
// let button = document.querySelector("#button")
// button.addEventListener('dblclick',function(){
//     console.log("dblclick")
// })
// button.addEventListener('mouseover',function(){
//     console.log("mouseover")
// })
// button.addEventListener('mouseout',function(){
//     console.log("mouseout")
// })

// 346
// let text = document.querySelector("#text")
// let button = document.querySelector("#button")
// button.addEventListener('click', function (){
//     console.log(text.textContent)
// })
// button.addEventListener('click', function (){
//     text.textContent = "text 2"
// })
// let text1 = document.querySelector("#text1")
// let text2 = document.querySelector("#text2")
// let text3 = document.querySelector("#text3")
// let output = document.querySelector(".output")
// button.addEventListener('click', function (){
//     output.textContent = (+text1.textContent) + (+text2.textContent) + (+text3.textContent)
// })
// let textPlus = document.querySelector("#textPlus")
// button.addEventListener('click', function (){
//     textPlus.textContent = +textPlus.textContent + 1
// })
// let textAdd = document.querySelector("#textAdd")
// button.addEventListener('click', function (){
//     textAdd.textContent += "!"
// })
// 347
// let text1 = document.querySelector("#text1")
// let button = document.querySelector("#button")
// button.addEventListener('click', function (){
//     console.log(text1.innerHTML)
// })
// button.addEventListener('click', function (){
//     text1.innerHTML = `<b>${text1.innerHTML}</b>`
// })
// 348
let elem1 = document.querySelector("#elem1")
let button1 = document.querySelector("#button1")
button1.addEventListener('click', function (){
    console.log(elem1.type)
})
let elem2 = document.querySelector("#elem2")
let button2 = document.querySelector("#button2")
button2.addEventListener('click', function (){
    elem2.type = "submit"
})
let text3 = document.querySelector("#text3")
let href3 = document.querySelector("#href3")
let button3 = document.querySelector("#button3")
button3.addEventListener('click', function (){
    text3.textContent = href3.href
})
let href4 = document.querySelector("#href4")
let button4 = document.querySelector("#button4")
button4.addEventListener('click', function (){
    href4.textContent += ` (${href4.href})`
})
let text5 = document.querySelector("#text5")
let img5 = document.querySelector("#img5")
let button5 = document.querySelector("#button5")
button5.addEventListener('click', function (){
    text5.textContent = img5.src
})
let img6 = document.querySelector("#img6")
let button6 = document.querySelector("#button6")
button6.addEventListener('click', function (){
    img6.style.width = "300px"
})
let img7 = document.querySelector("#img7")
let button7 = document.querySelector("#button7")
button7.addEventListener('click', function (){
    console.log(img7)
    img7.width += img7.width
})
let img8 = document.querySelector("#img8")
let button81 = document.querySelector("#button8-1")
let button82 = document.querySelector("#button8-2")
button81.addEventListener('click', function(){
    img8.src = `https://ru.meming.world/images/ru/thumb/a/ab/%D0%9F%D1%80%D0%BE%D0%BA%D0%BB%D1%8F%D1%82%D1%8B%D0%B9_%D0%BA%D0%BE%D1%82_%D1%88%D0%B0%D0%B1%D0%BB%D0%BE%D0%BD.jpg/300px-%D0%9F%D1%80%D0%BE%D0%BA%D0%BB%D1%8F%D1%82%D1%8B%D0%B9_%D0%BA%D0%BE%D1%82_%D1%88%D0%B0%D0%B1%D0%BB%D0%BE%D0%BD.jpg`
})
button82.addEventListener('click', function (){
    img8.src = `https://mariart.kiev.ua/image/catalog/sber/600004299559b0.jpeg`
})