var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

var resultado = numeros.filter(item => item % 2 == 0)  // método inline de receber os resultados dos números divisiveis por 2

console.log(resultado)

var numerosFiltrados = numeros.filter(
    function(valor) {
        return valor > 5                                // método de fazer com uma função dentro do filter
    }
)

console.log(numerosFiltrados)

function buscarValores(valor){                      // método de fazer com uma função já pronta
    return valor < 5
}

var numerosEncontrados = numeros.filter(buscarValores)

console.log(numerosEncontrados)


// --------------------------------------------------------------------------- // ------------------------------------------------------------------------------------- // ---------------

var funcionarios = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Davi', idade: 22},
    {nome: 'Arthur', idade: 18},
    {nome: 'Lucas', idade: 40},
]

var pessoasListagem = funcionarios.filter(
    function(valor){
        return valor.nome.length < 5
})

console.log(pessoasListagem)