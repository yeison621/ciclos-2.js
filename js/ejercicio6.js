// ejercicio 6 estadisticas de ventas de un negocio

// referencias 
let formulario = document.getElementById("formulario");
let mensaje = document.getElementById("mensaje");
let detalleDias = document.getElementById("detalleDias");
let totalVendidoTexto = document.getElementById("totalVendido");
let promedioTexto = document.getElementById("promedio");
let mejorDiaTexto = document.getElementById("mejorDia");
let diasAltosTexto = document.getElementById("diasAltos");


//logica
formulario.addEventListener("submit", procesarFormulario);

function procesarFormulario(evento){
    evento.preventDefault();
    let total =0;
    let diasAltos=0;
    let ventaMayor=0;
    let mejorDia =0;
    let huboInvalido = false;
    detalleDias.innerHTML ="";

    for (let dia =1; dia <=7; dia++){
        let venta = parseFloat(document.getElementById("venta"+ dia).value);
        if (Number.isNaN(venta) || venta < 0){
            venta =0;
            huboInvalido = true;
        }
    

        total += venta;
       if (venta > 300000){
        diasAltos++;
       }
       if (venta > ventaMayor){
        ventaMayor = venta;
        mejorDia = dia;
       }

       let fila = document.createElement("li");
       fila.textContent = "Día"+ dia + "$"+ venta.toLocaleString("es-co");
       detalleDias.appendChild(fila);
    }

    let promedio = total / 7;
    totalVendidoTexto.textContent ="$"+ total.toLocaleString("es-co");
    promedioTexto.textContent ="$" + promedio.toLocaleString("es-co", {maximumFractionDigits:0});
    mejorDiaTexto.textContent ="Dia" + mejorDia;
    diasAltosTexto.textContent= diasAltos;

    if (promedio > 400000){
        mensaje.textContent ="rendimiento excelente.";
    } else if (promedio >= 200000){
        mensaje.textContent="rendimiento aceptable";
    } else {
       mensaje.textContent="rendimiento bajo"; 
    }
    if (huboInvalido){
        mensaje.textContent += "las ventas negativas o invalidas se contaron como 0.";
    }
}