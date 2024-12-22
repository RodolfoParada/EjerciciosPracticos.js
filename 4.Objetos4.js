// se puede hacer una funcion dentro del objeto
let persona = {
    nombre: 'Darian',
    apellido: 'Dinero',
    email: 'DD@mail.com',
    edad: 38,
   get nombreCompleto1(){
        return this.nombre + ' ' + this.apellido;
    }
}
//get es una funcion
console.log(persona.nombreCompleto1);


