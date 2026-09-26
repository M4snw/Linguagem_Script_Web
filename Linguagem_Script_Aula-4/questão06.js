/*Solicite a temperatura ambiente e classifique-a utilizando if,
else if e else: Fria, abaixo de 15 graus; Amena, de 15 a 25
graus; e Quente, acima de 25 graus. Atenção à ordem das
condições e aos valores exatos dos limites.*/

//Solicitando a temperatura
let temperatura = Number(prompt("Digite a temperatura ambiente: "));

//Apresentando a classificaçao
if (temperatura < 15) {
    console.log(`${temperatura}°C - Fria`);
} else if (temperatura <= 25) {
    console.log(`${temperatura}°C - Amena`);
} else {
    console.log(`${temperatura}°C - Quente`);
}