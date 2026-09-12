/*Crie um programa que utilize, no mesmo exercício: let, const,
tipos de dados primitivos, operadores, prompt(), confirm()
e alert(). O programa deverá solicitar informações do usuário,
realizar cálculos e apresentar os resultados de forma
organizada.*/

//Constante: taxa de entrega fixa
const taxaEntrega = 10;

//Solicitando informações
let nome = prompt("Informe seu nome:");
let preco = Number(prompt("Informe o preço do produto:"));
let quantidade = Number(prompt("Informe a quantidade desejada:"));

//Operadores
let subtotal = preco * quantidade;
let total = subtotal + taxaEntrega;

//Confirmação
let entrega = confirm(`Olá, ${nome}! Deseja receber o pedido em casa? (taxa de R$ ${taxaEntrega})`);

//Operador definindo o valor final
let valorFinal = entrega ? total : subtotal;

//Apresentando o resultado final
alert(`Resumo do pedido:
Cliente: ${nome}
Quantidade: ${quantidade}
Subtotal: R$ ${subtotal.toFixed(2)}
Entrega: ${entrega ? "Sim (+ R$ " + taxaEntrega.toFixed(2) + ")" : "Não"}
Valor final: R$ ${valorFinal.toFixed(2)}`);