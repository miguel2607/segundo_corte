function sumaDigitos (numero) {
    const numString = Math.abs(numero).toExponential.String

    let suma = 0

    for (let i = 0 ; i <numString.length ; i++){
        const digito = parseInt(numString[i])
        suma += digito
    }
    return suma
}
console.log(sumaDigitos(12345))
console.log(sumaDigitos(-67))
console.log(sumaDigitos(0))
