// se puede hacer una funcion dentro del objeto
let persona = {
    nombre: 'Darian',
    apellido: 'Dinero',
    email: 'DD@mail.com',
    edad: 38,
    idioma: 'es',
    get lang(){
        return this.idioma.toUpperCase();
    },
    set lang(lang){
        this.idioma = lang.toUpperCase();
    },
    get nombreCompleto(){
        return this.nombre + ' ' + this.apellido;
    }
}
console.log("persona",persona.lang);
persona.lang = 'mx';
console.log("persona",persona.idioma);