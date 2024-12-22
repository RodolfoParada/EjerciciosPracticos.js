let x = 10; 
console.log(x); // 10

// se puede hacer una funcion dentro del objeto
let persona = {
    nombre: 'Darian',
    apellido: 'Dinero',
    email: 'DD@mail.com',
    edad: 38,
    nombreCompleto1: function(){
        return this.nombre + ' ' + this.apellido;
    }
}
console.log(persona); 
console.log(persona.nombre); 


// se puede hacer una funcion fuera del objeto para acceder a los valores del objeto
function nombreCompleto2(persona){
    console.log("funcion fuera del objeto: ",persona.nombre + ' ' + persona.apellido);
}
nombreCompleto2(persona);
console.log("funcion dentro objeto :",persona.nombreCompleto1());


let persona2 = new Object();
persona2.nombre = 'Anais';
persona2.direccion = 'Calle 123';
persona2.tel = '123456789';
console.log(persona2);
