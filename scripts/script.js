let electronics = document.getElementById('electronics');
let jewelery = document.getElementById('jewelery');
let mens_clothing = document.getElementById('mensclothing');
let womens_clothing = document.getElementById('womensclothing');

let display = document.getElementById('display');
let url = 'https://fakestoreapi.com/products';

const fakeStore = async(endpoint) => {
    let res = await fetch(url+endpoint)
    let results = await res.json()
    displayCards(results);
}

const displayCards = (data) => {
data.forEach((element) => {
const card = document.createElement("div");
card.className = 'card';
card.style = "width:18rem";
display.appendChild(card);

const cardbody = document.createElement("div");
cardbody.className = "card-body";
card.appendChild(cardbody);

const cardTitle = document.createElement("h5");
cardTitle.className = "card-title";
cardTitle.innerText = element.title;
cardbody.appendChild(cardTitle);
});
}





window.onload = (event) => {
  fakeStore('/');
}

electronics.addEventListener('click', () => {
    fakeStore('/category/electronics')
})

jewelery.addEventListener('click', ()=>{
  fakeStore('/category/jewelery')
})