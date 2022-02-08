/*!
----------------------------------------------------------------------------------------------------
* Important! - To edit this JS, you must use the JS source file.
----------------------------------------------------------------------------------------------------
*/

/*
$('#productsSlider01 .prateleira > ul').slick('unslick');
$('#productsSlider02 .prateleira > ul').slick('unslick');
*/

function load_products_swiper(index){
    var products_swiper_options = {
        slidesPerView: 2.5,
        slidesPerGroup: 2.5,
        spaceBetween: 12,
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
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 4,
                slidesPerGroup: 4,
                spaceBetween: 20,
            },
            1024: {
                freeMode: false,
                slidesPerView: 5,
                slidesPerGroup: 5,
                spaceBetween: 20,
            },
        },
    };
    products_swiper[index] = new Swiper(`#productsSlider0${index} #swiper-carrusel0${index}`, products_swiper_options);
}

var products_swiper = [];
$('.helperComplement').remove();
$('.products-slider__wrapper .prateleira.vitrine > ul').addClass('swiper-wrapper');
$('.products-slider__wrapper .prateleira.vitrine > ul > li').addClass('swiper-slide');
$('.products-slider__wrapper .prateleira.vitrine').addClass('swiper');
$('.products-slider__container .product-list').addClass('re-central');
$('.products-slider__wrapper').each(function(index, item){
    var index_temp = index+1;
    if($(this).find('.prateleira.vitrine ul li').length){
        $('.products-slider__wrapper .prateleira.vitrine').attr('id', `swiper-carrusel0${index_temp}`);
        $(this).find('.products-slider__container .product-list').append(`<div id="swiper-button-prev0${index_temp}" class="swiper-button-prev"><svg class="arrowCarrusel-left"><use href="#arrowCarrusel"></use></svg></div><div id="swiper-button-next0${index_temp}" class="swiper-button-next"><svg class="arrowCarrusel-right"><use href="#arrowCarrusel"></use></svg></div>`);
        load_products_swiper(index_temp);
        if(!$(this).find('.price-new.price-promo')){
            $(this).find('.product-item__caption').css("padding-bottom","1.1em")
        }
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
