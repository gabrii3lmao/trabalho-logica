export function restaurante() {
  const prato = prompt("Escolha um prato: pizza, hamburguer, salada, macarrao");

  switch (prato) {
    case "pizza":
      console.log("Preço: R$ 35 - Pizza de mussarela");
      break;
    case "hamburguer":
      console.log("Preço: R$ 25 - Hambúrguer artesanal");
      break;
    case "salada":
      console.log("Preço: R$ 18 - Salada fresca com legumes");
      break;
    case "macarrao":
      console.log("Preço: R$ 22 - Macarrão ao sugo");
      break;
    default:
      console.log("Opção inválida");
  }
}
