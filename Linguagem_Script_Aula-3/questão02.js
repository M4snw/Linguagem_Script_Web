/*Solicite dois números e apresente os resultados de soma,
subtração, multiplicação, divisão, resto e potência. Utilize
operadores aritméticos e organize os resultados em uma
única mensagem.*/

//Solicitando os numeros
let numero1 = Number(prompt("Informe o primeiro número:"));
let numero2 = Number(prompt("Informe o segundo número:"));

//Fazendo as operaçoes
let soma = numero1 + numero2;
let subtração = numero1 - numero2;
let multiplicação = numero1 * numero2;
let divisão = numero1 / numero2;
divisão.toFixed(2)
let resto = numero1 % numero2;
let potência = numero1 ** numero2;

//Apresentando resultados
alert(`Operações Realizadas:
Soma: ${soma}
Subtração: ${subtração}
Multiplicação: ${multiplicação}
Divisão: ${divisão}
Resto: ${resto}
Potência: ${potência}`);