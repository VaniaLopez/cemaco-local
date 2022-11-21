'use strict';

var gndx = 0;
var show_select = false;
$(function () {
	var interval = 0;
	var i_callcenter = setInterval(function () {
		// console.log('interval callcenter');
		if (interval >= 30 || $('#vtex-callcenter').length) {
			clearInterval(i_callcenter);
			if ($('#vtex-callcenter').length) $('body').addClass('callcenter');
		}
		interval++;
	}, 300);
});

function validate_only_in_store() {
	$('.product-item__wrapper .product-field li:not(.in-store-checked)').each(function (index, item) {
		var that = $(this);
		var text = that.html().toLowerCase();
		that.addClass('in-store-checked');
		if (text.indexOf('tienda') != -1) {
			that.closest('.product-item__wrapper').addClass('is_only_in_store');
			console.log("Aqui esta ",that.closest(".product-item__wrapper").find(".product-item .product-item__price .price-with-discount"))
			that.closest(".product-item__wrapper").find(".product-item .product-item__price .price-with-discount").replaceWith('<p class="no-disponible">Producto no disponible</p>');
			that.closest(".product-item__wrapper").find(".product-item .product-item__price .price-old").css('display', 'none');
			that.closest(".product-item__wrapper").find(".product-item .product-item__price").addClass('info-text');
			that.closest(".product-item__wrapper").find(".product-item .product-item__price-group").css('padding-left', '0px');
			that.closest(".product-item__wrapper").find(".product-item .product-item__flags--attributes").addClass('hidden');
			that.closest(".product-item__wrapper").find(".product-item .product-item__cta .product-item__action .js-buy-plp").css('display', 'none');
			that.closest(".product-item__wrapper").find(".product-item .product-item__cta .product-item__action .js-no-buy-pdp").css('display', 'flex');
		}
	});
}

function validate_only_in_store_before() {
	$('.product-item__wrapper .product-field li:not(.in-store-checked)').each(function (index, item) {
		var that = $(this);
		var text = that.html().toLowerCase();
		that.addClass('in-store-checked');
		if (text.indexOf('tienda') != -1) {
			that.closest('.product-item__wrapper').addClass('is_only_in_store');
			console.log("Aqui esta ",that.closest(".product-item__wrapper").find(".product-item .product-item__price .price-with-discount"))
			that.closest(".product-item__wrapper").find(".product-item .product-item__price .price-with-discount").replaceWith('<p class="no-disponible">Producto no disponible</p>');
			that.closest(".product-item__wrapper").find(".product-item .product-item__price .price-old").css('display', 'none');
			that.closest(".product-item__wrapper").find(".product-item .product-item__price").addClass('info-text');
			that.closest(".product-item__wrapper").find(".product-item .product-item__flags--attributes").addClass('hidden');
			that.closest(".product-item__wrapper").find(".product-item .product-item__cta .product-item__action .js-buy-plp").css('display', 'none');
			that.closest(".product-item__wrapper").find(".product-item .product-item__cta .product-item__action .js-no-buy-pdp").css('display', 'flex');
		}
	});
}
validate_only_in_store_before()

// Funcion para Cambiar Posicion de Decimales en Precio <--inicio-->
$(document).ready(function(){
    const priceOld = document.getElementsByClassName('price-old');
    const priceNew = document.getElementsByClassName('price-new');

    function chancePrices (prices){
        for(let price of prices)
            price.innerHTML = `<span class="integer">${price.innerText.split('.')[0]}</span> <span class="decimal">${price.innerText.split('.')[1]}</span>` ;
    }

    chancePrices(priceOld);
    chancePrices(priceNew);

});
// Funcion para Cambiar Posicion de Decimales en Precio <--fin-->

function load_discount_flags() {
	$('.product-item__flag--discount:not(.checked)').each(function (index, item) {
		var that = $(this),
		    txt = that.html(),
		    final_txt = txt.indexOf(',');
		txt = txt.substring(0, final_txt);
		that.html(txt + '%').addClass('checked');
	});
	 $('.product-item__discount-news:not(.checked)').each(function (index, item) {
		var that = $(this),
		    txt = that.html(),
		    final_txt = txt.indexOf(',');
		txt = txt.substring(0, final_txt);
		that.html('('+txt.trim()+'%)').addClass('checked');
	});
}

