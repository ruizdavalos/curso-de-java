class productos
{
    constructor(nombre, precio, detalle, cantidad)
    {
        this.nombre=nombre;
        this.precio= parseFloat(precio);
        this.detalle= detalle;
        this.cantidad= cantidad;
        this.disponible=true;
    }

    sumarIva()
    {
        return this.precio*1.21;
    }

    vender()
    {
        this.disponible=false;
    }
    precioSugerido()
    {
        return this.precio*1.21*1.25;
    }
}

var arrayProductos=[];

do
{
    var comprobacion= prompt("Ingrese un nombre del producto o fin para terminar de agregar");
    if(comprobacion==="fin"||comprobacion==="Fin")
    {
        break;
    }
    else
    {
        nombreP= comprobacion;
        var precioP= prompt("Ingrese el precio del producot");
        var detalleP= prompt("Ingrese el detalle del producto");
        var cantidadP= prompt("Ingrese la cantidad comprada del producto");
        arrayProductos.push( new Productos(nombreP, precioP, detalleP, cantidadP));
    }
}
while (comprobacion!="fin" || comprobacion !="FIN")

console.log(arrayProductos);

for (let producto of arrayProductos)
{
    let contenedor = document.createElement("div");

    contenedor.innerHTML = ``
}









