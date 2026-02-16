const titulo = document.getElementById("titulo");
const texto = document.getElementById("texto");
const caja = document.getElementById("caja");
//el aeventoaddlist--- esta escuchando que haga click
//cambiar texto
const btnclase = document.getElementById("btnclase");
const btntexto = document.getElementById("btntexto");
const btncolor = document.getElementById("btncolor");
const btnocultar = document.getElementById("btnocultar");

//cambiar colores
btntexto.addEventListener("click", () => {
    titulo.textContent = "Cambiaste el texto y color desde JavaScript";
    titulo.style.color = "purple";
    caja.style.backgroundColor = "pink";
});

//para ocultar caja
btnocultar.addEventLis("click", () => {

});


//cambiar de clase
btnclase.addEventListener("click", () => {
    caja.classList.toggle("activa");
});
