const shoppingCart = []

function addItemToCart(item){
    shoppingCart.push(item)
}

function removeItemFromCart(item){
    const index = shoppingCart.indexOf(item)
    if(index !== -1){
        shoppingCart.splice(index, 1)
    }
}

function viewCart(){
    if(shoppingCart.length == 0){
        console.log('Seu carrinho de compras está vazio')
    } else {
        console.log('Itens no seu carrinho: ')
        for(let i = 0; i < shoppingCart.length; i ++){
            console.log(`${i + 1} - ${shoppingCart[i]}`)
        }
    }
}

function clearCart() {
    shoppingCart.length = 0
    console.log("Seu carrinho de compras foi limpo")
}

addItemToCart("Tenis")
addItemToCart('Blusa')
addItemToCart('Short')

viewCart()

removeItemFromCart('Blusa')

viewCart()

clearCart()

viewCart()
