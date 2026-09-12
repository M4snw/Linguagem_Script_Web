/*Solicite nome, idade e curso utilizando prompt(). Em seguida,
utilize confirm() para perguntar se os dados devem ser
confirmados. Exiba uma mensagem diferente para cada
resposta.*/

//Solicitando os dados
let nome = prompt("Informe seu nome:");
let idade = Number(prompt("Informe sua idade:"));
let curso = prompt("Informe o curso que você está fazendo:");

//Confirmando os dados
let confirmacao = confirm(`Confirme seus dados:
Nome: ${nome}
Idade: ${idade}
Curso: ${curso}

Estão corretos?`);

//Exibindo mensagem de acordo com a confirmacao
if (confirmacao) {
    alert("Dados confirmados com sucesso!");
} else {
    alert("Dados informados de forma errada!");
}