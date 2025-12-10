export function paresComWhile() {
  const n = Number(prompt("Digite um número positivo:"));
  let i = 0;

  while (i <= n) {
    if (i % 2 === 0) {
      console.log(i);
    }
    i++;
  }
}
