let electronics = document.getElementById('electronics');
console.log(electronics);

let display = document.getElementById('display');
let url = 'https://fakestoreapi.com/products';

const fakeStore = async(endpoint) => {
    let res = await fetch(url+endpoint)
    let results = await res.json()
    console.log(results);
}

window.onload = (event) => {
  fakeStore('/');
}

electronics.addEventListener('click', () => {
    fakeStore('/category/electronics')
})