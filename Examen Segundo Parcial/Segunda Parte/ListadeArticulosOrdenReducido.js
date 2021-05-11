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

var ordenadoNombre = catalogo.sort((prod1,prod2)=>prod1.nombre < prod2.nombre);
console.log("++++++++++ Ordenados por Nombre Descendente ++++++++++")
ordenadoNombre.forEach((producto,i) => console.log("Nombre: " + producto.nombre + "\n" + "Descripción: " + producto.descripcion + "\n" + "Precio: $" + producto.precio.toFixed(2) + "\n" + "---------------------"));

            
var ordenadoPrecio = catalogo.sort((prod1,prod2) => prod1.precio - prod2.precio);
console.log("++++++++++ Ordenados por Precio Ascendente ++++++++++")
ordenadoPrecio.forEach((producto,i) => console.log("Nombre: " + producto.nombre + "\n" + "Descripción: " + producto.descripcion + "\n" + "Precio: $" + producto.precio.toFixed(2) + "\n" + "---------------------"));