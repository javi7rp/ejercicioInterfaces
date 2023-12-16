//3
//a
const datos = [];

//b
for(let i=1; i<=50; i++){
    datos.push(i);
}
console.log("array: " + datos);

//c
for(let i=24; i<=50; i++){
    datos.splice(i);
}
datos.length = 24;
console.log("array eliminados del 25 al 50: " + datos);

//d
const datosCopia = [...datos];
console.log("array copiado con spread: " + datosCopia);

//e
const array = new Array(50);

//f
const arrayCopia = Array.from(array);

//g
const array_multi = [];
for(let i=0; i< 10; i++){
    const fila = [];
    for(let j=0; j< 10; j++){
           fila.push(i*j);
    }
    array_multi.push(fila)
}
console.log("Array multi: " + array_multi);

//h
const array_of = Array.of(1,2,3,4,5);
array_of[9] = 100;
array_of[49]= 100;
console.log("Bucle for:");
for (let i = 0; i < array_of.length; i++) {
    console.log(array_of[i]); 
}
//el bucle for mostrara un array de tamanno 51, y en las posiciones que no se ha introducido vendra como "undefined"
console.log("ForEach:");
array_of.forEach(n => {
    console.log(n);
});
//forEach solo nos mostrara los elementos del array que si tengan valor, en este caso el array tendra tamaño 8

//i 
//borraremos las posiciones 10 y 50 
delete array_of[9];
delete array_of[49];
console.log("Bucle for:");
for (let i = 0; i < array_of.length; i++) {
    console.log(array_of[i]); 
}
console.log("ForEach:");
array_of.forEach(n => {
    console.log(n);
});

//j
let p = 1;
datos.forEach(n => {
    p = p* n;
});
console.log("El producto total es: " + p);

//k
datos.forEach((n, i, array) => {
    array[i] = n * n;
});
console.log("cada elemento x es cambiado por x*x : " + datos);

//l
const array_map = datos.map(n => `El valor es: ${n}`);
console.log("nuevo array con map : " + array_map);

//m
const array_map_mas5 = datos.map(n => n + 5);
console.log("nuevo array con map + 5 : " + array_map_mas5);

//n
const datos_impares = datos.filter(n => n%2 != 0);
console.log("datos numeros impares : " + datos_impares);

//o
const r = datos.find(n=> n === 13);
if(r != undefined){
    console.log("El numero se encontró");
}else{
    console.log("El numero no se encontró ");
}

//p
const sonPositivos = datos.every(n => n > 0);
if(sonPositivos != undefined){
    console.log("Todos son positivos");
}else{
    console.log("Todos no son positivos");
}

//q
const s = datos.reduce((a, n) => a + n,0 );
console.log("La suma con reduce es: " + s);

//r
const menor = datos.reduce((min, n) => (n < min ? n : min),Infinity );
console.log("El menor valor es: " + menor);

//s
const array_multi_aplanado = array_multi.flat();
console.log("Array Multi:", array_multi);
console.log("Array Multi Aplanado:", array_multi_aplanado);

//t
const cadena = "Vamos a usar flatMap. Es igual que map. Pero aplana los arrays"
const frases = cadena.split('.');
const frases_sin_espacios = frases.map(f => f.trim());
const p_t = frases_sin_espacios.flatMap(f => f.split(' '));
console.log("Frases:", frases);
console.log("Frases_sin_espacios:", frases_sin_espacios);
console.log("Palabras:", p_t);

//u
const a = [1,2,3,4,5];
const b = [6,7,8,9,10];
const a_concat_b = a.concat(b);
console.log("a concat b: " + a_concat_b);
const a_spread_b = [...a, ...b];
console.log("a spread b: " + a_spread_b);
const cola =[]; 
cola.unshift(20);
cola.unshift(50);
console.log("cola al añadir 2 elementos: " + cola);
cola.shift();
console.log("cola al eliminar con shift : " + cola);
const subarray_ab = a_spread_b.slice(2,-1)
console.log("subarray_ab: " + subarray_ab);
a_spread_b.splice(-2);
console.log("array tras usar splice: " + a_spread_b);

//v
const array_menos1 = new Array(100).fill(-1);
console.log("array rellenado con menos uno: " + array_menos1);

//w
const cadenas = ["cadenaJ","cadenaD","cadenaT","cadenaA","cadenaC","cadenaR","cadenaW"];
const estaCadena = cadenas.indexOf("cadenaT");
if(estaCadena != -1){
    console.log("La cadena esta");
}else{
    console.log("La cadena no esta");
}

//x
const estaCadenaHola = cadenas.indexOf("hola");
if(estaCadenaHola != -1){
    console.log("La cadena hola esta");
}else{
    console.log("La cadena hola no esta");
}

//y
cadenas.sort();
console.log("cadenas ordenadas: " + cadenas);

//z
const array_vacio = new Array(50).fill(0); 
array_vacio.forEach(function(_, i ,array)  {
    array[i] = Math.floor(Math.random() * 101);
});
console.log("array llenado de numeros random del 0 al 100: " + array_vacio);
array_vacio.sort();
console.log("array ordenador con sort de menor a mayor: " + array_vacio);
array_vacio.reverse();
console.log("array ordenador con sort de mayor a menor: " + array_vacio);