class Vendedor {
  constructor(nome, valorVendas, metaVendas) {
    this.nome = nome;
    this.valorVendas = valorVendas;
    this.metaVendas = metaVendas;
  }
}

function obterMetaCumprida(vendedores) {}

function obterMelhorVendedor(vendedores) {}

function obterMelhorPerformance(vendedores) {}

module.exports = {
  Vendedor,
  obterMetaCumprida,
  obterMelhorVendedor,
  obterMelhorPerformance,
};
