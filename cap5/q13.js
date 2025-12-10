export function jogoAdivinhacao() {
  const numeroSecreto = Math.floor(Math.random() * 101); // 0 a 100
  let tentativas = 10;

  console.log("Tente adivinhar o número entre 0 e 100!");

  while (tentativas > 0) {
    const palpite = Number(prompt(`Tentativa (${11 - tentativas}/10): Digite seu palpite:`));

    if (palpite === numeroSecreto) {
      console.log("Parabéns! Você acertou o número secreto!");
      return;
    }

    if (palpite < numeroSecreto) {
      console.log("O número secreto é MAIOR que o seu palpite.");
    } else {
      console.log("O número secreto é MENOR que o seu palpite.");
    }

    tentativas--;
  }

  console.log("Suas tentativas acabaram! O número secreto era:", numeroSecreto);
}
