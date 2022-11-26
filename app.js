/*console.log("IMPRIMAMOS PARA VER");

//propiedades se llaman despues del document. y el nombre de la propiedad que queramos acceder
console.log(document);
console.log(document.head);
console.log(document.title);*/

/*para acceder a los metodos
console.log(document.getElementById("tituloWeb"));
console.log(document.getElementById("tituloWeb").textContent);//coloca el texto fuera
console.log(document.getElementById("tituloWeb").innerHTML);//nos permite insertar al HTML*/

//para acceder al ID con querySelector se coloca un #
//para acceder a una clase con querySelector se le coloca un .
//querySelector siempre mostrara el primer elemento que coincida no importa si se repite
/*console.log(document.querySelector("#tituloWeb"));
console.log(document.querySelector(".texPrimary"));
console.log(document.querySelector("h1"));

console.log(document.querySelectorAll(".texDanger"));//para que me muestre todos los texDanger
console.log(document.querySelectorAll(".container .texDanger")); //para que me muestre solo los texDanger que estan dentro del container*/

//podemos acceder a las propiedades de los elementos del html
/*const h1 = document.getElementById("tituloWeb");
console.log(h1.className);
console.log(h1.tituloWeb);
console.log(h1.id);
console.log(h1.style);
console.log(h1.tagName);
console.log(h1.textContent);
h1.textContent = "nuevo texto desde JS";
h1.style.backgroundColor = "red"
h1.style.color = "blue";*/


//EVENTOS
// addEventListener este registra un evento a un objeto en especifico como click summit, entre otros
const h1 = document.getElementById("tituloWeb");
const boton = document.querySelector(".btn-primary");

boton.addEventListener("click", () =>{
    console.log('diste click');
    h1.textContent = "texto nuevo";
    h1.style.color = "blue";
})



