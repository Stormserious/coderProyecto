//Ejercicio 2
let nombre = "Pedro";
let apellido = "Perez";
let sueldoActual = 40000;
let porcentajeAumento = 40000 * 0.4;  //aumento del 40%
let sueldoConAumento = sueldoActual + porcentajeAumento;

console.log(nombre + " " + apellido);
console.log("sueldo actual: " + sueldoActual);
console.log("Aumento del 40%: " + porcentajeAumento);
console.log("Total con aumento: " + sueldoConAumento);

//Ejercicio 3 
console.log("\n") //salto de linea, deja una linea en blanco
let numero1 = 20;
let numero2 = 2;

let suma = numero1 + numero2;
let resta = numero1 - numero2;
let division = numero1 / numero2;
let multiplicacion = numero1 * numero2;
let modulo = numero1 % numero2;

console.log("Suma " + suma);
console.log("Resta " + resta);
console.log("Division " + division);
console.log("Multiplicacion " + multiplicacion);
console.log("Modulo " + modulo);

//forma larga
console.log("\n")
if (numero1 > numero2){
    console.log("El " + numero1 + " es mayor");
    console.log("El " + numero2 + " es menor");
}else {
    console.log ("El " + numero2 + " es mayor")
    console.log("El " + numero1 + " es menor");
};

//forma corta
console.log("\n")
console.log (numero1 > numero2);
console.log (numero1 < numero2);
