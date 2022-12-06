//PRIMERA PARTE SOLUCIONES AL burbujeo
/*const padre = document.querySelector(".border-primary");
const hijo = document.querySelector(".border-secondary");
const nieto = document.querySelector(".border-danger");


padre.addEventListener("click", () => {
    console.log("me diste click");
}, true);

hijo.addEventListener("click", () => {
    console.log("me diste click nuevamente");
}, true);

nieto.addEventListener("click", () => {
    console.log("me diste click una tercera vez");
}, true);*/

/*OTRA SOLUCION 


const cajitas = document.querySelectorAll(".border")

cajitas.forEach(caja => {
    caja.addEventListener('click', (e) => {
        e.stopPropagation() //para que no se propague 
        console.log('me diste click');
    })
})*/

/*const formulario = document.querySelector('form');
formulario.addEventListener('submit', e => {
    console.log("me diste click");
    e.preventDefault();// esto es para tener lo que hace el navegador por defecto
});*/

/*//DELEGACION DE EVENTOS

const container = document.querySelector(".container");

container.addEventListener("click", (e) => {
    console.log(e.target.id);

if(e.target.id === "padre") {
    console.log("diste click aqui en el padre");
}
});*/
