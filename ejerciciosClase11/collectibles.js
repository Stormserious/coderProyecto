//ejercicio 1
const f = require('fs');
let leer1 = f.readFileSync("./datos/figuras1.json", "utf-8");
let leer2 = f.readFileSync("./datos/figuras2.json", "utf-8");
let leer3 = f.readFileSync("./datos/figuras3.json", "utf-8");
let convertido1 = JSON.parse(leer1);
let convertido2 = JSON.parse(leer2);
let convertido3 = JSON.parse(leer3);
let total = [{...convertido1}, {...convertido2}, {...convertido3}];
module.exports = total;

/*console.log('\n');        
console.log(convertido1);
console.log('-------------');
console.log(convertido2);
console.log('-------------');
console.log(convertido3);*/