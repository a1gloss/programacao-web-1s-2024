function verificarNumeroPrimo(n) {
    if (n <= 1) {
        console.log(n + ": ameaça");
        return false;
    }
    if (n <= 3) {
        console.log(n + ": primo");
        return true;
    }
    if (n % 2 === 0 || n % 3 === 0) {
        console.log(n + ": não primo");
        return false;
    }
    let divisor = 5;
    while (divisor * divisor <= n) {
        if (n % divisor === 0 || n % (divisor + 2) === 0) {
            console.log(n + ": não primo");
            return false;
        }
        divisor += 6;
    }
    console.log(n + ": primo");
    return true;
  }
  
  verificarNumeroPrimo(0); 
  verificarNumeroPrimo(1); 
  verificarNumeroPrimo(2); 
  verificarNumeroPrimo(3); 
  verificarNumeroPrimo(7); 
  verificarNumeroPrimo(83); 
  verificarNumeroPrimo(100); 
  verificarNumeroPrimo(991); 
  verificarNumeroPrimo(104729); 
  verificarNumeroPrimo(14348907); 
  