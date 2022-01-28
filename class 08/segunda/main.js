/* const ul= document.createElement("ul");

const body=document.getElementsByTagName("body");

const colores= ["Azul","rojo","Amarillo","Marron","Anaranjado","Jade","Verde","Negro","Gris","Violeta"]


ul.appendChild(li);

for(let i=0; i<10; i++)
{
    //Crear un li
    let li= document.createElement("ul");

    li.innerHTML=colores[i];
    //Asignarle al ul el li que cree
    ul.appendChild(li)

}

documente.body.appendChild(ul); */

/* let input=document.createElement("input");

document.body.appendChild(input);

input.value=42;

console.log(input.value);

 */
const rol=[
    {clase: "Guerrero", arma: "Gran espada", poder: "Arremetida"}, 
    {clase: "MAgo", arma: "Baculo", poder: "Bola de fuego"}, 
    {clase: "Healer", arma: "Baston", poder: "Curar a los aliados"}
        ];

for(let personajes of rol)
{
    //Crear un elemento para poder lamacacenarlo en el HTML
    let div = document.createElement("div");


    //Insertarle los datos del personaje

    div.innerHTML=`<p>Clase: ${personajes.clase}</p>
                    <p>Arma: ${personajes.arma}</p>
                    <p>Poder: ${personajes.poder}</p>
                    `

    //Agregar al body el elemento que creamos y se muestre en pantalla
    document.body.appendChild(div);

}