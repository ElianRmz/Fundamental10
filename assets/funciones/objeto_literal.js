let auto ={
    marca:'ford',
    modelo:'f-15',
    año: 2023,
    encender: function(){
        console,("el auto esra encendido");

    },
    apagar: function(){
        console.log('el auto esta apagado');
    }
};
console.log(auto.marca);//"f-150"
auto.apagar();//el auto esta apagado

let jugador = {
    name: 'Juan',
    team: 'Bilbao',
    number: 23,
    shoot_2:function(){
        document.writeln('anotaste 2 puntos')
    },
    shoot_3:function(){
        document.writeln('anotaste 3 puntos')
    }
}