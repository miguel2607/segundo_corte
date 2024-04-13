function calcularMCD  (a, b)  {
    if (!Number.isInteger(a) || !Number.isInteger(b)){
        return "los 2 numeros deben ser enteros.";
    }
    a = Math.abs(a);
    b = Math.abs(b);

    while (b!=0){
        const temp=b;
        b= a % b ;
        a = temp;
    }
    return a;

}
console.log(calcularMCD(a=24, b=18));
console.log(calcularMCD(a=10, b=5));
console.log(calcularMCD(a=7, b=3));
console.log(calcularMCD(a=3.5, b=2));