var dtproducts_swiper_options = {
    slidesPerView: 2.5,
    slidesPerGroup: 2,
    spaceBetween: 12,
    loop: false,
    loopFillGroupWithBlank: false,
    navigation: {
        nextEl: "#swiper-button-prev11",
        prevEl: "#swiper-button-next11",
    },
    breakpoints: {
        640: {
            slidesPerView: 4,
            slidesPerGroup: 4,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 4,
            slidesPerGroup: 4,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 5,
            slidesPerGroup: 5,
            spaceBetween: 25,
        },
    },
};

var swiper11 = new Swiper('#productsSlider11 #swiper-carrusel11', dtproducts_swiper_options);


// Funcion para Cambiar Posicion de Decimales en Precio
const priceOld = document.getElementsByClassName('price-oldDTS');
const priceNew = document.getElementsByClassName('price-newDTS');

function chancePrices (prices){
for(price of prices)
    price.innerHTML = `<span class="integer">${price.innerText.split('.')[0]}</span><span class="decimal">${price.innerText.split('.')[1]}</span>` ;
}

chancePrices(priceOld);
chancePrices(priceNew);