function load_svg() {
	var is_safari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
	if (is_safari) {
		$('svg').each(function () {
			var that = $(this);
			if (typeof that.find('use').attr('xlink:href') === 'undefined' && typeof that.attr('xmlns') === 'undefined') {
				var href = that.find('use').attr('href');
				var classes = that.attr('class');
				var ids = that.attr('id');
				that.before('<svg id="' + ids + '" class="' + classes + '"><use xlink:href="' + href + '"></use></svg>');
				that.remove();
			}
		});
	}
}

/*
**	Force path to Vtex where the paths are very much.
*/
var presetImagesToVtex = function presetImagesToVtex() {
	//Vicom Path
	var vicomPath = 'https://vicom.mx/demos/x-cemaco/arquivos';

	//Get Images From Vtex
	var imagesFromVicom = $('img[src^=\'' + vicomPath + '\']');

	//Replace Path
	imagesFromVicom.each(function (index, image) {
		var imagePath = $(image).attr('src');
		var newImagePath = imagePath.replace('' + vicomPath, '/arquivos');
		$(image).attr('src', newImagePath);
	});
};
document.addEventListener("DOMContentLoaded", function (event) {
	$('.product-list__wrapper .product-list').removeClass('d-none');
	presetImagesToVtex();
});

function load_searchbar() {
	currentDept = '0';
	enableFullTextSearchBox('searchbarInput1', //input text search
	'searchbarSelect1', //select
	'searchbarHidden1', //input hidden
	'searchbarButton1', //button
	'/SEARCHTERM', 'Buscar');
}

function update_mdr_by_id(mdr_id, callbackFunction) {
	$.ajax({
		type: 'GET',
		url: 'https://privivtex.cemaco.com:4443/apiecommerce/api/eventos/marcareditado/' + mdr_id,
		beforeSend: function beforeSend() {},
		success: function success(data) {
			console.log(data);
			if (typeof callbackFunction !== 'undefined') {
				callbackFunction();
			}
		},
		error: function error(xmlHttpRequest, textStatus) {
			console.log(textStatus);
		}
	});
}

var interval_msj_mdr;
function load_message_mdr() {
	interval_msj_mdr = setInterval(function () {
		if (typeof vtexjs !== 'undefined' && typeof vtexjs.checkout !== 'undefined' && typeof vtexjs.checkout.orderForm !== 'undefined') {
			clearInterval(interval_msj_mdr);
			validate_msj_mdr(vtexjs.checkout.orderForm);
		}
	});
	$(window).on('orderFormUpdated.vtex', function (evt, orderForm) {
		validate_msj_mdr(orderForm);
	});
}
function validate_msj_mdr(orderForm) {
	if (orderForm.giftRegistryData && $('#mdr-message--wrapper').length == 0) {
		$('body').addClass('mdr-message');
		$('header.site-header + main').prepend('<div id="mdr-message--wrapper">EstÃ¡s comprando todo para el evento <strong>' + orderForm.giftRegistryData.description + '</strong> <div id="leave-mdr"></div></div>');
	}
}
load_message_mdr();
$(function () {
	$('body').on('click', '#leave-mdr', function (e) {
		e.preventDefault();
		$.ajax({
			url: '/no-cache/giftlistv2/cookiemanage',
			type: 'GET',
			accept: 'application/json, text/javascript',
			contentType: 'application/json; charset=utf-8',
			crossDomain: true,
			success: function success() {
				$('body').removeClass('mdr-message');
				$('#mdr-message--wrapper').remove();
			}
		});
	});
});

function load_nav_products() {
	$('.nav-product-item-container .nav-product-item').each(function () {
		var that = $(this);
		that.prependTo(that.parent().parent().parent().parent());
		that.find('img').addClass('img-centrada');
	});
	$('.nav-product-item-container .prateleira.vitrine').remove();
}

