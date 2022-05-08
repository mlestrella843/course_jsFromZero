//EVENTO SUBMIT
//EVENTO CHANGE, cuando un imput cambia de valor, en este caso el checkbox si es 
//cotejado o no
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

//EVENTO FOCUS, ES CUANDO HACES CLICK EN UN INPUT
//CON TAB SE PUEDE RECORRER UNA FORM CON TAB.
//CADA VEZ QUE USO TAB ESTOY EN EVENTO FOCUS
//CUANDO SALGO DEL INPUT ENTONCES ESTPY EN EVENTO BLUR
//RESET ES CUANDO RESETEAS EL FORMULARIO

