const vendas = [
  { cliente: "Ana Souza", total: 49.90 },
  { cliente: "Carlos Lima", total: 129.90 },
  { cliente: "Beatriz Martins", total: 199.99 },
  { cliente: "Diego Silva", total: 39.90 },
  { cliente: "Fernanda Rocha", total: 299.90 },
  { cliente: "Gustavo Alves", total: 159.90 },
  { cliente: "Juliana Castro", total: 89.90 },
  { cliente: "Lucas Mendes", total: 120.00 },
  { cliente: "Mariana Dias", total: 69.90 },
  { cliente: "Rafael Oliveira", total: 249.90 }
];

console.log(vendas)

let totalVendas = vendas.reduce((soma, totais) => {
  return soma + totais.total;
},0)

console.log("Total de vendas:", totalVendas.toFixed(2));