const botaoTema = document.querySelector('#toggle-tema');

botaoTema.addEventListener('click', function () {
    document.body.classList.toggle('escuro');
});

const linksMenu = document.querySelectorAll('nav a');
const contadorTexto = document.querySelector('#contador-cliques');
let contador = 0;

linksMenu.forEach(function (link) {
    link.addEventListener('click', function () {
        contador++;
        contadorTexto.textContent = 'Cliques no menu: ' + contador;
    });
});

const formulario = document.querySelector('#busca-personagem');
const campoFiltro = document.querySelector('#filtro');
const avisoFiltro = document.querySelector('#aviso-filtro');

formulario.addEventListener('submit', function (evento) {
    if (campoFiltro.value.trim() === '') {
        evento.preventDefault();
        avisoFiltro.textContent = 'Digite um nome antes de buscar.';
    } else {
        avisoFiltro.textContent = '';
    }
});
