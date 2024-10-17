const teclado = {
    name: "Redragon S101 Set Combo",
    price: 39.99,
    delivery: 5,
    features:{
        color: "Negro - Rosa",
        rgb: true,
        mouse: true
    }
}
console.log(teclado.features.mouse)

//Desestructuración de objetos
const {name, price, delivery, features} = teclado
console.log(`${name} por el precio de $${price}`)