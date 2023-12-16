//a,b,c,d
const frase = "Esto es una linea\n Esto es una linea con retorno de carro \n \tEsto es una linea con retorno de carro y tabulacion "
console.log(frase);
const f1 = "Esta es la frase1 "
const f2 = "Esta es la frase2"
console.log(f1+f2)

//e
let nombre = "Javi";
let apellido = "Redondo";
let edad = 22;

let template = `Mi nombre es ${nombre} ${apellido}.\n Tengo ${edad} años`
console.log(template)

//f
let texto = "Esta es la primera frase, Esta es la segunda frase, Y esta es la tercera frase";
let arrayTexto = texto.split(", ");
console.log(arrayTexto);

//g
let texto_minusculas = "EsTE es un TEXTO para PASAr a MInusculAS";
console.log(texto_minusculas.toLowerCase());

//h
let texto_mayusculas = "EsTE es un TEXTO para PASAr a mayuSculas";
console.log(texto_minusculas.toUpperCase());

//i
let texto_caracterAcaracter = "Caracter";
for (let i = 0; i < texto_caracterAcaracter.length; i++) {
    console.log(texto_caracterAcaracter.charAt(i));
}

//j
let texto_buscarPalabra = "Texto para buscar palabra";
let palabra_a_buscar = "buscar"

let posicion = texto_buscarPalabra.indexOf(palabra_a_buscar);
console.log(`La palabra '${palabra_a_buscar}' comienza en la posición ${posicion} en el texto: "${texto_buscarPalabra}"`);


//k
let texto_k = "Texto para extraer una subcadena desde la posicion 3";
let posicionInicial_k = 3;
let subcadena_k = texto_k.substring(posicionInicial_k);
console.log(subcadena_k);

//l
let texto_l = "Texto para extraer una subcadena desde la pos 3 hasta la primera palabra";
let posicionInicial_l = 3;
let palabraFin_l = "hasta";
let posicionPalabra_l = texto_l.indexOf(palabraFin_l);
let subcadena_l = texto_l.substring(posicionInicial_l, posicionPalabra_l);
console.log(subcadena_l);

//m
let texto_m = "texto con espacios en blanco sustituidos por guion";
let textoModificado_m = texto_m.replace(/ /g, "-");
console.log(textoModificado_m);

//n
let texto_n = "   texto con espacios al inicio y al final   ";
let textoSinEspacios_n = texto_n.trim();
console.log(textoSinEspacios_n);

//o
let texto_o = "texto con espacios en blanco";
let textoSinEspacios_o = texto_o.replace(/\s/g, "");
console.log(textoSinEspacios_o);

//p
function invertirTexto(texto_p) {
    return texto_p.split('').reverse().join('');
}
let texto_p = "Texto para invertirlo";
let textoInvertido_p = invertirTexto(texto_p);
console.log(textoInvertido_p); 

//q,r
function tieneNumeros(texto_qr) {
    let expresionRegular_num = /\d/;
    return expresionRegular_num.test(texto_qr);
}

function terminaEnPunto(texto_qr) {
    let expresionRegular_punto = /\.$/;
    return expresionRegular_punto.test(texto_qr);
}
let tieneNum_q = "";
let terminaPunto_q = "";
let texto_qr = "Texto para comprobar (6) si hay numeros y si termina en punto.";
console.log(texto_qr); 
if(tieneNumeros(texto_qr)){
    tieneNum_q = "El texto anterior contiene numeros ";
}else{
    tieneNum_q = "El texto anterior no contiene numeros ";
}
if(terminaEnPunto(texto_qr)){
    terminaPunto_q = "y termina en punto";
}else{
    terminaPunto_q = "y no termina en punto";
}
console.log(tieneNum_q + terminaPunto_q);

//s
function empiezaConMayuscula(texto_s) {
    let expresionRegular_mayus = /^[A-Z]/;
    return expresionRegular_mayus.test(texto_s);
}
let texto_s = "Texto para comprobar si empieza por mayuscula.";
console.log(texto_s);
if(empiezaConMayuscula(texto_s)){
    console.log("El texto anterior comienza por mayuscula");
}else{
    console.log("El texto anterior no comienza por mayuscula");
}

//t
function tieneCodigoInternacional(texto_t) {
    let expresionRegular_t = /^\+\d{1,4}\s?\d{3,14}/;
    return expresionRegular_t.test(texto_t);
}
let texto_t = "+34 953405060";
console.log(texto_t);
if(tieneCodigoInternacional(texto_t)){
    console.log("El texto anterior contiene codigo internacional");
}else{
    console.log("El texto anterior no contiene codigo internacional");
}


//u
function reemplazarCodigoInternacional(texto_u) {
    let expresionRegular_u = /\+\d+/g;
    return texto_u.replace(expresionRegular_u, "SECRETO");
}

let texto_u = "Texto para escribir el numero: +341234566 y que no se pueda ver";
let textoModificado_u = reemplazarCodigoInternacional(texto_u);
console.log(textoModificado_u);


