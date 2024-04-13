const denominations = [50000,20000,10000,5000, 2000, 1000];

function getWithdrawalAmount() {  // esta funcion pregunta a el usuario cuanto dinero quiere retirar 
  const userInput = prompt("¿Cuánto dinero deseas retirar  ?");
  return parseFloat(userInput);
}

function calculateBilletsNeeded(amount) { // esta funcion calcula los billetes que necesita y retorna los billetes que se necesitan
  return denominations.map(denomination => {
    const billetsNeeded = Math.floor(amount / denomination);
    amount -= billetsNeeded * denomination;
    return billetsNeeded;
  });
}


function isValidWithdrawalAmount(amount) { // esta funcion revisa si el lo que quiere retirar el usuario es valida para un retiro osea un numero positivo
  return amount > 0 && amount % 1 === 0;
}

function ATMTransaction() { // esta funcion calcula si el valor solicitado es valido y si no lo es aparece un alert de valor no valido
  const withdrawalAmount = getWithdrawalAmount();

  if (!isValidWithdrawalAmount(withdrawalAmount)) {
    alert("El monto solicitado no es válido.");
    return;
  }

  const billetsNeeded = calculateBilletsNeeded(withdrawalAmount);

  alert("Para retirar $" + withdrawalAmount + ", necesitas:");
  denominations.forEach((denomination, index) => {
    if (billetsNeeded[index] > 0) {
      alert("- " + billetsNeeded[index] + " billetes de $" + denomination);
    }
  });
}


ATMTransaction();