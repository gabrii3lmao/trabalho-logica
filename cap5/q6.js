export function multiplos() {
  const a = Number(prompt("Digite o primeiro número:"));
  const b = Number(prompt("Digite o segundo número:"));

  if (a % b === 0 || b % a === 0) {
    console.log("Pelo menos um dos números é múltiplo do outro");
  } else {
    console.log("Nenhum dos números é múltiplo do outro");
  }
}
