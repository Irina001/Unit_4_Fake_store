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
  while (display.firstChild) {
    display.removeChild(display.firstChild);
  }
data.forEach((element, index) => {
  //Step 1 create the new element
const card = document.createElement("div");
const image = document.createElement('img');
const cardBody = document.createElement('div');
const cardTitle = document.createElement("h5");
let cardDesc = document.createElement('div');
const descItem = document.createElement('div');
const descHeader = document.createElement('h2');
const descButton = document.createElement('button');
const cardPrice = document.createElement('p');
const descBody = document.createElement('div');
//const cardbody = document.createElement("div");
const accordion = document.createElement("div");
const accordionItem = document.createElement("div");
const accordionHeader = document.createElement("h3");
const accordionButton = document.createElement("button");
const accordionCollapse = document.createElement("div");
const accordionBody = document.createElement("div");

const accordionItemPrice = document.createElement("div");
const accordionHeaderPrice = document.createElement("h3");
const accordionButtonPrice = document.createElement("button");
const accordionCollapsePrice = document.createElement("div");
const accordionBodyPrice = document.createElement("div");
//Step 2 edit properties of the new element
card.className = 'card';
card.style = "width:18rem";

image.className = "card-img-top";
image.src = element.image;

cardBody.className = "card-body";

cardTitle.className = "card-title";
cardTitle.innerText = element.title;

accordion.className = "accordion";
accordion.id = "accordionExample";
accordionItem.className = "accordion-item";
accordionHeader.className = "accordion-header";
accordionHeader.id = "accordion-header-one";
accordionButton.className = "accordion-button";
accordionButton.type = "button";
accordionButton.setAttribute("data-bs-toggle", "collapse");
accordionButton.setAttribute("data-bs-target", `#collapseOne${index}`);
accordionButton.setAttribute("aria-expanded", "true");
accordionButton.setAttribute("aria-controls", "collapseOne");
accordionButton.innerText = "Description";
accordionCollapse.className = "accordion-collapse collapse";
accordionCollapse.id = `collapseOne${index}`;
accordionCollapse.setAttribute("data-bs-parent", "#accordionExample");
accordionBody.className = "accordion-body";
accordionBody.innerText = element.description;

accordionItemPrice.className = "accordion-item";
accordionHeaderPrice.className = "accordion-header";
accordionHeaderPrice.id = "accordion-header-two";
accordionButtonPrice.className = "accordion-button collapsed";
accordionButtonPrice.type = "button";
accordionButtonPrice.setAttribute("data-bs-toggle", "collapse");
accordionButtonPrice.setAttribute("data-bs-target", `#collapseTwo${index}`);
accordionButtonPrice.setAttribute("aria-expanded", "true");
accordionButtonPrice.setAttribute("aria-controls", "collapseTwo");
accordionButtonPrice.innerText = "Price";
accordionCollapsePrice.id = `collapseTwo${index}`;
accordionCollapsePrice.className = "accordion-collapse collapse";
accordionCollapsePrice.setAttribute("data-bs-parent", "#accordionExample");
accordionBodyPrice.className = "accordion-body";
accordionBodyPrice.innerText = `$${element.price}`;

cardDesc.innerText = element.description;

//Step3 Add the element to the webpage
display.appendChild(card);
card.appendChild(image);
card.appendChild(cardBody);
card.appendChild(cardBody);
cardBody.appendChild(cardTitle);
cardBody.appendChild(accordion);
accordion.appendChild(accordionItem);
accordionItem.appendChild(accordionHeader);
accordionHeader.appendChild(accordionButton);
accordionItem.appendChild(accordionCollapse);
accordionCollapse.appendChild(accordionBody);

accordion.appendChild(accordionItemPrice);
accordionItemPrice.appendChild(accordionHeaderPrice);
accordionHeaderPrice.appendChild(accordionButtonPrice);
accordionItemPrice.appendChild(accordionCollapsePrice);
accordionCollapsePrice.appendChild(accordionBodyPrice);

//cardBody.appendChild(cardDesc);
//cardBody.appendChild(cardPrice);

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

mens_clothing.addEventListener("click", () =>{
  fakeStore("/category/men's clothing");
})

womens_clothing.addEventListener("click", () =>{
  fakeStore("/category/women's clothing");
})

let cart = [];

function submitToCart(item){
  cart.push(item);
}