

//                                                                          CLASE USUARIO

class Usuario {
    constructor( nombre, edad, sueldo, capitalSolicitado, interes, limiteDePagoUsuario, cuotasSolicitada, cuotaAPagar, totalAPagar ){
        this.nombre = nombre;
        this.edad = edad;
        this.sueldo = sueldo;
        this.capitalSolicitado = capitalSolicitado;
        this.interes = interes;
        this.limiteDePagoUsuario = limiteDePagoUsuario;
        this.cuotasSolicitada = cuotasSolicitada;
        this.cuotaAPagar = cuotaAPagar;
        this.totalAPagar = totalAPagar
    }

    pagoDeCuotas( pagoDeCuota ){
        this.totalAPagar -= pagoDeCuota;
    }
}


//                                                                              CLASE DE  ITERACION  CON HTML

class Ui{
    crearUsuario(usuarioNuevo){

        const usuariosLista = document.querySelector( 'table');
        const elemento = document.createElement( 'tbody');

        elemento.innerHTML = `
            <tr>
                <td>${usuarioNuevo.nombre}</td>
                <td>${usuarioNuevo.edad}/td>
                <td>${usuarioNuevo.sueldo}</td>
                <td>${usuarioNuevo.capitalSolicitado}</td>
                <td>${usuarioNuevo.interes}</td>
                <td>${usuarioNuevo.limiteDePagoUsuario}</td>
                <td>${usuarioNuevo.cuotasSolicitada}</td>
                <td>${usuarioNuevo.cuotaAPagar}</td>
                <td>${usuarioNuevo.totalAPagar}</td>
                <a href = '#' class = 'btn btn-danger'>D</a>
            </tr>
        `;
        usuariosLista.appendChild( elemento )
        // this.vaciarFormulario();
    }

    vaciarFormulario() {
        document.querySelector( '#formularioUsuario' ).reset();
    }

}


//                                                                           TOMA DE DATOS HTML

document.querySelector('#formularioUsuario').addEventListener( 'submit', (e) => {

    e.preventDefault()
    boton.style.background =  'green'
    const nombre = document.querySelector( '#inputNombre').value;
    const edad = document.querySelector( '#inputEdad').value;
    const sueldo = parseInt( document.querySelector( '#inputSueldo').value );
    const capital = parseInt( document.querySelector( '#inputCapital').value );
    const cuotas =  parseInt( document.querySelector( '#inputCuotas').value );

    calculoDeInteres(nombre, edad, sueldo, capital, cuotas )

})



//                                                                          CALCULO DE INTERES

function calculoDeInteres(nombre, edad, sueldo, capitalSolicitado, cuotasSolicitada ) {

    let interes = cuotasSolicitada*10 ;
    let totalAPagar = parseInt( ((capitalSolicitado * interes)/100)+ capitalSolicitado );
    let limiteDePagoUsuario = sueldo*0.25
    let cuotaAPagar =parseInt ( totalAPagar / cuotasSolicitada );

    console.log(cuotaAPagar, limiteDePagoUsuario, totalAPagar)
    if( cuotaAPagar <= limiteDePagoUsuario){
        cargamosUsuario(nombre, edad, sueldo, capitalSolicitado, interes, limiteDePagoUsuario, cuotasSolicitada, cuotaAPagar, totalAPagar)
    }else{
        alert(` Disculpe SR/A ${nombre}, no es posible generer el prestamo solicitado, La  cuota supera el 25% de su sueldo`)
    }

}


//                                                                          CARGAMOS USUARIO

function cargamosUsuario(nombre, edad, sueldo, capitalSolicitado, interes, limiteDePagoUsuario, cuotasSolicitada, cuotaAPagar, totalAPagar ) {

    const usuarioNuevo = new Usuario( nombre, edad, sueldo, capitalSolicitado, interes, limiteDePagoUsuario, cuotasSolicitada, cuotaAPagar, totalAPagar )
    console.log(usuarioNuevo)

    const ui =  new Ui()
    ui.crearUsuario(usuarioNuevo)
    ui.vaciarFormulario()

}



