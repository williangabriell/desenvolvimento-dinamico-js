let bebida = 0

bebida = Number(prompt('MENU 1 - CAFÉ | 2 - LEITE | 3 - CHÁ'))

switch (bebida) {
    case 1:
        console.log(`A bebida escolhida foi Café que custa R$2,00`)
        break;
    case 2:
        console.log(`A bebida escolhida foi Leite que custa R$3,00`)
        break;
    case 3:
        console.log(`A bebida escolhida foi chá que custa R$5,00`)
    default:
        console.log('Opção Inválida, a escolha deve ser entre: café, leite ou chá')
        break;
}