/*Solicite o nome, idade e altura de uma pessoa. Armazene
cada informação em uma variável e utilize typeof para
identificar o tipo de cada dado. Apresente os resultados ao
usuário.*/

//Coletando informacoes
let nome = prompt("Informe seu nome:");
let idade = Number(prompt("Informe sua idade:"));
let altura = Number(prompt("Informe sua altura:"));

//Apresentando os tipos
alert(`Dados informados:
Nome: ${nome} - Tipo: ${typeof nome}
Idade: ${idade} - Tipo: ${typeof idade}
Altura: ${altura} - Tipo: ${typeof altura}`);