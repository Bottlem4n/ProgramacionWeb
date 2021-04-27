class Bebida{
  constructor (mililitros){
    this._mililitros = mililitros;
  }
  
  set mililitros(mililitros){
    this._mililitros = mililitros;
  }
  
  get mililitros(){
    return this._mililitros = mililitros;
  }
  
  muestra(){
   console.log(`Mililitros: ${ this._mililitros}`);
  }
}

class Cerveza extends Bebida{
  
  constructor(mililitros, gradosAlcohol){
    super(mililitros);
    this._gradosAlcohol = gradosAlcohol;
  }
  
  set gradosAlcohol(gradosAlcohol){
    this._gradosAlcohol = gradosAlcohol;
  }
  
  get gradosAlcohol(){
    return this._gradosAlcohol;
  }
  
   muestra(){
   super.muestra();
   console.log(`Grados de Alcohol: ${this._gradosAlcohol}`);
  }
  
}

class Refresco extends Bebida{
  
  constructor(mililitros, gramosAzucar){
    super(mililitros);
    this._gramosAzucar = gramosAzucar;
  }
  
  set gramosAzucar(gramosAzucar){
    this._gramosAzucar = gramosAzucar;
  }
  
  get gramosAzucar(){
    return this._gramosAzucar;
  }
  
   muestra(){
   super.muestra();
   console.log(`Gramos de Azucar: ${this._gramosAzucar}`);
  }
  
}

class Energetica extends Bebida{
  
  constructor(mililitros, mgTaurina){
    super(mililitros);
    this._mgTaurina = mgTaurina;
  }
  
  set mgTaurina(mgTaurina){
    this._mgTaurina = mgTaurina;
  }
  
  get mgTaurina(){
    return this._mgTaurina;
  }
  
   muestra(){
   super.muestra();
   console.log(`Miligramos de Taurina: ${this._mgTaurina}`);
  }
  
}

var bonafont = new Bebida(600);
var cocaCola = new Refresco(355, 9);
var corona = new Cerveza(400,4.5);
var monster = new Energetica(800, 744);

console.log("----Bebida----");
bonafont.muestra();
console.log("----Refresco----");
cocaCola.muestra();
console.log("----Cerveza----");
corona.muestra();
console.log("----Energetica----");
monster.muestra();
console.log("---Después de los cambios---");

bonafont.mililitros = 1000;
cocaCola.mililitros = 600;
cocaCola.gramosAzucar = 18;
corona.mililitros = 1200;
corona.gradosAlcohol = 7.5;
monster.mililitros = 1500;
monster.mgTaurina = 900;

console.log("----Bebida----");
console.log(`Mililitros: ${ bonafont._mililitros}`);
console.log("----Refresco----");
console.log(`Mililitros: ${ cocaCola._mililitros}`);
console.log(`Gramos de Azucar: ${cocaCola._gramosAzucar}`)
console.log("----Cerveza----");
console.log(`Mililitros: ${ corona._mililitros}`);
console.log(`Grados de Alcohol: ${corona._gradosAlcohol}`);
console.log("----Energetica----");
console.log(`Mililitros: ${ monster._mililitros}`);
console.log(`Miligramos de Taurina: ${monster._mgTaurina}`);

