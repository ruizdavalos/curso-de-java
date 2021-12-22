function correr()
{
    let apellido = prompt ("Por favor ingrese su apellido");
    let nombre = prompt ("Ingrese su nombre");
    let edad = prompt("Cual es su edad:");
    let año_actual = "2021";

    if(document.getElementById('hombre').checked) 
    {
        
        let jubilacion = "65";

        let calculo = +jubilacion - +edad;
        let jubilo= +año_actual  +calculo;
        alert("hola " + nombre + " " + apellido);
        alert("Te vas a jubilar en el año \n" + jubilo);
    }
    else if(document.getElementById('mujer').checked)
    {
        let jubilacion = "60";

        let calculo = +jubilacion - +edad;
        let jubilo= +año_actual  +calculo;
        alert("hola " + nombre + " " + apellido);
        alert("Te vas a jubilar en el año \n" + jubilo);
    }
}


/* if(document.getElementById('gender_Male').checked) {
    //Male radio button is checked
  }else if(document.getElementById('gender_Female').checked) {
    //Female radio button is checked
  } */