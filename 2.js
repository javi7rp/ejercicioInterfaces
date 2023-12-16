//a
const [dia, mes, año] = ['06', 'Octubre', '2021'];
const meses = { 'Enero': 1, 'Febrero': 2, 'Marzo': 3, 'Abril': 4, 'Mayo': 5, 'Junio': 6, 'Julio': 7, 'Agosto': 8, 'Septiembre': 9, 'Octubre': 10, 'Noviembre': 11, 'Diciembre': 12 };
const obtenerNumeroMes = meses[mes];
console.log(`La fecha es: ${dia}/${obtenerNumeroMes}/${año}`);

//b
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pos_impares = numeros.filter((_, i) => i % 2 != 0);
console.log("posiciones impares: " + pos_impares);

//c
const [primerNum_c, segundoNum_c, ...restoNum_c] = numeros;
console.log(`primer numero = ${primerNum_c},segundo numero = ${segundoNum_c}, resto = ${restoNum_c}`)

//d
const person = { nombre: 'Luis', apellidos: 'Molina', telefono: '+34666554433'};
const {nombre, apellidos, telefono} = person;
console.log(`nombre = ${nombre}, apellidos = ${apellidos}, telefono = ${telefono}`)

//e
for (const [key, value] of Object.entries(person)) {
    console.log(`Llave: ${key}, Valor: ${value}`);
}

//f
const f = [{ x: 1, y: 2 }, { x: 3, y: 4 }];
const [{ x: x1, y: y1 }, { x: x2, y: y2 }] = f;
console.log(`x1: ${x1}, x2: ${x2}, y1: ${y1}, y2: ${y2} `);

//g
function funcion_g(person_g){
    const {nombre, apellidos} = person_g;
    console.log(`Nombre completo: ${nombre} ${apellidos}`)
}
const person_g = {nombre : 'Javi', ciudad: 'jaen', edad: 22, apellidos: 'Redondo', sexo: 'hombre'}
funcion_g(person_g);

//h
const obj1 = {h1 : 'h1', h2: 'h2'};
const obj2 = {h3 : 'h3', h4: 'h4'};
const objComb = {...obj1, ...obj2}; //operador spread = (...)
console.log(objComb);
delete objComb.h2;
console.log('Borramos h2 y se ve asi: ', objComb);

//i
function obtenerTresValores() {
    return ['valor1', 'valor2', 'valor3'];
}
const [primerValor, segundoValor, tercerValor] = obtenerTresValores();
console.log('Primer valor:', primerValor,', Segundo valor: ', segundoValor,', Tercer valor: ', tercerValor);

//j
function clonarProfundo(objetoOriginal) {
    const jsonString = JSON.stringify(objetoOriginal);
    const objetoClonado = JSON.parse(jsonString);
    return objetoClonado;
}
const objetoOriginal = {
    nombre: 'Javi',
    apellido: 'Redondo',
    edad: 22,
    hobbies: ['futbol', 'deporte'],
};
const objetoClonado = clonarProfundo(objetoOriginal);
console.log('Objeto Original:', objetoOriginal);
console.log('Objeto Clonado:', objetoClonado);