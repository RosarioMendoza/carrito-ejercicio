const lista = document.querySelector('#lista');
const li = document.createElement('li');
li.textContent = "elemento desde JS";
console.log(li);
const arrayPaises = ["Perú", "Bolivia", "Colombia"];
const fragment = document.createDocumentFragment();

/*arrayPaises.forEach((pais) => {
    const li = document.createElement("li");
    li.textContent = pais;
    lista.appendChild(li);
}
);*/




/*//AHORA CON INNERHTML
arrayPaises.forEach((pais) => {
    lista.innerHTML += `<li>${pais}</>`; // no se puede usar siempre por el reflow pero en proyectos pequeños si
})*/


/*//hacerlo con FRAGMEN (es como un espacio de memoria donde añadimos estructuras)
const fragment = document.createDocumentFragment();

arrayPaises.forEach((pais) => {
    const li = document.createElement("li");
    li.textContent = pais;
    fragment.appendChild(li);
});

lista.appendChild(fragment);
*/

/*// se puede ordenar en manera de ultimo a primero
const fragment = document.createDocumentFragment();
arrayPaises.forEach((pais) =>{
    const newNode = document.createElement('li');
    newNode.textContent = pais;
    const referenceNode = fragment.firstChild;
    fragment.insertBefore(newNode, referenceNode);
});

    lista.appendChild(fragment);*/

    /*//UNA MANERA DE HACERLO 
    arrayPaises.forEach((paises) =>{
        const li = document.createElement('li');
        li.className ='list';

        const b = document.createElement('b');
        b.textContent = "pais:  ";

        const span = document.createElement('span')
        span.className ='text-primary';
        span.textContent = paises;

        li.appendChild(b);
        li.appendChild(span);
        fragment.appendChild(li);


    });
    

    lista.appendChild(fragment);*/
   
   /* let template = "";

    arrayPaises.forEach(paises =>{
        template += `<li class="list">
        <b>Pais:</b>
        <span class="text-primary">${paises}</span>
    </li>`;
    });
    lista.innerHTML = template;*/

