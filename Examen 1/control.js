"use strict"

var forma = document.getElementById("forma"), 
    salidaResultado = document.getElementById("salidaResultados");

function calcularPotencia(){
    limpiarArea();
    var base = parseInt(forma["base"].value);
    var potencia = parseInt(forma["potencia"].value);

    if(potencia==0){

        salidaResultado.value += (base + " a la " + potencia + " = " + 1) + "\n";
    }

    else{
        for(var i=0;i<=potencia;i++){
            var resultado = base ** i;
    
            salidaResultado.value += (base + " a la " + i + " = " + resultado) + "\n";
        }
    }
}

function limpiarArea(){
    salidaResultado.value = "";
}