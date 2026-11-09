// ejercicio1.js - sistemas de compras en una tienda 

// referencia a los elementos del html 
let formulario =document.getElementById("formulario");
let mensaje=document.getElementById("mensaje");
let cantidadTexto =document.getElementById("cantidad");
let subtotalTexto =document.getElementById("subtotal");
let descuentoTexto =document.getElementById("descuento");
let totalTexto =document.getElementById("total");

//logica
formulario.addEventListener("submit", procesarFormulario);

function procesarFormulario(evento){
    evento.preventDefault();
    let precios = document.getElementById("precios").value.split(",");
    let subtotal=0;
    let cantidad=0;
    let posicion=0; 
    let precio= parseFloat(precios[posicion].trim());
    let huboInvalido= false;
    
    while (posicion < precios.length && precio !== 0){
        if(Number.isNaN(precio) || precio <0){
            huboInvalido=true;
        } else{
            subtotal += precio;
            cantidad++;
        }

        posicion++;
        if (posicion < precios.length){
            precio = parseFloat(precios[posicion].trim());
        }
    }

    let descuento = subtotal > 200000 ? subtotal * 0.1 : 0;
    let total= subtotal-descuento;

    cantidadTexto.textContent = cantidad;
    subtotalTexto.textContent = "$"+ subtotal.toLocaleString("es-co");
    descuentoTexto.textContent = "$"+ descuento.toLocaleString("es-co");
    totalTexto.textContent = "$"+ total.toLocaleString("es-co");

    if (cantidad ===0){
        mensaje.textContent ="no se registraron productos.";
    }else if (subtotal > 200000){
        mensaje.textContent="se aplico un descuento del 10%";
    }else {
        mensaje.textContent="compra calculada.";
    }
    if (huboInvalido){
        mensaje.textContent +="se omitieron los precios invalidos o negativos.";
    }

}