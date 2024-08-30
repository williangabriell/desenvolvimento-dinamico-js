var arr2 = [1, 2, 3, 4, 5, 6, 7,]

arr2.splice(1, 1)           // Removendo o elemento da posição 1 e apenas ele

console.log(arr2)

arr2.splice(2, 2)           // Removendo o elemento da posição 2 e mais 2 elementos após ele

console.log(arr2)

var nomes = ['Maria', 'João', 'Lucas', 'Pedro']
var novos = nomes.splice(1, 1, 'Luiz')       // Removido o nome joão na posição 1 e colocado Luiz

console.log(novos)
console.log(nomes)


var país = ['Brasil', 'Argentina', 'Colômbia']
país.unshift('Uruguai')
console.log(país)