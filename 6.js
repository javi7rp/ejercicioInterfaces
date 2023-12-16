function buscarOcurrencias(texto, palabraBuscada) {
    let p = [].fill(1);
    let i = texto.indexOf(palabraBuscada);

    if(i === -1 ){
        p.push(0);
    }

    while (i !== -1) {
        p.push(i);
        i = texto.indexOf(palabraBuscada, i + 1);
    }

    return p;
}

let texto = "este es texto palabra para probar la funcion palabra de buscar palabra";
let palabraBuscada = "palabra";
console.log("Las ocurrencias de la palabra '" + palabraBuscada + "' están en las posiciones:", buscarOcurrencias(texto,palabraBuscada));