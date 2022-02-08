/*!
----------------------------------------------------------------------------------------------------
* Important! - To edit this JS, you must use the JS source file.
----------------------------------------------------------------------------------------------------
*/

/*
$('#productsSlider01 .prateleira > ul').slick('unslick');
$('#productsSlider02 .prateleira > ul').slick('unslick');
*/
function repeat(){
    if($(".products-slider__wrapper .prateleira.vitrine > ul") == null){
        setTimeout(() => {
            repeat()
            console.log("Test Set Time Out");
        }, 2000);
    }else {
        $("<div class='row'><div class='d-none d-md-block col-3 d-flex align-items-center pt-3 p-4'><img src='https://sfo2.digitaloceanspaces.com/cemacogt/cemaco/2021/ciberdias/home/carrusel_portada_ciberdias_desk_u.png' style='max-width:225px'/></div><div class='col-12 col-md-9' id='first-column'></div></div>").insertBefore(".products-slider__wrapper #productsSpecialSlider01 .prateleira.vitrine > ul");
        $('.products-slider__wrapper #productsSpecialSlider01 .prateleira.vitrine > ul').appendTo('#first-column');
        
    }
}

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
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 10,
        loop: true,
        loopFillGroupWithBlank: false,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            640: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 4,
                slidesPerGroup: 4,
                spaceBetween: 15,
            },
            1024: {
                slidesPerView: 4,
                slidesPerGroup: 4,
                spaceBetween: 20,
            },
        },
    };
    if ($("#productsSlider0"+ index) !== null) {
        products_swiper[index] = new Swiper('#productsSlider0'+index+' .prateleira.vitrine', products_swiper_options);
    }

    products_special_swiper[1] = new Swiper('#productsSpecialSlider0'+1+' .prateleira.vitrine .col-12.col-md-9', products_swiper_options);

}

var products_swiper = [];
var products_special_swiper = [];
$('.helperComplement').remove();
repeat();
// clase Swiper para carruseles especiales ciberdias
$('.products-slider__wrapper #productsSpecialSlider01 .prateleira .row .col-12.col-md-9 > ul').addClass('swiper-wrapper');
$('.products-slider__wrapper #productsSpecialSlider01 .prateleira .row .col-12.col-md-9 > ul > li').addClass('swiper-slide');
$('.products-slider__wrapper #productsSpecialSlider01 .prateleira .row .col-12.col-md-9').addClass('swiper');

// clase Swiper para carruseles normales
$('.products-slider__wrapper #productsSlider02 .prateleira.vitrine > ul').addClass('swiper-wrapper');
$('.products-slider__wrapper #productsSlider02 .prateleira.vitrine > ul > li').addClass('swiper-slide');

$('.products-slider__wrapper #productsSlider02 .prateleira.vitrine').addClass('swiper');


$('.products-slider__wrapper').each(function(index, item){
    var index_temp = index+1;
    if($(this).find('.prateleira.vitrine ul li').length){
        $(this).find('.products-slider__container .swiper').append('<div class="swiper-button-next"></div><div class="swiper-button-prev"></div>');
        setTimeout(() => {
            load_products_swiper(index_temp);
        }, 3000);
    }else{
        $(this).remove();
    }

});


var banners_swiper_options = {
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 10,
    freeMode: true,
    loop: true,
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
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 15,
        },
        768: {
            slidesPerView: 4,
            slidesPerGroup: 4,
            spaceBetween: 20,
        },
        1024: {
            freeMode: false,
            slidesPerView: 4,
            slidesPerGroup: 4,
            spaceBetween: 25,
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