function slug(str) {
	str = str.replace(/^\s+|\s+$/g, ''); // trim
	str = str.toLowerCase();

	// remove accents, swap Ã± for n, etc
	var from = "ÃÃ„Ã‚Ã€ÃƒÃ…ÄŒÃ‡Ä†ÄŽÃ‰ÄšÃ‹ÃˆÃŠáº¼Ä”È†ÄžÃÃŒÃŽÃÄ°Å‡Ã‘Ã“Ã–Ã’Ã”Ã•Ã˜Å˜Å”Å ÅžÅ¤ÃšÅ®ÃœÃ™Ã›ÃÅ¸Å½Ã¡Ã¤Ã¢Ã Ã£Ã¥ÄÃ§Ä‡ÄÃ©Ä›Ã«Ã¨Ãªáº½Ä•È‡ÄŸÃ­Ã¬Ã®Ã¯Ä±ÅˆÃ±Ã³Ã¶Ã²Ã´ÃµÃ¸Ã°Å™Å•Å¡ÅŸÅ¥ÃºÅ¯Ã¼Ã¹Ã»Ã½Ã¿Å¾Ã¾ÃžÄÄ‘ÃŸÃ†aÂ·/_,:;";
	var to = "AAAAAACCCDEEEEEEEEGIIIIINNOOOOOORRSSTUUUUUYYZaaaaaacccdeeeeeeeegiiiiinnooooooorrsstuuuuuyyzbBDdBAa------";
	for (var i = 0, l = from.length; i < l; i++) {
		str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
	}

	str = str.replace(/[^a-z0-9 -]/g, '') // remove invalid chars
	.replace(/\s+/g, '-') // collapse whitespace and replace by -
	.replace(/-+/g, '-'); // collapse dashes

	return str;
};
function load_skus() {
	$('.product-item .product-item__skus').not('.checked').each(function (index, item) {
		var that = $(this);
		that.addClass('checked item' + gndx);
		that.closest('.product-item').attr('data-index', gndx).find('.js-buy-plp').attr('data-index', gndx);
		var id = parseInt(that.attr('data-id'));
		var sku = parseInt(that.attr('data-sku'));
		load_sku_index(id, sku, gndx);
		gndx++;
	});
}

