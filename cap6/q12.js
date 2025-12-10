export function calculadora() {
  const lerNumero = (msg) => Number(prompt(msg));

  const somar = (a, b) => a + b;
  const subtrair = (a, b) => a - b;
  const multiplicar = (a, b) => a * b;
  const dividir = (a, b) => b !== 0 ? a / b : "Erro: divisão por zero.";

  const exibir = (msg) => console.log(msg);

  const n1 = lerNumero("Digite o primeiro número:");
  const n2 = lerNumero("Digite o segundo número:");
  const operacao = prompt("Escolha a operação (+, -, *, /):");

  let resultado;

  switch (operacao) {
    case "+":
      resultado = somar(n1, n2);
      break;
    case "-":
      resultado = subtrair(n1, n2);
      break;
    case "*":
      resultado = multiplicar(n1, n2);
      break;
    case "/":
      resultado = dividir(n1, n2);
      break;
    default:
      resultado = "Operação inválida.";
  }

  exibir("Resultado: " + resultado);

  return "Calculadora executada.";
}
