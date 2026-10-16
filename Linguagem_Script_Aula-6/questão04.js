/*Para o array alunos, use: find() para exibir o nome do primeiro
aluno com média menor que 7; some() para verificar se algum
aluno tem média maior ou igual a 9; e every() para verificar se
todos têm média maior ou igual a 7.*/

alunos = [
{nome:"Ana",media:8.5},
{nome:"Bruno",media:6},
{nome:"Carla",media:9},
{nome:"Davi",media:5.5}
];

const primeiroAbaixo = alunos.find(alunos => alunos.media < 7);
console.log(primeiroAbaixo ? primeiroAbaixo.nome : "Nenhum");

console.log(alunos.some(alunos => alunos.media >= 9));

console.log(alunos.every(alunos => alunos.media >= 7));