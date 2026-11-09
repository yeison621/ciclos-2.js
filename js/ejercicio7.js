// ejercicio 7 nomina de empleados 

//referencias 
let formulario = document.getElementById("formulario");
let mensaje = document.getElementById("mensaje");
let detalleEmpleados = document.getElementById("detalleEmpleados");
let cantidadEmpleadosTexto = document.getElementById("cantidadEmpleados");
let conExtrasTexto = document.getElementById("conExtras");
let totalNominaTexto = document.getElementById("totalNomina");

// logica
formulario.addEventListener("submit", procesarFormulario);

function procesarFormulario(evento){
    evento.preventDefault();
    let empleados = document.getElementById("empleadosEntrada").value.trim().split("\n");
    let cantidad = empleados.length;
    let totalNomina =0;
    let conExtras =0;
    detalleEmpleados.innerHTML="";

    for (let e=1; e<=cantidad; e++){
        let datos= empleados[e - 1].split(",");
        let horas= parseFloat(datos[0]);
        let valorHora = parseFloat(datos[1]);
        let fila = document.createElement("li");

        if(Number.isNaN(horas) || Number.isNaN(valorHora) || horas <=0 || valorHora <=0){
            fila.textContent = "Empleado" +e+ ":datos invalidos; no se calculo el pago.";
        }else{
            let pago=0;
            if(horas>40){
                pago = 40*valorHora + (horas - 40)* valorHora*1.25;
                conExtras++;
            }else{
                pago = horas*valorHora;
            }
            totalNomina += pago;
            fila.textContent= "Empleado" +e+ ":$" + pago.toLocaleString("es-co");
        }

        detalleEmpleados.appendChild(fila);
    }

    cantidadEmpleadosTexto.textContent= cantidad;
    conExtrasTexto.textContent=conExtras;
    totalNominaTexto.textContent="$"+ totalNomina.toLocaleString("es-co");
    mensaje.textContent="nomina calculada. los registros invalidos no se sumaron.";
}
