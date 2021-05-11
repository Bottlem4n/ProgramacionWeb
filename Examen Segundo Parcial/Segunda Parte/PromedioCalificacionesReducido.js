/*2) Calcular el promedio de calificaciones de los alumnos de una salón de clases.
La calificaciones se encontrarán en un array multidimensional:

Alumno 1. [5,8,9,8,10,6,7,8]
Alumno 2. [9,4,7,6,8,6,10,8]
Alumno 3. [6,8,9,8,10,6,7,9]
Alumno 4. [8,8,10,8,9,6,7,8]
Alumno 5. [7,8,10,8,9,6,7,8]
Alumno 6. [4,8,10,8,5,6,7,8]
Alumno 7. [3,8,9,8,8,6,7,10]
Alumno 8. [5,8,9,8,6,6,10,6]
Alumno 9. [9,8,8,8,10,6,8,8]
Alumno 10. [6,8,10,8,9,6,7,8]*/

var calificaciones = [[5,8,9,8,10,6,7,8],
                    [9,4,7,6,8,6,10,8],
                    [6,8,9,8,10,6,7,9],
                    [8,8,10,8,9,6,7,8],
                    [7,8,10,8,9,6,7,8],
                    [4,8,10,8,5,6,7,8],
                    [3,8,9,8,8,6,7,10],
                    [5,8,9,8,6,6,10,6],
                    [9,8,8,8,10,6,8,8],
                    [6,8,10,8,9,6,7,8]];
                    
var promedios = calificaciones.map((calificacion,i) => calificacion = (calificaciones[i].reduce((sumatoria,calificacion)=>sumatoria+=calificacion)/8));

promedios.forEach( (promedio,i) => console.log("El Promedio del Alumno "+ (i+1) + " es: " + promedio.toFixed(2)));

var promedioGrupo = promedios.reduce((sum, calf) => sum+=calf)/promedios.length;
console.log("------------------------------------");
console.log("Promedio del Grupo: " + promedioGrupo.toFixed(2));

