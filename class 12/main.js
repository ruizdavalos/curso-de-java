//                                INICIO DE SESiON 
//                                                                      USANDO JQUERY

$( '#formularioInicioSesion').submit(  (e) =>{

    e.preventDefault()
    boton.style.background =  'green'


    const inicioEmail = document.querySelector( '#inputEmail').value ;
    const inicioContrasenia = document.querySelector( '#inputContrasenia').value;

    if( inicioEmail ==  sessionStorage.getItem( 'usuario', inicioEmail) && inicioContrasenia == sessionStorage.getItem( 'contrasenia', inicioContrasenia) ) {
        window.location.href  = 'prestamo.html'  ;
    }else {
        alert( ' El usuario o contraseña no es correcto ')
        boton.style.background =  'red'
    }
})

//                            LINK REGISTRARSE

$( '#registrarse').click(  () => {

    window.location.href  = 'registroUsuario.html'  ;
    
})