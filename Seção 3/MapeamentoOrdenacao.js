const produtos = [
  { nome: "Camiseta", preco: 49.90 },
  { nome: "Calça Jeans", preco: 129.90 },
  { nome: "Tênis", preco: 199.99 },
  { nome: "Boné", preco: 39.90 },
  { nome: "Relógio", preco: 299.90 },
  { nome: "Mochila", preco: 159.90 },
  { nome: "Fone de Ouvido", preco: 89.90 },
  { nome: "Óculos de Sol", preco: 120.00 },
  { nome: "Carteira", preco: 69.90 },
  { nome: "Jaqueta", preco: 249.90 }
];

console.log(produtos)

function ordenarPorPrecoCrescente(produtos){ //ordenacao crescente 
    return [... produtos].sort((a, b) => a.preco - b.preco)
}

function ordenarPorPrecoDecrescente(produtos){ //ordenacao decrescente 
    return [... produtos].sort((a, b) => b.preco - a.preco)
}

function exibirProdutos(lista) {
  lista.map((produto, index) => { //é usado para criar um novo array, transformando cada item do array original com base em uma função fornecida. Ele não modifica o array original.
    console.log(`${index + 1}. ${produto.nome} - R$ ${produto.preco.toFixed(2)}`);
  });
}

console.log(ordenarPorPrecoCrescente(produtos))
console.log(ordenarPorPrecoDecrescente(produtos))

console.log(exibirProdutos(produtos))
