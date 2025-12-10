export function mediaComFuncoes() {
  const lerNumero = () => Number(prompt("Digite um número:"));

  const calcularMedia = (n1, n2) => (n1 + n2) / 2;

  const exibir = (msg) => console.log(msg);

  const n1 = lerNumero();
  const n2 = lerNumero();

  const media = calcularMedia(n1, n2);

  exibir("A média é: " + media);

  return "Programa executado.";
}
