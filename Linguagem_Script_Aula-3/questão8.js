/*Solicite o salário de um funcionário e o percentual de reajuste.
Calcule o valor do aumento e o novo salário. Apresente os
três valores utilizando alert().*/

//Solicitando os valores
let salario = Number(prompt("Informe o salário atual do funcionário:"));
let percentual = Number(prompt("Informe o percentual de reajuste (ex: 10 para 10%):"));

//Realizando calculo do reajuste salarial
let valorAumento = salario * (percentual / 100);
let novoSalario = salario + valorAumento;

//Apresentando o reajuste salarial
alert(`Reajuste salarial:
Salário atual: R$ ${salario.toFixed(2)}
Aumento (${percentual}%): R$ ${valorAumento.toFixed(2)}
Novo salário: R$ ${novoSalario.toFixed(2)}`);