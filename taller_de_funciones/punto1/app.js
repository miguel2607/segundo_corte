function calcularfactorial (numero){
    if (numero <0){
        return "el numero debe ser negativo"
    }
    else if (numero === 0){
        return 1
    }
    else{
        let factorial = 1
        for (let i=1; i <=numero ; i++){
            factorial *=i
        }
        return factorial
    }
}
console.log(calcularfactorial(5))

