function TotalPrice(cart) {
    let TotalPrice = 0;
    
    for (let i = 0; i < cart.length; i++) {
        const item = cart[i];
        TotalPrice += item.price * item.quantity;
    }

    if (TotalPrice > 100) {
        TotalPrice *= 0.9;
    }

    return TotalPrice;
}

const cart = [
    {name: "Sushi", price: 20, quantity: 4},
    {name: "Burger Max", price: 30, quantity: 1},
]

console.log(TotalPrice(cart));