export function imparesComFor() {
  const n = Number(prompt("Digite um número positivo:"));

  for (let i = 0; i <= n; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
}
