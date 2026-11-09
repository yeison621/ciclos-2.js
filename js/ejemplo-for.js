let formtabla = document.getElementById("formTabla");
let listaTabla = document.getElementById("listaTabla");
formtabla.addEventListener("submit", generarTabla);

function generarTabla(evento){
  evento.preventDefault();
 console.log("La función se está ejecutando");

  let numero = parseInt(document.getElementById("numeroTabla").value);
  listaTabla.innerHTML ="";

  for (let i =1; i<=10; i++){
    let fila = document.createElement("li");
    fila.textContent= numero + "x" + i + "=" + numero *i;
    listaTabla.appendChild(fila);
  }
}