export function maiorDeIdade() {
  const anoNascimento = Number(prompt("Digite seu ano de nascimento:"));
  const anoAtual = new Date().getFullYear();
  const idade = anoAtual - anoNascimento;

  if (idade >= 18) {
    console.log("Maior de idade");
  } else {
    console.log("Menor de idade");
  }
}
