/*Solicite um número N ao usuário. Utilizando um laço de
repetição e uma estrutura condicional, exiba todos os
números de 1 até N, indicando ao lado de cada um se ele é
par ou ímpar. Ao final, informe quantos números pares e
quantos ímpares foram encontrados.*/

//Solicitando numero N
let n = Number(prompt("Digite um número N: "));

//Definindo variáveis
let pares = 0;
let impares = 0;

//Laço de repetiçao para contar pares e impares
for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) {
        console.log(`${i} - Par`);
        pares++;
    } else {
        console.log(`${i} - Ímpar`);
        impares++;
    }
}

//Apresentando totais de pares e impares
console.log(`Total de pares: ${pares}`);
console.log(`Total de ímpares: ${impares}`);