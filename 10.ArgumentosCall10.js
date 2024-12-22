let persona1 = {
    nombre: 'Darian',
    apellido: 'Rodolfo',
    nombreCompleto: function(titulo, tel){ 
        return titulo + ': ' +this.nombre + ' ' + this.apellido + ', ' + tel ; }
}

let persona2 = {
    nombre: 'Mariela',
    apellido: 'Love',
}

// uso de call para usar el metodo persona1.nombreCompleto con los datos de persona2
console.log("persona 1",persona1.nombreCompleto('Licenciado','99999993'));

console.log("se usa método persona 1", persona1.nombreCompleto.call(persona2));