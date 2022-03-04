/*!
----------------------------------------------------------------------------------------------------
* Important! - To edit this JS, you must use the JS source file.
----------------------------------------------------------------------------------------------------
*/


 // Initialize Firebase
 (async () => {
    firebase.initializeApp({
        apiKey: "AIzaSyB1vVLCKR-AUp106ADXkfPYfWn51OYb7bM",
        authDomain: "lifestyle-carruseles.firebaseapp.com",
        projectId: "lifestyle-carruseles",
        storageBucket: "lifestyle-carruseles.appspot.com",
        messagingSenderId: "260215604241",
        appId: "1:260215604241:web:8aec1a42b5ee9eaafbddb0"
    });

const db = firebase.firestore();
const lifeStyleCollection = db.collection("lifestyle-content");


 async function getDocuments(collection){
    const documents = [];
    try{
        const snapshot = await collection.get();
        snapshot.forEach( doc => documents.push({id:doc.id,...doc.data()}));
    }catch(error){
        console.log("Error", error);
    }

    return documents;
}
var request = await getDocuments(lifeStyleCollection);

    

// Funcion para modificar funciones en Swiper carruseles normales
function load_products_swiper(index){
    var products_swiper_options = {
        slidesPerView: 2.5,
        slidesPerGroup: 2.5,
        spaceBetween: 10,
        freeMode: true,
        loop: false,
        loopFillGroupWithBlank: false,
        navigation: {
            nextEl: `#swiper-button-next0${index}`,
            prevEl: `#swiper-button-prev0${index}`,
        },
        breakpoints: {
            640: {
                slidesPerView: 4,
                slidesPerGroup: 4,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 4,
                slidesPerGroup: 4,
                spaceBetween: 10,
            },
            1024: {
                freeMode: false,
                slidesPerView: 5,
                slidesPerGroup: 5,
                spaceBetween: 10,
            },
        },
    };
    products_swiper[index] = new Swiper(`#productsSlider0${index} #swiper-carrusel0${index}`, products_swiper_options);
}
function load_products_swiperBrands(index){
    var products_swiper_options = {
        slidesPerView: 4.5,
        slidesPerGroup: 4.5,
        spaceBetween: 12,
        freeMode: true,
        loop: false,
        loopFillGroupWithBlank: false,
        navigation: {
            nextEl: `#swiper-brand-button-next0${index}`,
            prevEl: `#swiper-brand-button-prev0${index}`,
        },
        breakpoints: {
            640: {
                slidesPerView: 4.5,
                slidesPerGroup: 4.5,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 6.5,
                slidesPerGroup: 6.5,
                spaceBetween: 20,
            },
            1024: {
                freeMode: false,
                slidesPerView: 6.5,
                slidesPerGroup: 6.5,
                spaceBetween: 20,
            },
        },
    };
    products_swiper[index] = new Swiper(`#productsSlider0${index} #swiper-brand-carrusel0${index}`, products_swiper_options);
}

// Funcion para modificar funciones en Swiper carruseles normales para LifeStyle
function load_products_swiperLifeStyle(index){
    var contentElement = `
    <li class="swiper-slide lifestyle-item">
        <div class="product-item__wrapper" data-height="siblings">
            <div class="product-item justify-content-start align-items-start" style="background-color: ${request[index-1].background}">
                <figure class="product-item__figure">
                    <a href="/" class="product-item__main-image contenedor-img dl-product-link" data-id="$id" data-skuid="$idSku">
                        <img src="${request[index-1].imgUrl}" width="250" height="250" style="visibility: visible; opacity: 1;" alt="${request[index-1].altImg}">
                    </a>
                </figure>
                <div class="product-item__price px-2 text-start" data-id="103417487" style="min-height: 35px;">
                    <span class="lifeStyle-title">
                        <span class="">${request[index-1].title}</span>                           
                    </span>
                </div>
        
                <div class="product-item__caption px-2 text-start">
                    <h2 class="product-item__name fw-normal">
                        <a href="/">${request[index-1].description}</a>
                        <p class="cta-lifestyle text-start"><a href="${request[index-1].ctaUrl}">Ver más</a></span>
                    </h2>
                </div>
            </div>
        </div>
    </li>`;
    
    var products_swiper_options = {
        slidesPerView: 2.5,
        slidesPerGroup: 2.5,
        spaceBetween: 10,
        freeMode: true,
        loop: false,
        loopFillGroupWithBlank: false,
        navigation: {
            nextEl: `#swiper-lifeStyle-button-next0${index}`,
            prevEl: `#swiper-lifeStyle-button-prev0${index}`,
        },
        breakpoints: {
            640: {
                slidesPerView: 4,
                slidesPerGroup: 4,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 4,
                slidesPerGroup: 4,
                spaceBetween: 10,
            },
            1024: {
                freeMode: false,
                slidesPerView: 5,
                slidesPerGroup: 5,
                spaceBetween: 10,
            },
        },
    };
    
    // Estructura lifestyle insertada al inicio del carrusel.
    $(`#productsLifeStyleSlider0${index} #swiper-lifeStyle-carrusel0${index} ul.swiper-wrapper`).prepend(contentElement);
    
    
    //Inicializacion de Swiper
    products_swiper[index] = new Swiper(`#productsLifeStyleSlider0${index} #swiper-lifeStyle-carrusel0${index}`, products_swiper_options);
}

var products_swiper = [];
$('.helperComplement').remove();
$('.products-slider__wrapper .prateleira.vitrine > ul').addClass('swiper-wrapper');
$('.products-slider__wrapper .prateleira.vitrine > ul > li').addClass('swiper-slide');
$('.products-slider__wrapper .prateleira.vitrine').addClass('swiper');
$('.products-slider__container .product-list').addClass('re-central');

var index_temp_lifestyle = 1;
var index_temp = 1;

$('.products-slider__wrapper').each(function(index, item){
    
    if($(this).find('.prateleira.vitrine ul li').length){
        if(!$(this).find('.products-slider__container .product-list  .prateleira.vitrine').hasClass('brandCarrusel')){
            if(!$(this).find('.products-slider__container .product-list').hasClass('lifeStyleCarrusel')){
                
                $('.products-slider__wrapper .prateleira.vitrine').attr('id', `swiper-carrusel0${index_temp}`);
                $(this).find('.products-slider__container .product-list').append(`<div id="swiper-button-prev0${index_temp}" class="swiper-button-prev"><svg class="arrowCarrusel-left"><use href="#arrowCarrusel"></use></svg></div><div id="swiper-button-next0${index_temp}" class="swiper-button-next"><svg class="arrowCarrusel-right"><use href="#arrowCarrusel"></use></svg></div>`);        
                
                load_products_swiper(index_temp);
                index_temp = index_temp+1;
            }else{
                
                $('.products-slider__wrapper .prateleira.vitrine').attr('id', `swiper-lifeStyle-carrusel0${index_temp_lifestyle}`);
                $(this).find('.products-slider__container .product-list').append(`<div id="swiper-lifeStyle-button-prev0${index_temp_lifestyle}" class="swiper-button-prev"><svg class="arrowCarrusel-left"><use href="#arrowCarrusel"></use></svg></div><div id="swiper-lifeStyle-button-next0${index_temp_lifestyle}" class="swiper-button-next"><svg class="arrowCarrusel-right"><use href="#arrowCarrusel"></use></svg></div>`);        
                
                load_products_swiperLifeStyle(index_temp_lifestyle);
                index_temp_lifestyle = index_temp_lifestyle+1;
            }
        }else{
            
            $('.products-slider__wrapper .prateleira.vitrine').attr('id', `swiper-brand-carrusel0${index_temp}`);
            $(this).find('.products-slider__container .product-list').append(`<div id="swiper-brand-button-prev0${index_temp}" class="swiper-button-prev"><svg class="arrowCarrusel-left"><use href="#arrowCarrusel"></use></svg></div><div id="swiper-brand-button-next0${index_temp}" class="swiper-button-next"><svg class="arrowCarrusel-right"><use href="#arrowCarrusel"></use></svg></div>`);        
            
            load_products_swiperBrands(index_temp);
            index_temp = index_temp + 1;
            
            $(this).find('.products-slider__container').css('background', 'transparent');
            $(this).find('.products-slider__container .product-list .swiper-button-prev').css('top', '70%');
            $(this).find('.products-slider__container .product-list .swiper-button-next').css('top', '70%');
        }
        $(this).find('.prateleira.vitrine ul li').each(function(){
            if($(this).find('.product-item .product-item__flags--discounts p').length !== 0){
                $(this).find('.product-item .product-item__price .price-new').css('padding-bottom', '0');
            };
        })
    }else{
        $(this).remove();
    }
});


var banners_swiper_options = {
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 10,
    freeMode: true,
    loop:false,
    loopFillGroupWithBlank: false,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 4,
            slidesPerGroup: 4,
            spaceBetween: 15,
        },
        768: {
            slidesPerView: 4,
            slidesPerGroup: 4,
            spaceBetween: 10,
        },
        1024: {
            freeMode: false,
            slidesPerView: 5,
            slidesPerGroup: 5,
            spaceBetween: 10,
        },
    },
};
function load_banners_swiper(index){
    banners_swiper[index] = new Swiper('#banners-slider__wrapper0'+index+' .swiper', banners_swiper_options);
}
var banners_swiper = [];
function enable_disable_swiper(){
    var vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    console.log('enable_disable_swiper');
    $('.banners-slider__wrapper').each(function(index, item){
        var that = $(this),
            index_temp = index+1;
        if( !( that.hasClass('mb-blocks') && vw <= 480)){
            if(that.find('.swiper-initialized').length == 0){
                load_banners_swiper(index_temp);
            }
        }else if(that.hasClass('mb-blocks') && vw <= 480){
            if(typeof banners_swiper[index_temp] !== 'undefined'){
                banners_swiper[index_temp].destroy();
            }
        }
    });
}

var timeout_swiper;
$(function(){
    if($('.banners-slider__wrapper').length){
        $(window).on('resize orientationchange', function(){
            clearTimeout(timeout_swiper);
            timeout_swiper = setTimeout(function(){
                enable_disable_swiper()
            }, 300);
        })
        enable_disable_swiper();
    }
});


// Funcion para Cambiar Posicion de Decimales en Precio
$(document).ready(function(){
    const priceOld = document.getElementsByClassName('price-old');
    const priceNew = document.getElementsByClassName('price-new');

    function chancePrices (prices){
        for(price of prices)
            price.innerHTML = `<span class="integer">${price.innerText.split('.')[0]}</span> <span class="decimal">${price.innerText.split('.')[1]}</span>` ;
    }

    chancePrices(priceOld);
    chancePrices(priceNew);

})

})();


// Carrusel Tu Felicidad Garantizada
 $(document).ready(function(){
        const swiperTeOfrecemos = new Swiper('#teofrecemos', {
            slidesPerView: 1,
            slidesPerGroup: 1,
            freeMode: false,
            loop:false,
            loopFillGroupWithBlank: false,
            spaceBetween: 12,
            setWrapperSize: true,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
    })