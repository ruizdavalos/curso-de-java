let nombreProducto ;
let modelo ;
let color;
let altura;
let material;

let listaDeMacetas = [];

class Macetas {
    constructor ( nombreProducto, modelo, color, altura, material ){
        this.nombreProducto = nombreProducto;
        this.modelo = modelo;
        this.color = color;
        this.altura = altura;
        this.material = material;
    }
}

function agregarProducto(){
    nombreProducto = prompt( ' Ingrese el nombre del producto : ');
    modelo = prompt( `Ingrese el modelo : `);
    color = prompt( ' Ingrese el  color : ');
    altura = prompt( ' Ingrese la altura en Cm :  ( Solo numeros )');
    material = prompt( ' Ingrese el material: ');
}

//                                          DATOS ORIENTATIVOS PARA CARGAR

//                        nombreProducto                :               maceta
//                        modelo                               :              cuadrado -  redondo - rectangulo
//                         color                                   :              negro - 
//                         Altura                                 :             40 cm
//                        Material                             :              Polietileno Alta Resistencia - vidrio - cemento - losa

let consulta;
let inicio = true

while( inicio){

    consulta = prompt( ' Agregar producto ? Si/No :').toLocaleLowerCase()

    if ( consulta == 'si'){
        
        agregarProducto()
        const maceta = new Macetas( nombreProducto, modelo, color, altura, material );
        listaDeMacetas.push(maceta)
        
    }else {
        break
    }
}

console.log( listaDeMacetas )
