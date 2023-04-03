// let ok = document.getElementById('rand')
// let out = document.getElementById('out')
// let in1 = document.getElementById('in1')
// let in2 = document.getElementById('in2')
//
// let run
// function rn(in1, in2){
//     let num1 = in1.value
//     let num2 = in2.value
//     return run = Math.floor(Math.random()*(in2-in1)) + in1
//     out.innerHTML = run
//     in1.value=''
//     in2.value=''
// }
// ok.onclick = rn

// function rr(){
//     let num1 = ok.value
//     let run = Math.floor(Math.random()*in1)+1   //идёт округление в меньшую сторону
//     run.innerHTML = 'Приветик, ' + num1 + '!'
//     ok.value = ''
// }

// for (in1 of in2+1) {
//     let run =
//   console.log(in1); // выведет от 1 до 9
// }


// let a = 19
// let b = 20
//
// alert(Math.floor(Math.random()*(b-a+1))+a)

let in1 = document.getElementById('in1')
let in2 = document.getElementById('in2')
let ch = document.getElementById('out')
let ok = document.getElementById('ok')

function f1(){
    let a = in1.value
    let b = in2.value
    //ch.innerHTML = Math.floor(Math.random()*(b-a+1))+a
    ch.innerHTML = Math.round (a - 0.5 + Math.random() * b - a + 1)
}
ok.onclick = f1