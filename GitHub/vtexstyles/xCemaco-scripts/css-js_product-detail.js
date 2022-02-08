/*--------------------------------------------------------------------------------*/
// Product Detail
/*--------------------------------------------------------------------------------*/
/*!
  * General Script - CEMACO GT
*/
var colorCurrent = '',
    colorNew = ' ',
    is_video=false,
    low_stock=5,
    is_only_in_store=false;
if($('.value-field.Video').length){
    is_video=true;
    var video360=$('.value-field.Video').html();
}
if($('.value-field.Tproducto').length && $('.value-field.Tproducto').html().indexOf('tienda')!=-1){
    is_only_in_store=true;
}

$(function(){
    var pid=parseInt($('#___rc-p-id').val());
    var saleschannel=parseInt(jssalesChannel);
    if(!is_only_in_store){
        //Load prices
        $('.product-detail__price').price(pid);
        //Load skus selector
        $('.sku-selector-container-0').skuSelector(skuJson_0, {selectSingleDimensionsOnOpening: 'true'});
        //Load buttons
        $('.buy-in-page-button[productindex=0]').buyButton(pid, {salesChannel: saleschannel}, {redirect: false, addMessage: false, hideUnavailable: true});
        $('.buy-button-ref').buyButton(pid, {salesChannel: saleschannel}, {});
        $('a.buy-in-page-button').each(function(){
            $(this).off('click').on('click', addProductToCartProduct);
        });
    }else{
        $('body').addClass('is_only_in_store');
        //Load skus selector
        $('.sku-selector-container-0').skuSelector(skuJson_0, {selectSingleDimensionsOnOpening: 'true'});
        $('.product-detail__sku-selection').attr('style', 'display:block !important;');
    }

    // Load imagenes AJAX
    productDetail_loadImages();
    // Change Product Prices Format
    change_product_prices();
    // getMeasures();
    // Select default SKU
    // defaultSize();
    //Load stock
    // load_stock();
    lowStockElements();
    load_current_color();
    load_saved_percent();
    load_caracteristicas_by_only_sku();

    $('.product-detail__specifications h4').on('click', function(e){
        e.preventDefault();
        $(this).next().stop().slideToggle(292);
        $(this).toggleClass('active');
    });

    // Dropdown QTY
    $('.product-detail__quantity-current').on('click',function(){
        $('.product-detail__quantity-dropdown').toggleClass('active');
    });
    $('.product-detail__quantity-option').on('click',function(){
        var qty=$(this).html();
        $('.product-detail__quantity-dropdown').removeClass('active');
        $('.product-detail__quantity-current').html(qty);
        $('.product-detail__quantity-input').val(qty);
    });

    // On SKU changed
    $(window).on('skuSelected.vtex', function(e,product_id,sku){
        colorNew = $('.select.skuList.item-dimension-Color').length
                ? $('.select.skuList.item-dimension-Color input:checked').attr('data-value')
                : $('.select.skuList.item-dimension-Descripciondecolor input:checked').attr('data-value');

        console.log(`%c New color: ${colorNew}`, 'color: darkturquoise')
        loadDescriptionBySKU(sku.sku)
        productDetail_loadImages(sku.sku, '1');
        if ((colorCurrent != colorNew) && $('.select.skuList.item-dimension-Color').length){
            setTimeout(function(){
                lowStockAlert($('.sku-selector-container .item-dimension-Talla .low-stock'), $('.sku-selector-container .item-dimension-Talla .product-detail__last-pieces'))
            },1000);
            colorCurrent = colorNew;
        }
        change_product_prices();
        load_saved_percent(sku);
        load_stock(sku);
        setTimeout(function(){
            load_current_size();
        },300);
        $('.product-detail__info').removeClass('select-size');
    });
    $(window).on('skuUnselected.vtex', function(){
        change_product_prices();
        // load_stock();
    });
})

function load_caracteristicas_by_only_sku(){
    var btn_href = $('.buy-in-page-button').attr('href');
    if(btn_href.indexOf('sku') != -1){
        var skuId = btn_href.replace('/checkout/cart/add?sku=','');
            skuId = skuId.substring(0, skuId.indexOf("&"));
        $('.DescriptionBySKU[id="'+skuId+'"]').show();
        $('.Descripcion-amplia .DescriptionByProduct').hide();
    }
}

function load_saved_percent(sku){
    // console.log(sku);
    if($('.valor-de.price-list-price').is(':visible')){
        $('.product-detail__price').addClass('discount').addClass('is-shown');
    }
    if(typeof sku !== 'undefined')
    if(sku.listPrice!=0 && sku.listPrice>sku.bestPrice){
        $('.product-detail__price').addClass('discount');
        var percent=100-Math.round((sku.bestPrice*100)/sku.listPrice);
        $('.valor-por.price-best-price .skuBestPrice').append('<span class="discount">Ahorro de '+percent+'%</span>');
    }else{
        $('.product-detail__price').removeClass('discount');
    }
}

