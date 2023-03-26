class Maestros {
    constructor(nombre, materia) {
      this.nombre = nombre;
      this.materia = materia;
    }
    presentaMaestro() {
      return "Soy Profesor y mi nombre es " + this.nombre;
    }
}

class Fisica extends Maestros{
   constructor(nombre, materia, antig){
    super(nombre,materia);
    this.antig = antig;

   }

   antig(){
    return "2años";
   }
}

class Musica extends Maestros{
    constructor(nombre, materia, edad){
     super(nombre,materia);
     this.edad = edad;
     
    }
 
    edad(){
     return "35años";
    }
 }

 

const Elisa = new Maestros("Elisa", "Textos");
const Sara = new Fisica("Sara", "Dinamica", "5 años");
const Roberto = new Musica("Roberto", "Solfeo","33 años")
console.log("los maestros son:", [Elisa, Sara, Roberto])
console.log("lasmaterias  son:", ["Textos", "Dinamica", "Solfeo"])
console.log("los maestros son:", ["Elisa", "Sara", "Roberto"])




