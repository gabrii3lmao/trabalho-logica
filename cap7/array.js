export function findNome(arr, nome) {
  let index = 0;
  for (let item of arr) {
    if (item === nome) {
      return console.log(`\"${nome}"\ encontrado no index ${index}`);
    } else {
      index += 1;
    }
  }
  return console.log(`Item ${nome} não encontrado`);
}
