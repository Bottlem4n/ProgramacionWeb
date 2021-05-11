// 1) De un arreglo de 10 Automóviles. Determinar los que son autos de lujo y el total a pagar.
// El Automóvil tiene como propiedades: marca, modelo, tipo, precio
// Crear 10 automoviles (austeros, compactos, deportivos y de lujo)

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
var total= 0;

for (var producto of catalogo){
    
    console.log("Nombre: " + producto.nombre);
    console.log("Descripcion: " + producto.descripcion);
    console.log("Precio: $" + producto.precio.toFixed(2));
    console.log("------------");
    total += producto.precio;
}

console.log("Total a pagar es: $"+total.toFixed(2));