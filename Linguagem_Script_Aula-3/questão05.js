/*Solicite o preço de um produto, a quantidade e o percentual
de desconto. Calcule o subtotal, o desconto e o valor final da
compra. Utilize variáveis, conversão numérica e operadores
aritméticos.*/

//Solicitando os valores
let preco = Number(prompt("Informe o preço do produto:"));
let quantidade = Number(prompt("Informe a quantidade:"));
let percentual = Number(prompt("Informe o percentual de desconto (ex: 10 para 10%):"));

//Fazendo o calculo da compra
let subtotal = preco * quantidade;
let valorDesconto = subtotal * (percentual / 100);
let valorFinal = subtotal - valorDesconto;

//Apresentando valor da compra
alert(`Resumo da compra:
Subtotal: R$ ${subtotal}
Desconto (${percentual}%): R$ ${valorDesconto}
Valor Final: R$ ${valorFinal}`);