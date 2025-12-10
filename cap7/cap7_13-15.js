const prompt = require("prompt-sync")();

export function adicionarFilmes() {
  let filmes = [];
  for (let i = 1; i <= 5; i++) {
    let nome = prompt(`Digite o nome de 5 filmes. Filme n°${i}: `);
    filmes.push(nome);
  }
  console.log(filmes);
  return filmes;
}

export function listarFilmesComFor(filmes) {
  for (let i = 0; i < filmes.length; i++) {
    console.log(filmes[i]);
  }
}

export function listarFilmesComForOf(filmes) {
  console.log("loop for of -----------");
  for (let item of filmes) {
    console.log(item);
  }
}
