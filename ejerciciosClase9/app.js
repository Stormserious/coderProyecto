const p = require('./pelicula');
const f = require('fs');

function mostrar(Array) {
    for (let i = 0; i < Array.length; i++){
        console.log((i+1)+')El id de la pelicula es: ' + Array[i].id);
        console.log((i+1)+')El rating de la pelicula es: '+ Array[i].rating);
        console.log((i+1)+')Los premios de la pelicula son: '+ Array[i].awards);
        console.log((i+1)+')La duracion de la pelicula es: '+ Array[i].duracion);
        console.log((i+1)+')El precio de la pelicula es: '+ Array[i].precio);
        console.log((i+1)+')El genero de la pelicula es: '+ Array[i].genero);
        console.log('------------')
    }
}
console.log('\n');
mostrar(p);
console.log('\n');

let leer = f.readFileSync('./mensaje.txt','utf-8');
console.log(leer);

