//eventos del tecclado
//curiosea en todos los eventos que hay en el onjeto e

const input = document.getElementById('input')


/*
input.addEventListener('keyup', e => {
    console.log(e.key)
    console.log(e.ctrlKey)
    console.log(e.altKey)
})
*/

//podemos tambien que aparezca en un alert la tecla pulsada

//  addEventListener('keyup', e => {
   // alert(e.key)
//Aqui usaremos exclusivamente cuando se pulse las teclas
// ctrl y la tecla a

/* 
addEventListener('keydown', e => {
        if(e.key === 'a' && e.ctrlKey === true) {
            e.preventDefault()
            alert('CTRL A')
    }
})
*/

// Aqui utilizaremos las flechas del teclado para mover una 
//bolita

//esta linea me permite ver los usus de las flechas en consola

/*
let x = 0, y = 0
addEventListener('keyup', e => {
   // console.log(e.key)

const ball = document.getElementById('ball')

const move = () => ball.style.transform = `translate(${x*10}px,${y*10}px)`

const up = () => {
    y--
    move()
   // console.log(x,y) para ver la consola como se comportan las coordenadas
}

const down = () => {
    y++
    move()
   // console.log(x,y)
}

const left = () => {
    x--
    move()
  //  console.log(x,y)
}

const right = () => {
    x++
    move()
  //  console.log(x,y)
}

    switch (e.key) {
        case 'ArrowUp':
            up()
            break;
        case 'ArrowDown':
            down()
            break;
        case 'ArrowLeft':
            left()
            break;
        case 'ArrowRight':
            right()
            break; 
    }
})

*/

//PODEMOS MEJORAR ESTA MISMA FUNCION, OPTIMIZAR EL CODIGO DE LA SIGUIENTE MANERA

let x = 0, y = 0
addEventListener('keyup', e => {
   // console.log(e.key)

const ball = document.getElementById('ball')

const move = direction => {
    switch(direction){
        case 'up':
            y--
            break;
        case 'down':
            y++
            break;
        case 'left':
            x--
        break;
        case 'right':
            x++
        break;
        default:
            break;
    }
    ball.style.transform = `translate(${x*10}px,${y*10}px)`
}

    switch (e.key) {
        case 'ArrowUp':
            move('up')
            break;
        case 'ArrowDown':
            move('down')
            break;
        case 'ArrowLeft':
            move('left')
            break;
        case 'ArrowRight':
            move('right')
            break; 
        default:
            break;
    }
})