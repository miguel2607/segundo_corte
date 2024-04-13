function esPalindromo (numero){
    if (!Number.isInteger(numero)){
        return "El valor debe ser un numero entero.";
    }
    const numString = Math.abs(numero).toString();

    let numInvertido= "";
    for (let i = numString.length-1; i>= 0; i--){
        numInvertido += numString[i];
    }
    return numString === numInvertido;
}

console.log(esPalindromo(12321));
console.log(esPalindromo(54765));
console.log(esPalindromo(-101));
console.log(esPalindromo(3.14));
