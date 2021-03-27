"use strict"

BigNumber.config({DECIMAL_PLACES:2, ROUNDING_MODE:BigNumber.ROUND_HALF_UP});

var FMT_MONEDA = "$0,0.00";

var forma = document.getElementById("forma");
var salidaProveedor = document.getElementById("salidaProveedor");
var salidaSeleccion = document.getElementById("salidaSeleccion");
var salidaTotal = document.getElementById("salidaTotal");
var comidas = document.getElementsByName("comidas");



function mostrarPantalla(){
    var clave = forma["clave"].value,
        nombre = forma["nombre"].value,
        telefono = forma["telefono"].value,
        txtfecha = forma["fecha"];
    var fecha = new Date (txtfecha.value);
    salidaProveedor.innerText = "Clave: " + clave + "\n" + "Nombre: " + nombre + "\n" + "Teléfono: " + telefono + "\n"+ "Fecha: " + ((fecha.getDate()+1) + '/' +
    (fecha.getMonth()+1) + '/' + fecha.getFullYear()) + "\n";

    var comidaSeleccionada = new Array();
    var total = comidas.length;
    for (var i = 0 ; i <  total; i++){
        var comida = comidas[i];

        if(comida.checked){
            comidaSeleccionada.push(comida.value);
        }
    }

    salidaSeleccion.textContent= comidaSeleccionada.join(", ");
    salidaTotal.textContent = numeral(verTotal()).format(FMT_MONEDA);

}

function verAlerta(){
    var clave = forma["clave"].value,
        nombre = forma["nombre"].value,
        telefono = forma["telefono"].value,
        txtfecha = forma["fecha"];
    var fecha = new Date (txtfecha.value);
    
    var comidaSeleccionada = new Array();
    var total = comidas.length;
    for (var i = 0 ; i <  total; i++){
        var comida = comidas[i];

        if(comida.checked){
            comidaSeleccionada.push(comida.value);
        }
    }

    var seleccion = comidaSeleccionada.join(", ");

    alert("Clave: " + clave + "\n" + "Nombre: " + nombre + "\n" + "Teléfono: " + telefono + "\n"+ "Fecha: " + ((fecha.getDate()+1) + '/' +
    (fecha.getMonth()+1) + '/' + fecha.getFullYear()) + "\n\n"+ "Selección: " + seleccion + "\n" + "Total: " + (numeral(verTotal()).format(FMT_MONEDA)));
}

function verTotal(){
    var comidaSeleccionada = new Array();
    var preciosComida= [70,110,105,75,80,120];
    var total = 0;
    for (var i = 0 ; i < comidas.length; i++){
        var comida = comidas[i];

        if(comida.checked){
            comidaSeleccionada.push(comida.value);
            total += preciosComida[i];
        }
    }

    return total;
}