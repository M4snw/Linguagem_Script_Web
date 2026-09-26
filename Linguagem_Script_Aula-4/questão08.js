/*Solicite um número ao usuário e exiba a tabuada completa
dele, de 1 a 10, utilizando a estrutura for. Cada linha deve
mostrar a operação e o resultado, no formato 7 x 3 = 21.*/

//Solicitando o numero
let numero = Number(prompt("Digite um número: "));

//Apresentando a tabuada
for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
}