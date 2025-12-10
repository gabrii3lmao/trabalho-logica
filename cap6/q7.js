export function variavelGlobalLocal() {
  let resposta = "";

  // variável global
  var globalVar = "Eu sou global";

  function testeEscopo() {
    // variável local
    var localVar = "Eu sou local";
    resposta += localVar + "\n"; // funciona aqui
  }

  testeEscopo();

  resposta += globalVar + "\n"; // funciona

  try {
    resposta += localVar; // erro
  } catch (e) {
    resposta += "localVar não pode ser acessada fora da função.";
  }

  return resposta;
}
