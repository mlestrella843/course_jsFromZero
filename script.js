
//-------------EJEMPLO DE CONDICIONES-------------------
/*let persona = "Juan Alexis"
let edad = 80
let permiso = true

if (edad > 18 && edad < 65){
    console.log(`${persona} puedes venir a la fiesta`)
} else if(permiso === true && edad < 18){
    console.log(`Puedes venir, tienes permiso`)
} else { 
console.log(`Por favor quedate en casa ${persona}`)
}*/

//--------------EJEMPLO DE FUNCIONES-------------------
/*
function saludar(nombre){
    if(typeof nombre === "string"){
        console.log(`Hola ${nombre}, muy buenos dias`)
    }   
}

saludar("Maria Luisa")*/

//----------Ejemplo de funciones con valor de retorno-----------
/*
function obtenerNombreCompleto(nombre, apellidos){
   let nombreCompleto = `${nombre} ${apellidos}`
   return nombreCompleto
}

console.log(obtenerNombreCompleto("Beto", "Quiroga M."))*/

//----------La funcion guardada en una variable, aun no la ejecucion porque esta sin parentesis-----------
/*
function obtenerNombreCompleto(nombre, apellidos){
    return `${nombre} ${apellidos}`
 }

 let nombreCompleto = obtenerNombreCompleto
 
 console.log(nombreCompleto("Juan", "Mora"))*/

//----------La funcion ejecutada guardada en una variable-----------
/*

 function obtenerNombreCompleto(nombre, apellidos){
    return `${nombre} ${apellidos}`
 }

 let nombreCompleto = obtenerNombreCompleto("Juan", "Mora")
 
 console.log(nombreCompleto) */


 //----------Funciones anonimas------------------
 //Las funciones sin nombre
 //1er ejemplo
 /*let sumar = function(a,b,c) {
     return a+b+c
 }

 let resultado = sumar(2,4,5)
 console.log(resultado)*/

//2do ejemplo
/*
(function(a,b,c){
    console.log(a+b+c)
}(10,4,5) */

//Declara una funcion como constante
/*
const saludar = function(nombre){
    console.log(`Hola ${nombre}`)
}
console.log(saludar("Juan")) */

//scope

// Funciones Flecha
/*
const saludar = nombre => {
    if(typeof nombre === "string"){
        console.log(`Hola ${nombre}`)
    } else{
        console.error(`Tipo de dato equivocado!!!`)
    }
}

saludar(345) */

//ARRAYS
// Las funciones en programacion orientadas a objeto se llaman Metodos
// Los arreglos por ser un objeto tiene muchos metodos.

/*
let amigos = ["Maria", "Manuel", "Jose", "Erick"]

console.log(amigos)

//agregar nuevos elementos al array, usando el metodo push

amigos.push("Josefina")
console.log(amigos)

//el metodo Pop quita un elemento y no necesita porner los parentesis

amigos.pop()
console.log(amigos)

//Metodos que no modifican al array
//metodos slice nos permite partir un array en dos arrays
//necesita dos parametros, desde donde y hasta donde voy a partir
//en la variable dato se guardara el nuevo valor del arreglo partido
//pero el arreglo amigos quedara igual

let dato = amigos.slice(0, 2)

console.log(dato)
console.log(amigos)


//forEach metodo

amigos.forEach(function(amigo){
    console.log(amigo)
})

//optimizando

amigos.forEach (amigo => console.log(amigo))


*/
//tambien puedo hacer lo siguiente
//como se vera la variable dato no guarda nada, esto no se usa
//pero aqui use el metodo forEach con funcion flecha, en este caso llamada amigo como el ejemplo de arriba

/*
let amigos = ["Maria", "Manuel", "Jose", "Erick"]

let dato = amigos.forEach(amigo => console.log(`Hola ${amigo}`))

console.log(amigos)
console.log(dato)
*/

// .map es un metodo que recorre igual que forEach un array, pero crea un nuevo arreglo
//con los datos nuevos que le indique en mi codigo
// en este ejemplo se le quita el console.log que es una ejecucion, ya que queremos
//obtener un dato real, no un undefined

/*
let amigos = ["Maria", "Manuel", "Jose", "Erick"]

let dato = amigos.map(amigo => `Hola ${amigo}`)

console.log(amigos)
console.log(dato)
*/

//uso de Filter, me filtra un areglo segun determinada condicion dada.
// con fileter se crea un nuevo arreglo al igual que map, pero el filtro se hace
// automatico. No debo yo hacer el ciclo y poner la condicional, sino que filter lo hace por mi

/*
let numeros = [10, 436, 45, 74, 33, 9, 2, 54]

let dato = numeros.filter(num => num > 20)

console.log(dato)
*/

//4 metodos find, include, some and every. Find no devuelve ningun array, como estos otros metodos

/*
let numeros = [10, 436, 45, -74, 33, 9, 2, 54]

let dato = numeros.find(num => num > 39)

console.log(dato)

//ejemplo para encontrar un numero impar

let dato2 = numeros.find(num => num % 2 ===1)
console.log(dato2)

//metodo include, que el valor sea exactamente al que estoy buscando

let dato3 = numeros.includes(33)
console.log(dato3)

// metodo some, al menos si un elemneto cumple con mi condicion

let dato4 = numeros.some(num => num < 0)
console.log(dato4)

// si hay algun string
dato4 = numeros.some(num => num === "string")
console.log(dato4)

*/

/*
// metodo every, si todos son numeros?


let numeros = [10, 436, 45, -74, 33, 9, 2, 54]

let dato4 = numeros.some(num => typeof num === "number")
console.log(dato4) */

//VALORES Y ATRIBUTOS DE OBJETOS
//aqui me imprime el objeto completo, cada campo

let alumno = {
    nombre:"Beto",
    edad: 21,
    suscriptor: false,
    ciudad: "Lima"
}
console.log(alumno)
// para imprimir un campo en especifico 
console.log(alumno["ciudad"])

// si uso object se generara un arreglo con todos los valores
let valores = Object.values(alumno)
console.log(valores)

// saber los atributos de cada elemento, ejemplo nombre, edad, etc
// me ayuda a saber si un objeto esta vacio o no, pidiendo las llaves o keys
let valores2 = Object.keys(alumno)
console.log(valores2)

//dos objetos Math y Date