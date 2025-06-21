
const ola = "Ola ola mundo mundo"

var palavras = []

for (let i = 0; i < ola.split(" ").length; i++) {
    palavras.push(ola.split(" ")[i])
}

console.log(palavras)
