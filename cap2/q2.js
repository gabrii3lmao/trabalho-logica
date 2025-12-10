export function torreDeHanoi4() {
  let resposta = `
Para resolver a Torre de Hanoi com 4 discos:

1) Mover os 3 discos superiores de A para B (usando C como auxiliar)
2) Mover o disco 4 de A para C
3) Mover os 3 discos de B para C (usando A como auxiliar)

A sequência expandida:
1: A → C
2: A → B
3: C → B
4: A → C
5: B → A
6: B → C
7: A → C
8: A → B
9: C → B
10: C → A
11: B → A
12: C → B
13: A → C
14: A → B
15: C → B
`;
  return resposta;
}
