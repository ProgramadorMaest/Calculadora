function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b === 0) {
        return "Error: División por cero no permitida";
    }
    return a / b;
}

function calculadora() {
    let continuar = true;
    while (continuar) {
        let opcion = prompt("Seleccione una operación:\n1. Sumar\n2. Restar\n3. Multiplicar\n4. Dividir\n5. Salir");
        
        if (opcion === "5") {
            alert("Gracias por usar la calculadora.");
            continuar = false;
            break;
        }
        
        let num1 = parseFloat(prompt("Ingrese el primer número:"));
        let num2 = parseFloat(prompt("Ingrese el segundo número:"));
        let resultado;

        switch (opcion) {
            case "1":
                resultado = sumar(num1, num2);
                alert(`Resultado: ${resultado}`);
                break;
            case "2":
                resultado = restar(num1, num2);
                alert(`Resultado: ${resultado}`);
                break;
            case "3":
                resultado = multiplicar(num1, num2);
                alert(`Resultado: ${resultado}`);
                break;
            case "4":
                resultado = dividir(num1, num2);
                alert(`Resultado: ${resultado}`);
                break;
            default:
                alert("Opción no válida. Intente de nuevo.");
        }
    }
}

calculadora();
