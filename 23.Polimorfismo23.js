class Empleado{
    constructor(nombre, sueldo){
        this._nombre = nombre; 
        this._sueldo = sueldo; 
    }
    get nombre(){
       return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get sueldo(){
       return this._sueldo; 
    }
    set sueldo(sueldo){
      this._sueldo = sueldo; 
    }
    obtenerDetalles(){
        return `Empleado: nombre: ${this.nombre}, sueldo: ${this.sueldo}`;
    }
}

class Gerente extends Empleado {
    constructor(nombre, sueldo,departamento){
       super(nombre, sueldo);
        this._departamento = departamento; 

    }
    get departamento(){
        return this._departamento; 
    }
    set departamento(departamento){
        this._departamento = departamento; 
    }
    obtenerDetalles(){
        return `Gerente: departamento: ${this.departamento}, nombre: ${this.nombre}, sueldo: ${this.sueldo}`;
    }
}


// Polimorfirmos es de diferentes formas
// en este caso de diferentes formas se llama el metodo de generente o empleado
function imprimir(tipo){
    console.log("polimorfismo", tipo.obtenerDetalles());
}


let empleado1 = new Empleado('Piñera', 350);
console.log(empleado1.obtenerDetalles());

let gerente1 = new Gerente('Rodofo Parada', 3500000, 'Sistemas');
console.log(gerente1.obtenerDetalles());

imprimir(gerente1);
imprimir(empleado1)