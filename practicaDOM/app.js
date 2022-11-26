const inputColor = document.querySelector('#inputColor');
const btnVisualizar = document.querySelector('#btnVisualizar');
const parrafo = document.querySelector('#parrafo');
const cardColor = document.querySelector('#cardColor');

console.log(inputColor);
console.log(btnVisualizar);
console.log(parrafo);
console.log(cardColor);


btnVisualizar.addEventListener("click", () =>{
    console.log(inputColor.value);
    console.log("me diste click");
    parrafo.textContent = inputColor.value;
    cardColor.style.backgroundColor= inputColor.value;

    /*copiar seleccion de colores anteriores*/
    navigator.clipboard
    .writeText(inputColor)
    .then(() => console.log("texto copiado"))
    .catch((e) => console.log(e));
    
})