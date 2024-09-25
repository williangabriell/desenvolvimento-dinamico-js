function somarArray(array){
    return new Promise((resolve, reject) =>{
        if(!Array.isArray(array)){
            reject('O argumento passado não é um array')
        }

        const soma = array.reduce((total, num) => total + num, 0)

        resolve(soma)
    })
}