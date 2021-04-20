function tipo(palabra){
  let resultado="";
  
  if(palabra == palabra.toUpperCase()){
    resultado = "una palabra de solo mayusculas";
  }
  
  else if(palabra == palabra.toLowerCase()){
    resultado = "una palabra de solo minusculas";
  }
  
  else{
    resultado = "una palabra con mayusculas y minusculas";
  }
  
  return resultado;
}

let palabra1 = "HOLA";
console.log(palabra1 + " es " + tipo(palabra1) + "\n");

let palabra2 = "buenos dias";
console.log(palabra2 + " es " + tipo(palabra2) + "\n");

let palabra3 = "Jair Botello";
console.log(palabra3 + " es " + tipo(palabra3) + "\n");