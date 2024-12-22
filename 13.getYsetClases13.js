class Persona {
    constructor(nombre, apellido) {
        this._nombre = nombre;
        this._apellido = apellido;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(nombre) {
        this._nombre = nombre;
    }
    get apellido() {  
        return this._apellido;
    }
    set apellido(apellido) {  
        this._apellido = apellido;
    }
   
}

let persona1 = new Persona('Darian', 'Rodolfo');
persona1.nombre = 'Amor';// se llama al metodo set nombre 
console.log("persona1 :",persona1.nombre); // se llama al metodo get nombre


// cuando se trabaja con clases no aplica el concepto de hoisting,
//con funciones y objetos se puede crear andes de ser declarados.