function menciona (texto, palabra){
    return texto.indexOf(palabra);
 
 };
 
 console.log(menciona('hola','h'));
 let frase = 'Hola!, soy Carli';

let licenciada = frase.slice(11);
console.log(licenciada);

function imprimirAzul4(){
    for (let i = 0; i < 4; i = i+1){
        console.log('Azul');
    }
}

console.log(imprimirAzul4()) 