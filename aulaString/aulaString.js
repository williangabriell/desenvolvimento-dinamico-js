var nome = "Marcelo Da Silva"
var x = nome.length
console.log(x)


resultado = x > 15 ? "Obrigado" : "Por favor preencha o seu nome completo"

console.log(x)

var res = nome.toLocaleUpperCase() // transforma em maiusculo
console.log(res)

var jogo = "Barcelona vs Real melhor time"
var posicao = jogo.indexOf("Real")              // Procura a palavra na frase
console.log(posicao)

var cortado = jogo.slice(0, 9) // corta a frase de acordo com as coordenadas
console.log(cortado)


var val = jogo.includes("Real") // informa se existe ou não tal palavra na fase
console.log(val)

var str1 = "Hello"
var str2 = "Turma"

var str3 = str1.concat(str2) // concatena variaveis
console.log(str3)

var frase = "                Olá vc está aprendendo javascript"   // retira o espaço das frases
console.log(frase.trim())

var num = "1, 2, 3, 4, 5, 6, 7, 8"
var arr = num.split(",")  // transforma informação num array
console.log(arr)

var s = "JavaScript e Python"