function load_sku_index(id, sku, ndx) {
	vtexjs.catalog.getProductWithVariations(id).done(function (product) {
		var color = '',
		    item_price_color = 'Sin stock',
		    item_listprice_color = '',
		    color_class = '',
		    colorsLength = 0,
		    color_sku,
		    minorPriceList = [];
		    
		if (product.skus.length > 1) {
			$('.product-item[data-index="' + ndx + '"]').find('.price-text-configurable').addClass('show');
			$('.product-item[data-index="' + ndx + '"]').find('.js-buy-plp').hide();
			$('.product-item[data-index="' + ndx + '"]').find('.js-buy-pdp').css('display', 'flex');
		}
		$.each(product.skus, function (index, item) {
			if (typeof item.dimensions['DescripciÃ³n de Color'] !== 'undefined') {
				var item_sku = item.sku,
				    item_price = item.bestPriceFormated,
				    item_listprice = item.listPriceFormated,
				    item_size = item.dimensions.Talla;
				color_class = slug(item.dimensions['DescripciÃ³n de Color']);
				if (color != item.dimensions['DescripciÃ³n de Color']) {
					color = item.dimensions['DescripciÃ³n de Color'];
					color_sku = item.sku;
				}
				if (item.available) {
					item_price_color = item_price;
					item_listprice_color = item_listprice;
				}
				var is_available = '';
				if (item.available == false) var is_available = 'disabled';
				var is_active = '';
				var class_active = '';
				if (item.sku == parseInt(sku)) {
					class_active = 'active';
					//var is_active='selected';
				}
				if ($('.item' + ndx + ' .product-item__colors .product-item__color.' + color_class).length == 0) {
					$('.item' + ndx + ' .product-item__colors').append('<div class="product-item__color--wrapper"><div class="product-item__color ' + color_class + '" data-sku="' + color_sku + '" data-id="' + id + '" data-color="' + color_class + '" data-img="' + item.image.replace('292-292', '400-400') + '" title="' + color + '">' + color + '</div></div>');
				}
				if ($('.item' + ndx + ' .product-item-size .size-' + color_class).length == 0) {
					$('.item' + ndx + ' .product-item-size').append('<select class="size size-' + color_class + '" data-color="size-' + color_class + '"><option value="">Talla</option></select>');
				}
				if (class_active != '') {
					$('.item' + ndx + ' .product-item-size .size-' + color_class).addClass(class_active);
					$('.item' + ndx + ' .product-item__colors .product-item__color.' + color_class).addClass(class_active);
				}
				var temp = $('.item' + ndx + ' .product-item__colors .product-item__color.' + color_class).attr('data-price');
				if (typeof temp === 'undefined' || item.available) {
					$('.item' + ndx + ' .product-item__colors .product-item__color.' + color_class).attr('data-price', item_price_color).attr('data-listprice', item_listprice_color);
				}
				$('.item' + ndx + ' .product-item-size .size-' + color_class).append('<option ' + is_available + ' ' + is_active + ' value="' + item_sku + '" data-listprice="' + item_listprice + '" data-price="' + item_price + '">' + item_size + '</option>');
				item_price_color = 'Sin stock';
				item_listprice_color = '';
				//
				colorsLength++;
				// console.log(`P-id ${id}, SKU-id-${item.sku}, SKU-color-${item.dimensions['DescripciÃ³n de Color']}`);
			} else if (typeof item.dimensions.Talla !== 'undefined') {
				var item_sku = item.sku,
				    item_price = item.bestPriceFormated,
				    item_listprice = item.listPriceFormated,
				    item_size = item.dimensions.Talla;
				//
				color_class = 'na';
				color_sku = item.sku;
				if (item.available) {
					item_price_color = item_price;
					item_listprice_color = item_listprice;
				}
				var is_available = '';
				if (item.available == false) var is_available = 'disabled';
				var is_active = '';
				var class_active = '';
				if (item.sku == parseInt(sku)) {
					class_active = 'active';
				}
				if ($('.item' + ndx + ' .product-item-color .color.' + color_class).length == 0) {
					$('.item' + ndx + ' .product-item-color').append('<div class="color ' + color_class + '" data-sku="' + color_sku + '" data-id="' + id + '" data-color="' + color_class + '" data-img="' + item.image.replace('292-292', '500-500') + '" title="' + color + '">' + color + '</div>');
				}
				if ($('.item' + ndx + ' .product-item__size .size-' + color_class).length == 0) {
					if (show_select) {
						$('.item' + ndx + ' .product-item__size').html('<select class="size size-' + color_class + '" data-color="size-' + color_class + '"><option value="">TALLA</option></select>');
					} else {
						$('.item' + ndx + ' .product-item__size').html('<div class="size size-' + color_class + '" data-color="size-' + color_class + '"></div>');
					}
				}
				if (class_active != '') {
					$('.item' + ndx + ' .product-item__size .size-' + color_class).addClass(class_active);
					$('.item' + ndx + ' .product-item-color .color.' + color_class).addClass(class_active);
				}
				var temp = $('.item' + ndx + ' .product-item-color .color.' + color_class).attr('data-price');
				if (typeof temp === 'undefined' || item.available) {
					$('.item' + ndx + ' .product-item-color .color.' + color_class).attr('data-price', item_price_color).attr('data-listprice', item_listprice_color);
				}
				if (show_select) {
					$('.item' + ndx + ' .product-item__size .size-' + color_class).append('<option ' + is_available + ' ' + is_active + ' value="' + item_sku + '" data-listprice="' + item_listprice + '" data-price="' + item_price + '">' + item_size + '</option>');
				} else {
					$('.item' + ndx + ' .product-item__size .size-' + color_class).append('<div class="sku-pi ' + is_available + '" ' + is_active + ' value="' + item_sku + '" data-listprice="' + item_listprice + '" data-price="' + item_price + '">' + item_size + '</div>');
				}
				item_price_color = 'Sin stock';
				item_listprice_color = '';
			}
			// Obtain Minor Price
			// minorPriceList.push(item_price);
			// var minorPrice =  Math.min(minorPriceList);
		});
		// Check number of colors
		if (product.skus.length > 1) {
			console.log('-------Colors--------', product.skus.length, colorsLength);
			var skusLength = product.skus.length;
			if (skusLength === colorsLength) {
				// console.log(`It's equal skusLength ${skusLength}, colorsLength ${colorsLength}`)
				$('.item' + ndx).addClass('is-displayed');
			} else {
				// console.log(`It's different skusLength ${skusLength}, colorsLength ${colorsLength}`)
			}
			if (colorsLength > 5) {
				$('.item' + ndx + ' .product-item__colors').slick({
					arrows: true,
					dots: false,
					prevArrow: "<button data-role='none' class='slick-arrow slick-prev'><svg class='svg-icon-arrow-left'><use xlink:href='#svg-icon-chevron-left'></use></svg></button>",
					nextArrow: "<button data-role='none' class='slick-arrow slick-next'><svg class='svg-icon-arrow-right'><use xlink:href='#svg-icon-chevron-right'></use></svg></button>",
					centerMode: false,
					infinite: true,
					slidesToShow: 6,
					slidesToScroll: 6
				});
			}
		}
		toggle_load_more();
	});
}

