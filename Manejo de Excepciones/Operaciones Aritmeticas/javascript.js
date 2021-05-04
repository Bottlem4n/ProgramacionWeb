"use strict"

var formulario = document.getElementById("formulario"),
    salidaSuma = document.getElementById("salidaSuma"),
    salidaResta = document.getElementById("salidaResta"),
    salidaMultiplicacion = document.getElementById("salidaMultiplicacion"),
    salidaDivision = document.getElementById("salidaDivision");

function calcular(){
    try{
        const a = document.getElementById("operador1").valueAsNumber;
        const b = document.getElementById("operador2").valueAsNumber;
        valida(!isNaN(a), "Falta Operador 1");
        valida(!isNaN(b), "Falta Operador 2");
        valida(b !== 0, "Operador 2 no puede ser 0");

        const resultadoSuma = a+b;
        const resultadoResta = a-b;
        const resultadoMultiplicacion = a*b;
        const resultadoDivision = a/b;

        salidaSuma.value= resultadoSuma;
        salidaResta.value= resultadoResta;
        salidaMultiplicacion.value= resultadoMultiplicacion;
        salidaDivision.value = resultadoDivision;
    }catch(e){
        alert(e.message);
    }

}

function valida(condicion, mensaje){
    if (!condicion){
      throw new Error(mensaje);
    }
}