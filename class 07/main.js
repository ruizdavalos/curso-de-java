localStorage.setItem("colorDeOjos,verde");
localStorage.setItem("puntaje maximo,100");
localStorage.setItem("calzado,crocs");

alert(localStorage.getItem("calzado,crocs"));

for (let i=0; i <localStorage.length ; i++)
{
    let clave = localStorage.key(i);

    console.log("Clave: "+ clave);
    console.log("Valor: "+ localStorage.getItem());

}