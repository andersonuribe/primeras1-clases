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

// const greeting = (name) => {
//     return `hello 1, ${name}`
// }

// const newGreeting = (name) => `hello 2, ${name}`

// const result1 = greeting('cristian');
// const result2 = newGreeting('carlos');

// console.log('reslt1=', result1)
// console.log('result2=', result2)


// console.log(fruits);
// console.log(fruits.length);

// const justOneFruit = Array(12)
// console.log(justOneFruit);

// const number = Array(1, 2, 3, 4, 5);
// console.log(number);

// const oneNumber = [4, 'hello'];
// console.log(oneNumber)

// const sports = ['soccer', 'tennis']
// console.log(sports)

// const recipeIngredients = [
//     'flour',
//     true,
//     2,
//     {
//         como: 'milk', esa: '1 cup'
//     },
//     false
// ]
// console.log(recipeIngredients)

// const fruits = Array('apple', 'banana', 'naranja')
// const newFruits = fruits.concat(['uva', 'pera'])
// console.log(fruits)
// console.log(newFruits)

// const isArray = Array.isArray(fruits)
// console.log(isArray)

// const numbersArray = [15, 25, 35, 45, 55]
// let sum = 0
// for (const num of numbersArray) {
//     sum += num
// }

// console.log(sum)

// const numeros = [30, 40, 50, 60, 70]
// const nuevoArray = numeros.map((num) => num * 3)
// console.log(numeros)
// console.log(nuevoArray)

// const nu = word.filter((word)word.lenght > 6)
// console.log(numerosFilters)

// const animals = ['perro', 'gato', 'elefante', 'tigre', 'leon']
// console.log(animals.slice(2, 4))

// const plants = ['perro', 'gato', 'elefante', 'tigre', 'leon']
// plants.pop();
// console.log(plants);

// const numero = [3, 6, 1, 8, 8, 2];
// numero.sort();
//     function compareNmbers(a, b) {
//         return a - b;
//     }
// console.log(numero);
// numero.sort(compareNmbers);
// console.log(numero);

// const array = [3, 6, 1, 8, 8, 2];

// const numero =array.find(num => num > 4);
// console.log(numero);

// const array = [1, 2, 3, 4, 5];

// const even = (element) => element % 2 === 0;
// console.log(array.some(even));

// const carrito = [
//     {producto: 'mause', valor: 53000},
//     {producto: 'teclado', valor: 33000},
//     {producto: 'monitor', valor: 230000}
// ]
// const total = carrito.reduce((acum, item)=> acum + item.valor, 0);
// console.log(total);

const word = ['apple', 'benana', 'nombre', 'bye', 'banana', 'apple', 'apple'];

const wordFrencuency = word.reduce((accomulador, currentValue) => {
    if (accomulador[currentValue]) {
        accomulador[currentValue] ++
    } else {
        accomulador[currentValue] = 1
    }
    return accomulador
    }, {})

console.log(wordFrencuency)