function load_skus_before() {
	$('.product-item .product-item__skus').not('.checked').each(function (index, item) {
		var that = $(this);
		that.addClass('checked item' + gndx);
		that.closest('.product-item').attr('data-index', gndx).find('.js-buy-plp').attr('data-index', gndx);
		var id = parseInt(that.attr('data-id'));
		var sku = parseInt(that.attr('data-sku'));
		load_sku_index_before(id, sku, gndx);
		gndx++;
	});
}
load_skus_before()

function load_sku_index_before(id, sku, ndx) {
	vtexjs.catalog.getProductWithVariations(id).done(function (product) {
		var color = '',
		    item_price_color = 'Sin stock',
		    item_listprice_color = '',
		    color_class = '',
		    colorsLength = 0,
		    color_sku,
		    minorPriceList = [];
		    
		if (product.skus.length > 1) {
			$('.product-item[data-index="' + ndx + '"]').find('.price-text-configurable').addClass('show');
			$('.product-item[data-index="' + ndx + '"]').find('.js-buy-plp').hide();
			$('.product-item[data-index="' + ndx + '"]').find('.js-buy-pdp').css('display', 'flex');
		}
		$.each(product.skus, function (index, item) {
			if (typeof item.dimensions['DescripciÃ³n de Color'] !== 'undefined') {
				var item_sku = item.sku,
				    item_price = item.bestPriceFormated,
				    item_listprice = item.listPriceFormated,
				    item_size = item.dimensions.Talla;
				color_class = slug(item.dimensions['DescripciÃ³n de Color']);
				if (color != item.dimensions['DescripciÃ³n de Color']) {
					color = item.dimensions['DescripciÃ³n de Color'];
					color_sku = item.sku;
				}
				if (item.available) {
					item_price_color = item_price;
					item_listprice_color = item_listprice;
				}
				var is_available = '';
				if (item.available == false) var is_available = 'disabled';
				var is_active = '';
				var class_active = '';
				if (item.sku == parseInt(sku)) {
					class_active = 'active';
					//var is_active='selected';
				}
				if ($('.item' + ndx + ' .product-item__colors .product-item__color.' + color_class).length == 0) {
					$('.item' + ndx + ' .product-item__colors').append('<div class="product-item__color--wrapper"><div class="product-item__color ' + color_class + '" data-sku="' + color_sku + '" data-id="' + id + '" data-color="' + color_class + '" data-img="' + item.image.replace('292-292', '400-400') + '" title="' + color + '">' + color + '</div></div>');
				}
				if ($('.item' + ndx + ' .product-item-size .size-' + color_class).length == 0) {
					$('.item' + ndx + ' .product-item-size').append('<select class="size size-' + color_class + '" data-color="size-' + color_class + '"><option value="">Talla</option></select>');
				}
				if (class_active != '') {
					$('.item' + ndx + ' .product-item-size .size-' + color_class).addClass(class_active);
					$('.item' + ndx + ' .product-item__colors .product-item__color.' + color_class).addClass(class_active);
				}
				var temp = $('.item' + ndx + ' .product-item__colors .product-item__color.' + color_class).attr('data-price');
				if (typeof temp === 'undefined' || item.available) {
					$('.item' + ndx + ' .product-item__colors .product-item__color.' + color_class).attr('data-price', item_price_color).attr('data-listprice', item_listprice_color);
				}
				$('.item' + ndx + ' .product-item-size .size-' + color_class).append('<option ' + is_available + ' ' + is_active + ' value="' + item_sku + '" data-listprice="' + item_listprice + '" data-price="' + item_price + '">' + item_size + '</option>');
				item_price_color = 'Sin stock';
				item_listprice_color = '';
				//
				colorsLength++;
				// console.log(`P-id ${id}, SKU-id-${item.sku}, SKU-color-${item.dimensions['DescripciÃ³n de Color']}`);
			} else if (typeof item.dimensions.Talla !== 'undefined') {
				var item_sku = item.sku,
				    item_price = item.bestPriceFormated,
				    item_listprice = item.listPriceFormated,
				    item_size = item.dimensions.Talla;
				//
				color_class = 'na';
				color_sku = item.sku;
				if (item.available) {
					item_price_color = item_price;
					item_listprice_color = item_listprice;
				}
				var is_available = '';
				if (item.available == false) var is_available = 'disabled';
				var is_active = '';
				var class_active = '';
				if (item.sku == parseInt(sku)) {
					class_active = 'active';
				}
				if ($('.item' + ndx + ' .product-item-color .color.' + color_class).length == 0) {
					$('.item' + ndx + ' .product-item-color').append('<div class="color ' + color_class + '" data-sku="' + color_sku + '" data-id="' + id + '" data-color="' + color_class + '" data-img="' + item.image.replace('292-292', '500-500') + '" title="' + color + '">' + color + '</div>');
				}
				if ($('.item' + ndx + ' .product-item__size .size-' + color_class).length == 0) {
					if (show_select) {
						$('.item' + ndx + ' .product-item__size').html('<select class="size size-' + color_class + '" data-color="size-' + color_class + '"><option value="">TALLA</option></select>');
					} else {
						$('.item' + ndx + ' .product-item__size').html('<div class="size size-' + color_class + '" data-color="size-' + color_class + '"></div>');
					}
				}
				if (class_active != '') {
					$('.item' + ndx + ' .product-item__size .size-' + color_class).addClass(class_active);
					$('.item' + ndx + ' .product-item-color .color.' + color_class).addClass(class_active);
				}
				var temp = $('.item' + ndx + ' .product-item-color .color.' + color_class).attr('data-price');
				if (typeof temp === 'undefined' || item.available) {
					$('.item' + ndx + ' .product-item-color .color.' + color_class).attr('data-price', item_price_color).attr('data-listprice', item_listprice_color);
				}
				if (show_select) {
					$('.item' + ndx + ' .product-item__size .size-' + color_class).append('<option ' + is_available + ' ' + is_active + ' value="' + item_sku + '" data-listprice="' + item_listprice + '" data-price="' + item_price + '">' + item_size + '</option>');
				} else {
					$('.item' + ndx + ' .product-item__size .size-' + color_class).append('<div class="sku-pi ' + is_available + '" ' + is_active + ' value="' + item_sku + '" data-listprice="' + item_listprice + '" data-price="' + item_price + '">' + item_size + '</div>');
				}
				item_price_color = 'Sin stock';
				item_listprice_color = '';
			}
			// Obtain Minor Price
			// minorPriceList.push(item_price);
			// var minorPrice =  Math.min(minorPriceList);
		});
		// Check number of colors
		if (product.skus.length > 1) {
			console.log('-------Colors--------', product.skus.length, colorsLength);
			var skusLength = product.skus.length;
			if (skusLength === colorsLength) {
				// console.log(`It's equal skusLength ${skusLength}, colorsLength ${colorsLength}`)
				$('.item' + ndx).addClass('is-displayed');
			} else {
				// console.log(`It's different skusLength ${skusLength}, colorsLength ${colorsLength}`)
			}
			if (colorsLength > 5) {
				$('.item' + ndx + ' .product-item__colors').slick({
					arrows: true,
					dots: false,
					prevArrow: "<button data-role='none' class='slick-arrow slick-prev'><svg class='svg-icon-arrow-left'><use xlink:href='#svg-icon-chevron-left'></use></svg></button>",
					nextArrow: "<button data-role='none' class='slick-arrow slick-next'><svg class='svg-icon-arrow-right'><use xlink:href='#svg-icon-chevron-right'></use></svg></button>",
					centerMode: false,
					infinite: true,
					slidesToShow: 6,
					slidesToScroll: 6
				});
			}
		}
		toggle_load_more();
	});
}