function load_fixed_info(direction){
    var height_breadcrumb=$('.bread-crumbs').height();
    var height_header=$('.site-header').height();

    var scroll_top=$(window).scrollTop();
    var height_window=$(window).innerHeight();
    var height_image=$('.product-detail__image-container').outerHeight();
    var tmp4=height_image+height_breadcrumb+height_header;
    var tmp5=(tmp4-scroll_top-height_window)*-1;

    var height_fiexed=$('.product-detail__info--bottom-fixed').outerHeight();
    var tmp6=height_fiexed+height_header;
    var tmp7=height_window-tmp6;

    var tmp8=height_image-height_fiexed;

    // console.log(direction);
    if(direction=='resize'){
        var fixed_width=$('.product-detail__info--bottom').width();
        $('.product-detail__info--bottom-fixed')
            .css({'width': fixed_width+'px'});
    }
    if(scroll_top>height_breadcrumb && (direction=='down' && $('body.sroll-relative').length==0  && $('body.fixed').length==0)){
        $('body').addClass('fixed');
        var fixed_width=$('.product-detail__info--bottom').width();
        $('.product-detail__info--bottom-fixed').removeAttr('style');
        $('.product-detail__info--bottom-fixed')
            .css({'width': fixed_width+'px', 'top': height_header+'px', 'padding-top': '1em'});
    }else if(tmp5>=tmp7 && (direction=='down' && $('body.fixed').length)){
        $('body').addClass('sroll-relative');
        $('body').removeClass('fixed');
        $('.product-detail__info--bottom-fixed').removeAttr('style');
        $('.product-detail__info--bottom-fixed')
            .css({'margin-top': tmp8+'px'});
    }else if(direction=='up' && $('body.sroll-relative').length && (scroll_top<=tmp8)){
        $('body').addClass('fixed');
        $('body').removeClass('sroll-relative');
        var fixed_width=$('.product-detail__info--bottom').width();
        $('.product-detail__info--bottom-fixed').removeAttr('style');
        $('.product-detail__info--bottom-fixed')
            .css({'width': fixed_width+'px', 'top': height_header+'px', 'padding-top': '1em'});
    }else if(scroll_top<=height_breadcrumb && direction=='up'){
        $('body').removeClass('fixed');
        $('body').removeClass('sroll-relative');
        $('.product-detail__info--bottom-fixed').removeAttr('style');
    }
}

function load_stock(sku){
    var stock=sku.availablequantity;
    if(stock <= low_stock){
        $('.product-detail__last-pieces').addClass('is-visible').html('Solo '+stock+' en stock');
    }else{
        $('.product-detail__last-pieces').addClass('is-visible').html('En stock');
    }
}

function load_current_color(){
    var current_url=window.location.href.toLowerCase();
    $('.product-detail__color-link').each(function(){
        var this_href=$(this).attr('href');
        if(current_url.indexOf(this_href)!=-1){
            $(this).parent().addClass('active');
            var color=$(this).find('ul li').html();
            $('.product-detail__color-variations .prateleira>h2').append('<span class="product-detail__color-name">'+color+'</span>');
        }
    });
}

function load_current_size(){
    var size=$('.dimension-Talla.sku-picked').text();
    if($('.product-detail__size-name').length){
        $('.product-detail__size-name').html(size);
    }else{
        $('.sku-selector-container li.specification').append('<span class="product-detail__size-name">'+size+'</span>');
    }
}

/*--------------------*/
// Gallery
/*--------------------*/
var slider_img_principal	= '',
    indexLoadImages			= 0,
    skuid					= $('#___rc-p-sku-ids').val().split(',')[0],
    imgThumbnails			= '-90-90',
    imgGallery				= '-650-650',
    imgSliderZoom			= '-1100-1100',
    imgFullWindowGallery    = '-850-850',
    imgFullWindowThumbnails = '-100-100',
    imgFullWindowZoom       = '-1500-1500'

