/*Solicite o valor vendido por um representante no mês e a
meta estabelecida pela empresa. Utilizando operadores
relacionais, informe se a meta foi atingida, se foi superada e
se o valor bate exatamente com a meta. Exiba também a
diferença entre os dois valores. Utilize === e !== nas
comparações de igualdade e lembre-se de converter os
valores recebidos.*/

//Solicitando os valores
let valorVendido = Number(prompt("Digite o valor vendido no mês:"));
let meta = Number(prompt("Digite a meta estabelecida pela empresa:"));

//Calculando a diferença
let diferenca = valorVendido - meta;

//Comparaçoes com operadores relacionais
let atingiuMeta = valorVendido >= meta;
let superouMeta = valorVendido > meta;
let bateuExato = valorVendido === meta;

//Apresentando resultados
console.log("Valor vendido: " + valorVendido);
console.log("Meta: " + meta);
console.log("Diferença: " + diferenca);

//Comparando e apresentando
if (bateuExato) {
    console.log("O valor vendido bateu exatamente a meta!");
} else if (superouMeta) {
    console.log("A meta foi superada!");
} else {
    console.log("A meta não foi atingida.");
}