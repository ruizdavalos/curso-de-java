let usuarioIngresado;
let contraseniaIngresado;

function solicitarCredenciales()
    {
        usuarioIngresado= prompt("ingrese Usuario");
        contraseniaIngresado= prompt("Ingrese contraseña")
    }

function loginUsuario(usuario, contrasenia)
    {
        if (usuario=='admin' && contrasenia == 'asd123')
            {
                console.log("ingreso exitoso al sistema");
            }
        else
            {
                console.error("Crendenciales incorrectas");
            }
    }


function cambdioDeContrasenia(usuario)
    {
        if(usuario=='Pedro' || usuario == 'Sora' || usuario == 'Candela')
        {
            let solicitarContraseniaNueva = prompt('Ingrese nueva contraseña')
            contraseniaIngresado = solicitarContraseniaNueva;
            return "cambio de contraseña exitoso";
        }
        else
        {
            return "Al usuario ingresado no se le puede cambiar la contraseña"
        }

    }

solicitarCredenciales();
console.log(cambdioDeContrasenia(usuarioIngresado));

loginUsuario(usuarioIngresado, contraseniaIngresado);

function sumar(numero1, numero2)
    {
        return numero1 + numero2
    }

console.log(sumar(5, 8));
console.log(sumar(42, 42));
console.log(sumar(88, 96));