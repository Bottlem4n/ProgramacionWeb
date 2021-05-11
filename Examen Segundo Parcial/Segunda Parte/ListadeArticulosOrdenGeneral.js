/*4) Dada una lista de 10 articulos los cuales tienen como propiedades: nombre, descripción y precio. 
Indicar las instrucciones para ordenar por nombre (en orden descendente)
Por precio (en orden ascendente)*/

var catalogo = [{nombre: "Whisky Johnnie Walker", descripcion: "Red Label 700 ml", precio: 329.00 },
                {nombre: "Doritos", descripcion: "Sabritas Nacho tamaño max 84g", precio: 14.90},
                {nombre: "Vodka Smirnoff", descripcion: "Sabor Tamarindo Picante 750 ml", precio: 212.00},
                {nombre: "Coca", descripcion: "Refresco de Cola sin azúcar 2.5L", precio: 36.00},
                {nombre: "Pierna de pollo", descripcion: "1kg", precio: 67.00},
                {nombre: "Crema Alpura", descripcion: "Ácida regular 900ml", precio: 56.50},
                {nombre: "Longaniza", descripcion: "De cerdo por 1kg", precio: 74.00},
                {nombre: "Yoghurt Danone", descripcion: "sabor fresa 220g", precio:  9.30},
                {nombre: "Tocino FUD", descripcion: "ahumado 250g", precio: 79.00},
                {nombre: "Queso Caperucita", descripcion: "Tipo manchego 1kg", precio: 220.00}];


var tamanio = catalogo.length;

for(var i = 1; i < tamanio ; i++ ){
  for(var j = 0; j < (tamanio - i); j++){
    if(catalogo[j].nombre < catalogo[j+1].nombre){
      var auxiliar = catalogo[j];
      catalogo[j] = catalogo[j+1];
      catalogo[j+1]= auxiliar;
    }
  }
}

console.log("++++++++++ Ordenados por Nombre Descendente ++++++++++")
for(var i=0; i< catalogo.length;i++){
  console.log("Nombre: " + catalogo[i].nombre + "\n" + "Descripción: " + catalogo[i].descripcion + "\n" + "Precio: $" + catalogo[i].precio.toFixed(2) + "\n" + "---------------------");
}

for(var i = 1; i < tamanio ; i++ ){
  for(var j = 0; j < (tamanio - i); j++){
    if(catalogo[j].precio > catalogo[j+1].precio){
      var auxiliar = catalogo[j];
      catalogo[j] = catalogo[j+1];
      catalogo[j+1]= auxiliar;
    }
  }
}

console.log("++++++++++ Ordenados por Precio Ascendente ++++++++++")
for(var i=0; i< catalogo.length;i++){
  console.log("Nombre: " + catalogo[i].nombre + "\n" + "Descripción: " + catalogo[i].descripcion + "\n" + "Precio: $" + catalogo[i].precio.toFixed(2) + "\n" + "---------------------");
}