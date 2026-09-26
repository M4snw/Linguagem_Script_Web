/*Uma loja recebeu 47 itens e precisa embalá-los em caixas
com capacidade para 6 itens cada. Calcule e exiba quantas
caixas completas serão formadas e quantos itens sobrarão. O
depósito tem 4 andares, com 4 corredores cada e 4
prateleiras por corredor: utilize o operador de potência para
calcular o total de posições disponíveis.*/

//Definindo variaveis
let itens = 47;
let capacidadeDaCaixa = 6;
let caixas = 0;
let posicoes = 4 ** 3;
let totalDeItens = itens;

//Fazendo as operaçoes
while(itens - capacidadeDaCaixa >= 0){
    caixas++;
    itens -= 6;
}

//Apresentando resultados
alert(`Itens = ${totalDeItens}
Caixas completas = ${caixas}
Itens sobrando =${itens}
Posições no depósito = ${posicoes}`);