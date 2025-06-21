const dados = [
  ["nome", "Lucas"],
  ["idade", 28],
  ["profissao", "Desenvolvedor"],
  ["cidade", "São Paulo"],
  ["ativo", true]
];

console.log(dados)

function paresParaObjeto(array){
    const objeto = Object.fromEntries(array);

    console.log(objeto)
}

function objetoParaPares(obj){
    const objeto = Object.entries(obj);

    console.log(objeto)
}

console.log(paresParaObjeto(dados))
console.log(objetoParaPares(dados))

