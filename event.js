//Modo tradicional de invocar una funcion con el evento onclick
/*
function holaMundo(){
    alert("Hola Mundo")
}
*/

//Un ejemplo de mas moderno usando addEventListener
//y con parametros.
/*

const title = document.getElementById('title')

title.addEventListener('click', () => {
    alert('Hola Mundo')
})
*/


/*
const title = document.getElementById('title')


const holaMundo = () => alert('Hola ED Team') //funcion anonima arrow function

title.addEventListener('click', holaMundo)


document.querySelector('button').addEventListener('click', holaMundo)

*/

//UN EJEMPLO MAS OPTIMIZADO Y DONDE SE MUESTRAN DISTINTOS TEXTOS
// En este ejemplo mostrara el texto encima donde se hace click y lo muestra
//ya no el texto que ponemos a mano como 'Hola ED Team', sino que mi codigo lea 
//el texto que contiene el elemento.
//Por ejemplo click encima de Los eventos, que muestre Los eventos,
//Click encima del boton saludar, que muestre el texto que contiene este boton salufdar.

/*
const title = document.getElementById('title')

//aqui se cambia por un parametro text, y en el metodo addEventListener
//se cambia por una funcion anonima.

const holaMundo = text => alert(text) //funcion anonima arrow function

//Pero este ejemplo es forzado ya que he puesto con mis manos lo que
//quiero que lea.

title.addEventListener('click', () => {
    holaMundo('Los Eventos')
})

document.querySelector('button').addEventListener('click', () => {
    holaMundo('Saludar')
})

*/

//Aqui logro mi objetivo leyendo dinamicamente lo que tiene el objeto

/*
const title = document.getElementById('title')

const holaMundo = text => alert(text)

//Aqui para saber informacion se le pasa un parametro en este caso llamado e
//

title.addEventListener('click', e => {
    holaMundo(e.target.textContent)    
})

document.querySelector('button').addEventListener('click', e => {
    holaMundo(e.target.textContent)
})

*/

//Entonces optimizando este codigo podemos hacer lo siguiente

const title = document.getElementById('title')

//Ponemos este parametro e -> (Informacion de eventos) directamente en la funcion

const holaMundo = e => alert(e.target.textContent)

title.addEventListener('click', e => {
    holaMundo(e)    
})

document.querySelector('button').addEventListener('click', e => {
    holaMundo(e)
})