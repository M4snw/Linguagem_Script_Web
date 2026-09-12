/*Crie um arquivo app.js para executar no Node.js. Defina
informações sobre um estudante e utilize console.log() para
apresentar um relatório no terminal. Identifique quais recursos
pertencem ao JavaScript e quais dependem do ambiente
Node.js.*/

//Informações do estudante
let nome = "Matheus Miranda";
let idade = 18;
let curso = "Análise e Desenvolvimento de Sistemas";
let media = 8.8;
let aprovado = media >= 7;

//Relatório do estudante
console.log("Relatório do Estudante");
console.log(`Nome: ${nome}`);
console.log(`Idade: ${idade}`);
console.log(`Curso: ${curso}`);
console.log(`Média: ${media}`);
console.log(`Situação: ${aprovado ? "Aprovado" : "Reprovado"}`);