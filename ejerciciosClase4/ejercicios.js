// Ejercicio 1

let perfil = 'Asistente';
console.log('\n');

switch (perfil.toLowerCase()){

    case 'administrador':
        console.log('Usted tiene todos los privilegios de uso del sistema');
    break;

    case 'asistente':
        console.log('Usted solo tiene permisos de registrar, modificar y consultar datos');
    break;

    case 'invitado':
        console.log('Usted solo tiene permisos de consultar datos');
    break;

    default:
        console.log('Debe especificar el perfil de usuario');
};

console.log('\n');

//ejercicio 2

let pagoMes = 5000;
let consumoKWH = 500;
let aumento = 0;
consumoKWH > 300 ? (aumento = 5000 + (5000*0.2)) : (aumento = 5000);

console.log('\n');
console.log('Debido a que hogar tuvo un consumo de 500kwh, en base al ajuste tarifario (hogares con consumo a 300kwh'+
 ' por mes tendran que pagar un aumento del 20%) cumplimos con informarle que se ha ajustado total a pagar sera: $' +aumento);

// Ejercicio 3

let palabra ='Perro';

console.log('\n');
    switch (palabra.toLowerCase()){
        case 'perro':
            console.log('dog');
        break;

        case 'gato':
            console.log('cat');
        break;

        case 'puerta':
            console.log('door');
        break;

        case 'ventana':
            console.log('window');
        break;

        case 'mesa':
            console.log('table');
        break;

        default:
            console.log('Opciones: perro, gato, puerta, ventana, mesa');
    }

// ejercicio 4

let operacion = 'Suma';
let numA = 2;
let numB = 2;
let respuesta = 0;

console.log('\n');
switch (operacion.toLowerCase()) {
        
    case 'suma':
        respuesta = numA + numB;
        console.log('Resultado de suma: ' + respuesta);
    break;

    case 'resta':
        respuesta = numA - numB;
        console.log('Resultado de resta: ' + respuesta);
    break;

    case 'multiplicacion':
        respuesta = numA * numB;
        console.log('Resultado de multiplicacion: ' + respuesta);
    break;

    case 'division':
        respuesta = numA / numB;
        console.log('Resultado de division: ' + respuesta);
    break;

    default:
        console.log('Solo debe elegir: Suma, Resta, Division, Multiplicacion');
};


// Ejercicio 5

let velocidad = Math.floor(Math.random() * 1000) + 100;
let altura = Math.floor(Math.random() * 1000) + 100;

console.log('\n');


if ( velocidad >= 268 && velocidad <= 278 && altura >= 150 && altura <= 300){
    console.log('Puede iniciar el proceso para aterrizar');
} else if (velocidad >= 268 && velocidad <= 278){
    console.log('No esta en condiciones de aterrizar, modifique su altura, altura actual: ' + altura + " m");
} else if (altura >= 150 && altura <= 300){
    console.log('No esta en condiciones de aterrizar modifique su velocidad, velocidad actual: ' + velocidad +' km/hr');
} else {
    console.log('No esta condiciones de aterrizar, modifique velocidad y altura.');
    console.log ('Velocidad actual: ' + velocidad +' km/hr' + ' || Altura actual: ' + altura + " m");
    console.log('Para aterrizar velocidad entre 268 a 278 km/hr');
    console.log('Para aterrizar altura entre 150 a 300 m');
}