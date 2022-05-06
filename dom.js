
//---------------Manejo de getelementById ------------------
//console.log(document.getElementById('title'))

//en esta variable constante guardo haciendo referencia
//a este elemento title por su id en html.
//por medio de esto tengo acceso a este nodo completo, en este caso
//un h1 con id = title. tengo referencia a todo lo que sucede en ese nodo h1
/*
const title =  document.getElementById('title')
const title2 = document.querySelector('#title')
const listItems = document.querySelectorAll('ul li')
const secondItem = document.querySelectorAll('ul li:nth-child(3)') //usando mas selectores CSS como nth-child
const list = document.getElementById('list')

title.style.background = 'yellow' */

//------- Manejo de querySelector y querySelectorAll -----------------seleccionan con 
//selectores de CSS, se usa con #

/*
console.log(title)  //estos hacen referencia al nodo(objeto) h1
console.log(title2)
console.log(listItems)  //este devuelve una lista o nodelist porque se uso querySelectorAll
console.log(listItems[0])//por ejemplo
console.log(secondItem[0])
console.log(list.querySelectorAll('li'))
console.log(list.querySelector('li:last-child')) //utilzando selectores CSS tambien en la consola.
*/

//--------Manejo de Colecciones--------------------------

//const list = document.querySelector('ul')

/*
const nodelist= document.querySelectorAll('li')
const elemtList = document.getElementsByTagName('li')

console.log(nodelist) // sale como un nodeList
//console.log(list)
console.log(elemtList)  // salida como HTML colection.

*/

//node list es una lista de nodos, comentarios, textos, tags
//HTML coleccion es una lista de elemntos, no son nodos
//ambos no son arrays.
// por lo que si se quiere utilizar map, foreach, for etc, primero hay
//que convertir esa node List que devuelve un queryselectorAll  en un array.
//como lo hago?
/*

//nodelist.map(el => el.style.background = 'yellow')

//esto da un error porque nodelist no es un array
//hay varias formas, podemos usar esto a continuacion.

//const nodelist2= [...document.querySelectorAll('li')] // esta es una forma pero a veces no es reconocido por otros navegadores
const nodelist2 = Array.from(document.querySelectorAll('li')) // esta forma es mas segura 
console.log(nodelist2)


*/
//por ejemplo si quisera quitar un elemento de este arreglo puedo hacer lo siguiente
//no aparacera en el dom del navegador.

/*
const nodelist3 = Array.from(document.querySelectorAll('li'))

nodelist3.map( el => {
    if(el.textContent.trim().toUpperCase() === 'OBJECT')
        el.remove()
})
*/

//pero tambien hay otra forma de con un nodeList remover sin convertir a un Array

/*
const nodeList5 = document.querySelectorAll('li')

for(let el of nodeList5){
    if(el.textContent.trim().toUpperCase() === 'OBJECT') {
        el.remove()
    }
}
*/

//------------------Manejo de Atributos en HTML; id, clases--------------------

/*
const title = document.getElementById('title')

console.log(title.getAttribute('id'))
console.log(title.getAttribute('class'))

*/

//cuando algo que busco no tiene id, pues uso query para encontrarlo por el el selector CSS
//como son los tag de html, por los atributos de html; title, id, class, style, ver en tutoriales.
//ejemplo, si quito el id=title que tiene el h1 practcaremos lo siguiente.

/*
const title = document.querySelector('h1')

//title.setAttribute('id', 'title')
title.id = 'title'

//console.log(title.classList) //DOM token list, despues se vera mas adelante.

// metodo add, anade clases directamente a los tags o elementos en html, pero en consola en elementos.

title.classList.add('main-title', 'title-front-page')

*/

/*------------Contenido del DOM-----------------------*/

/*
const title = document.querySelector('h1')

console.log(title.textContent)//devuelve solo el texto
console.log(title.innerHTML)//devuelveel HTML mas texto
console.log(title.outerHTML)// transforma en un string y devuelve todo

//innertext no es un standard, es un invento de Internet explorer.

title.textContent = 'Hola mama, estoy en clase'

title.textContent = 'Hola mama, <em> estoy en clase</em>'//no reconoce el html

title.innerHTML = `Hola mama, <em> estoy en clase</em>`//aqui con innerHTML reconoce el HTML

*/
//Crear elementos en el DOM

//const profesor= document.createElement('h2')

const profesor= document.createElement('p')
const profesorContainaer = document.getElementById('teacher')

profesor.textContent = 'Alexys Lozada'
profesor.classList.add('teacher')

if(profesorContainaer && profesorContainaer.querySelector('span')) {
    profesorContainaer.querySelector('span').appendChild(profesor)
}


//Aun esta informacion esta en memoria, no se refleja en el DOM
//Luego de aplicar appendchild sale la informacion.


//document.body.appendChild(profesor)

