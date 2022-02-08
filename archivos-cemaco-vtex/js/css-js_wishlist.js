let my_wishlist     = '',
    p_wl            = '',
    profile_email   = '',
    accountname     = jsnomeLoja,
    sl              = '81638c30-59d9-4960-af67-9e333474a5c2',
    class_item      = '.product-item__wishlist__trigger',
    class_pdp       = '.product-detail__add-to-wishlist'

//Jquery Cookie
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){function c(a){return h.raw?a:encodeURIComponent(a)}function d(a){return h.raw?a:decodeURIComponent(a)}function e(a){return c(h.json?JSON.stringify(a):String(a))}function f(a){0===a.indexOf('"')&&(a=a.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return a=decodeURIComponent(a.replace(b," ")),h.json?JSON.parse(a):a}catch(a){}}function g(b,c){var d=h.raw?b:f(b);return a.isFunction(c)?c(d):d}var b=/\+/g,h=a.cookie=function(b,f,i){if(arguments.length>1&&!a.isFunction(f)){if(i=a.extend({},h.defaults,i),"number"==typeof i.expires){var j=i.expires,k=i.expires=new Date;k.setMilliseconds(k.getMilliseconds()+864e5*j)}return document.cookie=[c(b),"=",e(f),i.expires?"; expires="+i.expires.toUTCString():"",i.path?"; path="+i.path:"",i.domain?"; domain="+i.domain:"",i.secure?"; secure":""].join("")}for(var l=b?void 0:{},m=document.cookie?document.cookie.split("; "):[],n=0,o=m.length;n<o;n++){var p=m[n].split("="),q=d(p.shift()),r=p.join("=");if(b===q){l=g(r,f);break}b||void 0===(r=g(r))||(l[q]=r)}return l};h.defaults={},a.removeCookie=function(b,c){return a.cookie(b,"",a.extend({},c,{expires:-1})),!a.cookie(b)}});

$(function(){
	vtexid.setScope('2384422b-df02-41e4-b38f-037b5a69b331');
	vtexid.setScopeName(jsnomeSite);
	//WISHLIST - Validate if logged in
	vtexjs.checkout.getOrderForm().done(function(orderForm) {
		if(orderForm.clientProfileData!=null && orderForm.clientProfileData.email!=null && orderForm.loggedIn){
			profile_email=orderForm.clientProfileData.email;
			init_wishlist();
		}else{
			$('#total-wishlist-items').hide();
			$('body').on('click', class_item+', '+class_pdp, function (e) {
				e.preventDefault();
				vtexid.start({
					locale: 'es-MX',
					forceReload: false
				});
				$('html,body').animate({ scrollTop: 0 }, 'slow');
			});
		}
	});
	if(window.location.href.indexOf('account/wishlist')!=-1){
		load_add_to_cart_wishlist();
	}
});

