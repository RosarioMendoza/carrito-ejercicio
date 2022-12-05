/*const carrito = document.getElementById('carrito');
const template = document.getElementById('template');
const fragment = document.createDocumentFragment(''); //para evitar el reflow
const btnesBotones = document.querySelectorAll('.card .btn' );

const carritoObjeto = {};

const agregarAlCarrito = (e) => {
    console.log(e.target.dataset.fruta); //e.target nos traemos la informacion que se solicito

    //agregar al carrito
    const producto = {
        titulo: e.target.dataset.fruta, //no se usa generalmente se repite
        id: e.target.dataset.fruta,
        cantidad: 1,
    }   

    //con esto capturamos la cantidad que viene de carrito Objeto y va sumando
    if(carritoObjeto.hasOwnProperty(producto.titulo)) {//¿hasOwnProperty?
        producto.cantidad = carritoObjeto[producto.titulo].cantidad +1; 
    }
    carritoObjeto[producto.titulo] = producto; //corchetes para colocar el nombre de la propiedad

    pintarCarrito(producto);
};

//console.log(carritoObjeto);

const pintarCarrito = (producto) =>{
    carrito.textContent = " ", //para que siempre se venga vacia
    Object.values(carritoObjeto).forEach(item =>{
        const clone = template.content.firstElementChild.cloneNode(true);
        clone.querySelector('.lead').textContent = item.titulo
        clone.querySelector('.badge').textContent = item.cantidad

        fragment.appendChild(clone)
    })

    carrito.appendChild(fragment);

}
btnesBotones.forEach((btn) => btn.addEventListener("click", agregarAlCarrito) )*/

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

// el valor devuelto de la funcion reduc se asigna al acumulador, cuyo valor se recuerda en cada iteraccion de la matriz
//y en ultima instancia, se convierte en el valor final y unico resultante 

//sumar todos los elemento de un array

/*const numeros = [1,2,3,4,5];

//funciona asi, en la primera vuelta 
//acumulador vale 0 y valor actual 1 en la segunda vuelta
//acumulador 1 valor actual es 2  se sumaria 1+2 = 3
//en la tercera vuelta acumulador es 3 y valor actual 3 3+3=6
//en la cuarta vuelta acumulador es 6 y valor actual 4 6+4=10
//en la ultima vuelta acumulador es 10 y el valor actual es 5 10+5=15

const sumarTodo = numeros.reduce((acc, valorActual) => acc + valorActual);
console.log(sumarTodo);*/

//reduce
/*const arrayNumeros =[
    [0, 1],
    [2, 3],
    [4, 5],
];

const soloNumeros = arrayNumeros.reduce((acc, current)  => acc.concat(current));

console.log(soloNumeros);*/

//ARRAY PLANO
/*const arrayNumeros =[
    [0, 1],
    [2, 3],
    [4, 5],
];

const arrayPlano = [].concat(...arrayNumeros);
console.log(arrayPlano);*/

//SPLIT para pasar un string a array
const cadenaMeses = "Enero,Febrero,Marzo,Abril,Mayo,Junio,Julio,Agosto,Septiembre,Octubre,Noviembre,Diciembre";
const arrayMeses = cadenaMeses.split(",");
console.log(arrayMeses);

//si por el contrario tenemos un array y lo queremos pasar a string con Join

const nuevoTexto = arrayMeses.join(" - ");
console.log(nuevoTexto);





