export function calcularIMC() {
  const altura = Number(prompt("Digite sua altura (ex: 1.75):"));
  const peso = Number(prompt("Digite seu peso (ex: 70):"));

  const imc = peso / (altura * altura);
  console.log("IMC:", imc);

  if (imc < 18.5) {
    console.log("Abaixo do peso");
  } else if (imc < 24.9) {
    console.log("Peso normal");
  } else if (imc < 29.9) {
    console.log("Sobrepeso");
  } else {
    console.log("Obesidade");
  }
}
