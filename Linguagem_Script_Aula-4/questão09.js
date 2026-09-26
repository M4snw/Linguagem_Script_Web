/*Utilize a estrutura do...while para solicitar uma senha
repetidamente, até que o usuário digite o valor correto. Ao
acertar, exiba uma mensagem de boas-vindas e informe
quantas tentativas foram necessárias. Justifique, em
comentário, por que o do...while é mais adequado que o while
neste caso.*/

//Definindo variaveis
const senhaCorreta = "JavaScriptTemAura";
let senhaDigitada;
let tentativas = 0;

/*Justificativa: O do...while é mais adequado aqui, pois o usuário precisa pelo menos digitar a senha pelo menos
uma vez antes da condição ser testada, caso fosse usado while ele testaria a condição primeiro e a variável
senha digitada precisaria ser iniciada de maneira forçada*/

//Solicitando senhas até a correta
do {
    senhaDigitada = prompt("Digite a senha: ");
    tentativas++;
} while (senhaDigitada !== senhaCorreta);

//Apresentando a mensagem de bem vindo
console.log(`Bem-vindo! Você acertou em ${tentativas} tentativa(s).`);