export function conversorTemperatura() {
  const escolha = prompt("Digite C para converter para Celsius ou F para converter para Fahrenheit:");
  
  if (escolha === "C" || escolha === "c") {
    const f = Number(prompt("Digite a temperatura em Fahrenheit:"));
    const celsius = (f - 32) * 5 / 9;
    console.log(celsius);
  
  } else if (escolha === "F" || escolha === "f") {
    const c = Number(prompt("Digite a temperatura em Celsius:"));
    const fahrenheit = (c * 9 / 5) + 32;
    console.log(fahrenheit);
  
  } else {
    console.log("Opção inválida");
  }
}
