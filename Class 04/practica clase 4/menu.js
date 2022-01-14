const multiplicar = (a,b) => a*b;
const restar = (a,b) => a-b;
const descuento = (a,b) => multiplicar(a,b)/100;



let precioProd = parseFloat(prompt("Ingrese el precio del producto: "));
let cantProduc= parseInt(prompt("Ingrese cantidad de unidades vendidas: "));
let desc= parseFloat(prompt("Ingrese el descuento que desea aplicar: "));


let precioTotal = restar(multiplicar(precioProd, cantProduc), multiplicar(descuento(precioProd, desc), cantProduc));;

console.log(`El precio total es de: ${precioTotal}`);
alert(`El precio total es de: ${precioTotal}`);

