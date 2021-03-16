"use strict"
BigNumber.config({DECIMAL_PLACES:2, ROUNDING_MODE:BigNumber.ROUND_HALF_UP});
var FMT_ENTERO = "0,0", 
    FMT_NUMERO = "0,0.00",
    FMT_MONEDA = "$0,0.00",
    FMT_PORCENTAJE = "0.00%",
    forma = document.getElementById("forma"),
    medidor = document.getElementById("medidor"),
    salidaEntero = document.getElementById("salidaEntero"),
    salidaRango = document.getElementById("salidaRango"),
    salidaNumero = document.getElementById("salidaNumero"),
    salidaPorcentaje = document.getElementById("salidaPorcentaje");

    function procesa(){
        var entero = parseInt(forma["entero"].value);
        var rango = parseInt(forma["rango"].value);
        var numero = numeral().unformat(forma["numero"].value);
        var error = false;

        if (isNaN(entero)) {
            error = true;
            salidaEntero.value = "Entero Incorrecto";
        }

        if (isNaN(numero)) {
            error = true;
            salidaRango.value = "Rango Incorrecto";
        }

        if (!error) {
            var precio = new BigNumber(numero).times(new BigNumber(2));
            var numeroEnTexto = numeral(numero).format(FMT_NUMERO);
            var porcentaje = rango/entero;
            var porcentajeEnTexto = numeral(porcentaje).format(FMT_PORCENTAJE);
            forma["numero"].value = numeroEnTexto;
            medidor.textContent = porcentajeEnTexto;
            medidor.value = Math.min(1,porcentaje);
            salidaEntero.value = numeral(entero).format(FMT_ENTERO);
            salidaNumero.value = "Precio: "+ numeral(precio).format(FMT_MONEDA);
            salidaRango.value = numeral(rango).format(FMT_ENTERO);
            salidaPorcentaje.value = porcentajeEnTexto;
        }

    }