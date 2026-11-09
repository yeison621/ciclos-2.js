//ejercicio 5 sistema de inicio de sesion

// referencias
let formulario=document.getElementById("formulario");
let mensaje=document.getElementById("mensaje");
let intentosTexto=document.getElementById("intentos");
let registro = document.getElementById("registro");

//logica
formulario.addEventListener("submit", procesarFormulario);

function procesarFormulario(evento){
    evento.preventDefault();
    let contrasenaCorrecta = "Sena2026";
    let intentos = 0;
    let maxIntentos = 3;
    let accesoConcedido =false;
    registro.innerHTML ="";


   while (intentos < maxIntentos && accesoConcedido === false){
        let contrasenaIngresada = document.getElementById("contrasena" + (intentos+1)).value;
        intentos++;

        let fila = document.createElement("li");
        if (contrasenaIngresada === contrasenaCorrecta){
            accesoConcedido = true;
            fila.textContent= "intento"+ intentos + ": correcta";
        }else {
            fila.textContent = "intento"+ intentos + ": incorrecta";
        }
        registro.appendChild(fila);
    }

    intentosTexto.textContent = intentos;
    mensaje.textContent = accesoConcedido
     ?"bienvenido. Acceso concedido"
     : "acceso bloqueado. se agotaron los intentos.";

}

