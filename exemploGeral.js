
const nome = "alzira eva cavalcanti alves"

const nomeSeparado = nome.split(" ") // transformando os nomes em um array

let novoNome = ""
for (let item of nomeSeparado) {
    let primeiraLetra = item.slice(0, 1)   // corta e pega pedaços do texto
    let restanteLetras = item.slice(1)
    novoNome += primeiraLetra.toUpperCase() + restanteLetras + " "   // letras minusculas em maiuscular

}
console.log(novoNome.trim()) // retira os espaços do inicio e final da string