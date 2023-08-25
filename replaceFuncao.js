const outrosPaises = "13,500,00,00"

function replaceAll(original, text, newText) {
    while (original !== original.replace(text, newText)) { // continuar rodando o loop, enquanto a variavel original (outrosPaises), for diferente da variavel original.replace (outrosPaises.replace)
        original = original.replace(text, newText) // substituindo o text(,) por newText(,),
    }
    return original
}



console.log(replaceAll(outrosPaises, ",", "."))