function init_wishlist(){
	$.get('/api/dataentities/WL/search?_fields=wishlistProducts&_where=(email='+profile_email+')',function(wishlist){
		
        if(wishlist.length){
			my_wishlist=JSON.parse(wishlist[0].wishlistProducts);
			p_wl=Object.keys(my_wishlist).length;//Products in wishlist
			$('#total-wishlist-items').html(p_wl);
			//Wishlist page
			if($('#wishlist-wrapper').length){
				// var empty_msj='';
				if(p_wl==0){
					// empty_msj='<p>AÃºn no tienes productos en tu lista de deseos</p> <a href="/" class="button-flat secondary">Agregar productos</a>';
                    $('#whislist-no-items').show();
                }

				$('#wishlist-wrapper').html('<div id="wl-container"></div>');
				load_wishlist();

				setTimeout(function(){
					get_total_wishlist();
				},2000);
				$('.sideMenu a').each(function(){
					var href=$(this).attr('href');
					if(href.indexOf('?')!=-1){
						var href=href.substring(0,href.indexOf('?'));
						$(this).attr('href',href);
					}
				});
			}
			//Detalle del producto
			if($('body.produto').length){
				console.log('PDP');
				console.log(my_wishlist);
				var pid=$('#___rc-p-id').val();
				if(my_wishlist['p'+pid] != null){
					$(class_pdp).addClass('active');
				}else{
					console.log('not in wishlist');
				}
			}
		}else{
			//Wishlist Page
			if($('#wishlist-wrapper').length){
				$('#whislist-no-items').show();
				$('.sideMenu a').each(function(){
					var href=$(this).attr('href');
					if(href.indexOf('?')!=-1){
						var href=href.substring(0,href.indexOf('?'));
						$(this).attr('href',href);
					}
				});
			}
		}
	});
	//Add/Remove Wishlist - Detalle del producto
	$('body').on('click',class_pdp, function(e){
		e.preventDefault();
		var that=$(this);
		var pid=$('#___rc-p-id').val();
		if(that.hasClass('active')){
			//Remove from wishlist
			//console.log('Remove');
			update_wishlist(pid,'remove');
		}else{
			//Add to wishlist
			//console.log('Add');
			update_wishlist(pid,'add');
		}
	});

	//Add/Remove Wishlist - Product item
	$('body').on('click',class_item, function(e){
		e.preventDefault();
		console.log(e)
		var that=$(this);
		console.log(that)
		var pid=that.attr('data-id');
		if(that.hasClass('active')){
			//Remove from wishlist
			console.log('Remove');
			update_wishlist(pid,'remove');
		}else{
			//Add to wishlist
			console.log('Add');
			update_wishlist(pid,'add');


			
		}
	});

	$(class_item).not('.checked').each(function(){
		var that=$(this);
		var pid=that.attr('data-id');
		that.addClass('checked');
		is_in_wishlist(pid);
	});

	//Check if is in wishlist on load pages
	$( document ).ajaxComplete(function( event, xhr, settings ) {
		if ( settings.url.indexOf('/buscapagina')!=-1 ) {
			$(class_item).not('.checked').each(function(){
				var that=$(this);
				var pid=that.attr('data-id');
				that.addClass('checked');
				is_in_wishlist(pid);
			});
		}
	});
}

function load_wishlist(){
	$.each(my_wishlist, function(i,p){
		$('#wl-container').addClass('product-list list-view grid-small').append('<div id="wl-wrapper-'+p.id+'" class="wl-wrapper"></div>');
		load_product_wl(p.id);
	});
}
function load_product_wl(id){
	$.ajax({
		url: '/buscapagina?fq=productId:'+id+'&sl='+sl+'&cc=1&sm=0',
		success: function(product,s,x){
			if(s='success' && x.responseText.length==0){
				update_wishlist(id,'remove');
			}
			if(product.length){
				product=$(product).find('>ul:first-child>li:not(".helperComplement")');
				$('#wl-wrapper-'+id).html(product);
				sameHeight();
			}
		}
	});
}

function get_total_wishlist(){
	if(profile_email!=''){
		$.get('/api/dataentities/WL/search?_fields=wishlistProducts&_where=(email='+profile_email+')',function(wishlist){
			if(wishlist.length){
				my_wishlist=JSON.parse(wishlist[0].wishlistProducts);
				p_wl=Object.keys(my_wishlist).length;//Products in wishlist
				$('#total-wishlist').html(p_wl);
                // $('#whislist-no-items').hide();
			}else{
				$('#total-wishlist').html('0');
                // $('#whislist-no-items').show();
			}
		});
	}
}

