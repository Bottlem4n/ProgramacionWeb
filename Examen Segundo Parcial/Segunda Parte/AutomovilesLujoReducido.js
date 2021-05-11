// 1) De un arreglo de 10 Automóviles. Determinar los que son autos de lujo y el total a pagar.
// El Automóvil tiene como propiedades: marca, modelo, tipo, precio
// Crear 10 automoviles (austeros, compactos, deportivos y de lujo)

var catalogo = [{marca: "Chevrolet", modelo:"Beat", tipo:"austero", precio: 158400},
                {marca: "Volkswagen", modelo:"Golf", tipo:"compacto", precio: 365000},
                {marca: "Nissan ", modelo:"GTR", tipo:"deportivo", precio: 2600000 },
                {marca: "Aston Martin", modelo:"DBS Superleggera", tipo:"lujo", precio: 7000000},
                {marca: "Renault", modelo:"KWID", tipo:"austero", precio: 168900},
                {marca: "Nissan", modelo:"Versa", tipo:"compacto", precio: 215000  },
                {marca: "Bugatti", modelo:"Veyron", tipo:"lujo", precio: 9000000 },
                {marca: "Ford", modelo:"Mustang GT", tipo:"deportivo", precio: 924000},
                {marca: "Nissan", modelo:"March", tipo:"austero", precio: 175300},
                {marca: "Kia", modelo:"Rio", tipo:"compacto", precio: 232000}];

catalogo.filter(catalogoLujo => catalogoLujo.tipo==="lujo").forEach(l => console.log("Marca: "+ l.marca+"\n"+ "Modelo: "+l.modelo+"\n"+ "Precio: "+l.precio+"\n----------"));

var total = catalogo.filter(catalogoLujo => catalogoLujo.tipo==="lujo").map(catalogoLujo => catalogoLujo.precio).reduce((sum, precio) => sum+precio,0);
console.log("El Total a Pagar es: " + total);