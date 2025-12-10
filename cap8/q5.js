export function exemploCommonJSModulo() {
  return `
Exemplo de CommonJS:

// mathCJS.js
function soma(a, b) { return a + b; }
function sub(a, b) { return a - b; }
function mult(a, b) { return a * b; }
function div(a, b) { return b !== 0 ? a / b : "Erro"; }
function exp(a, b) { return a ** b; }

module.exports = { soma, sub, mult, div, exp };

// app.js
const math = require("./mathCJS");
console.log(math.exp(2, 3));
`;
}