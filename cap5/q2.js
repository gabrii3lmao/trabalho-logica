export function maiorDeTres() {
  const a = Number(prompt("Digite o primeiro número:"));
  const b = Number(prompt("Digite o segundo número:"));
  const c = Number(prompt("Digite o terceiro número:"));

  if (a > b && a > c) {
    console.log(a);
  } else if (b > a && b > c) {
    console.log(b);
  } else {
    console.log(c);
  }
}
