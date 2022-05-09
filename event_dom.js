//DomContentloaded, indica, oye espera a que carge todo y luego
//ejecutas este script
//Para hacer la prueba pondre el script arriba DEL  BODY en la pagina html
//o en el header

//El evento load ocurre despues del DOMContentLoaded, ya que es mas rapido

/*
addEventListener('DOMContentLoaded', () => {

const form = document.getElementById('form')
const rememberPassword = document.getElementById('remember-password')

form.addEventListener('submit', () => {
    console.log('Ha enviado el formulario')
})


rememberPassword.addEventListener('change', e => {
   // console.log(e)
    if(e.target.checked){
        console.log('El usuario quiere recordar su contraseña')
    } else{
        console.log('El usuario no quiere recordar su contraseña')
          }

   })

})

*/

//Evento SCROLL 

/*
addEventListener('scroll', e => {
    console.log(scrollX, scrollY)
})


//Evento RESIZE, toma los valores cuando se mueve la pantalla

addEventListener('resize', e => {
    console.log(innerWidth, innerHeight)
    console.log(outerWidth, outerHeight)
})
*/

//Eventos MULTIMEDIA
//los eventos tambien pueden ejecutarse, no solo escucharse con addevenlistener
//por ejemplo en video.play estoy ejecutando directamente el evento de play.

/*
const video = document.getElementById('video')
const playButton = document.getElementById('play')
const pauseButton = document.getElementById('pause')

playButton.addEventListener('click', () => {
    video.play()
})

pauseButton.addEventListener('click', () => {
    video.pause()
}) */

//Propagacion y Delegacion 
//el de elemento
//e de evento
//e.target es el punto mas profundo donde el evento se origina

/*
document.querySelectorAll('div').forEach( el => {
    el.addEventListener('click', e => {
        console.log(`Hiciste click en el div ${e.target.id}`)

        //si no quiero que el evento se propague hago lo siguiente
        e.stopPropagation()
    })
})

*/
//Para que detecte cuando se hace un clik en una de las imagenes de la galeria
// Delegacion de eventos detecta cuando se hizo el evento en el papa
//y luego se averigua en cual de los elementos hijos ocurrio el evento.

//AQUI ME MUESTRA EN CUAL IMAGENE EXACTAMENTE HICE EL CLICK


const gallery = document.getElementById('gallery')

gallery.addEventListener('click', e => {
    const t = e.target
    const images = Array.from(gallery.querySelectorAll('img'))
    i = images.indexOf(t)
    console.log(`Hiciste click en la imagen ${i + 1}`)

})