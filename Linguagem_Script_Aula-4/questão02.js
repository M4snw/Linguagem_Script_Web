/*Declare uma variável pontos com valor inicial 0. Utilizando os
operadores de atribuição, some 10, some mais 25, subtraia 5
e, por fim, incremente 1. Exiba o valor da variável após cada
alteração. Utilize +=, -= e ++ em vez de reescrever a
operação completa.*/

//Fazendo operacoes e apresentando valores após cada uma
let pontos = 0;
console.log(`Inicio: ${pontos}`);
pontos += 10;
console.log(`Após += 10: ${pontos}`);
pontos += 25;
console.log(`Após += 25: ${pontos}`);
pontos -= 5;
console.log(`Após -= 5: ${pontos}`);
pontos++;
console.log(`Após ++: ${pontos}`);