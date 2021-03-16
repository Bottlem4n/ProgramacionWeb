"use strict"

BigNumber.config({DECIMAL_PLACES:2, ROUNDING_MODE:BigNumber.ROUND_HALF_UP});
var FMT_MONEDA = "$0,0.00",
    forma = document.getElementById("forma"),
    salidaSuma = document.getElementById("salidaSuma"),
    salidaResta = document.getElementById("salidaResta"),
    salidaMultiplicacion = document.getElementById("salidaMultiplicacion"),
    salidaDivision = document.getElementById("salidaDivision");

    function procesar(){
        var op1 = parseInt(forma["operador1"].value);
        var op2 = parseInt(forma["operador2"].value);

        var suma = op1 + op2;
        var resta = op1 - op2;
        var multiplicacion = new BigNumber(op1).times(new BigNumber(op2));
        var division = op1/op2;

        salidaSuma.value = numeral(suma).format(FMT_MONEDA);
        salidaResta.value = numeral(resta).format(FMT_MONEDA);
        salidaMultiplicacion.value = numeral(multiplicacion).format(FMT_MONEDA);
        salidaDivision.value = numeral(division).format(FMT_MONEDA);
    }