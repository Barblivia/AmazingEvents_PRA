import data from "./amazing.js"

//function que filtra data de eventos pasados
export function pastEvents(data) {
    let arrayPastAux = [];
    arrayPastAux = data.events.filter(event => (Date.parse(event.date) < Date.parse(data.currentDate)));
    return arrayPastAux;
}

//function que filtra data de eventos futuros
export function upcomingEvents(data) {
    let arrayUpcomAux = [];
    arrayUpcomAux = data.events.filter(event => (Date.parse(event.date) > Date.parse(data.currentDate)));
    return arrayUpcomAux;
};

//function que dibuja las cards
export function drawCards(events, contenedor) {
    contenedor.innerHTML = ""
    let fragmento = document.createDocumentFragment();
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
                    <a href="../pages/details.html?id=${event.id}" class="btn btn-primary">Details</a>
                </div>`;
        fragmento.appendChild(div);
    }
    contenedor.appendChild(fragmento);
}

// function que selecciona las categorías

//función que crea las categorías en checkboxes
export function createChecks(array) {
    let arrayCateg = array.map(event => event.category)
    let setCateg = new Set(arrayCateg)
    let arrChecks = Array.from(setCateg)
    let checkboxes = ''
    arrChecks.forEach(category => {
        checkboxes += `<div class="form-check form-check-inline">
        <input class="form-check-input" type="checkbox" id="${category}" value="${category}">
        <label class="form-check-label" for="${category}">${category}</label>
      </div>`
    })
    checkContainer.innerHTML = checkboxes
}

//función que filtra las categorías en checkboxes
function filtrarPorPais(array){
    let checkboxes = document.querySelectorAll("input[type='checkbox']")
    console.log(checkboxes);
    let arrayChecks = Array.from(checkboxes)
    let arrayChecksChecked = arrayChecks.filter(check => check.checked)
    console.log(arrayChecksChecked);
    let arrayChecksCheckedValues = arrayChecksChecked.map(checkChecked => checkChecked.value)
    console.log(arrayChecksCheckedValues);
    let arrayFiltrado = array.filter(elemento => arrayChecksCheckedValues.includes(elemento.country))
    console.log(arrayFiltrado);
    if(arrayChecksChecked.length > 0){
        return arrayFiltrado
    }
    return array
}

//function que dibuja las cards de details
export function drawDetails(evento, contenedor) {
    let div = document.createElement('div');
    div.className = 'cardDetails';
    div.innerHTML = `
               <img class="class="img-fluid" src="${evento.image}" alt="${evento.name}">
                <div class="card-body">
                    <dl class="card-list">
                        <dt><h3>${evento.name}</h3></dt><dd></dd>    
                        <dt>Date:</dt><dd>${evento.date}</dd>
                        <dt>Description:</dt><dd>${evento.description}</dd>
                        <dt>Category:</dt><dd>${evento.category}</dd>
                        <dt>Place:</dt><dd>${evento.place}</dd>
                        <dt>Capacity:</dt><dd>${evento.capacity}</dd>
                        <dt>Assistance:</dt><dd>${evento.assistance}</dd>
                        <dt>Estimate:</dt><dd>${evento.estimate}</dd>
                        <dt>Price $:</dt><dd>${evento.price}</dd>
                    </dl>
                </div>`;
    contenedor.appendChild(div);
}
