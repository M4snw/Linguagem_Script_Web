/*Declare a idade de uma pessoa e uma variável booleana
indicando se ela possui convite. Utilizando operadores
lógicos, determine se a entrada em um evento deve ser
permitida: é necessário ter 18 anos ou mais E possuir convite.
Informe também o motivo quando a entrada for negada.*/

//Declarando os dados da pessoa
let idade = 18;
let possuiConvite = true;

//Verificando as condições
let entradaPermitida = idade >= 18 && possuiConvite;

//Apresentando o resultado
console.log("Idade: " + idade);
console.log("Possui convite: " + possuiConvite);

if (entradaPermitida) {
    console.log("Entrada permitida!");
} else {
    console.log("Entrada negada.");

    //Informando o motivo da negação
    if (idade < 18 && !possuiConvite) {
        console.log("Motivo: menor de idade e sem convite.");
    } else if (idade < 18) {
        console.log("Motivo: menor de idade.");
    } else if (!possuiConvite) {
        console.log("Motivo: não possui convite.");
    }
}