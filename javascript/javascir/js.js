var nome="Christian"
let valor= 2.5
let idade= 15
var casado= false
let pessoa= {nome: "Altini", idade: 12}
let cores = ["amarelo", "vermelho", "verde"]

document.writeln(nome + "<br>")
document.writeln(idade + "<br>")
document.writeln(valor + "<br>")
document.writeln(casado + "<br>")
document.writeln(JSON.stringify(pessoa) + "<br>")
document.writeln(cores + "<br>")

//Operadores
document.writeln("<hr>" + "<br>" + "Operadores Aritimeticos" + "<br>")
document.writeln(3+2 + "<br>")
document.writeln(8*2 + "<br>")
document.writeln(10/4 + "<br>")
document.writeln(9-2 + "<br>")
document.writeln("<br>" + "9"+"5"+"<br>")

//Define alguns operdores aritimetos de forma abreviada
var count = 5;  //define uma variavel
document.writeln(count+"<br>")

count++;    //incrementa a variavel
document.writeln(count+"<br>")

count--;    //decrementa a varievel
document.writeln(count+"<br>")

count += 2; //Soma 2: o mesmo que count - count + 2;
document.writeln(count+"<br>")

count *= 3; //multiplica por 3: o mesmo que cont - count * 3;
document.writeln(count+"<br>")

count //6 nomes de variaveis tambem sao expressoes
document.writeln(count+"<br>")

//Operadores de *igualdade e relacioais* testaram se dois valores são iguais,
//Desiguais, menores que, maiores que, etc. São avaliados como verdadeidos ou falos

var x=2, y=3 //Esses sinai = São atribuições e não testes de igualdade
x==y //falso:igualdade
x!=y //verdadeiro: desigualdade
x<y //verdadeiro: menor que
x<=y //verdadeiro: menor ou igual
x>y //falso: x menor que y
x>= y //falso: x menos e nem igual a y
"two"=="three" //falso: duas strings são diferentes
"two">"three" //=verdadeiro: "tw" é alfabeticamente maior do que "th"
false==(x > y) //verdadeiro: falso é igual a falso

(x ==2) && (y == 3) // => Verdadeiro: as duas comparações são verdadeiras. && é E
(x>3) || (y<3) // => falso: nenhuma das comparoes é verdadeira. || é Ou
!(x==y) // => Verdadero: ! inverte um valor booleano