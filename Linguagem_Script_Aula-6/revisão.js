const cursos = [
{ nome: "ADS", turno: "noite", vagas: 40 },
{ nome: "Redes", turno: "tarde", vagas: 30 },
{ nome: "Informática", turno: "manhã", vagas: 35 }
];

const rotulos = cursos.map(
c => `${c.nome.toUpperCase()} (${c.turno})`
);
console.log(rotulos);

const grandes = cursos.filter(c => c.vagas >= 35);
console.log(grandes.length);

const totalVagas = cursos.reduce(
(soma, c) => soma + c.vagas,
0
);
console.log(totalVagas);

const texto = JSON.stringify(cursos); // objetos → texto
const recuperados = JSON.parse(texto); // texto → objetos

const nomes = recuperados.map(c => c.nome);
console.log(nomes);

const filtrarPor = (lista, condicao = () => true) =>
lista.filter(condicao);

console.log(filtrarPor(cursos).length);
console.log(filtrarPor(cursos, c => c.turno === "noite").length);

