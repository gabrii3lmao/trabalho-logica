export function parOuImpar2() {
  const n = Number(prompt("Digite um número:"));
  
  if (n % 2 === 0) {
    console.log("O número é par");
  } else {
    console.log("O número é ímpar");
  }
}
