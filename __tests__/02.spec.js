const { obterMaiorSequencia } = require("../src/02");

test("retorna maior sequencia decrescente", () => {
  const numeros = [1, 2, 8, 3, 10, 12, 98, 24, 15, 9, 2, 17];
  const sequencia = obterMaiorSequencia(numeros);
  console.log(sequencia);
  expect(sequencia).toEqual([98, 24, 15, 9, 2]);
});
