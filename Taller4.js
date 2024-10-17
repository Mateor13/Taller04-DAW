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

// Congelamiento de objetos
Object.freeze(teclado.features)
console.log(Object.isFrozen(teclado.features));

//Copiar dos objetos
const cliente = {
    nameCustomer: "Mateo Torres",
    email: "mateo@epn.edu.ec",
    numberPhone: "0999999999"
}

const informacionFactura = {...teclado, ...cliente}
console.log(informacionFactura)

//Utilización del "this"
teclado.information = function() {
   console.log(`Nombre: ${this.name}
        Precio: ${this.price}
        Color: ${this.features.color}
        Tiene RGB: ${this.features.rgb}`)
}
teclado.information();

//Métodos de los objetos
console.log(`Array con las claves del objeto: ${Object.keys(teclado)}\n`)
console.log(`Array con las propiedades del objeto: ${Object.values(teclado)}\n`)
console.log(`Array con arrays con la clave y las propiedades del objeto: ${Object.entries(teclado)}\n`)

//Nombres abreviados (ES6)
const toysName = "VTech Pop-a-Balls Push & Pop Bulldozer, Amarillo",toysPrice = 19.97, ToysColor = "Amarillo"
const Juguete = {
    toysName,
    toysPrice,
    ToysColor
}
console.log(Juguete)

//Arreglos
const smartHome = ['Alexa', 'Puerta Inteligente', 'Detector de Humo', 'Calefacción', 'Enchufe Inteligente']

//Metodos 
console.log(`Muestra el tamaño del arreglo: ${smartHome.length}`)
console.log(`Elimina el elemento del final del arreglo: ${smartHome.pop()}`)
console.log(`Elimina el elemento al inicio del arreglo: ${smartHome.shift()}`)
const aspiradora = "aspiradora"
console.log(`Se agrega un elemento al final del arreglo: ${smartHome.push(aspiradora)}`)
const telvision = "television"
console.log(`Se agrega un elemento al inicio del arreglo: ${smartHome.unshift(telvision)}`)
console.log(smartHome)
console.log(`\n¿Es un arreglo? ${Array.isArray(smartHome)}\n`)
console.log(`Se extrae entre los elementos 2 al 4: ${smartHome.slice(2,5)}`)

//Recorrido
//For
for (let i=0; i<smartHome.length; i++){
    console.log(`- ${smartHome[i]}`)
}
console.log("\n")

//forEach
smartHome.forEach((e)=> console.log(`- Nombre del Producto: ${e}`))
console.log("\n")

//Map
const smartHome2 = smartHome.map((e)=> `Nombre del Producto: ${e}`)
console.log(smartHome)
console.log(smartHome2)
console.log("\n")

//Desestructuracion
const [categoria1, categoria2, categoria3, categoria4, categoria5] = smartHome;
console.log(`La categoria 1 es: ${categoria1}`)
console.log(`La categoria 2 es: ${categoria2}`)
console.log(`La categoria 3 es: ${categoria3}`)
console.log(`La categoria 4 es: ${categoria4}`)
console.log(`La categoria 5 es: ${categoria5}`)
console.log("\n")

//Saltar un valor en un arreglo
const [categoria0, , , , categoria05] = smartHome
console.log(`La categoria 0 es: ${categoria0}`)
console.log(`La categoria 5 es: ${categoria05}`)
console.log("\n")

//Desestructuracion de un arreglo anidado
const categorias = ["Detectores","Hubs"]
smartHome.push(categorias)
const arreglo1 = smartHome[5]
const arreglo2 = arreglo1[0]
console.log(arreglo2)
console.log(smartHome)
//Operador Rest
const [audifonos, sillasGamers, ...mouse] = [["BENGOO G9000 Auriculares", "Razer BlackShark V2 X"],
["Dowinx", "BestOffice"], ["Logitech G 305", "Razer Basilisk V3"],["Acer Nitro V", "MSI Katana A15 AI "]]
console.log("\n")
console.log(audifonos)
console.log("\n")
console.log(sillasGamers)
console.log("\n")
console.log(mouse)
console.log("\n")

//Operador Spread
const clientesFrecuentes = ["Mireya","Mateo","Anthony","Paul","Ariel","Matias"]
const nombreDeLosProductosAdquiridos = ["Falda negra con pliegues","Forro para celular","Teclado gamer con luces led","Parlantes con luces led",
    "Jeans con bolsillos azulkes clasicos",'Manteles para vasos y platos']
const informacionCompleta = [...clientesFrecuentes,...nombreDeLosProductosAdquiridos]
console.log(informacionCompleta);