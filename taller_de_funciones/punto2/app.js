function esprimo (numero){
    if (numero <2){
return false
    }
    if (numero == 2){
        return true
    }
    if (numero % 2 === 0){
        return false
    }
    const limite = Math.sqrt (numero)
    for (let i = 3; i <= limite; i += 2){
        if (numero % i === 0){
            return false
        }
    }
    return true
}
console.log (esprimo(7))
console.log (esprimo(10))
console.log (esprimo(17))
console.log (esprimo(0))
console.log (esprimo(1))

