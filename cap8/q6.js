
export function exemploESModulo() {
  return `
Exemplo de ES Modules moderno:

// mathESM.js
export const soma = (a, b) => a + b;
export const sub = (a, b) => a - b;
export const mult = (a, b) => a * b;
export const div = (a, b) => b !== 0 ? a / b : "Erro";
export const exp = (a, b) => a ** b;

// app.js
import { soma, exp } from "./mathESM.js";
console.log(exp(3, 4));
`;
}