export default function calculateTotal(cart){
    let total = 0
    cart.forEach(element => {
        total += (parseFloat(element.price) * parseInt(element.quantity))
    });

    return total;
}