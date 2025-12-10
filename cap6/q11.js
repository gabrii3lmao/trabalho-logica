export function jogoAdivinhacaoFuncoes() {
  const gerarNumero = () => Math.floor(Math.random() * 100) + 1;

  const numeroSecreto = gerarNumero();

  const lerPalpite = () =>
    Number(prompt("Digite seu palpite (1 a 100):"));

  const verificarPalpite = (palpite) => {
    if (palpite === numeroSecreto) return "correto";
    if (palpite < numeroSecreto) return "menor";
    return "maior";
  };

  const exibir = (msg) => console.log(msg);

  let tentativas = 0;

  while (tentativas < 10) {
    const palpite = lerPalpite();
    tentativas++;

    const resultado = verificarPalpite(palpite);

    if (resultado === "correto") {
      exibir("Acertou! Número secreto: " + numeroSecreto);
      exibir("Tentativas: " + tentativas);
      return "Jogo finalizado.";
    }

    if (resultado === "menor") exibir("Tente um número MAIOR.");
    if (resultado === "maior") exibir("Tente um número MENOR.");
  }

  exibir("Você perdeu! O número secreto era: " + numeroSecreto);
  return "Jogo encerrado.";
}
