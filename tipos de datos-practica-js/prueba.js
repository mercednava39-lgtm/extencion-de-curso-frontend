const disco = {
    titulo: "Ultima vez",    
    artista: "Mon Laferte",  
    anio: 2025,
    disponible: true,       
    canciones: ["No soy para ti", "Si tu me quisieras", "Amarrame", "pa donde se fue"],

    mostrarinfo() {
        console.log(`${this.titulo} de ${this.artista}, lanzado en ${this.anio}`);
    }, 

    mostrarcanciones() {
        console.log(`--- Lista de Canciones ---`);
        this.canciones.forEach((cancion, i) => {
            console.log(`${i + 1}. ${cancion}`);
        });
    },

    agregarcancion(nombre) {
        this.canciones.push(nombre); 
        console.log(`Canción agregada: ${nombre}`); 
    }

    //eliminar ultima cancion
    eliminarUltima() {
    const eliminada = this.canciones.pop();
    console.log(`Se ha eliminado: ${eliminada}`);
}
};

// --- Pruebas de Métodos ---
disco.mostrarinfo(); 
disco.agregarcancion("Esa mujer");

// --- Desestructuración (Sacar elementos) ---

// 1. Sacamos el arreglo del objeto y luego sus elementos
const { canciones } = disco;
const [primera, segunda, tercera] = canciones;

console.log(primera); // No soy para ti
console.log(segunda); // Si tu me quisieras
console.log(tercera); // Amarrame

console.log("-------"); // Los guiones van entre comillas

// 2. Desestructuración anidada (Todo en una línea)
const { canciones: [pista1, pista2, pista3] } = disco; 

console.log(pista1);
console.log(pista2);
console.log(pista3);

//error comun : desestruccturar no crea datos, solo los extrar

const { titulo: nombreDisco, anio: lanzamiento } = disco;
//se asigana el valor de la propiedad a una variable con otro nombre 
console.log(nombreDisco);
console.log(lanzamiento);

//eliminar cancion 



