const carrito = document.getElementById('carrito');
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

btnesBotones.forEach((btn) => btn.addEventListener("click", agregarAlCarrito) )

