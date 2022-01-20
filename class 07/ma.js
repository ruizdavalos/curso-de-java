let edadValidadorLocal;
let edadValidadorSesion;

if(localStorage.getItem("edadLocal")==undefined)
{
    edadValidadorLocal = Number(prompt("Ingrrse edad"));
}
if(edadValidadorLocal>17)
{
    localStorage.setItem("edadLocal", edadValidadorLocal);
}