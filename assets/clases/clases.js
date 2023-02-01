class Perro {
    constructor(nombre){
        this.nombre=nombre;
    }
    //metodo 
    hablar() {
        document.write(this.nombre + 'ladra');
    }
    alimentar() {
        document.write('hola soy '+ this.nombre + 'gracias por alimentarme');
    }
}
let mascota_1 = new Perro('Simio ');
mascota_1.hablar();//Simio ladra
mascota_1.alimentar();
document.write('</br>');
let mascota_2 = new Perro('Kira ');
mascota_2.hablar();//Kira ladra

