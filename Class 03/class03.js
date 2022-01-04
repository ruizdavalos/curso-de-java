/* var validar = require('./validarN');

validar.validarN();
 */


var n= parseInt(prompt("Por favor ingrese la cantidad de repeticiones que desea realizar"))
var numero1 = parseInt(prompt("Ingrese el numero inicial con el que va a iniciar la suma"));

suma = numero1
for(let i=0;i<n;i++)
    {
        var numero2= parseInt(prompt("Ingrese el numero que desea sumar"))
        suma = suma + numero2;
        console.log(suma);
    }
alert("Se realizaron "+n+" repeticiones.\n"+"La suma obtenida es de: "+suma);

///////////////////////

var texto = prompt("Ingrese texto");
var resultado = texto;
var validarTexto="";

while(validarTexto!="ESC")
    {
        validarTexto=prompt("Ingrese el texto que quiere concatenar");
        resultado= resultado +" "+validarTexto;
        alert(resultado)
    }

//////////////////////


var rep= parseInt(prompt("Por favor ingrese la cantidad de repeticiones que desea realizar"))

for(let i=1;i<=rep;i++)
    {
        alert("Hola");
    }
