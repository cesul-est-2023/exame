const {
  Vendedor,
  obterMetaCumprida,
  obterMelhorVendedor,
  obterMelhorPerformance,
} = require("../src/03");

test("cria objeto vendedor", () => {
  const vendedor = new Vendedor("João", 100, 200);
  expect(vendedor.nome).toBe("João");
  expect(vendedor.valorVendas).toBe(100);
  expect(vendedor.metaVendas).toBe(200);
});

test("retorna vendedores que cumpriram a meta", () => {
  const vendedores = [
    new Vendedor("João", 100, 200),
    new Vendedor("Maria", 300, 200),
    new Vendedor("José", 250, 200),
  ];

  const vendedoresMetaCumprida = obterMetaCumprida(vendedores);
  expect(vendedoresMetaCumprida.length).toBe(2);
  expect(vendedoresMetaCumprida[0].nome).toEqual("Maria");
  expect(vendedoresMetaCumprida[1].nome).toEqual("José");
});

test("retorna vendedor com maior valor de vendas", () => {
  const vendedores = [
    new Vendedor("Henrique", 500, 500),
    new Vendedor("Joaquim", 1000, 800),
    new Vendedor("Lucas", 150, 250),
  ];
  const melhorVendedor = obterMelhorVendedor(vendedores);
  expect(melhorVendedor.nome).toEqual("Joaquim");
});

test("retorna vendedor com melhor performance", () => {
  const vendedores = [
    new Vendedor("Paulo", 400, 200),
    new Vendedor("Pedro", 500, 200),
    new Vendedor("Carlos", 150, 200),
  ];
  const melhorPerformance = obterMelhorPerformance(vendedores);
  expect(melhorPerformance.nome).toEqual("Pedro");
});
