"use strict"

var formulario = document.getElementById("formulario"),
    salidaRaiz= document.getElementById("salidaRaiz");

function calcular(){
    try{
        const a = document.getElementById("numero").valueAsNumber;
        valida(!isNaN(a), "Falta el número");
        valida((a > 0), "No soporta números negativos");
        const resultado = Math.sqrt(a);
        salidaRaiz.value = resultado;
    }catch(e){
        alert(e.message);
    }
}

function valida(condicion, mensaje){
    if (!condicion){
      throw new Error(mensaje);
    }
}