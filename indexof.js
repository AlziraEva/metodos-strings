
const email = "alz.ira@.gmail.com"

let temA = (email.includes("@"))
let posicao = email.indexOf("@")
let temPonto = email.includes(".", posicao)

if (temA && temPonto === true) {
    console.log("Email Valido")
}