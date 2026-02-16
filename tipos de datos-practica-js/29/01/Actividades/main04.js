
// 1. Declarar un array vacío para almacenar los títulos
let librosLeidos = [];

// 2. Definir la función para añadir libros
function agregarLibro(titulo) {
    if (titulo && typeof titulo === "string") {
        librosLeidos.push(titulo);
        console.log(`Libro añadido: "${titulo}"`);
    } else {
        console.log("Por favor, introduce un título de libro válido.");
    }
}

// 3. Definir la función para imprimir la lista
function mostrarLibrosLeidos() {
    if (librosLeidos.length === 0) {
        console.log("Aún no has leído ningún libro.");
        return;
    }

    console.log("--- Lista de Libros Leídos ---");
    for (let i = 0; i < librosLeidos.length; i++) {
        console.log(`${i + 1}. ${librosLeidos[i]}`);
    }
}

// --- Pruebas del sistema ---
agregarLibro("Las travesuras de la niña mala");
agregarLibro("La odisea");
agregarLibro("El retrato de dorian gray");

mostrarLibrosLeidos();