
const titulo = document.getElementById("titulo");
const texto = document.getElementById("texto");
const caja = document.getElementById("caja");

// CORRECCIÓN: Usar document.getElementById para seleccionar los botones
const btntexto = document.getElementById("btntexto");
const btncolor = document.getElementById("btncolor");
const btnocultar = document.getElementById("btnocultar");

// Cambiar texto y color
// He unido ambos eventos en uno solo para que el código sea más eficiente
btntexto.addEventListener("click", () => {
    titulo.textContent = "Cambiaste el texto y color desde JavaScript";
    titulo.style.color = "purple";
    caja.style.backgroundColor = "pink";
});