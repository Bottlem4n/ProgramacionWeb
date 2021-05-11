/*3) Mostrar como podemos contar la cantidad de nombres repetidos en un aula de clase de 15 Alumnos
(Poner nombres repetidos)
const nombres = [
   'Jorge', 'María, 'Jose', 'Ana', 'Luis', 'Ana', 'José', 'Jose', 'Sergio', 'Luis', 'Hugo', 'Paco', 'Luis', 'María', 'Paco'
];*/

const nombres = [ 'Jorge', 'María', 'Jose', 'Ana', 'Luis', 'Ana', 'Jose', 'Jose', 'Sergio', 'Luis', 'Hugo', 'Paco', 'Luis', 'María', 'Paco'];

var repetidos = nombres.filter((nombre,i) => {return nombres.indexOf(nombre) !== i;}).filter((nombre,i) => {return nombres.indexOf(nombre) !== i;});
var unicos = nombres.filter(function (nombre,i) {return nombres.indexOf(nombre) === i;} ).filter((nombre,i) => {return nombres.indexOf(nombre) !== i;});


console.log("++++++++++Nombres Unicos++++++++++");
var contadorUnicos = unicos.reduce((contador,nombre, i) => contador = i+1 );
console.log("Número de nombres unicos: "+contadorUnicos);
console.log("----------Lista----------");
unicos.forEach(nombre => console.log(nombre));


console.log("++++++++++Nombres Repetidos++++++++++");
var contadorRepetidos = repetidos.reduce((contador,nombre, i) => contador = i+1 );
console.log("Número de nombres repetidos: "+contadorRepetidos);
console.log("----------Lista----------");
repetidos.forEach(nombre => console.log(nombre));