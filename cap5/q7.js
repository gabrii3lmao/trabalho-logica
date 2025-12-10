export function classificarTriangulo() {
  const a = Number(prompt("Lado A:"));
  const b = Number(prompt("Lado B:"));
  const c = Number(prompt("Lado C:"));

  // Verifica se é um triângulo válido
  if (a <= 0 || b <= 0 || c <= 0 || a + b <= c || a + c <= b || b + c <= a) {
    console.log("Triângulo inválido");
    return;
  }

  if (a === b && b === c) {
    console.log("Equilátero");
  } else if (a === b || a === c || b === c) {
    console.log("Isósceles");
  } else {
    console.log("Escaleno");
  }
}
