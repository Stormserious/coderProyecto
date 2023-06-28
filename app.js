// var nombreDeLaVariable = "Bienvenid@";
// const -> no puede cambiar su valor
// let -> va a tener el alcance  en relación al bloque del codigo en el que este
// var -> Variable de tipo global
// let nombre = "Juan";
// nombre = "Pedro"

// console.log(nombreDeLaVariable);
//console.log(nombre);

// const nombre = "Pedro";
// const apellido = "Suarez";
// let edad = 22;
// let peso;
// let altura;

/*Tipo de datos
* - Booleanos: True / false
* - Number: Numeros.
    * int -> 34
    * float -> 3.1416
* - string: cadena de texto (palabras)
* - array: Coleccion/Almacenamiento de datos -> arreglo
* - objeto: Propiedades / Atributos / Metodos.
*/

const nombre = "Pedro";
const apellido = "Suarez";

//console.log (nombre + " " + apellido);

/*
T variable: let
T de dato: int edad
*/
let edad = 20;
const anio = 2023;
const anioCursada = 5;

let anioNacimiento = anio - edad;
let egreso = edad + anioCursada;

const a = 20;
const b = 2;

let suma = a + b;
let resta = a - b;
let division = a / b;
let multiplicacion = a * b;

/*
* Array:
* 6 posiciones
* el elemento 1°: 0
* el elemento 6°: 5
*/

let cursada = [0,1,2,3,4,5];
for (let i = 0; i < cursada.length; i++){
    console.log(cursada[i]);
};

