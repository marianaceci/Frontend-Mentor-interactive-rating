var rate = sessionStorage.getItem('rate');
console.log(rate);

document.querySelector('#selected-rating').innerHTML = ` ${rate} `;