$(document).ready(function () {
	// $(".fulltext-search-box").autocomplete( "destroy" );

	var gotoHref = function gotoHref(href) {
		document.location.href = href;
	};

	var mapReturnedItems = function mapReturnedItems(item) {
		return {
			label: (item.thumb != "" ? item.thumb + " " : "") + item.name,
			value: item.name,
			href: item.href,
			criteria: item.criteria
		};
	};

	var autoCompleteSource2 = function autoCompleteSource2(request, response) {
		$.ajax({
			url: "/buscaautocomplete/",
			dataType: "json",
			data: {
				maxRows: 12,
				productNameContains: request.term,
				suggestionsStack: suggestionsStack
			},
			success: function success(data) {
				var tmp = data;
				// console.log(tmp.itemsReturned, tmp.itemsReturned.length);
				for (var i = tmp.itemsReturned.length - 1; i >= 0; i--) {
					console.log(i, data.itemsReturned[i]);
					if (tmp.itemsReturned[i].name.indexOf('Mesa de Regalos') != -1 || tmp.itemsReturned[i].thumbUrl != null && tmp.itemsReturned[i].thumbUrl.indexOf('generic-image') != -1) {
						data.itemsReturned.splice(i, 1);
					} else {
						data.itemsReturned[i].thumb = data.itemsReturned[i].thumb.replace('-25-25', '-75-75');
					}
				}
				if (data) {
					response($.map(data.itemsReturned, mapReturnedItems));
				}
			}
		});
	};

	if ($.fn.autocomplete) {
		$(".fulltext-search-box2").autocomplete({
			source: autoCompleteSource2,
			minLength: 3,
			delay: 500,
			select: function select(event, ui) {
				gotoHref(ui.item.href);
			},
			open: function open() {
				$(this).removeClass("ui-corner-all").addClass("ui-corner-top");
			},
			close: function close() {
				$(this).removeClass("ui-corner-top").addClass("ui-corner-all");
			},
			focus: function focus(event, ui) {
				suggestionsStack = ui.item.criteria;
			}
		});
	}
});

