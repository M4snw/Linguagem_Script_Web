/*Solicite a distância de uma viagem, o consumo médio de um
veículo e o preço do combustível. Calcule a quantidade
estimada de combustível e o custo da viagem.*/

//Solicitando os valores
let distancia = Number(prompt("Informe a distância da viagem (em km):"));
let consumoMedio = Number(prompt("Informe o consumo médio do veículo (km por litro):"));
let precoCombustivel = Number(prompt("Informe o preço do combustível (por litro):"));

//Fazendo o calculo da estimativa
let combustivelNecessario = distancia / consumoMedio;
let custoViagem = combustivelNecessario * precoCombustivel;

//Apresentando a estimativa da viagem
alert(`Estimativa da viagem:
Distância: ${distancia} km
Combustível necessário: ${combustivelNecessario.toFixed(2)} litros
Custo total: R$ ${custoViagem.toFixed(2)}`);