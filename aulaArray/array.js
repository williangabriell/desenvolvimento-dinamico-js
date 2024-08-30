var valores = [8, 1, 7, 2, 9]

console.log(valores[0]) // ver a primeira posição do array

console.log(valores[3]) // ver a terceira posição do array

console.log('Array invertido: ' + valores.reverse()) // invertendo os valores do array

for (var pos = 0; pos < valores.length; pos++) {
    console.log('Posição: ' + pos + ' Valor: ' + valores[pos])
    
}

var carros = []
carros[0] = 'Volvo'
carros[1] = 'Jeep'


var motos = new Array('BMW', 'Yamaha', 'Honda')

// Calcular a média de todos os números de um Array

var soma = 0
for (var pos = 0; pos < valores.length; pos++) {
    soma += valores[pos]
}

var media = soma / valores.length

console.log(media)

var arr1 = [1, 2, 3, 4, 5, 6]

console.log(arr1.join('|')) // colocando algum caractere para separar os elementos dentro do Array

var retirado = arr1.shift() // retira do primeiro valor do Array
console.log(arr1)

console.log('Posição do número 3: ' + arr1.indexOf(3)) // Descobrindo a posição do número 3 no Array

arr1.push(7) // Acrescenta um valor na última posição do Array

arr1.pop() // Removendo valor na última posição doi Array