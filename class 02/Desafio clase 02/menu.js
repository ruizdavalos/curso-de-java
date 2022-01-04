/*Funcion para ingresar numero */

function validarNumero()
{
    numero= validarN();
    if (numero>1000)
    {
        alert("El numero ingresado es: "+numero+" y es mayor a 1000")
    } 
    else 
    {
        alert("El numero ingresado es:"+numero+" y es menor a 1000")
    }


}

/*Funcion para ingresar texto y preguntar si es igual a HOLA */


function ingresarTexto()
{
    let texto = prompt("Ingrese un texto").toUpperCase();

    if (texto=='HOLA')
        {   
            alert("El texto ingresado es: \n" +texto);
        }
    else
        {
            alert("El texto ingresado es: " +texto+"\n y es distinto a 'Hola' ");
        }
}


/*Funcion para comparar si dos valores estan entre 10 y 50*/


function comparar()
{

numero1 =validarN()

numero2 =validarN()

        if ((numero1>10 && numero1<50) && (numero2>10 && numero2<50))
            {
                if(numero1<numero2)
                {
                    alert("Los numeros ingresados estran entre 10 - 50 y son : \n"+numero1+ " y "+numero2);
                }
                else
                {
                    alert("Los numeros ingresados estran entre 10 - 50 y son : \n"+numero2+ " y "+numero1);
                }
            }
        else
            {
                if(numero1<numero2)
                { 
                alert("Los numeros ingresados NO estran entre 10 - 50 y son : \n"+numero1+ " y "+numero2);
                }
                else
                {
                    alert("Los numeros ingresados NO estran entre 10 - 50 y son : \n"+numero2+ " y "+numero1);
                }
            }

}


/*Funcion para validar que lo que se ingresa es un numero y no un texto*/

function validarN()
{
var numero
var a = 0
while (a==0)
    {
    numero= prompt("Ingrese numero:\n")
        if(Number(numero))
        {
            alert("El numero ingresado es: \n" + numero);
            a=1;
        }
        else
        {
            alert("Por favor el campo acepta solo numeros")
            r=prompt("Quiere ingresar nuevamente un valor SI/NO: \n").toUpperCase()
            if(r=="NO" || r=="N" )
            {
                a=1;
            }
        }
    }
    return numero
}

module.exports= validarN;