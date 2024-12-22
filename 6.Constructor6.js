function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre + ' ' + this.apellido;
    }   
}
let padre = new Persona('Darian', 'dinero','dd@mail.com'); 
console.log("nombre completo : ",padre.nombreCompleto());

let madre = new Persona('Mariela', 'Noemi','mn@mail.com'); 
console.log("nombre completo : ", madre.nombreCompleto());


padre.nombre = 'Ariel Darian ';
console.log(padre);
console.log(madre);






