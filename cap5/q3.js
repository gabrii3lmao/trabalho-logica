export function mediaAluno() {
  const n1 = Number(prompt("Digite a primeira nota:"));
  const n2 = Number(prompt("Digite a segunda nota:"));
  const n3 = Number(prompt("Digite a terceira nota:"));

  const media = (n1 + n2 + n3) / 3;

  if (media >= 7) {
    console.log("Aprovado");
  } else {
    console.log("Reprovado");
  }
}
