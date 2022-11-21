/*!
----------------------------------------------------------------------------------------------------
* Important! - To edit this JS, you must use the JS source file.
----------------------------------------------------------------------------------------------------
*/

 // Initialize Firebase

// Funcion para modificar funciones en Swiper carruseles normales<--inicio-->
function load_products_swiper(index, currentElement){
    var products_swiper_options = {
        slidesPerView: 2.5,
        slidesPerGroup: 2.5,
        spaceBetween: 10,
        freeMode: true,
        loop: false,
        loopFillGroupWithBlank: false,
        minimumVelocity: 0.02,
        momentumVelocityRatio: 20,
        momentumRatio: 1,
        speed: 1000,
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
    products_swiper[index] = new Swiper(`#swiper-carrusel0${index}`, products_swiper_options);
   
    // ELiminacion de clase  d-none ya que Swiper se encuentra inicializaco.
    
    $(currentElement).removeClass("d-none");
}
// Funcion para modificar funciones en Swiper carruseles normales<--fin-->


//Funciones para parámetros de carrusel Marcas <--inicio-->
/*funcion para asignación de propiedades en carruseles swiper para diferenes landings*/
function nameBranding(classBrand,value,nameContainerClass){
    function load_products_swiperBrands(viewMobile, groupMobile, viewDesk, gropuDesk, spaceMobile, spaceDesk){
        let products_swiper_options = {
            slidesPerView: viewMobile,
            slidesPerGroup: groupMobile,
            spaceBetween: spaceMobile,
            freeMode: true,
            loop: false,
            loopFillGroupWithBlank: false,
            minimumVelocity: 0.02,
            momentumVelocityRatio: 20,
            momentumRatio: 1,
            speed: 1000,
            navigation: {
                nextEl: `#swiper-brand-button-next0${value}`,
                prevEl: `#swiper-brand-button-prev0${value}`,
            },
            breakpoints: {
                640: {
                    slidesPerView: viewMobile,
                    slidesPerGroup: groupMobile,
                    spaceBetween: spaceMobile,
                },
                768: {
                    slidesPerView: viewDesk,
                    slidesPerGroup: gropuDesk,
                    spaceBetween: spaceDesk,
                },
                1024: {
                    freeMode: false,
                    slidesPerView: viewDesk,
                    slidesPerGroup: gropuDesk,
                    spaceBetween: spaceDesk,
                },
            },
        };
        products_swiper[value] = new Swiper(`#swiper-brand-carrusel0${value}`, products_swiper_options);
        
        // ELiminacion de clase  d-none ya que Swiper se encuentra inicializaco.
        
        $(nameContainerClass).removeClass("d-none");
    }

    /*Asignación de propiedades en carruseles swiper para diferenes landings*/
switch(true){
    case classBrand.hasClass('pinturasLanding'):
        load_products_swiperBrands(5.5, 5, 9, 9, 0, 0);
        break;
    case classBrand.hasClass('tecnologiaLanding'):
        load_products_swiperBrands(4.5, 4.5, 7, 7, 12, 20);
        break;
    case classBrand.hasClass('autosLanding'):
        load_products_swiperBrands(3, 3, 6, 6, 12, 20);
        break;
    case classBrand.hasClass('electricosLanding'):
        load_products_swiperBrands(3.5, 3.5, 6, 6, 12, 20);
        break;
    case classBrand.hasClass('dormitorioLanding'):
        load_products_swiperBrands(3.5, 3.5, 7, 7, 12, 20);
        break;
    case classBrand.hasClass('iluminacionLanding'):
        load_products_swiperBrands(3.5, 3.5, 6, 6, 12, 20);
        break;
    case classBrand.hasClass('banosLanding'):
        load_products_swiperBrands(5.5, 5.5, 6, 6, 0, 0);
        break;   
    case classBrand.hasClass('expococinaLanding'):
        load_products_swiperBrands(5, 5, 8, 8, 0, 0);
        break;
    case classBrand.hasClass('cuidadoPersonalLanding'):
        load_products_swiperBrands(3.5, 3.5, 6, 6, 0, 0);
        break;   
    case classBrand.hasClass('organizacionLanding'):
        load_products_swiperBrands(2.5, 2.5, 6, 6, 0, 0);
        break;   
    case classBrand.hasClass('ferreteriaLanding'):
        load_products_swiperBrands(3.5, 3.5, 8, 8, 10, 10);
        break;   
    case classBrand.hasClass('todoEnFerreteriaLanding'):
        load_products_swiperBrands(3.5, 3.5, 7, 7, 20, 30);
        break;   
    case classBrand.hasClass('plomeriaLanding'):
        load_products_swiperBrands(3.5, 3.5, 6, 6, 20, 30);
        break;   
    case classBrand.hasClass('diaDelPadreLanding'):
        load_products_swiperBrands(5.5, 5.5, 7, 7, 0, 0);
        break;   
    case classBrand.hasClass('saeLanding'):
        load_products_swiperBrands(2.5, 2.5, 7, 7, 15, 50);
        break;   
    case classBrand.hasClass('lactanciaLanding'):
        load_products_swiperBrands(2.5, 2.5, 5, 5, 15, 20);
        break;
    case classBrand.hasClass('banosNewLanding'):
        load_products_swiperBrands(5.5, 5.5, 11, 11, 5, 20);
        break;    
    case classBrand.hasClass('cocinaMesaLanding'):
        load_products_swiperBrands(3.5, 3.5, 8, 8, 12, 20);
        break;    
    case classBrand.hasClass('herramientasLanding'):
        load_products_swiperBrands(4.5, 4.5, 7, 7, 12, 20);
        break;    
    case classBrand.hasClass('camaColchonesLanding'):
        load_products_swiperBrands(3.5, 3.5, 8, 8, 12, 20);
        break;    
    default:
        load_products_swiperBrands(4.5, 4.5, 6.5, 6.5, 12, 20);
    }
}
//Funciones para parámetros de carrusel Marcas <--fin-->

//Funciones para parámetros de carrusel banners con imagenes <--fin-->
function bannersComponent(classBanner,value,nameContainerClass){
    function load_products_swiperBanners(viewMobile, groupMobile, viewDesk, gropuDesk, spaceMobile, spaceDesk){
        let products_swiper_options = {
            slidesPerView: viewMobile,
            slidesPerGroup: groupMobile,
            spaceBetween: spaceMobile,
            freeMode: true,
            loop: false,
            loopFillGroupWithBlank: false,
            minimumVelocity: 0.02,
            momentumVelocityRatio: 20,
            momentumRatio: 1,
            speed: 1000,
            navigation: {
                nextEl: `#swiper-brand-button-next01`,
                prevEl: `#swiper-brand-button-prev01`,
            },
            breakpoints: {
                640: {
                    slidesPerView: viewMobile,
                    slidesPerGroup: groupMobile,
                    spaceBetween: spaceMobile,
                },
                768: {
                    slidesPerView: viewDesk,
                    slidesPerGroup: gropuDesk,
                    spaceBetween: spaceDesk,
                },
                1024: {
                    freeMode: false,
                    slidesPerView: viewDesk,
                    slidesPerGroup: gropuDesk,
                    spaceBetween: spaceDesk,
                },
            },
        };
        products_swiper[value] = new Swiper(`#bannerComponent`, products_swiper_options);
        
        // ELiminacion de clase  d-none ya que Swiper se encuentra inicializaco.
        
        $(nameContainerClass).removeClass("d-none");
    }

    /*Asignación de propiedades en carruseles swiper para diferenes landings*/
switch(true){
    case classBanner.hasClass('saeLanding'):
        load_products_swiperBanners(1.5, 1.5, 3, 3, 12, 20);
        break;
    case classBanner.hasClass('todoFerreLanding'):
        load_products_swiperBanners(2.5, 2.5, 0, 0, 12, 0);
        break;
    default:
        load_products_swiperBanners(2.5, 2.5,6.5, 6.5, 12, 20);
}
}
//Funciones para parámetros de carrusel banners <--fin-->


// Carrusel Tu Felicidad Garantizada<--inicio-->
function felicidadComponent(currentElement){
     $(document).ready(function(currentElement){
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
    
    // ELiminacion de clase  d-none ya que Swiper se encuentra inicializaco.
    
    $(currentElement).removeClass("d-none");
    
}
// Carrusel Tu Felicidad Garantizada<--fin-->


// Carrusel Importante Para Ti <--inicio-->
function importantForYou(currentElement){
    var swiper = new Swiper('#importanteparati', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    freeMode: false,
    loop:false,
    loopFillGroupWithBlank: false,
    setWrapperSize: true,
    navigation: {
        nextEl: ".swiper-button-next.importante",
        prevEl: ".swiper-button-prev.importante",
    }
    });
            
    // ELiminacion de clase  d-none ya que Swiper se encuentra inicializaco.
    
    $(currentElement).removeClass("d-none");
}

// Carrusel Importante Para Ti <--fin-->



//Lógica carruseles en general
var products_swiper = [];
$('.helperComplement').remove();
$('.products-slider__wrapper .prateleira.vitrine > ul').addClass('swiper-wrapper');
$('.products-slider__wrapper .prateleira.vitrine > ul > li').addClass('swiper-slide');
$('.products-slider__wrapper .prateleira.vitrine').addClass('swiper');
$('.products-slider__container .product-list').addClass('re-central');

let index_temp_lifestyle = 1;
let index_temp = 1;



$('.products-slider__wrapper').each(function(index, item){

    if($(this).find('.prateleira.vitrine ul li').length){
        
        if(!$(this).find('.products-slider__container .product-list  .prateleira.vitrine').hasClass('brandCarrusel')){
            if(!$(this).find('.products-slider__container .product-list').hasClass('lifeStyleCarrusel')){
                
                $(this).find('.prateleira.vitrine').attr('id', `swiper-carrusel0${index_temp}`);
                $(this).find('.products-slider__container .product-list').append(`<div id="swiper-button-prev0${index_temp}" class="swiper-button-prev"><svg class="arrowCarrusel-left"><use href="#arrowCarrusel"></use></svg></div><div id="swiper-button-next0${index_temp}" class="swiper-button-next"><svg class="arrowCarrusel-right"><use href="#arrowCarrusel"></use></svg></div>`);        
                
                load_products_swiper(index_temp, this);
                index_temp = index_temp+1;

            }
        }else{
            
            $(this).find('.prateleira.vitrine').attr('id', `swiper-brand-carrusel0${index_temp}`);
            $(this).find('.products-slider__container .product-list .marcas-container').append(`<div id="swiper-brand-button-prev0${index_temp}" class="swiper-button-prev brand"><svg class="arrowCarrusel-left"><use href="#arrowCarrusel"></use></svg></div><div id="swiper-brand-button-next0${index_temp}" class="swiper-button-next brand"><svg class="arrowCarrusel-right"><use href="#arrowCarrusel"></use></svg></div>`);
            
            const classBrand = $(this).find('.prateleira.vitrine');
            nameBranding(classBrand,index_temp,this);
            
            index_temp = index_temp + 1;
            
            $(this).find('.products-slider__container').css('background', 'transparent');
        }
        
        $(this).find('.prateleira.vitrine ul li').each(function(){
            if($(this).find('.product-item .product-item__flags--discounts p').length !== 0){
                $(this).find('.product-item .product-item__price .price-new').css('padding-bottom', '0');
            }else{
                $(this).find('.product-item .product-item__flags--discounts').css('margin', '0');
            }
        })
        
            //Función para no-full-width en carruseles
            if($(this).find('.prateleira.vitrine ul li .product-item__wrapper').hasClass('noFullWidth')){
                $(this).find('.products-slider__container').addClass('noFullWidth');
                $(this).find('.prateleira.vitrine ul li').each(function(){
                    $(this).find('.product-item__wrapper').removeClass('noFullWidth')
                })
                    
            }
    }else if($(this).find('.importante-para-ti').length){
        
        importantForYou(this)
        
        $(this).css({
            "width": "auto",
            "margin": "0"
        })
        
        $(this).find(".products-slider__container").css({
            "margin": "0",
            "left": "auto",
            "width": "auto",
            "background": "none",
            "padding-bottom": "0",
        })
        
       $(this).find(".products-slider__container .product-list").css({
            "padding": "0",
            "width": "100%"
       })
    }else if($(this).find('.nuestrapromesa').length){
        
        felicidadComponent(this)
                $(this).css({
            "width": "auto",
            "margin": "0"
        })
        $(this).find(".products-slider__container").css({
            "margin": "0",
            "left": "auto",
            "width": "auto",
            "background": "none",
            "padding-bottom": "0",
        })
        
        $(this).find(".products-slider__container .product-list").css({
            "padding": "0",
            "width": "100%"
       })
        
    }else if($(this).find('.carrusel-banners').length){
         
        const classBrand = $(this).find('#bannerComponent');
           console.log("Aqui esta ",classBrand)
           bannersComponent(classBrand,index_temp,this);
           
           index_temp = index_temp + 1;

       
       $(this).css({
           "width": "auto",
           "margin": "0"
       })
       
       $(this).find(".products-slider__container.has-banner").css({
           "margin": "0",
           "left": "auto",
           "width": "auto",
           "background": "none",
           "padding-bottom": "0",
       })
       
      $(this).find(".products-slider__container.has-banner .product-list").css({
           "padding": "0",
           "width": "100%"
      })
      
    }else{
        $(this).remove();
    }
});


//banner <--inicio-->
var banners_swiper_options = {
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 10,
    freeMode: true,
    loop:false,
    loopFillGroupWithBlank: false,
    momentumVelocityRatio: 20,
    momentumRatio: 1,
    speed: 1000,
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
//banner <--fin-->

// // Funcion para Cambiar Posicion de Decimales en Precio <--inicio-->
// $(document).ready(function(){
//     const priceOld = document.getElementsByClassName('price-old');
//     const priceNew = document.getElementsByClassName('price-new');

//     function chancePrices (prices){
//         for(price of prices)
//             price.innerHTML = `<span class="integer">${price.innerText.split('.')[0]}</span> <span class="decimal">${price.innerText.split('.')[1]}</span>` ;
//     }

//     chancePrices(priceOld);
//     chancePrices(priceNew);

// })
// // Funcion para Cambiar Posicion de Decimales en Precio <--fin-->


