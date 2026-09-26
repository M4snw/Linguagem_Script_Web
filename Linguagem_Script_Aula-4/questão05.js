/*Solicite o valor de uma compra. Utilizando o operador
ternário, informe em uma única linha se o cliente tem frete
grátis, para compras a partir de R$ 150,00, ou se deverá
pagar R$ 20,00 de frete. Exiba o valor da compra e a
condição do frete na mesma mensagem.*/

//Solicitando valor da compra
let valorCompra = Number(prompt("Digite o valor da compra: R$"));

//Informando o valor e condiçao de frete
let mensagem;

if (valorCompra >= 150) {
    mensagem = `Valor da compra: R$ ${valorCompra.toFixed(2)} - Frete grátis!`;
} else {
    mensagem = `Valor da compra: R$ ${valorCompra.toFixed(2)} - Frete: R$ 20,00`;
}

console.log(mensagem);