function loadVideo(){
    if($('.value-field.Video').length){
        let $_this		= $('.value-field.Video'),
            $_videoURL	= $_this.text()

        var vidpdp = 'https://www.youtube.com/embed/' + $('.value-field.ID-Video-1').text() + '?rel=0';

        $('.value-field.ID-Video-1').parents('tr').hide();

        if ($('.product-detail__thumbnails').hasClass('slick-initialized')){
            $('.product-detail__thumbnails').slick('slickAdd', '<li><a href="#" class="VideoIMG"><img src="/arquivos/videoIMG.png" ></img></a></li>', 0);
        }
        else{
            $('.thumbs').append('<li><a href="#" class="VideoIMG"><img src="/arquivos/videoIMG.png" ></img></a></li>');
        }
        $('.j-image .thumbs li a').click(function(e){
            if($(this).hasClass('VideoIMG')){
                e.preventDefault();
                $('.j-image #include div').html('<iframe id="videoproduct-detail" src="' + vidpdp + '" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen="allowfullscreen"></iframe>');
            }else{
                $('#videoproduct-detail').hide();
            }
        });
    }
}
function productDetail_loadImages(skuVariation, first_label){
    if(typeof first_label === 'undefined'){
        var first_label=false;
    }
    if (skuVariation != undefined){
        skuid = skuVariation;
        if($('.product-detail__gallery').hasClass('slick-initialized') && $('.product-detail__thumbnails').hasClass('slick-initialized')){
            $('.product-detail__gallery').slick('unslick');
            $('.product-detail__thumbnails').slick('unslick');
        }
    }
    $.ajax({
        url: '/produto/sku/' + skuid,
        success: function(data){
            // console.log(data)
            var is_configurable=false;
            if($('#___rc-p-sku-ids').val().indexOf(',')!=-1){
                is_configurable=true;
            }
            console.log('////////////////////////////////////////////////////////////////////////////////////');
            console.log('is_configurable', is_configurable);
            console.log('first_label', first_label);
            console.log('////////////////////////////////////////////////////////////////////////////////////');
            var imgsArr = [];
            var mainImgsArr = [];
            $.each(data[0].Images, function(index,img){
                var elementImage = img[0].Path.replace('-292-292',imgThumbnails);
                var elementPlace = parseInt(elementImage.substring(elementImage.indexOf("_") + 1, elementImage.lastIndexOf(".")));

                var mainImage = img[0].Path.replace('-292-292',imgGallery);
                var mainPlace = parseInt(mainImage.substring(mainImage.indexOf("_") + 1, mainImage.lastIndexOf(".")));

                imgsArr.push({
                    'idx': index,
                    'img': elementImage,
                    'place': elementPlace
                });
                mainImgsArr.push({
                    'idx': index,
                    'img': mainImage,
                    'place': mainPlace,
                    'IsMain': img[0].IsMain,
                    'Name': img[0].Name,
                });
            });
            var uniqueArray = imgsArr.filter((v,i,a)=>a.findIndex(t=>(t.img === v.img && t.place===v.place))===i);
            var orderedArray = uniqueArray.sort((a, b) => (a.place > b.place) ? 1 : -1);
            var uniqueMainArray = mainImgsArr.filter((v,i,a)=>a.findIndex(t=>(t.img === v.img && t.place===v.place))===i);
            var orderedMainArray = uniqueMainArray.sort((a, b) => (a.place > b.place) ? 1 : -1);
            var imagesHTML = ''+
            '<div class="images product-detail__image vertical">'+
                '<div class="product-detail__gallery-wrapper">'+
                    '<ul class="product-detail__gallery">';
                        var imgs='';
                        var img_main='';
                        var first_img_index=-1;
                        $.each(orderedMainArray, function(index,img){
                            if(is_configurable){
                                console.log('Es configurable');
                                if(img.IsMain && first_label == false){
                                    first_img_index=index;
                                }else if(img.Name == first_label){
                                    first_img_index=index;
                                }
                            }else{
                                console.log('No es configurable');
                                if(img.IsMain){
                                    first_img_index=index;
                                }
                                console.log('Valor no es config first_img_index: ',first_img_index);
                            }
                            imgs += '<li class="product-detail__gallery-item"><img src="'+img.img.replace('-292-292',imgGallery)+'" class="product-detail__gallery-picture" data-index="'+img.idx+'"></li>';
                        });
                        if(first_img_index==-1 && first_label){
                            imgs=img_main+imgs;
                        }
                        if(first_img_index==-1){ first_img_index=0; }
                        imagesHTML+=imgs;
                        if(is_video){
                            imagesHTML+='<li class="product-detail__gallery-item video"><iframe src="https://player.vimeo.com/video/'+video360+'?autoplay=0&color=ffffff&muted=0&loop=1&autopause=0&controls=1" allow="autoplay" frameborder="0" width="100%" height="100%"></iframe></li>';
                        }
                        if(first_img_index > data[0].Images[0].length){
                            first_img_index = data[0].Images[0].length -1
                        }
            imagesHTML+=''+
                    '</ul>'+

                    '<figure class="product-detail__zoom-wrapper easyzoom easyzoom--overlay">'+
                        '<a href="'+data[0].Images[0][first_img_index].Path.replace('-292-292',imgSliderZoom)+'">'+
                            '<img src="'+data[0].Images[0][first_img_index].Path.replace('-292-292',imgSliderZoom)+'" class="product-detail__zoom-image">'+
                        '</a>'+
                    '</figure>'+
                '</div>';

            if ( !$('body').hasClass('product--landscape') )
                var items = data[0].Images.length < 11 ? 'has-less-items' : '';
            else
                var items = data[0].Images.length < 5 ? 'has-less-items' : '';

                imagesHTML+=''+
                '<div class="product-detail__thumbnails-wrapper">'+
                    '<ul class="product-detail__thumbnails '+items+'">';
                        imgs='';
                        img_main='';
                        $.each(orderedArray, function(index,image){
                            imgs+='<li data-index="'+image.idx+'" class="product-detail__thumbnail">'+
                                    '<img src="'+image.img.replace('-292-292',imgThumbnails)+'" class="product-detail__thumbnail-picture">'+
                                '</li>';
                        });
                        imagesHTML+=imgs;
                        if(is_video){
                            imagesHTML+=''+
                            '<li data-index="0" class="product-detail__thumbnail video360">'+
                                '<img src="'+data[0].Images[0][0].Path.replace('-292-292',imgThumbnails)+'" class="product-detail__thumbnail-picture">'+
                            '</li>';
                        }
            imagesHTML+=''+
                    '</ul>'+
                '</div>';

            imagesHTML+=''+
                `<div id="superZoomTrigger" class="super-zoom__trigger">
                    <svg class="svg-icon-search">
                        <use href="#svg-icon-search"></use>
                    </svg>
                </div>`+
                /* `<div class="rrss__trigger">
                    <a href="/" class="addthis_button_facebook at300b" title="Facebook">
                        <svg class="svg-icon-share">
                            <use href="#svg-icon-share"></use>
                        </svg>
                    </a>
                </div>`+ */
            '</div>';

            $('.product-detail__image-container').html(imagesHTML);
        },
        complete: function(){
            setTimeout(function(){
                productDetail_sliderSlick()
                // loadVideo()
            },292)
        },
        error: function(){
            if(indexLoadImages <= 3){
                console.log(indexLoadImages)
                productDetail__loadImages()
            }
            indexLoadImages++;
        }
    });
}
function productDetail_sliderSlick(){
    $('.product-detail__gallery').not('.slick-initialized').slick({
        autoplay: false,
        autoplaySpeed: 7777,
        arrows: false,
        asNavFor: '.product-detail__image .product-detail__thumbnails',
        prevArrow: "<button data-role='none' class='slick-arrow slick-prev'><svg class='svg-icon-chevron-left'><use xlink:href='#svg-icon-chevron-left'></use></svg></button>",
        nextArrow: "<button data-role='none' class='slick-arrow slick-next'><svg class='svg-icon-chevron-right'><use xlink:href='#svg-icon-chevron-right'></use></svg></button>",
        cssEase: 'linear',
        centerMode: false,
        customPaging: function (slider, i) {
            return '<button class="tabTrigger">' + $('.product-detail__thumbnails li:nth-child(' + (i + 1) + ')').html() + '</button>';
        },
        fade: false,
        infinite: false,
        slide: 'li',
        slidesToShow: 1,
        speed: 292,
    })
    .on('afterChange', function(event, slick, currentSlide){
        var slidesTotal = $('.product-detail__gallery .slick-track li').length - 1
        if(is_video){
            if(slidesTotal == currentSlide){
                $('body').addClass('video');
                changeAutoplay('play')
            }else{
                $('body').removeClass('video');
                changeAutoplay('pause')
            }
        }
        var productZoomWrapper 		= $('.product-detail__zoom-wrapper'),
            productThumbnails 		= $('.product-detail__thumbnails')
            slideActive				= productThumbnails.find('.slick-current');

        if( slideActive.hasClass('product-detail__thumbnail--video') ){
            productZoomWrapper.addClass('has-video-active')
        }
        else{
            productZoomWrapper.removeClass('has-video-active')
        }
        productDetail_sliderZoom()
    });
    //
    setTimeout(function(){
        $('.product-detail__thumbnails').not('.slick-initialized').slick({
            arrows: !0,
            asNavFor: '.product-detail__image .product-detail__gallery',
            prevArrow: "<button data-role='none' class='slick-arrow slick-prev'><svg class='svg-icon-chevron-left'><use xlink:href='#svg-icon-chevron-left'></use></svg></button>",
            nextArrow: "<button data-role='none' class='slick-arrow slick-next'><svg class='svg-icon-chevron-right'><use xlink:href='#svg-icon-chevron-right'></use></svg></button>",
            centerMode: false,
            focusOnSelect: true,
            infinite: false,
            mobileFirst: true,
            slidesToShow: $('body').hasClass('product--square') ? 3 : 3,
            vertical: false,
            // slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 767,
                    settings: {
                        prevArrow: '<button data-role="none" class="slick-arrow slick-prev"><svg class="svg-icon"><use xlink:href="#svg-icon-chevron-up"></use></svg></button>',
                        nextArrow: '<button data-role="none" class="slick-arrow slick-next"><svg class="svg-icon"><use xlink:href="#svg-icon-chevron-down"></use></svg></button>',
                        slidesToShow: $('body').hasClass('product--square') ? 3 : 3,
                        centerMode: false,
                        vertical: true,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: $('body').hasClass('product--square') ? 3 : 3,
                        centerMode: false,
                    }
                }
            ],
        });
        setTimeout(function(){
            productDetail_sliderZoom();
        }, 200);
    },500);
    if(is_video){
        // $('body').addClass('video');
        // document.getElementById('product-detail-video').play();
        // 640X480
        var video_width=$('.product-detail__gallery-wrapper').width();
        var video_ratio = 480 / 640;
        var video_height = video_width * video_ratio;
        $('.video iframe').attr('height', video_height);
    }
}
function productDetail_sliderZoom(){
    var $easyzoom = $('.product-detail__zoom-wrapper').easyZoom(), // Instantiate EasyZoom instances
        productZoom = $easyzoom.data('easyZoom'); // Setup thumbnails example

    console.log($('.product-detail__thumbnails').length, $('.product-detail__thumbnails .slick-current').length, $('.product-detail__thumbnails .slick-current img').length);
    var productThumbnails 	= $('.product-detail__thumbnails'),
            slideActive			= productThumbnails.find('.slick-current'),
            slideActiveImg		= slideActive.find('img'),
            standardSrc 		= slideActiveImg.attr('src').replace(imgThumbnails, imgSliderZoom),
            zoomSrc				= slideActiveImg.attr('src').replace(imgThumbnails, imgSliderZoom);

    // Use EasyZoom's `swap` method
    productZoom.swap(standardSrc, zoomSrc);
}
function changeAutoplay(action) {
    var iframe = $('.product-detail__gallery-item.video iframe').attr('src');
    var iframe_src_array = iframe.split('?')
    var iframe_baseurl = iframe_src_array[0];
    var iframe_params = iframe_src_array[1].split('&')
    var iframe_newParams = [];

    for (var index = 0; index < iframe_params.length; index++) {
        if( iframe_params[index].includes('autoplay') ){
            if(action == 'pause'){
                iframe_newParams.push('autoplay=0')
            }
            if(action == 'play'){
                iframe_newParams.push('autoplay=1')
            }
        } else {
            iframe_newParams.push( iframe_params[index] )
        }
    }
    
    var newSrc = iframe_baseurl + '?' + iframe_newParams.join('&');
    $('.product-detail__gallery-item.video iframe').attr('src', newSrc);
}

