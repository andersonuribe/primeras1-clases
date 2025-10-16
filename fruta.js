// let canasta = ["manzana", "pera", "naranja"];
// for (fruta of canasta) {
//     console.log(fruta);
// }

// const listaDeCompra = {
//     manzana: 5,
//     pera: 3,
//     naranja: 4,
//     uva: 1,
// };

// for (fruta in listaDeCompra) {
//     console.log(fruta);
// }

// for (fruta in listaDeCompra) {
//     console.log(`${fruta}: ${listaDeCompra[fruta]}`);
// }

// let contador = 0;
// while (contador < 10) {
//     console.log(contador);
//     contador++;
// }   

// function calculateDiscountedPrice(price, discountPercentage) {
//     const discount = (price * discountPercentage) / 100;
//     const priceWithDiscount = price - discount;

//     return priceWithDiscount
// }

// const originalPrice = 100
// const discountPercentage = 20
// const finalPrice = calculateDiscountedPrice(originalPrice, discountPercentage)
// console.log('Original Price: $'+ originalPrice)
// console.log('Discount:' + discountPercentage + '%')
// console.log('Price with discount: $' + finalPrice)

  
// const rocket = {
//     name: 'cris 7',
//     launchMessage: function launchMessage() {
//         console.log(this.name)
//     }
// }

// rocket.launchMessage()

const greeting = (name) => {
    return `hello 1, ${name}`
}

const newGreeting = (name) => `hello 2, ${name}`

const result1 = greeting('cristian');
const result2 = newGreeting('carlos');

console.log('reslt1=', result1)
console.log('result2=', result2)