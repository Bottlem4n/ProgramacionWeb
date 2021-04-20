function esPrimo(numero, control){
    if(numero%control===0 && numero!==2)
      return false;
    else if(control>Math.floor(numero/2))
      return true;
    else
      return esPrimo(numero, control+1)
  }
  
  for (var i=2 ;i<=100; i++){
    let numero=i;
    if(esPrimo( numero ,2) === true)
      console.log(i);
  }