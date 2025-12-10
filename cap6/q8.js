export function escopoDeBloco() {
  let resposta = "";

  if (true) {
    let dentroDoBloco = "Sou do bloco";
    resposta += dentroDoBloco + "\n"; // funciona
  }

  try {
    resposta += dentroDoBloco;
  } catch (e) {
    resposta += "dentroDoBloco não pode ser acessada fora do bloco.";
  }

  return resposta;
}
