console.log( 'Bienvenidos al sistemas de prestamos JR.  \n  A continuacion le pediremos algunos datos para comenzar. ')
alert( 'Bienvenidos al sistemas de prestamos JR.  \n  A continuacion le pediremos algunos datos para comenzar. ')
let nombre;
let edad;
let sueldo;
let capital;
let cuotas;
let interes;

function usuario (){
    nombre = prompt( 'Ingrese su nombre');
    edad =Number( prompt( ' Ingrese su edad') );
    alert( ` Bienvenido ${nombre}`)
    console.log( ` Bienvenido ${nombre}`)
    let inicio = prompt( ' Desea consultar por alguno de nuestos prestamos. Si/No?').toLowerCase();
    if ( inicio == 'si' || inicio == 's'){
        ingresoDeCapital()
    }else if (inicio == 'no' || inicio =='n'){
        alert( ' Gracias por su visita, saludos!')
    }else{
        alert( 'Los datos ingresados no son validos, vuelve a comenzar')
    }
}
usuario()

function ingresoDeCapital () {
    sueldo = Number( prompt( `Hola ${nombre}, Necesitamos que  nos facilites el monto de tu sueldo mensueal ( En numeros enteros y sin punto) :` ));
    if( sueldo >= 50000 ){
        capital = Number( prompt( `Ahora ingrese el capital a solicitar : `))
        if( sueldo <=100000 ) {
            cuotas = 18;
            tipoDePrestacion( cuotas, capital)
        }else if( sueldo >= 101000 && sueldo <= 150000 )  {
            cuotas = 12;
            tipoDePrestacion( cuotas, capital)
        }else if( sueldo >= 151000 && sueldo <= 200000 )  {
            cuotas = 6;
            tipoDePrestacion( cuotas, capital)
        }else if( sueldo > 201000)  {
            cuotas = 3;
            tipoDePrestacion( cuotas, capital)
        }
    }else{
        alert( `Disculpa ${nombre} tu sueldo  no cumple con nuestros requisitos, no podemos darte un prestamo`)
    }
}

function tipoDePrestacion ( cuotas, capital ) {
    let tipoDeCuotas = cuotas
    if( tipoDeCuotas == 3){
        interes = (capital*0.3+capital)/3 ;
        console.log(interes)
    }else if( tipoDeCuotas == '6'){
        interes = (capital*0.6+capital)/6 ;
        console.log(interes)
    }else if( tipoDeCuotas == '12'){
        interes = (capital*1.2+capital)/12 ;
        console.log(interes)
    }else if( tipoDeCuotas == '18'){
        interes = (capital*1.8+capital)/18 ;
        console.log(interes)
    }
    facturacion( capital)
}

function facturacion () {
    console.log( `
        * Datos del prestamo solicitado para el Usuario ${nombre} de ${edad} años : \n
        * Capital solicitados : ${capital} 
        * Sueldo ingresado : ${sueldo}
        * Cuotas acorde al sueldo ingresado : ${cuotas}
        * Valor de la cuota : ${interes}
    `);

    alert( `
        * Datos del prestamo solicitado para el Usuario ${nombre} de ${edad} años : \n
        * Capital solicitados : $${capital} 
        * Sueldo ingresado : $${sueldo}
        * Cuotas acorde al sueldo ingresado : ${cuotas}
        * Valor de la cuota : $${interes}
    `);

}