function update_wishlist(pid,action){
	if(profile_email!=''){
		$.get('/api/dataentities/WL/search?_fields=wishlistProducts&_where=(email='+profile_email+')',function(wishlist){
			if(wishlist.length){
				my_wishlist=JSON.parse(wishlist[0].wishlistProducts);
				if(action=='remove'){
					delete my_wishlist['p'+pid];
					var wishlist_string=JSON.stringify(my_wishlist);
				}else if(action=='add'){
					//var wl_product={['p'+pid]: {'id':pid}};
					var selector_pid='p'+pid;
					var wl_product={};
					wl_product[selector_pid] = {'id':pid};
					$.extend( my_wishlist, wl_product );
					var wishlist_string=JSON.stringify(my_wishlist);
				}
			}else{
				//var wl_product={['p'+pid]: {'id':pid}};
				var selector_pid='p'+pid;
				var wl_product={};
				wl_product[selector_pid] = {'id':pid};
				var wishlist_string=JSON.stringify(wl_product);
			}
			var datos={};
			datos.email=profile_email;
			datos.wishlistProducts=wishlist_string;
			$.ajax({
				accept: 'application/vnd.vtex.ds.v10 json',
				contentType: 'application/json; charset=utf-8',
				crossDomain: true,
				data: JSON.stringify(datos),
				type: 'PUT',
				url: '/api/dataentities/WL/documents',
				success: function(data){
					if(action=='remove'){
						$(class_pdp).removeClass('active');
						$(class_item+'[data-id="'+pid+'"]').removeClass('active');
						if(window.location.href.indexOf('account/wishlist')!=-1){
							$('#wl-wrapper-'+pid).slideUp(500, function(){ $(this).remove(); });
						}
					}else{
						$(class_pdp).addClass('active');
						$(class_item+'[data-id="'+pid+'"]').addClass('active');
					}
					get_total_wishlist();
				}
			});
		});
	}
}

function is_in_wishlist(pid){
	$.get('/api/dataentities/WL/search?_fields=wishlistProducts&_where=(email='+profile_email+')',function(wishlist){
		if(wishlist.length){
			my_wishlist=JSON.parse(wishlist[0].wishlistProducts);
			if(typeof my_wishlist['p'+pid] !== 'undefined'){
				$(class_item+'[data-id="'+pid+'"]').addClass('active');
			}
		}
	});
}

function load_add_to_cart_wishlist(){
	$('body').off('click', '.wishlist__shelf-item-buy:not(.adding)').on('click', '.wishlist__shelf-item-buy', function (e){
		e.preventDefault();
		var that=$(this),
			container=that.closest('.wishlist__shelf-item-action'),
			skuId=that.attr('data-skuid'),
			qty=container.find('.wishlist__shelf-item-qty-input').val();
		$.ajax({
			url: '/checkout/cart/add?sku='+skuId+'&qty='+qty+'&seller=1&redirect=false&sc=1',
			beforeSend: function(){
				that.addClass('adding');
			},
			success: function(data){
				console.log(data);
				vtexjs.checkout.getOrderForm().done(function(orderForm){
					crearCarritoLightBox(orderForm, skuId);
				});
				that.removeClass('adding');
			}
		})
	});
	// Quantity
	$('body').on('change', '.wishlist__shelf-item-qty-input', function(){
		var qty=parseInt($(this).val());
		if(qty<=0 || isNaN(qty)){
			$(this).val(1);
		}
	});
	$('body').on('click', '.wishlist__shelf-item-qty-rest', function(e){
		e.preventDefault();
		var input_qty=$(this).parent().find('.wishlist__shelf-item-qty-input');
		var qty=parseInt(input_qty.val());
		if(!isNaN(qty)){
			if(qty<=1){
				input_qty.val(1);
			}else{
				qty--;
				input_qty.val(qty);
			}
		}else{
			input_qty.val(1);
		}
	});
	$('body').on('click', '.wishlist__shelf-item-qty-plus', function(e){
		e.preventDefault();
		var that 		=	$(this),
			input_qty 	=	that.parent().find('.wishlist__shelf-item-qty-input'),
			qty 		=	parseInt(input_qty.val()),
			max 		=	parseInt(input_qty.attr('data-neeeded'));
		if(!isNaN(qty)){
			qty++;
			console.log(qty, max);
			if(qty>max)
				qty=max
			input_qty.val(qty);
		}else{
			input_qty.val(1);
		}
	});
}