/*Usando reduce(), calcule o valor total do carrinho: a soma de
preco × quantidade de cada item. Exiba o resultado com
template literal.*/

const carrinho = [
{item:"Teclado", preco:150, quantidade:1},
{item:"Mouse", preco:80, quantidade:2},
{item:"Cabo USB", preco:25, quantidade:3}
];

const total = carrinho.reduce((valorAcumulado, item) => valorAcumulado + item.preco * item.quantidade, 0);

console.log(`Valor total do carrinho: R$ ${total.toFixed(2)}`);