/*--------------------*/
// Super Zoom
/*--------------------*/
function productDetail_superZoomImages(){
	$.ajax({
		url: '/produto/sku/' + skuid,
		success: function(data){
			var imagesSuper = ''+
				'<div id="superZoom" class="super-zoom">'+
					'<figure class="super-zoom__current-image easyzoom easyzoom--overlay">'+
						'<a href="'+data[0].Images[0][0].Path.replace('-292-292',imgFullWindowZoom)+'">'+
							'<img src="'+data[0].Images[0][0].Path.replace('-292-292',imgFullWindowGallery)+'">'+
						'</a>'+
					'</figure>'+

					'<!-- Thumbnails. Begin -->'+
					'<div class="super-zoom__thumbnails-wrapper">'+
						'<ul class="super-zoom__thumbnails">';
							$.each(data[0].Images, function(index,img){
								imagesSuper+=''+
								'<li class="super-zoom__thumbnail" data-index="'+index+'">'+
									'<a href="'+img[0].Path.replace('-292-292',imgFullWindowZoom)+'" data-standard="'+img[0].Path.replace('-292-292',imgFullWindowGallery)+'">'+
										'<img src="'+img[0].Path.replace('-292-292',imgFullWindowThumbnails)+'">'+
									'</a>'+
								'</li>'
							});
			imagesSuper+=''+
						'</ul>'+
					'</div>'+
					'<!-- Thumbnails. End -->';

			imagesSuper+=''+
					`<div id="superZoomPrev" class="super-zoom__control">
						<svg class="svg-icon-arrow-left"><use xlink:href="#svg-icon-arrow-left"></use></svg>
					</div>
					<div id="superZoomNext" class="super-zoom__control">
						<svg class="svg-icon-arrow-right"><use xlink:href="#svg-icon-arrow-right"></use></svg>
					</div>
					<div id="superZoomClose" class="super-zoom__control">
						<svg class="svg-icon-close"><use xlink:href="#svg-icon-close"></use></svg>
					</div>`+
				'</div>';

			$('#superZoomWrapper').html(imagesSuper);
			productDetail_superZoomSlider();
		}
	});
}
function productDetail_superZoomSlider(){
	var $easyzoom = $('.super-zoom__current-image').easyZoom(), // Instantiate EasyZoom instances
		productSuperZoom = $easyzoom.data('easyZoom'); // Setup thumbnails example
	$('.super-zoom__thumbnails').on('click', 'a', function(e) {
		var $this = $(this);
		e.preventDefault();
		// Use EasyZoom's `swap` method
		productSuperZoom.swap($this.data('standard'), $this.attr('href'));
	});

	(function(){
		var thumbnailsList = $('.super-zoom__thumbnails');

		$('.super-zoom__thumbnail:first-child', thumbnailsList).addClass('is-active');

		thumbnailsList.on('click','li a', function(){
			var imgCurrent = $(this).attr('data-standard');

			$(this).parent().siblings().removeClass('is-active');
			$(this).parent().addClass('is-active');
		});

		// Prev | Next | Close
		var prevButton = $('#superZoomPrev'),
			nextButton = $('#superZoomNext'),
			closeButton = $('#superZoomClose');

		prevButton.on('click', function(){
			var index = parseInt($('.super-zoom__thumbnails .is-active').attr('data-index'));

			if(index==0){
				var new_index=$('.super-zoom__thumbnail:last-child').attr('data-index');
			}
			else{
				var new_index=index-1;
			}
			$('.super-zoom__thumbnails .is-active').removeClass('is-active');
			$('.super-zoom__thumbnail[data-index="'+new_index+'"]').addClass('is-active');
			var imgCurrent=$('.super-zoom__thumbnail[data-index="'+new_index+'"]').find('a').attr('data-standard');
			$('.super-zoom__current-image').find('img').attr('src', imgCurrent);

			var imagenActual=$('.super-zoom__thumbnail[data-index="'+new_index+'"]');
			// console.log(imagenActual);
			imagenActual.find('a').trigger('click');
		});

		nextButton.on('click', function(){
			var index = parseInt($('.super-zoom__thumbnails .is-active').attr('data-index'));

			var last_index=parseInt($('.super-zoom__thumbnail:last-child').attr('data-index'));
			if(index==last_index){
				var new_index=0;
			}
			else{
				var new_index=index+1;
			}
			$('.super-zoom__thumbnails .is-active').removeClass('is-active');
			$('.super-zoom__thumbnail[data-index="'+new_index+'"]').addClass('is-active');
			var imgCurrent=$('.super-zoom__thumbnail[data-index="'+new_index+'"]').find('a').attr('data-standard');
			$('.super-zoom__current-image').find('img').attr('src', imgCurrent);

			var imagenActual=$('.super-zoom__thumbnail[data-index="'+new_index+'"]');
			// console.log(imagenActual);
			imagenActual.find('a').trigger('click');
		});

		closeButton.on('click', function(){
			$('#superZoomWrapper').fadeOut();
		});
		$(document).keydown(function(e) {
			if (e.keyCode == 27) {
				if($('#superZoomWrapper').is(':visible'))
				$('#superZoomWrapper').fadeOut();
			}
		});
	})();
}
$('body').on('click', '#superZoomTrigger', function(){
	if ( !$('#superZoom').length) {
		productDetail_superZoomImages();
	}
	$('#superZoomWrapper').fadeIn();
});

