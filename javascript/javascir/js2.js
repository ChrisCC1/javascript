//1. 
function seunome() {
var nome = prompt("Qual seu nome?");
alert ("Olá " + nome);
}

//2
function comprimento(){
var largura = prompt("Qual a largura do terreno?")
var comprimento = prompt("Qual o comprimeiro?")
var dimensaao = largura * comprimento;
alert("A dimensão é " + dimensaao);
}

//3.
function cavalos() {
var haras = prompt("Quantos cavalos tem na haras?")
var count = 4

var aotodo = haras * 4;

alert("Voce preisa de " + aotodo)
}
//4.
function padaria(){
let paes = prompt("Quantos paes voce vendeu?")
let ppaes = 0.12
let broas = 1.5
let bbroas = prompt("Quantas broas vendeu?")

let saldo = (paes * ppaes) + (broas * bbroas)
let poupanca = saldo * 0.1
alert("Você tem que colocar na poupanca R$" + poupanca + " e voce vendeu R$"+ saldo)
}

//5
function exerc4(){
    let nomenome = prompt ("Qual seu nome?")
    let idadeidade = prompt ("Qual sua idade?")

    let ano = 365

    let vida = (idadeidade * ano)
    alert("Você viveu por " + vida + " dias parabens Senhor@ " + nomenome)
}

//6
function exerc5(){
    let reaisemgasu = prompt("Quando reais voce vai colocar em gasolinha?")
    let litrodagasu = 6.14

    let encheutanq = (reaisemgasu / litrodagasu)

    alert("Você encheu " + encheutanq + " litros")
}

//7
function exerc6(){
    let quilo= 12
    let kg=prompt("Quantos quilos voce quer?")
let preco = (quilo * kg)

alert("O valor do seu prato fica: " + preco)
}

//8
function exerc8(){
 let dia = parseInt(prompt("Quantos dias"))
 let mes = parseInt(prompt("Quantos meses"))
 mes = (mes*30) - dia;

alert("Se passaram: " + mes)
}

