// Declaracion de una variable
let nombre;
// Inicialización
nombre = 'Jonatan';

let numero = 10;

let esHombre = true;

let usuario = undefined;

let auto = null;

let tipoDato = typeof nombre;

console.log(tipoDato);

let fruta = {
    color: 'roja',
    sabor: 'acida',
    precio: 97,
    hermana: {
        color: 'amarilla',
        sabor: 'dulce',
        precio: 110,
        hermana: {
            color: 'azul',
            sabor: 'agridulce',
            precio: 120,
            hermana: {
                color: 'verde',
                sabor: 'dulce',
                precio: 10,
                hermana: {
                    color: 'rosa',
                    sabor: 'dulce',
                    precio: 80,
                }
            }
        }
    }
}

let mesesDeCosecha = ['enero','febrero'];
mesesDeCosecha[0];
mesesDeCosecha[1];

// operadores aritmeticos
let resultado = 10 + 10;

console.log(resultado);

let concatenacion = 'Jonatan' + ' Arevalo';

console.log(concatenacion);

let prueba = 5 + '5'; // conversión implicita
let prueba2 = 5 + Number('5'); // conversión explicita

console.log(prueba, prueba2);

let resta = 5 - 5;
let resta2 = 5 - '5';
let resta3 = '5' - '5';

console.log(resta, resta2, resta3);

// Acceder a una propiedad del objeto -> estatica o manual
// Solo saber el numero de propiedades hermanas para poder acceder a cada una de ellas
console.log(fruta.hermana.hermana.sabor);

// Acceder de forma dinamica a las propiedades de los objetos

let hermana = fruta.hermana;

while(hermana){
    hermana = hermana.hermana
}

const PI = 3.1416;


// operadores lógicos &&, ||, >=, <=, ==, ===


// estructuras de control
let esHumano = true;
if(esHumano === true ){
    console.log('Es humano');
} else {
    console.log('No es humano');
}

let jonatan = 16;
if(jonatan >= 18 && jonatan < 30){
    console.log('Es mayor edad');
} else if(jonatan >= 30) {
    console.log('Es adulto mayor');
} else {
    console.log('Es menor de edad');
}


let jose = 19;

while(jose > 18 && jose < 30 ) {
    console.log('Jose es mayor de edad', jose);
    jose += 1;
}

for (let jose = 18; jose = 30; jose ++) {
    console.log('Jose es mayor de edad', jose);
}

for(let elemento of array ){
    console.log()
}