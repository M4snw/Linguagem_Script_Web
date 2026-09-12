/*Solicite dois números e utilize operadores de comparação
para informar se são iguais, diferentes, qual é o maior e qual é
o menor. Utilize também === para comparar os valores.*/

//Solicitando os numeros
let numero1 = Number(prompt("Informe o primeiro número:"));
let numero2 = Number(prompt("Informe o segundo número:"));

//Testando as comparacoes
let iguais = numero1 === numero2;
let diferentes = numero1 !== numero2;
let maior = numero1 > numero2 ? numero1 : numero2;
let menor = numero1 < numero2 ? numero1 : numero2;

//Apresentando as comparaçoes
alert(`Comparando ${numero1} e ${numero2}:
Iguais: ${iguais}
Diferentes: ${diferentes}
Maior número: ${maior}
Menor número: ${menor}`);