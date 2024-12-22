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



// es una forma de crear objetos pero no es la mas usada, pero es más formal.
let miObjeto1 = new Object();


// es la forma mas comun de crear objetos en javascript
let miObjeto2 = {};


// la forma de crear una nueva cadena de texto
let miCadena1 = new String('Hola');

// la forma mas comun de crear una cadena de texto
let miCadena2 = 'Hola';

// Crear un objeto de tipo número es la más formal pero no la más usada
let miNumero = new Number(1);
// la forma mas comun de crear un objeto de tipo número
let miNumero2 = 1;

// Crear un objeto de tipo booleano es la más formal pero no la más usada
let miBoolean = new Boolean(false);
// la forma mas comun de crear un objeto de tipo booleano
let miBoolean2 = false;

// Crear Objeto de tipo Array es la más formal pero no la más usada
let miArray = new Array();
// la forma mas comun de crear un objeto de tipo Array
let miArray2 = [1,2,3,4,5];

// Para definir una funcion pero no es la mas usada
let miFuncion = new Function();
// la forma mas comun de crear una funcion
let miFuncion2 = function(){};