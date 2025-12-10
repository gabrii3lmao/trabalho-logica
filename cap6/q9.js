export function funcoesArrow() {
  const global = "global";

  const funcLocal = () => {
    const local = "local";
    return local;
  };

  const media = (a, b, c) => (a + b + c) / 3;

  let resposta = "";
  resposta += funcLocal() + "\n";
  resposta += global + "\n";
  resposta += "Média exemplo (1,2,3): " + media(1, 2, 3);

  return resposta;
}
