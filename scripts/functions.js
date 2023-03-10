


/*
export function tarjetasPasadas() {
  return events.filter(event => event.date < currentDate);
}

let lista = document.getElementById("lista")
let array =[]
let unaFuncion = (array) => {
    lista.innerHTML=""
    array.forEach(elementoArray) => {
        let listItem = document.createElement("li")
        listItem.innerText = elementoArray
        lista.appenChild(listItem)
    })
    }    
    unaFuncion(array) podría dibujar ese contenido de un array o de un array filtrado
CREA NUEVO ARRAY CON RESULTADO FILTRO USA OPERADORES LÓGICOS EN LA CONDICION
let arrayFiltrado = array.filter((elementoArray)=> elementoArray=="condicionElemento") buscador.value
let arrayFiltrado = array.filter((elementoArray)=> elementoArray.includes("condicionElemento")) includes(buscador.value)
fruta.toLowerCase().includes(buscador.value.toLowerCase()))

let personas = [{id:1, name:"Ema"}, {id:2, name:"Ama"}]
let personasFiltradas = personas.filter(persona)=> persona.id ==1))


PONER UN ID AL BOTÓN POR EJ. id="buscador" en HTML
let buscador = document.getElementById("buscador")
buscador.addEventListener("change",()) =>{
    console.log("cambió");
})

buscador.onChange(() =>{
    let arrayFiltrado =array.filter ((elementoArrey) => elementoArray == buscador.value);
})

let nombrePersonas = personasFiltradas.map ((persona)=>persona.name)
con llaves, usar return 
personas.some((persona)=>persona.name == "Valor") RETORNA BOOLEANO

let encontrado=personas.find((persona)=> persona.name =="valor")

//reduce
let numeros =[1,2,3,4]
let total = numeros.reduce(accumulador, numero)=>acumulador+numero)

let mmasFrutas = frutasNuevas.reduce((accu,fruta)=>{
    returna accucc +", "+fruta}, frutas.join(","))
    console.log(masFrutas, split(","));

//SORT
personas.sort



const cardsHome = document.getElementById('cardsHome');
let fragmento = document.createDocumentFragment();
function allEvents(events) {
    for (let event of events) {
        let div = document.createElement('div');
        div.className = 'card';
        div.style = 'width: 18rem';
        div.innerHTML = `
            <img class="card-img-top" src="${event.image}">
            <div class="card-body">
                <h5 class="card-title">${event.name}</h5>
                <p class="card-text">${event.description}</p>
                <p class="card-price">Price: $${event.price}</p>
                <a href="/pages/details.html" class="btn btn-primary">Details</a>
            </div>`;
        fragmento.appendChild(div);
    }
    cardsHome.appendChild(fragmento);
}
let cards = allEvents(data.
    */
