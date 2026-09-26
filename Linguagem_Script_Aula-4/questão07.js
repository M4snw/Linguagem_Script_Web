/*Solicite um número de 1 a 3 e utilize a estrutura switch para
exibir o turno correspondente: Manhã, Tarde ou Noite.
Qualquer outro valor deve cair no default com a mensagem
Turno inválido. Lembre-se de que o prompt() retorna texto e
de que o case utiliza comparação estrita.*/

//Solicitando o numero
let numero = Number(prompt("Digite um número de 1 a 3: "));

//Apresentando o turno correspondente
switch (numero) {
    case 1:
        console.log("Manhã");
        break;
    case 2:
        console.log("Tarde");
        break;
    case 3:
        console.log("Noite");
        break;
    default:
        console.log("Turno inválido");
}