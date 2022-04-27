let price = document.getElementById('price');
let subTotal = document.getElementById('sub-total');
let minus = document.getElementById('minus');
let plus = document.getElementById('plus');

minus.addEventListener('click', function calc() {
    console.log('minus clicked');
})
plus.addEventListener('click', function calc() {
    console.log('plus clicked');
    let prices = parseFloat(price.innerText);
    console.log(prices);
    return subTotal.innerText = prices * 2;
})