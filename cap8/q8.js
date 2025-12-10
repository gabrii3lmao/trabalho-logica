export function calcularLogaritmo() {
  import("mathjs").then(math => {
    const numero = Number(prompt("Digite um número:"));
    const log = math.log(numero);
    console.log("Logaritmo:", log);
  });

  return "Logaritmo calculado.";
}