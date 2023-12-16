//4
function generarArrayAleatorio() {
    const arrayAleatorio = [];

    for (let i = 0; i < 1000; i++) {
        const numeroAleatorio = Math.floor(Math.random() * 100);
        arrayAleatorio.push(numeroAleatorio);
    }

    return arrayAleatorio;
}
const miArrayAleatorio = generarArrayAleatorio();

//a
function calcularMedia(miArray){
    const suma = miArray.reduce((acumulador, n) => acumulador + n, 0);
    const media = (suma/miArray.length);
    return media;
}
console.log("La media del array es: " + calcularMedia(miArrayAleatorio));

//b 
function calcularFrecuencia(array){
    const f = new Array(1000).fill(0);
    array.forEach(n => {f[n]++;});
    return f;
    
}
console.log("La frecuencia de cada numero será: " + calcularFrecuencia(miArrayAleatorio)); //solo me lo hace para los 100 primeros numeros, el arrayAleatorio completo no termina de cargar bien

//c
function ordenarMenorMayor(array){
    for(let i=0; i< array.length; i++){
        for(let j=0; j< array.length; j++){
                if(array[j] > array[j+1]){
                    const aux = array[j];
                    array[j] = array[j +1];
                    array[j+1] = aux;
                }  
        }
    }
    return array;
}
console.log("El array ordenado de menor a mayor será: " + ordenarMenorMayor(miArrayAleatorio)); 