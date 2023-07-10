//Desafio 1
let productos = ['Televisor', 'Lavarropas', 'Microondas', 'Batidora', 'Cocina Electrica', 'Cafetera'];
let opcion = Math.floor((Math.random()* 7));

console.log(productos[opcion]);



//Desafio 2
let peliculas = ['Turno de dia', '30 noches con mi ex', 'Bestia', 'El monte',
                 'Top gun maverick', 'Elvis', 'Thor: amor y trueno'];

let masVendida = peliculas[6].toUpperCase();
console.log('\n');
console.log(masVendida);

let peliculasAestrenear = ['Counter-Strike', 'NOP', 'Vértigo', 'Nick', 'Avatar'];
peliculasAestrenear.join();
let videoJuego = peliculasAestrenear.shift();
let union = peliculasAestrenear.concat(videoJuego);

console.log(union);

/*function doble (numero) {
    return numero * 2;
}

function triple (numero) {
    return numero * 3;
}

function aplicarCallback (numero,callback){
    return  callback(numero);
}
function aplicarCallback1 (numero,callback){
    return callback(numero);
}

console.log(aplicarCallback(2,doble));
console.log(aplicarCallback1(3,triple));*/