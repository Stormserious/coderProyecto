function alquilerVehiculo (tipoVehiculo, diasDeAlquiler, sillaParaBebe) {
    if (sillaParaBebe = 0) {
        console.log('Lleva silla para bebé.');
        adicional = 12000 + tipoVehiculo;
    } else if (sillaParaBebe = 1){
        console.log('No lleva silla para bebé');
        adicional = 0 + tipoVehiculo;
    };
    let total = adicional * diasDeAlquiler;
    return total;
}

function vehiculo(opcion){
    switch (opcion) {
        case 0:
            nombre = 'Compacto';
        break;

        case 1:
            nombre = 'Mediano';
        break;

        case 2: 
            nombre = 'Camioneta';
        break;
    };
    return nombre;
}

let nombre;
let adicional;
let opcion = Math.floor((Math.random()* 3));
let dias = Math.floor((Math.random() * 31)+1);
let silla = Math.floor((Math.random()* 2));
let autos = [ compacto = 14000,
     mediano = 17000,
    camioneta = 28000];   
let vehiculoSeleccionado = autos[opcion];

console.log('El vehiculo es: '+ vehiculo(opcion) + ' | Su precio es: '+vehiculoSeleccionado);
console.log('Dias de alquiler: '+dias);
let mostrar = alquilerVehiculo(vehiculoSeleccionado, dias, silla);
console.log('Total a pagar: $'+ mostrar);
