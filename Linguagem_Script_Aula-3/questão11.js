/*Crie um programa executável no Node.js que apresente um
pequeno relatório acadêmico no terminal. Utilize const e let,
diferentes tipos primitivos, operadores e console.log(). O
programa deverá realizar pelo menos três cálculos ou
transformações com os dados.*/

//const: dados fixos do relatório
const nomeInstituicao = "IFPB - Campus Cajazeiras";
const notaMinimaAprovacao = 7;

//let: dados que variam por aluno
let nomeAluno = "Matheus Miranda";
let nota1 = 9.6;
let nota2 = 10;
let nota3 = 8.9;
let frequencia = 100; //Em porcentagem

//Cálculo 1: média das três notas
let media = (nota1 + nota2 + nota3) / 3;

//Cálculo 2: situação do aluno (aprovado ou reprovado)
let aprovado = media >= notaMinimaAprovacao;

//Cálculo 3: quantas faltas equivalem à frequência (supondo 100 aulas no total)
let totalAulas = 100;
let faltas = totalAulas - (totalAulas * frequencia / 100);

//Relatório do Aluno
console.log(`Relatório Acadêmico - ${nomeInstituicao}`);
console.log(`Aluno: ${nomeAluno}`);
console.log(`Nota 1: ${nota1} | Nota 2: ${nota2} | Nota 3: ${nota3}`);
console.log(`Média final: ${media.toFixed(2)}`);
console.log(`Frequência: ${frequencia}%`);
console.log(`Faltas estimadas: ${faltas.toFixed(0)}`);
console.log(`Situação: ${aprovado ? "Aprovado" : "Reprovado"}`);