const th = document.getElementsByTagName("th");
const titulos = ["Nombre", "Pais","Fruver","color","Comida"];
const letraA=["Ana","Australia", "Anana","Azul","Arroz"];
const td=document.getElementsByTagName("td");
const letraM=["Maria","Mexico", "Manzana","Morado","Milanesas"];
const letraL=["Lucia","Lucxemburgo","Lima", "Lila", "Lomito"];


/* let i= 0
for(let cadaTh of th)
{
    cadaTh.innerHTML = titulos[i];
    cadaTh.setAttribute("class","cambiarVerde");
    i++;

}

for(let index=0; index<letraA.length; index++)
{
    td[index].innerHTML = letraA[index];
}

i=0
for(let index=0; index<10; index++)
{
    td[index].innerHTML = letraM[index];
}
 */

function popularTabla(desde, hasta, arregloLetra)
{
    let contador = 0;
    for(let i=desde; i<hasta; i++)
    {
        td[i].innerHTML=arregloLetra[contador];
        contador++;
    }
}

popularTabla(0,5,letraA);
popularTabla(5,10,letraM);
popularTabla(10,15,letraL);