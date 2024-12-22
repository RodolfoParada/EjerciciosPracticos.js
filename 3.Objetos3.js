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
persona.tel ='5625423424234'; 
console.log(persona);

delete persona.tel
console.log(persona);

// Concadenar cada valor de cada propiedad del objeto
console.log(persona.nombre + ', ' + persona.apellido + ', ' + persona.email + ', ' + persona.edad);

//for in
for(datos in persona){
    console.log(persona[datos]);
}

let personaArray = Object.values(persona);
console.log("persona array",personaArray);

let personaString = JSON.stringify(persona);
console.log("persona string",personaString);

