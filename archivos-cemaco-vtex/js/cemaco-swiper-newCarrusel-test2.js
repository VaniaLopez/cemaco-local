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
const lifeStyleCollection = db.collection(`lifestyle-content-${window.location.pathname.replace("/","")}`);


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
        load_products_swiperBrands(3.5, 3.5, 7, 7, 0, 0);
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
    default:
        load_products_swiperBrands(4.5, 4.5, 6.5, 6.5, 12, 20);
}
}
//Funciones para parámetros de carrusel Marcas <--fin-->

//Funciones para parámetros de carrusel banners con imagenes <--fin-->
function bannersComponent(classBanner,value,nameContainerClass){
    function load_products_swiperBanners(viewMobile, groupMobile, spaceMobile){
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
            },
        };
        products_swiper[value] = new Swiper(`#bannerComponent`, products_swiper_options);
        
        // ELiminacion de clase  d-none ya que Swiper se encuentra inicializaco.
        
        $(nameContainerClass).removeClass("d-none");
    }

    /*Asignación de propiedades en carruseles swiper para diferenes landings*/
switch(true){
    case classBanner.hasClass('todoFerreLanding'):
        load_products_swiperBanners(2.5, 2.5, 12);
        break;
    default:
        load_products_swiperBanners(2.5, 2.5, 6.5, 12);
}
}
//Funciones para parámetros de carrusel banners <--fin-->



// Funcion para modificar funciones en Swiper carruseles normales para LifeStyle<--inicio-->
function load_products_swiperLifeStyle(index, currentElement){
    var contentElementV1 = `
    <li class="swiper-slide lifestyle-item">
        <div class="product-item__wrapper" data-height="siblings">
            <div class="product-item justify-content-start align-items-start" style="background-color: ${request[index-1].background}">
                <figure class="product-item__figure">
                    <a href="${request[index-1].ctaUrl}" class="product-item__main-image contenedor-img">
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
                        <a href="${request[index-1].ctaUrl}" style="pointer-events: none;">${request[index-1].description}</a>
                        <p class="cta-lifestyle text-start"><a href="${request[index-1].ctaUrl}">Ver más</a></span>
                    </h2>
                </div>
            </div>
        </div>
    </li>`;  
    
   var contentElementV2 = `
    <li class="swiper-slide lifestyle-item">
        <div class="product-item__wrapper" data-height="siblings">
            <div class="product-item justify-content-between align-items-start" style="background-color: ${request[index-1].background}">
                <div class="pt-3 w-100">
                    <div class="product-item__price px-2 text-start" data-id="103417487" style="min-height: 35px;">
                        <span class="lifeStyle-title text-start pb-1">
                            <p class="">${request[index-1].title}</p>                           
                        </span>
                    </div>
            
                    <div class="product-item__caption px-2 text-start">
                        <h2 class="product-item__name fw-normal">
                            <a href="${request[index-1].ctaUrl}" style="pointer-events: none;">${request[index-1].description}</a>
                            <p class="cta-lifestyle text-start"><a href="${request[index-1].ctaUrl}">Ver más</a></span>
                        </h2>
                    </div>
                </div>
                <figure class="product-item__figure">
                    <a href="${request[index-1].ctaUrl}" class="product-item__main-image contenedor-img">
                        <img src="${request[index-1].imgUrl}" width="250" height="250" style="visibility: visible; opacity: 1;" alt="${request[index-1].altImg}">
                    </a>
                </figure>
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
        minimumVelocity: 0.02,
        momentumVelocityRatio: 20,
        momentumRatio: 1,
        speed: 1000,
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
    $(`#productsLifeStyleSlider0${index} #swiper-lifeStyle-carrusel0${index} ul.swiper-wrapper`).prepend(contentElementV2);
    
    
    //Inicializacion de Swiper
    products_swiper[index] = new Swiper(`#productsLifeStyleSlider0${index} #swiper-lifeStyle-carrusel0${index}`, products_swiper_options);
    
    
    
    // ELiminacion de clase  d-none ya que Swiper se encuentra inicializaco.
    
    $(currentElement).removeClass("d-none");
    
}
// Funcion para modificar funciones en Swiper carruseles normales para LifeStyle<--fin-->

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

            }else{
                $(this).find('.prateleira.vitrine').attr('id', `swiper-lifeStyle-carrusel0${index_temp_lifestyle}`);
                $(this).find('.products-slider__container .product-list').append(`<div id="swiper-lifeStyle-button-prev0${index_temp_lifestyle}" class="swiper-button-prev"><svg class="arrowCarrusel-left"><use href="#arrowCarrusel"></use></svg></div><div id="swiper-lifeStyle-button-next0${index_temp_lifestyle}" class="swiper-button-next"><svg class="arrowCarrusel-right"><use href="#arrowCarrusel"></use></svg></div>`);        

                load_products_swiperLifeStyle(index_temp_lifestyle, this);
                index_temp_lifestyle = index_temp_lifestyle+1;
                
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

// Funcion para Cambiar Posicion de Decimales en Precio <--inicio-->
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
// Funcion para Cambiar Posicion de Decimales en Precio <--fin-->


