import data from "./amazing.js"
import  {drawDetails} from "./functions.js";


const queryString = location.search;
const params = new URLSearchParams(queryString);
const idparam = params.get('id');

const event = data.events.find(event => event.id === Number(idparam));

let detailContenedor = document.getElementById('cardDetails');

drawDetails(event, detailContenedor);
