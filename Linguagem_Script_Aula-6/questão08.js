/*Crie a função de alta ordem aplicarOperacao(a, b, operacao),
que recebe dois números e uma função, e retorna o resultado
de operacao(a, b). Teste passando uma função de soma, uma
de multiplicação e uma arrow function de subtração escrita
diretamente na chamada.*/

function aplicarOperacao(a, b, operacao) {
  return operacao(a, b);
}

function soma(a, b) {
  return a + b;
}

const multiplicacao = (a, b) => a * b;

console.log(aplicarOperacao(8, 2, soma));
console.log(aplicarOperacao(8, 2, multiplicacao));
console.log(aplicarOperacao(8, 2, (a, b) => a - b));