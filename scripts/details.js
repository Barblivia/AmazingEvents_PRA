import data from "./amazing.js"
import  {drawDetails} from "./functions.js";

/* function drawDetails(evento, contenedor) {
    let div = document.createElement('div');
    div.className = 'cardDetails';
    div.innerHTML = `
               <img class="class="img-fluid" src="${evento.image}" alt="${evento.name}">
                <div class="card-body">
                    <dl class="card-list">
                        <dt><h4>${evento.name}</h4></dt><dd></dd>    
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
} */
const queryString = location.search;
const params = new URLSearchParams(queryString);
const idparam = params.get('id');

const event = data.events.find(event => event.id === Number(idparam));

let detailContenedor = document.getElementById('cardDetails');

drawDetails(event, detailContenedor);

//export 
