const { Carta, ordernarPorValor, ordernarPorNaipe } = require("../src/01");

test("cria um objeto Carta", () => {
  const carta = new Carta(10, "E");
  expect(carta.valor).toBe(10);
  expect(carta.naipe).toBe("E");
});

test("ordena cartas por valor", () => {
  const cartas = [new Carta(5, "C"), new Carta(10, "E"), new Carta(2, "O")];
  const ordenadas = ordernarPorValor(cartas);
  expect(ordenadas[0].valor).toBe(2);
  expect(ordenadas[1].valor).toBe(5);
  expect(ordenadas[2].valor).toBe(10);
});

test("ordena cartas por naipe", () => {
  const cartas = [new Carta(1, "P"), new Carta(2, "E"), new Carta(3, "C")];
  const sortedCartas = ordernarPorNaipe(cartas);
  expect(sortedCartas[0].naipe).toBe("C");
  expect(sortedCartas[1].naipe).toBe("E");
  expect(sortedCartas[2].naipe).toBe("P");
});
