function muestra (a, b, c, call) {
    return call(a, b, c);
}

function calcular (a, b, c) {
    let total = 0;
    total = a + b - c;
    return total;
}

let Clientes = [{
                 nombre: 'Raul R.',
                 monto : Math.floor((Math.random()* 100000)),
                 deposito: Math.floor((Math.random()* 100000)),
                 retiro: Math.floor((Math.random()* 10000)),
                },
                {
                    nombre: 'Mirtha H.',
                    monto : Math.floor((Math.random()* 100000)),
                    deposito: Math.floor((Math.random()* 100000)),
                    retiro: Math.floor((Math.random()* 10000)),
                }, 
                {
                    nombre: 'Jatziri D.',
                    monto : Math.floor((Math.random()* 100000)),
                    deposito: Math.floor((Math.random()* 100000)),
                    retiro: Math.floor((Math.random()* 10000)),
                },     

                ];
console.log('\n');
for (let i = 0; i < Clientes.length; i++) {
    console.log('Nombre del Cliente: '+Clientes[i].nombre);
    console.log('Monto en la cuenta: $'+Clientes[i].monto );
    console.log('El cliente deposito: $'+Clientes[i].deposito);
    console.log('El cliente retiro: $'+Clientes[i].retiro);
    console.log('Su saldo actual es: $' + muestra(Clientes[i].monto, Clientes[i].deposito, Clientes[i].retiro, calcular));
    console.log('\n');

}
