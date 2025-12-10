export function diferencaVarLetConst() {
  let resposta = `
var: tem escopo global ou de função, permite redeclaração e hoisting completo.
let: tem escopo de bloco, não permite redeclaração no mesmo escopo.
const: igual ao let no escopo de bloco, porém o valor não pode ser reatribuído.
`;
  return resposta;
}
