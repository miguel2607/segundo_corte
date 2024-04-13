function generarFibonacci (numero) {
    if (numero <= 0 || !Number.isInteger(numero)){
        return " ingrese un numero entero positivo.";
    }
    let resultado= "";
    let a= 0, b=1;
    resultado += `${a}, ${b}`;

    for (let i=2; i<numero; i++){
        const siguiente = a+b;
        resultado += `${siguiente}`;
        a=b
        b= siguiente
    }
    return resultado;
}
console.log(generarFibonacci(8));
console.log(generarFibonacci(0));
console.log(generarFibonacci(-5));