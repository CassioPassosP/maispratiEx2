function memoize(fn){
    const cache = new Map()

    return function(... args){
        const key = JSON.stringify(args)

        if(cache.has(key)){
            return cache.get(key)
        }

        const result = fn.apply(this, args)
        cache.set(key, result)
        return result
    }
}

function somarLento(a, b) {
  console.log('Função original chamada com:', a, b);
  return a + b;
}

const somarMemoizada = memoize(somarLento);

console.log(somarMemoizada(2, 3)); // Chama a função original → 5
console.log(somarMemoizada(2, 3)); // Usa cache → 5 (sem log da função original)
console.log(somarMemoizada(4, 5)); // Chama a função original → 9
console.log(somarMemoizada(4, 5)); // Usa cache → 9