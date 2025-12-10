export function fatorial() {
  const n = Number(prompt("Digite um número:"));
  let resultado = 1;

  for (let i = 1; i <= n; i++) {
    resultado *= i;
  }

  console.log("Fatorial:", resultado);
}
