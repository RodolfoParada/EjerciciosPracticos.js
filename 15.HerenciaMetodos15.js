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
    nombreCompleto() {
        return this._nombre + ' ' + this._apellido + ' ' + this._departamento;
    }
}
   


class Empleado extends Persona {
    constructor(nombre, apellido, departamento) {
        super(nombre, apellido);
        this._departamento = departamento;
    }
    get departamento() {
        return this._departamento;
    }
    set departamento(departamento) {
        this._departamento = departamento;
    }
}  




let persona1 = new Persona('Darian', 'Rodolfo');
console.log("persona1 :",persona1);// get nombre

let empleado1 = new Empleado('Mariela', 'Love', 'Sistemas');
console.log("empleado1: ",empleado1);

console.log(empleado1.nombre);
console.log(empleado1.nombreCompleto());