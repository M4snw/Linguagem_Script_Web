const botaoVerde = document.querySelector('#botao-verde');
const textoContadorVerde = document.querySelector('#texto-contador-verde');
let contadorVerde = 0;

botaoVerde.addEventListener('click', function () {
    contadorVerde++;
    textoContadorVerde.textContent = 'Cliques: ' + contadorVerde;
});