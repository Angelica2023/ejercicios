class Bebidas{
    constructor(cantidad) {
      this.cantidad=cantidad;
    
    }
    botella(){
      return "vidrio"; 
  
     }
}

class Refrescos extends Bebidas{
   constructor(cantidad, azucar){
    super(cantidad);
    this.azucar=azucar;
   }


   }

   


class Cerveza extends Bebidas{
    constructor(cantidad, porcentaje){
     super(cantidad);
this.porcentajealco=porcentaje;    
    }
 
    
 }

 

const fanta = new Refrescos(250 + "ml", 100 + "mgr.");
const PepsiColaunLitro = new Refrescos(1 + "lt", 250+"mgrs.")
const Coronita = new Cerveza(250 + "ml", 20 + "% Alcohol" )
const Tecate = new Cerveza(300+"ml", 30+ "% alcohol")
const bebidas = new Bebidas( 250 + "ml", 300 + "mgr.", 33 + "% Alcohol")