// ===== 1. SELECÇÃO DOS ELEMENTOS =====
const titulo = document.getElementById("titulo-principal");
const subtitulo = document.querySelector("#subtitulo");
const campoBusca = document.querySelector("#campo-busca");
const filtroArea = document.querySelector("#filtro-area");
const mensagem = document.querySelector("#mensagem");
const lista = document.querySelector("#lista-cursos");
const formulario = document.querySelector("#form-cadastro");
const btnTema = document.querySelector("#btn-tema");
const btnLimpar = document.querySelector("#btn-limpar");

titulo.textContent = "Cursos do IFPB Cajazeiras";

function normalizar(texto) {
    return texto.toLowerCase().trim();
}

function mostrarMensagem(texto, tipo) {
    mensagem.textContent = texto;
    mensagem.classList.remove("mensagem--sucesso", "mensagem--erro");
    if (tipo) {
        mensagem.classList.add("mensagem--" + tipo);
    }
}

function aplicarFiltros() {
    const termo = normalizar(campoBusca.value);
    const area = filtroArea.value;
    const cards = lista.querySelectorAll(".card-curso");
    let visiveis = 0;

    cards.forEach(function (card) {
        const nome = normalizar(card.querySelector("h2").textContent);
        const combinaNome = nome.includes(termo);
        const combinaArea = area === "todos" || card.dataset.area === area;
        const mostrar = combinaNome && combinaArea;

        card.classList.toggle("oculto", !mostrar);
        if (mostrar) {
            visiveis++;
        }
    });

    if (cards.length === 0) {
        mostrarMensagem("Nenhum curso cadastrado.", "erro");
    } else if (visiveis === 0) {
        mostrarMensagem("Nenhum curso encontrado com esses filtros.", "erro");
    } else if (termo === "" && area === "todos") {
        mostrarMensagem("Explore os cursos disponíveis.");
    } else {
        mostrarMensagem(visiveis + " curso(s) encontrado(s).");
    }
}

function criarCard(nome, area, textoArea) {
    const card = document.createElement("article");
    card.className = "card-curso";
    card.dataset.area = area;

    const h2 = document.createElement("h2");
    h2.textContent = nome;

    const descricao = document.createElement("p");
    descricao.className = "descricao";
    descricao.textContent = "Curso da área de " + textoArea + ".";

    const btnDetalhes = document.createElement("button");
    btnDetalhes.className = "botao botao--principal";
    btnDetalhes.type = "button";
    btnDetalhes.dataset.acao = "detalhes";
    btnDetalhes.textContent = "Ver detalhes";

    const detalhes = document.createElement("p");
    detalhes.className = "detalhes oculto";
    detalhes.textContent = "Curso cadastrado pelo usuário.";

    const btnRemover = document.createElement("button");
    btnRemover.className = "botao botao--perigo";
    btnRemover.type = "button";
    btnRemover.dataset.acao = "remover";
    btnRemover.textContent = "Remover";

    card.append(h2, descricao, btnDetalhes, detalhes, btnRemover);
    return card;
}

function alternarDetalhes(card, botao) {
    const detalhes = card.querySelector(".detalhes");
    const aberto = detalhes.classList.toggle("oculto") === false;

    card.classList.toggle("expandido", aberto);
    botao.textContent = aberto ? "Ocultar detalhes" : "Ver detalhes";
}

function removerCurso(card) {
    const nome = card.querySelector("h2").textContent;
    card.remove();
    aplicarFiltros();
    mostrarMensagem('Curso "' + nome + '" removido.', "sucesso");
}

function cadastrarCurso(evento) {
    evento.preventDefault();

    const nome = formulario.elements["nome"].value.trim();
    const seletor = formulario.elements["area"];
    const area = seletor.value;
    const textoArea = seletor.options[seletor.selectedIndex].text;

    if (nome === "") {
        mostrarMensagem("Informe o nome do curso.", "erro");
        return;
    }

    const existe = Array.from(lista.querySelectorAll("h2")).some(function (h2) {
        return normalizar(h2.textContent) === normalizar(nome);
    });

    if (existe) {
        mostrarMensagem("Esse curso já está cadastrado.", "erro");
        return;
    }

    lista.appendChild(criarCard(nome, area, textoArea));
    formulario.reset();
    aplicarFiltros();
    mostrarMensagem('Curso "' + nome + '" cadastrado com sucesso.', "sucesso");
}

function alternarTema() {
    document.body.classList.toggle("tema-alternativo");
    const destaque = lista.querySelector(".destaque-proprio");
    if (destaque) {
        destaque.classList.toggle("destaque");
    }
}

function limparFiltros() {
    campoBusca.value = "";
    filtroArea.value = "todos";
    aplicarFiltros();
    campoBusca.focus();
}

lista.addEventListener("click", function (evento) {
    const botao = evento.target.closest("button[data-acao]");
    if (!botao) {
        return;
    }
    const card = botao.closest(".card-curso");

    if (botao.dataset.acao === "detalhes") {
        alternarDetalhes(card, botao);
    } else if (botao.dataset.acao === "remover") {
        removerCurso(card);
    }
});

campoBusca.addEventListener("input", aplicarFiltros);
filtroArea.addEventListener("change", aplicarFiltros);
formulario.addEventListener("submit", cadastrarCurso);
btnTema.addEventListener("click", alternarTema);
btnLimpar.addEventListener("click", limparFiltros);

