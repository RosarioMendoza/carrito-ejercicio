const carrito = document.getElementById('carrito');
const template = document.getElementById('template');
const fragment = document.createDocumentFragment(''); //para evitar el reflow
const btnesBotones = document.querySelectorAll('.card .btn' );

const carritoObjeto = [];

const agregarAlCarrito = (e) => {
    console.log(e.target.dataset.fruta); //e.target nos traemos la informacion que se solicito

    //agregar al carrito
    const producto = {
        titulo: e.target.dataset.fruta, //no se usa generalmente se repite
        id: e.target.dataset.fruta,
        cantidad: 1
    }   

    const indice = carritoObjeto.findIndex((items) => items.id ===producto.id);

    console.log(indice);

    if (indice === -1){
        carritoObjeto.push(producto);
    } else{
        carritoObjeto[indice].cantidad++;
    }
    console.log(carritoObjeto);

   pintarCarrito(carritoObjeto);
};

const pintarCarrito = (array) => {
    carrito.textContent = " ", 

    array.forEach(item => {
        const clone = template.content.firstElementChild.cloneNode(true);
        clone.querySelector('.lead').textContent = item.titulo
        clone.querySelector('.badge').textContent = item.cantidad

        fragment.appendChild(clone)
    })

    carrito.appendChild(fragment);
};

btnesBotones.forEach((btn) => btn.addEventListener("click", agregarAlCarrito) )

















/*
//metodo map

const frutas =["🍓", "🍌", "🍏"];

const nuevoArray =frutas.map((item) => item); //el map no cambia el arreglo sino, que crea otro
frutas.push("🍉");
console.log(nuevoArray);

//EJEMPLOS

//DEFINO UN ARRAY
const usuarios = [
    {nombre: "Rosario", age: 38},
    {nombre: "Enmanuel", age: 32},
    {nombre: "Santiago", age: 06},
];
//llamo la funcion con map
const nombres = usuarios.map((item) => item.nombre);
console.log(nombres);

const numeros = [1,2,3,4,5,6,7,8,9,10];

const multiplicacion =numeros.map((item) => item*2);
console.log(multiplicacion);*/

/*//  METODO FILTER sirve para mostrar una seleccion de edad por ejemplo
//pero el FILTER tambien sirve para eliminar elementos
const usuarios = [
    {uid: 1, nombre: "Francisco", age: 38},
    {uid: 2, nombre: "Manuela", age: 32},
    {uid: 3, nombre: "Matheus", age: 06},
];

const mayoresTreinta = usuarios.filter((item) => item.age > 30);
console.log(mayoresTreinta);

const userFiltrado = usuarios.filter((item) => item.uid !== 2); //eliminar elemento
console.log(userFiltrado);*/

//devuelve el valor del primer elemento del array que cumple la condicion

/*const usuarios = [
    {uid: 1, nombre: "Francisco", age: 38},
    {uid: 2, nombre: "Manuela", age: 32},
    {uid: 3, nombre: "Matheus", age: 06},
];

const Manuela = usuarios.find((item) =>item.uid ===2);
console.log(Manuela);*/

/*//SOME COMPRUEBA QUE AL MENOS UN ELEMENTO DEL ARRAY EXISTA O CUMPLA CON LA CONDICION BUSCADA
const usuarios = [
    {uid: 1, nombre: "Francisco", age: 38},
    {uid: 2, nombre: "Manuela", age: 32},
    {uid: 3, nombre: "Matheus", age: 06},
];

const existe = usuarios.some((item) => item.uid ===4);
console.log(existe);*/

/*//FINDINDEX DEVUELVE EL INDICE DEL PRIMER ELEMENTO QUE CUMPLA CON LA FUNCION DE PRUEBA PROPORCIONADA


const usuarios = [
    {uid: 1, nombre: "Francisco", age: 38},
    {uid: 2, nombre: "Manuela", age: 32},
    {uid: 3, nombre: "Matheus", age: 06},
];
const indice = usuarios.findIndex((item) => item.uid ===3);
console.log(indice);


//EN CASO DE QUE NO EXISTA NOS DEVUELVE UN -1.
const indice2 = usuarios.findIndex((item) => item.uid ===6);
console.log(indice2);*/

/*//SLICE devuelve una copia de una parte del array dentro de un nuevo array empezando desde el incio hasta 
//el fin, aunque el fin no va incluido, el array principal no se modifica

const animales = ["gato", "perro", "tigre", "zebra"];

const copia = animales.slice(0,3);
console.log(copia);*/

//CONCAT se usa para unir dos o mas arrays. Este metodo no cambia los
//arrays existentes sino que devuelve un nuevo array.

/*const primerArray = ["a", "b", "c"];
const segundoArray = ["d", "e", "f"];

const tercerArray = primerArray.concat(segundoArray);

console.log(tercerArray);*/




