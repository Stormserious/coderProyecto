//Ejercicio 1
const f = require('fs');
let leer = f.readFileSync("./bicicletas.json", "utf-8");
let convertido = JSON.parse(leer);

console.log(convertido);
module.exports = convertido;