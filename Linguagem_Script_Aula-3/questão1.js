/*Crie um programa que solicite nome, idade, curso e cidade.
Armazene as informações em variáveis e exiba um perfil
formatado utilizando prompt() e alert().*/

//Coletando as informaçoes
let nome = prompt("Informe seu nome:");
let idade = prompt("Informe sua idade:");
let curso = prompt("Informe seu curso:");
let cidade = prompt("Informe sua cidade:");

//Apresentando o perfil
alert(`Perfil do Usuário:
Nome: ${nome}
Idade: ${idade}
Curso: ${curso}
Cidade: ${cidade}`);