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
    }, 
    eliminarUltima() {
        const eliminada = this.canciones.pop();
        console.log(`Se ha eliminado: ${eliminada}`);
    }
};
console.log("Antes de borrar:");
disco.mostrarcanciones();
disco.eliminarUltima(); 
console.log("Después de borrar:");
disco.mostrarcanciones();

