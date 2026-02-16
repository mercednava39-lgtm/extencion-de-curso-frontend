// 1. Declarar el arreglo
const frutas = ["manzana", "pera", "manzana", "platano", "pera", "manzana"];

// 2. Objeto para almacenar el conteo
let conteoFrutas = {};

// 3. Recorrer y contar
for (let i = 0; i < frutas.length; i++) {
    let fruta = frutas[i];
    
    // Si la fruta ya existe en el objeto, sumamos 1
    if (conteoFrutas[fruta]) {
        conteoFrutas[fruta]++;
    } else {
        // Si no existe, la inicializamos en 1
        conteoFrutas[fruta] = 1;
    }
}

// 4. Imprimir resultados
console.log("Conteo con ciclo FOR:", conteoFrutas);