export function conversorMoeda() {
  const lerValor = () => Number(prompt("Digite o valor em Reais (R$):"));
  const cotacao = 5.50; // exemplo

  const converter = (valor) => valor / cotacao;

  const exibir = (msg) => console.log(msg);

  const valorEmReais = lerValor();
  const valorEmDolar = converter(valorEmReais);

  exibir(`R$ ${valorEmReais} equivalem a US$ ${valorEmDolar.toFixed(2)}`);

  return "Conversão concluída.";
}
