const formCalculadora = document.querySelector('#calculadora-media');
const resultadoMedia = document.querySelector('#resultado-media');

formCalculadora.addEventListener('submit', function (evento) {
    evento.preventDefault();

    const nota1 = Number(document.querySelector('#nota1').value);
    const nota2 = Number(document.querySelector('#nota2').value);
    const nota3 = Number(document.querySelector('#nota3').value);

    const media = (nota1 + nota2 + nota3) / 3;

    let situacao = '';
    if (media >= 7) {
        situacao = 'Aprovado';
        resultadoMedia.className = 'aprovado';
    } else if (media >= 4) {
        situacao = 'Recuperação';
        resultadoMedia.className = 'recuperacao';
    } else {
        situacao = 'Reprovado';
        resultadoMedia.className = 'reprovado';
    }

    resultadoMedia.textContent = 'Média: ' + media.toFixed(2) + ' — ' + situacao;
});