class Calzado{
    constructor(talla){
      this._talla=talla;
    }
    
    set talla(talla){
      this._talla= talla;
    }
    
    get talla(){
      return this._talla;
    }
    
    muestra(){
      console.log(`Talla: ${this._talla}`);
    }
  }

class Tenis extends Calzado{
    constructor(talla, tipo){
        super(talla);
        this._tipo=tipo;
    }

    set tipo(tipo){
        this._tipo=tipo;
    }
    
    get tipo(){
        return this._tipo;
    }

    muestra(){
        super.muestra();
        console.log(`Tipo: ${this._tipo}`);
    }
}  

class Botas extends Calzado{
    constructor(talla, material){
        super(talla);
        this._material=material;
    }

    set material(material){
        this._material=material;
    }
    
    get material(){
        return this._material;
    }

    muestra(){
        super.muestra();
        console.log(`Material: ${this._material}`);
    }
}

class Tacones extends Calzado{
    constructor(talla, alturaTacon){
        super(talla);
        this._alturaTacon=alturaTacon;
    }

    set alturaTacon(alturaTacon){
        this._alturaTacon=alturaTacon;
    }
    
    get alturaTacon(){
        return this._alturaTacon;
    }

    muestra(){
        super.muestra();
        console.log(`Altura Tacon: ${this._alturaTacon}`);
    }
}

var flexi = new Calzado(27);
var nike = new Tenis(25,"Deportivo");
var caterpiller = new Botas(30,"Cuero");
var chanel = new Tacones(24, "7 cm");

console.log("---Antes de los cambios---");
console.log("----Calzado----");
flexi.muestra();
console.log("----Tenis----");
nike.muestra();
console.log("----Botas----");
caterpiller.muestra();
console.log("----Tacones----");
chanel.muestra();

flexi.talla=25;
nike.talla=23;
nike.tipo= "Casual";
caterpiller.talla=28;
caterpiller.material="Sintetico";
chanel.talla= 22;
chanel.alturaTacon = "10 cm";

console.log("---Después de los cambios---");
console.log("----Calzado----");
console.log(`Talla: ${ flexi._talla}`);
console.log("----Tenis----");
console.log(`Talla: ${ nike._talla}`);
console.log(`Tipo: ${nike._tipo}`)
console.log("----Botas----");
console.log(`Talla: ${ caterpiller._talla}`);
console.log(`Material: ${caterpiller._material}`);
console.log("----Tacones----");
console.log(`Talla: ${ chanel._talla}`);
console.log(`Altura Tacon: ${chanel._alturaTacon}`);

