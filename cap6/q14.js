export function calcularIMC() {
  const ler = (msg) => Number(prompt(msg));

  const calcular = (peso, altura) => peso / (altura * altura);

  const classificar = (imc) => {
    if (imc < 18.5) return "Abaixo do peso";
    if (imc < 25) return "Peso normal";
    if (imc < 30) return "Sobrepeso";
    return "Obesidade";
  };

  const exibir = (msg) => console.log(msg);

  const peso = ler("Digite seu peso (kg):");
  const altura = ler("Digite sua altura (m):");

  const imc = calcular(peso, altura);
  const status = classificar(imc);

  exibir(`Seu IMC é: ${imc.toFixed(2)}`);
  exibir(`Classificação: ${status}`);

  return "IMC calculado.";
}
