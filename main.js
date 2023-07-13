// 1. Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
alert("Hello World!")

//  2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
const numberOne = 5
const numberTwo = 9
alert(numberOne + numberTwo)

// 3. Crie um script que declare uma variável e verifique se o seu valor é um número. 
// Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".

let isNumber = 9

if(typeof isNumber === 'number') {
    alert('É um número')
} else {
    alert('Não é um número')
}
/* 4. Crie um script que declare uma variável e verifique se o seu valor é uma string. 
  Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".
*/

let isString = 'oi'

if(typeof isString === 'string') {
    alert("É uma string")
}else {
    alert("Não é uma string")
}

/* 5. Crie um script que declare uma variável e verifique se o seu valor é um booleano. 
    Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano". 
*/

isBoolean = true

if(typeof isBoolean ==='boolean') {
    alert("É um booleano")
}else {
    alert("Não é um booleano")
}

// 6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.

const sub = numberOne - numberTwo
alert(sub)

// 7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.
const multi = numberOne * numberTwo
alert(multi)

// 8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.

const div = numberOne / numberTwo
alert(div)

/* 9.
    Crie um script que declare uma variável e verifique se o seu valor é um número par. 
    Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".
*/

const evenOrOdd = numberOne + numberTwo

let verify = evenOrOdd % 2

if(verify == 0) {
    alert("É um número par")
}else {
    alert("Não é um número par")
}


/* 10.
    Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. 
    Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".
*/

let odd = 11

let isOdd = odd % 2

if(isOdd == 1) {
    alert("É um número ímpar")
}else {
    alert("Não é um número ímpar") 
}
