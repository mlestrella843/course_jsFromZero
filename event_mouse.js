//Eventos del mouse con doble click

const title = document.getElementById('title')

const holaMundo = e => alert(e.target.textContent)

title.addEventListener('dblclick', e => {
    holaMundo(e)    
})

//Evento mouseenter y mouseleave // cuando el mouse entra y sale del area
//que me interese generar una accion. Seria el efecto mouse hover de CSS

/*
title.addEventListener('mouseenter', e => {
    holaMundo(e)    
})
*/

//Se activa cuando despues de estar en el area, al salir de ella se genera una accion
/*

title.addEventListener('mouseleave', e => {
    holaMundo(e)    
})
*/

//ContextMenu me permite con el click derecho mostrar el menu.
// Pero en este caso el navegador tiene eventos por defecto como seria
//mostrar el menu del navegador, para prevenir esto puedes usar el 
//e.preventDefault() para evitar acciones no deseadas en ti codigo


//Aqui puedo saber las coordenadas exactas donde se hizo el click.
//En este caso el click derecho, siempre encima del elemento que se 
//esta analizando o trabajando.

//Aqui ademas creo un menu contextual al dar clik derecho
//ESTE EJEMPLO ESTA MUY UTIL Y BUENO

const createMenu = e => {
    const menu = document.createElement('div')
    const prevMenu = document.getElementById('context-menu')
    menu.id = 'context-menu'
    menu.textContent = 'Soy un menu contextual'

    if(prevMenu){
        document.body.removeChild(prevMenu)
    }
    document.body.appendChild(menu)

    menu.style.padding = '1em'
    menu.style.background = '#eee'
    menu.style.position = 'fixed'
    menu.style.top = `${e.pageY}px`
    menu.style.left = `${e.pageX}px`

}

title.addEventListener('contextmenu', e => {
  // console.log(e.pageX, e.pageY)  
  createMenu(e) 
  e.preventDefault()
})

//AHORA APARECERA ESTE MENU CONTEXTUAL EN CUALQUIER PARTE DEL DOCUMENTO
//Cambiando title por document.


document.addEventListener('contextmenu', e => {
    // console.log(e.pageX, e.pageY)  
    createMenu(e) 
    e.preventDefault()
  })

  // mousedown and mouseup, es cuando despues de dar click dejas presionado el boton
  // mouseup es cuando liberas el boton. Esto se usa para pulsaciones largas
  //cuando un usuario pulsa algo y lo arrastra.

  //mousemove uando el mouse se mueve dentro de un elemento