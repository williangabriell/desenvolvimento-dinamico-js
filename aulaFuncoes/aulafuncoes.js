// FUNÇÕES SIMPLES

console.log("FUNÇÕES SIMPLES")

function multiplicar(x, y) {
    return x * y
}

var a = multiplicar(4, 2)
console.log(a)

var b = multiplicar(6, 7)
console.log(b)

function somaValores(a, b = 2, c = 6){
    var total = a + b + c
    return total
}

var f = somaValores(8)
console.log(f)

var f = somaValores(8, 4, 5)
console.log(f)


// FUNÇÕES ANÔNIMAS

console.log("FUNÇÕES ANÔNIMAS")

var infoCal = function(a, b, c){
    return a + b + c
}

console.log(infoCal(2, 5, 7))

// ARROW FUNCTION

console.log("ARROW FUNCTION")

const soma = (num1, num2) => {
    return num1 + num2
}

console.log(soma(3, 6))

const numeros = [1, 2, 3, 4, 5]
const valores = numeros.map((num) => num * num)  // multiplicando cada valor por ele mesmo e mostrando o resultado dentro do array
console.log(valores)

var listaProdutos = ["geladeira", "fogão", "air fryer"]
var listaEmMaiuscula = listaProdutos.map(primeiraEmMaiuscula)

function primeiraEmMaiuscula(elemento){
    return elemento.charAt(0).toUpperCase() + elemento.slice(1)  // Transformando a primeira letra dos itens do array em maiúsculo
}

console.log(listaEmMaiuscula)


