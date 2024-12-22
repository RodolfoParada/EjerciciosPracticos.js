class Persona{

    static contadorPersonas = 0; //atributo de nuestra clase

    // se puede crear hasta 5 objetos
    static get MAX_OBJ(){
        return 5;
    }
    
    
        constructor(nombre, apellido){
            this._nombre = nombre; 
            this._apellido = apellido;
            if( Persona.contadorPersonas < Persona.MAX_OBJ){
                this.idPersona = ++Persona.contadorPersonas;
            }
            else{
                console.log('Se han superado el máximo de objetos permitidos');
            }
            this._idPersona = ++Persona.contadorPersonas;
        }
        get nombre(){
            return this._nombre;
        }
        set nombre(nombre){
            this._nombre = nombre;
        }
        get apellido(){
            return this._apellido;
        }
        set apellido(apellido){
            this._apellido = apellido;
        }
        nombreCompleto(){
            return this._idPersona + ' ' + this._nombre + ' ' + this._apellido;
        }
        //Sobreescribiendo el metodo de la clase Padre (Object)
        toString(){
            //Se aplica poliformismo (multiples formas en tiempo de ejecucion)
            //el metodo que se ejecuta depende si es una referencia de tipo padre 
            //o de tipo hijo
            return this.nombreCompleto();
        }
        static saludar(){
            console.log('saludos desde método static');
        }
        static saludar2(persona){
            console.log(persona.nombre + ' ' + persona.apellido);
        }
    }
    
    class Empleado extends Persona{
        constructor(nombre, apellido, departamento){
            super(nombre, apellido);//llamar al constructor de la clase padre
            this._departamento = departamento;
        }
        get departamento(){
            return this._departamento;
        }
        set departamento(departamento){
            this._departamento = departamento;
        }
        //Sobreescritura
        nombreCompleto(){
            return super.nombreCompleto() + ', ' + this._departamento;
        }
    }
    
    let persona1 = new Persona('alma', 'Perez');
    console.log( persona1.toString() );
    
    let empleado1 = new Empleado('Maria', 'Jimenez', 'Sistemas');
    console.log( empleado1.toString());

  
    let persona2 = new Persona('karla', 'Ramirez');
    console.log( persona2.toString());

    console.log(Persona.MAX_OBJ);
    Persona.MAX_OBJ = 10;
    console.log(Persona.MAX_OBJ);

    let persona3 = new Persona('yasna', 'rez');
    console.log( persona2.toString());

    let persona4 = new Persona('yulia', 'Ram');
    console.log( persona2.toString());