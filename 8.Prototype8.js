function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre + ' ' + this.apellido;
    }   
}
Persona.prototype.tel = '123456789';


let padre = new Persona('Darian', 'dinero','dd@mail.com'); 
padre.tel = '45234';
console.log("nombre completo : ",padre.tel);

let madre = new Persona('Mariela', 'Noemi','mn@mail.com'); 
madre.tel = '565234';
console.log("nombre completo : ", madre.tel);