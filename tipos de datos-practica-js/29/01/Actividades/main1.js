
// Función para evaluar la nota del estudiante
function evaluarNota(nota) {
    // Validar que la nota sea un número entre 0 y 100
    if (typeof nota !== 'number' || nota < 0 || nota > 100) {
        return "Por favor, ingresa una nota válida entre 0 y 100.";
    }

    // Determinar el mensaje según la nota
    if (nota >= 90) {
        return "Excelente, el estudiante aprueba.";
    } else if (nota >= 75) {
        return "Bien, el estudiante aprueba.";
    } else if (nota >= 60) {
        return "Suficiente, el estudiante aprueba.";
    } else {
        return "El estudiante no aprueba.";
    }
}

// Ejemplo de uso
console.log(evaluarNota(85)); // Muestra: "Bien, el estudiante aprueba."
console.log(evaluarNota(55)); // Muestra: "El estudiante no aprueba."