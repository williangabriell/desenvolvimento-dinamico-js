const pessoa = {
    nome: 'João',
    idade: 25,
    profissao: 'Desenvolvedor'
}

const pessoajson = JSON.stringify(pessoa) // converteu o objeto para JSON
console.log(pessoa)
console.log(pessoajson)

const pessoaObj = JSON.parse(pessoajson) // converteu de JSON para objeto
console.log(pessoaObj)