/*--------------------*/
// CTA
/*--------------------*/
// Buy button
//$('.buy-button.buy-button-ref').addClass('button-flat secondary');
// Add button
//$('.buy-in-page-button').addClass('button-flat tertiary').html('Agregar al <svg class="svg-icon"><use xlink:href="#svg-icon-ping-cart"></use></svg>');
// Quantity
//$(".cart-plus-minus").append('<div class="dec qtybutton">-</div><div class="inc qtybutton">+</div>');
$(".qtybutton").on("click", function() {
    var $button = $(this);
    var oldValue = $button.parent().find("input").val();
    if ($button.find('use').attr('href') == "#svg-icon-chevron-up" || $button.find('use').attr('xlink:href') == "#svg-icon-chevron-up") {
        var newVal = parseFloat(oldValue) + 1;
    } else {
        // Dont allow decrementing below zero
        if (oldValue > 1) {
            var newVal = parseFloat(oldValue) - 1;
        } else {
            newVal = 1;
        }
    }
    $(".product-detail__quantity-input").val(newVal);
});

/*--------------------*/
// Several
/*--------------------*/
(function resilientContentNavigation(){
    var contentTabs 			= $('.content__tabs'),
        tabTrigger				= contentTabs.find('.content__tab-trigger'),
        contentAnchors 			= $('.content__anchors'),
        anchorTrigger			= contentAnchors.find('.content__anchor-trigger'),
        accordionTrigger		= $('.content__accordion-trigger'),
        content 				= $('.content__content');

    tabTrigger.each(function(){
        var $_this = $(this);
        $_this.on('click', function(){
            var contentToShow = $_this.attr('data-id');
            $_this.addClass('is-active').siblings().removeClass('is-active')
            $('#'+contentToShow).siblings().removeClass('is-active');
            $('#'+contentToShow).addClass('is-active');
        })
    })

    anchorTrigger.each(function(){
        var $_this = $(this),
            offset;

        $_this.on('click', function(event){
            event.preventDefault();
            //
            $(window).outerWidth() <= 768 ? offset = $('.site-header').outerHeight() : offset = $('.site-header').outerHeight() - $('.top-bar').outerHeight();
            var contentToGo = $_this.attr('data-id'),
                top 		= $('#'+contentToGo).offset().top - offset - 15 - $('#productDetailFloating').outerHeight();

            $('html, body').stop().animate({
                scrollTop: top,
            }, 750);
        })
    })

    accordionTrigger.each(function(){
        var $_this = $(this)

        $_this.on('click', function(){
            $_this.next().slideToggle();
        })
    })

    /* content.each(function(){
        var $_this = $(this)
        $_this.on('click', '.content_', function(){
            $_trigger = $(this);
        })
    }) */
})();
//
function getFormatMeasure(measure){
    measure = measure.replace(',','.');
    return measure;
}
function getMeasures(){
    var $_productMeasures	= $('.product-detail__measures'),
        $_originalWrapper 	= $('#div_Conteudo_DetalhesDoProduto_pnlDimensoes')
        $_alto 				= getFormatMeasure($_originalWrapper.find('.lblAlturaReal').html()),
        $_ancho				= getFormatMeasure($_originalWrapper.find('.lblLarguraReal').html()),
        $_profundo			= getFormatMeasure($_originalWrapper.find('.lblComprimentoReal').html());

    var newWrapper = `
        <div class="product-detail__measures-table">
            <h4 class="product-detail__sublabel">Dimensiones totales</h4>
            <div class="product-detail__measure">
                <span>Ancho: </span> <span>${$_ancho} cm</span>
            </div>
            <div class="product-detail__measure">
                <span>Alto: </span> <span>${$_alto} cm</span>
            </div>
            <div class="product-detail__measure">
                <span>Profundo: </span> <span>${$_profundo} cm</span>
            </div>
        </div>
        `;

        $_productMeasures.find($('.tag-subtitle__wrapper')).after(newWrapper);
}
function get_format_price(price){
    price=price.replace(',','|');
    price=price.replace('.',',');
    price=price.replace('|','.');
    return price;
}
function change_product_prices(){
    var selector=''+
        'strong.skuBestPrice,'+
        'strong.skuListPrice,'+
        'strong.skuPrice,'+
        'span.economia,'+
        'label.skuBestInstallmentValue';
    $(selector).each(function(i, el) {
        var text = el.innerHTML;
        el.innerHTML = el.innerHTML.replace("Q ", "");
        el.innerHTML = el.innerHTML.replace("Q", "");
        /*var index_comma=text.indexOf(',');
        var index_punto=text.indexOf('.');
        if(text.length && index_comma>index_punto){
            el.innerHTML = el.innerHTML.replace(",", "|").replace(".", ",").replace("|", ".");
        }*/
        $(this).addClass('is-shown');
    });
    $('.product-detail__price').fadeIn(292);
}
// Select a size by default
function defaultSize(){
    $('.item-dimension-Talla label:not(.item_unavailable):first').click();
    change_product_prices();
}
// Video
if($('.value-field.URL-Video').length){
var videoURL = $('.value-field.URL-Video').text();
    $('.product-detail__description__name').after('<a href="https://'+videoURL+'" data-fancybox class="product-detail__description__play">Ver video <i class="icon-play"></i></a>');
}
// Color variations
(function(){
    $('.product-detail__sku-selection .item-dimension-Color label.dimension-Color').each(function(){
        var $_this = $(this),
            $_color = $_this.text();
            // $_link = $(this).find('.product-detail__color-link');
        $_this.attr('title', $_color);
    })
})();

