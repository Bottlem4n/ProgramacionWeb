/*3) Mostrar como podemos contar la cantidad de nombres repetidos en un aula de clase de 15 Alumnos
(Poner nombres repetidos)
const nombres = [
   'Jorge', 'María, 'Jose', 'Ana', 'Luis', 'Ana', 'José', 'Jose', 'Sergio', 'Luis', 'Hugo', 'Paco', 'Luis', 'María', 'Paco'
];*/

const nombres = [ 'Jorge', 'María', 'Jose', 'Ana', 'Luis', 'Ana', 'Jose', 'Jose', 'Sergio', 'Luis', 'Hugo', 'Paco', 'Luis', 'María', 'Paco'];
var orden = nombres.sort();
var unicos =[], repetidos=[];
var contadorUnicos=0, contadorRepetidos=0;

for (let i=0; i < nombres.length; i++){
  if(nombres[i+1] !== nombres[i] && nombres[i-1] !== nombres[i]){
    unicos.push(nombres[i]);
    contadorUnicos++;
  }
  
  else if(nombres[i+1] === nombres[i] && nombres[i-1] !== nombres[i]){
    repetidos.push(nombres[i]);
    contadorRepetidos++;
  }
  
}

console.log("++++++++++Nombres Unicos++++++++++");
console.log("Número de nombres unicos: "+contadorUnicos);
console.log("----------Lista----------");

for(let i of unicos){
  console.log(i);
}
console.log("-++++++++++Nombres Repetidos++++++++++");
console.log("Número de nombres repetidos: "+contadorRepetidos);
console.log("----------Lista----------");

for(let i of repetidos){
  console.log(i);
}