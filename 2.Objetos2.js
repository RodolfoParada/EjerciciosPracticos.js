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
console.log(persona.apellido);

for(datos in persona){
    console.log(datos);   
    console.log(persona[datos]);
}