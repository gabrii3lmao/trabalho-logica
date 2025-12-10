// Crie um array de frutas e use includes para verificar se a fruta "maçã" está presente no array.
export function verificarMacaNoArray() {
  let frutas = [
    "banana",
    "tomate",
    "kiwi",
    "ciriguela",
    "caju",
    "abacate",
    "guaraná",
    "mirtilo",
    "melancia",
  ];
  console.log(frutas.includes("maçã")); //false
}
