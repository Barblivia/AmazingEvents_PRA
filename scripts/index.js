import data from "./amazing.js"

/*import function*/

const cardsHome = document.getElementById('cardsHome');

function allEvents(events) {
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
                <a href="/pages/details.html" class="btn btn-primary">Details</a>
            </div>`;
        fragmento.appendChild(div);
        cardsHome.appendChild(fragmento);
    }
}
let cards = allEvents(data.events);