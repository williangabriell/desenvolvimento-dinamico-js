// var carro = [{modelo: 'Audio A3', marca: 'Audi', ano: 2020},
//     {modelo: 'Compass', marca: 'Jeep', ano: 2021}
// ]

// for (let caracteristica in carro){
//     console.log(carro[caracteristica])
// }

// for (let c of carro){
//     console.log(c.ano)
// }

const carros = [

    { modelo: 'Audi A3', marca: 'Audi', ano: 2020 },

    { modelo: 'Jeep Compact', marca: 'Jeep', ano: 2021 }

];

for (let indice in carros) {

    console.log('Carro ' + (parseInt(indice) + 1) + ':');

    for (let atributo in carros[indice]) {

        console.log(atributo + ': ' + carros[indice][atributo]);

    }

    console.log('-----');

}

