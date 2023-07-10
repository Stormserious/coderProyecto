let Cursos = 
    [{ html5: 4000 }, { css3: 5000 },  { javascript: 10000}, { react: 7000}, { nodejs: 15000}];

let alumno = [{
                 nombre: 'Raul R.',
                 curso1: 'html5',
                 curso2: 'css3',
                 curso3: 'react'
                },
                {
                 nombre: 'Jatziri D.',
                 curso1: 'javascript',
                 curso2: 'nodejs',
                 curso3: 'html5'
                }];

function calcular(a, b){
    let precio = 0;

    for (let i = 0 ; i < a.lenght ; i++){
     for (let j = 0; j < b.lenght; j++){
        switch (b[i].curso1){
            case 'h5ml5':
                precio = precio + a.html5;
            break;

            case 'css3':
                precio = precio + a.css3;
            break;

            case 'javascript':
                precio = precio + a.javascript;
            break;

            case 'react':
                precio = precio + a.react;
            break;

            case 'nodejs':
                precio = precio + a.nodejs;
            break;
        };
     };
    };
    return precio;
};

function mostrar (a, b, callback) {
    for (let i = 0 ; i < a.lenght ; i++){
                console.log('Estimado '+ b[i].nombre + ' en funcion a los cursos seleccionados:')
                console.log(b[i].curso1);
                console.log('El monto total a pagar es: ' + callback(a, b));
    }
};

mostrar(Cursos, alumno, calcular);
