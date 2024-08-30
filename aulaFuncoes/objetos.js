// 1 - forma de criar objetos
const pessoa = {
    nome: 'Willian',
    sobrenome: 'Silva'
}

console.log(pessoa['sobrenome'])

// 2 - forma de criar objetos
const funcionario = new Object()
funcionario.nome = 'Willian'
funcionario.sobrenome = 'Gabriel'

console.log(funcionario.nome)

// 3 - forma de criar objetos

function criarPessoa(nome, sobrenome, i){
    return {nome, 
            sobrenome,
            idade: i, 
            get nomeCompleto(){
                return `${this.nome} ${this.sobrenome} ${this.idade}`
            }
    
    
    }
}

const p1 = criarPessoa('Willian', 'Gabriel', 29)

const p2 = criarPessoa('Álvaro', 'Soares', 1)

console.log(p1.nomeCompleto)
console.log(p2.nomeCompleto)