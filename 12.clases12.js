class Persona {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
    saludar() {
        console.log(`Hola, soy ${this.nombre}`);
    }
}

let persona1 = new Persona('Darian', 'Rodolfo');
console.log("persona1 :",persona1);
persona1.saludar();

let persona2 = new Persona('Mariela', 'Love');
console.log("persona2: ",persona2);
persona2.saludar();