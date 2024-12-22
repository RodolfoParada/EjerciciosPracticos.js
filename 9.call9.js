let persona1 = {
    nombre: 'Darian',
    apellido: 'Rodolfo',
    nombreCompleto: function(){ 
        return this.nombre + ' ' + this.apellido; }
}

let persona2 = {
    nombre: 'Mariela',
    apellido: 'Love',
}

// uso de call para usar el metodo persona1.nombreCompleto con los datos de persona2
persona1.nombreCompleto();
console.log("persona 1",persona1);

persona1.nombreCompleto.call(persona2);
console.log("se usa método persona 1",persona2);