// Floating
// (function floating(){
//     $(window).scroll(function() {
//         var elementToPass = $('.product-detail__info--top').offset().top + $('.product-detail__info--top').outerHeight() - $('.site-header').outerHeight();
//         $(this).scrollTop() > elementToPass ? $('#productDetailFloating').fadeIn() : $('#productDetailFloating').fadeOut()
//     });
//     $('.product-detail__sku-selection ul.topic label').on('click', function(){
//         var $_this = $(this),
//             forAttr = $_this.attr('for');
//         $('#productDetailFloating ul.topic').find('label[for='+forAttr+']').addClass('checked').siblings().removeClass('checked');
//     })
//     $('#productDetailFloating ul.topic label').on('click', function(){
//         var $_this = $(this);
//         $_this.addClass('checked').siblings().removeClass('checked');
//     })
// })();

function lowStockElements(){
    var lastPiecesElement = `
        <div class="product-detail__last-pieces">
        </div>
    `
    $('li.item-dimension-Talla').append(lastPiecesElement)
}

/*--------------------*/
// Another products
/*--------------------*/
productsSliderCall('#productsSlider01', '.products-slider__wrapper')
productsSliderCall('#productsSlider02', '.products-slider__wrapper')

function ifDescriptionExist(ControlOfVTEX, WrapperID){
    let controlOfVTEX       = $(`${ControlOfVTEX}`)

    if(controlOfVTEX.is(':empty')){
        $(`${WrapperID}`).remove()
        $(`[data-id=${WrapperID.replace('#','')}]`).remove()

        activeOptionB(WrapperID)
    }
}

function activeOptionB(WrapperID){
    let wrapperID   = $(`${WrapperID}`)
    if( !wrapperID.length ){
        $('.content__tabs .content__tab-trigger').first().addClass('is-active')
        $('.content__anchors .content__anchor-trigger').first().addClass('is-active')
        $('.content__content').first().addClass('is-active')
    }
}

function getGroupOrField(GroupName, FieldName){
    let groupName           = $(`#caracteristicas h4.group.${GroupName}`),
        groupContent        = groupName.next().clone(),
        attributeContent    = groupName.next().find(`.value-field.${FieldName}`).clone()

    // console.log( FieldName == undefined ? groupContent : attributeContent )
    return FieldName == undefined ? groupContent : attributeContent
}

function insertGroupOrField(GroupName, FieldName, ParentElement, ReferenceElement){
    let element     = $(`${ParentElement} ${ReferenceElement}`),
        dataElement = $(`[data-id="${ParentElement.replace('#','').replace('.','')}"]`)

    // Insert the VTEX content
    element.after( getGroupOrField(GroupName, FieldName) )
    // Remove elements that doesn't have information
    if( getGroupOrField(GroupName, FieldName).length === 0 ){
        element.parent().remove()
        dataElement.remove()
    }
    else{
        element.next().wrapAll(`<div />`)
    }

    // console.log(getGroupOrField(GroupName, FieldName).length)
}
ifDescriptionExist('.productDescription', '#tab-description')
insertGroupOrField('caracteristicas', undefined, '#tab-characteristics', 'h4')
insertGroupOrField('Observaciones', undefined, '#tab-observations', 'h4')
$('.PDP-Specifications').addClass('is-visible')

