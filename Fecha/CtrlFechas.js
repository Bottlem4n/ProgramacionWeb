"use strict";
var forma = document.getElementById("forma"),
    txtFecha = forma["fecha"],    
    txtHora = forma["hora"],    
    txtFechaYHora = forma["fechaYHora"],    
    txtFechaYHoraLocal = forma["fechaYHoraLocal"],    
    txtSemana = forma["semana"],    
    txtMes = forma["mes"],
    salidaFecha = document.getElementById("salidaFecha"),
    salidaHora = document.getElementById("salidaHora"),
    salidaFechaYHora = document.getElementById("salidaFechaYHora"),
    salidaFechaYHoraLocal = document.getElementById("salidaFechaYHoraLocal"),
    salidaSemana = document.getElementById("salidaSemana"),
    salidaMes = document.getElementById("salidaMes");

function procesa(){
  var fechaValueAsDate = txtFecha.valueAsDate,
  fecha = new Date(txtFecha.value),
  hora = new Date("1970-01-01T"+txtHora.value),
  fechaYHora = new Date(txtFechaYHora.value),
  fechaYHoraLocal = new Date(txtFechaYHoraLocal.value),
  semana = txtSemana.valueAsDate,
  mes = txtMes.valueAsDate;

 
  salidaFecha.textContent = txtFecha.type + " | " + ((fecha.getDate()+1) + '/' +
  (fecha.getMonth()+1) + '/' + fecha.getFullYear()) + " | "
  + (fechaValueAsDate ? "|valueAsDate: "+ fechaValueAsDate : fecha);

  
  salidaHora.textContent = txtHora.type + " | " + txtHora.value + " | " +
          hora.toISOString();
  salidaFechaYHora.textContent = txtFechaYHora.type + " | " +
          txtFechaYHora.value;
  salidaFechaYHoraLocal.textContent = txtFechaYHoraLocal.type + " | " +
          txtFechaYHoraLocal.value;
 
  salidaSemana.textContent = txtSemana.type + " | " + txtSemana.value;   
  salidaMes.textContent = txtMes.type + " | " + txtMes.value;   
}  