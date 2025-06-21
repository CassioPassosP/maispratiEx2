// Importa a biblioteca prompt-sync para entrada no terminal (linha por linha)
const prompt = require('prompt-sync')();

// Função debounce que adia a execução da função fn até que o usuário pare de chamá-la por 'delay' milissegundos
function debounce(fn, delay) {
  let timeoutId; // Armazena o identificador do setTimeout

  // Retorna uma nova função que pode ser chamada com argumentos
  return function (...args) {
    // Se o usuário chamar de novo antes do tempo acabar, o timer anterior é cancelado
    clearTimeout(timeoutId);

    // Inicia um novo timer; se não for interrompido, executa a função fn
    timeoutId = setTimeout(() => {
      fn.apply(this, args); // Executa a função fn com os argumentos e contexto corretos
    }, delay);
  };
}

// Define a função que será executada após o tempo de espera (delay)
const mostrarMensagem = debounce((texto) => {
  console.log(`\n🟢 Executando função final com o valor: "${texto}"\n`);
}, 2000); // Tempo de espera: 2000ms = 2 segundos

console.log("Digite algo (digite 'sair' para encerrar):");

// Loop principal para capturar entradas do usuário
while (true) {
  const entrada = prompt(">>> "); // Solicita entrada do usuário

  // Se o usuário digitar 'sair', o loop é encerrado
  if (entrada.toLowerCase() === 'sair') {
    console.log("Encerrando o programa...");
    break;
  }

  // Chama a função com debounce: a execução real só ocorrerá 2 segundos após a última digitação
  mostrarMensagem(entrada);
}