/*
URL to delete/update amount items inlist
/no-cache/giftlistv2/changewishedamount/{{list_id}}/{{sku_id}}/{{qty}}

URL to get Json
/no-cache/giftlistv2/getskulist/{{idList}}/1/0/false
$.getJSON("/no-cache/giftlistv2/getskulist/" + id + "/1/0/false", function(data) {
    console.log(data);
});

URL to add sku to list
/no-cache/giftlistv2/skutolist
{"GiftListId":"10","CheckedItems":["1243-2"],"AddToQuantity":true}
id de lista, skuId - qty, agregar a la cantidad

URL to get modal
/no-cache/giftlistv2/getinsertsku/4/list?KeepThis=true&random=1541628573990
*/
var tol; //Var to TimeOut on Sku added
var vlm={ //VTEX List Management
    addSkuToList: function(datos, skuId){
        //var datos={"GiftListId":"10","CheckedItems":["1243-3"],"AddToQuantity":true};
        $.ajax({
            url: '/no-cache/giftlistv2/skutolist',
            type: 'POST',
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            data: JSON.stringify(datos),
            success: function(data){
                console.log(data);
                update_mdr_by_id(datos.GiftListId);
                if(data.Success==true){
                    vlm.updateProductsInList(datos.GiftListId, skuId);
                }else if(data.Success==false){
                    console.log('Error adding to list: ');
                    console.log(data.Error);
                    return false;
                }else{
                    console.log(data);
                }
            },
            error: function (error) {
                console.log(error);
                $('.list-form-box').html(error.responseText);
            }
        });
    },
    updateProductsInList: function(giftlistid, skuId){
        console.log(giftlistid, skuId);
        $.getJSON("/no-cache/giftlistv2/getskulist/" + giftlistid + "/1/0/false", function(data) {
            console.log(data);
            console.log(data.Items[0].WishedAmount);
            var sku_name='',
                sku_img='',
                sku_qty='';
            $.each(data.Items, function(index, item){
                console.log(item.SkuId, skuId);
                if(item.SkuId==skuId){
                    sku_name=item.Name,
                    sku_img=item.Image.src,
                    sku_qty=$('<div>'+item.WishedAmount+'</div>').find('.giftlistsku-input-wishedamt').val();
                    console.log(sku_name, sku_img, sku_qty);
                    return false;
                }
            })
            $('.giftlist-added__img img').attr('src', sku_img.replace('-65-65', '-100-100'));
            $('.giftlist-added__name').html(sku_name);
            $('#giftlist-added__qty').html(sku_qty);
            $('.giftlist-added__viewlist').attr('href', '/mesa-de-regalos/administra/productos?id='+giftlistid);

            $('body').addClass('giftlist-added');
            tol=setTimeout(function(){
                close_giftlist_added();
            }, 10000);
        });
    }
}
// var datos={"GiftListId":"10","CheckedItems":["1243-3"],"AddToQuantity":true};
// vlm.addSkuToList(datos);

var gr='';//group list - ID of list to buy
$(function(){
    $('.product-detail__options-item > a').on('click', function(e){
        e.preventDefault();
        $(this).parent().toggleClass('active');
        return false;
    });
    $('body').on('click', '.product-detail__addtolist', function(e){
        e.preventDefault();
        var btn_selector = $('.product-detail__info--bottom .product-detail__cta .buy-in-page-button');
        if(btn_selector.attr('href').indexOf('sku=') != -1){
            if(!$('#product-detail__mdr-action').hasClass('loading')){
                var that=$(this),
                    giftlistid=that.attr('rel'),
                    qty=that.closest('.product-detail__info').find('.product-detail__quantity-input').val(),
                    skuId=$('.buy-in-page-button').attr('href').replace('/checkout/cart/add?sku=',''),
                    skuId = skuId.substring(0, skuId.indexOf("&")),
                    datos={"GiftListId": giftlistid,"CheckedItems":[skuId+'-'+qty],"AddToQuantity":true};
                console.log(datos);
                $('#product-detail__mdr-action').addClass('loading');
                vlm.addSkuToList(datos, skuId);
            }
        }else{
            $('#product-detail__mdr-action').prepend('<div class="error" id="error-mdr-sku">Debes seleccionar una opción primero</div>');
            $('#error-mdr-sku').fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
            setTimeout(function(){
                $('#error-mdr-sku').fadeOut(500, function(){
                    $(this).remove();
                });
            }, 3000);
        }
    });

    if(window.location.search.indexOf('gr=')!=-1){
        $('body').addClass('gr');
        gr=window.location.search.substring(window.location.search.indexOf('gr=')+3);
        console.log(gr);
    }

    $('body').on('click', '.not-loggedin-mdr', function(e){
        e.preventDefault();
        $('html,body').animate({ scrollTop: 0 }, 500);
        vtexid.start({
            locale: 'es-MX',
            forceReload: false
        });
    });
    /*$('body').on('click','.added-to-list', function(e){
        e.preventDefault();
        clearTimeout(tol);
        $('.added-to-list').fadeOut(500, function(){
            $(this).remove();
            $('.glis-submit').removeClass('clicked');
        });
    });*/
    $('.giftlist-added__close, .giftlist-added__overlay').on('click', function(e){
        e.preventDefault();
        close_giftlist_added();
    })
    vtexjs.checkout.getOrderForm().done(function(orderForm) {
        var o=orderForm;
        if(o.loggedIn){
            if(window.location.search.indexOf('gr=')==-1){
                /*
                Tipos de listas:
                4 - Bodas
                */
                var lists=[
                    [4, 'Bodas', '/mesa-de-regalos/boda/crea'],
                    [5, 'Bebe', '/mesa-de-regalos/bebe/crea'],
                    [7, 'Niños', '/mesa-de-regalos/ninos/crea'],
                    [6, 'Otras', '/mesa-de-regalos/crea']
                ];
                load_lists(lists); //Array con arrays con los ids y titulos de los tipos de listas
            }
        }else{
            $('#product-detail__mdr-action').append('<div class="not-loggedin-mdr">Si quieres agregar este producto a tu mesa de regalos<br><a href="#" class="mdr-login">Iniciar sesión</a></div>');
        }
    });

    /*$( document ).ajaxComplete(function( event, xhr, settings ) {
        if(settings.url.indexOf('/no-cache/giftlistv2/skutolist')!=-1) {
            if(xhr.statusText=='success'){
                var sku_name=$('.glis-sku-single .glis-sku-single-item').html();
                $('body').append('<div class="added-to-list">ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¡<strong>'+sku_name+'</strong> se agregÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³ a tu mesa de regalos con exito!</div>');
                tol=setTimeout(function(){
                    $('.added-to-list').fadeOut(500, function(){
                        $(this).remove();
                        $('.glis-submit').removeClass('clicked');
                    });
                }, 5000);
                console.log('Agregado a tu mesa de regalos');
            }else{
                $('.glis-submit').removeClass('clicked');
                console.log('Ocurrio un error al agregar a la mesa de regalos');
                console.log(xhr);
            }
        }
    });*/
});