var validateStoreTopBar = function validateStoreTopBar() {
	var windowWidth = $(window).width();
	var storeTopBar = $('#store-top-bar-mobile');
	//var storeTopBarHeight = storeTopBar.height();
	var siteNavSubmenus = $('ul.re-ul-principal, ul.re-ul--promociones, ul.re-ul--ver-mas');
	var siteNavSubmenusTop = siteNavSubmenus.css('top').replace('px', '');
	siteNavSubmenusTop = parseInt(siteNavSubmenusTop);

	if (storeTopBar.length) {
		//console.log('La store top bar existe');
		if (windowWidth >= 1024) {
			storeTopBar.addClass('invisible');
			$('body').removeClass('has-store-top-bar');
		} else if (windowWidth < 1024) {
			storeTopBar.removeClass('invisible');
			$('body').addClass('has-store-top-bar');
			//siteNavSubmenus.css('top', `${siteNavSubmenusTop+storeTopBarHeight}px`);
			var calc = siteNavSubmenusTop + storeTopBarHeight;
			console.log(calc);
		}
	} else {}
	//console.log('La store top bar NO existe');

	//console.log(windowWidth);
};

jq2(window).on('resize', function () {
	validateStoreTopBar();
});
validateStoreTopBar();

console.log('prueba 3');
//# sourceMappingURL=css-js_general.min.js.map