function load_lists(lists){
    $.each(lists, function(index, item){
        var id=item[0],
            title=item[1],
            link=item[2],
            index_id=index;
        $('#product-detail__mdr-action').append('<div class="product-detail__list--wrapper"><strong>'+title+'</strong><div id="lists-'+id+'-'+index+'"></div></div>');
        load_lists2(id,name,link,index_id)
    });
}

function load_lists2(id,name,link,index_id){
    $.ajax({
        url: '/no-cache/giftlistv2/getinsertsku/'+id+'/list?KeepThis=true',
        type: 'GET',
        success: function(data){
            var content=$(data).find('.glis-submit-list');
            $('#product-detail__mdr-title').html('Agrega este producto a alguno de tus registros');
            if(content.length){
                $('body').addClass('addtolist');
                content.each(function(index, item){
                    var rel=$(item).attr('rel');
                        name=$(item).html();
                    console.log(rel, name);
                    console.log('#lists-'+id+'-'+index_id);
                    $('#lists-'+id+'-'+index_id).append('<a href="#" rel="'+rel+'" class="product-detail__addtolist">'+name+'</a>');
                });
            }else{
                $('#lists-'+id+'-'+index_id).append('<p>No tienes ningún registro <a class="mdr-link-new-list" href="'+link+'">Crear uno</a></p>');
            }
        }
    });
}

function close_giftlist_added(){
    $('body').removeClass('giftlist-added');
    $('#product-detail__mdr-action').removeClass('loading');
    clearTimeout(tol);
}

function flagsFromAttributePDP(){
    let flag = $('#caracteristicas').find('.value-field.Flags').text()

    if (flag !== '')
        $('body .product-detail__gallery').append(`<img src="/arquivos/Temporal/images-flags_${flag}--pdp.png" class="product-detail__flag-attribute" />`)
}

function validateInformationPDP(){
    let characteristicsTable = $('#tab-characteristics'),
        characteristicsItem = characteristicsTable.find('tbody');

    if ( characteristicsItem.find('.Color').length && characteristicsItem.find('.Descripcion-de-Color').length){
        characteristicsItem.find('.Color').hide();
    }
    if ( characteristicsItem.find('.Material').length && characteristicsItem.find('.Descripcion-de-Material').length){
        characteristicsItem.find('.Material').hide();
    }
    if ( characteristicsItem.find('.Edad').length && characteristicsItem.find('.Descripcion-de-Edad').length){
        characteristicsItem.find('.Edad').hide();
    }
    if ( characteristicsItem.find('.Potencia-de-Motor').length && characteristicsItem.find('.Potencia-Electrica').length){
        characteristicsItem.find('.Potencia-de-Motor').hide();
    }
    if ( characteristicsItem.find('.Rango-de-Capacidad').length && characteristicsItem.find('.Capacidad-de-Tazon').length){
        characteristicsItem.find('.Rango-de-Capacidad').hide();
    }
}
validateInformationPDP()

function loadSpecificationsFromAttribute(){
    let dataTentrega2 = $('.value-field.Tentrega2').text(),
        dataTentrega3 = $('.value-field.Tentrega3').text(),
        dataTentrega4 = $('.value-field.Tentrega4').text(),
        dataTentrega5 = $('.value-field.Tentrega5').text(),
        dataTproducto = $('.value-field.Tproducto').text(),
        flagLiquidacion = $('.value-field.Flags-Check').text();

        $('#Tentrega-2').html(dataTentrega2)
        $('#Tentrega-3').html(dataTentrega3)
        $('#Tentrega-4').html(dataTentrega4)
        $('#Tentrega-5').html(dataTentrega5)

        $('.Tproducto').html(dataTproducto)
        if ( dataTproducto.length === 0 ){
            $('.Tproducto').parents('.product-detail__product-info').remove()
        }
        if (dataTproducto.length && dataTproducto === 'Disponible únicamente en unas tiendas'){
            $('#tiempoEntrega').remove()
            $('#retirarEnTienda').remove()
        }

        $('.product-detail__liquidacion').html(flagLiquidacion)

}
loadSpecificationsFromAttribute()

/*--------------------------------------------------------------------------------*/
// Load description by SKU
/*--------------------------------------------------------------------------------*/
function loadDescriptionBySKU(skuId){
    let descriptionsBySKU           = $('.DescriptionBySKU'),
        descriptionByProduct        = $('.DescriptionByProduct'),
        descriptionBySKUSelected    = $(`#${skuId}.DescriptionBySKU`)

    descriptionsBySKU.fadeOut()
    descriptionByProduct.fadeOut()
    descriptionBySKUSelected.fadeIn()
}