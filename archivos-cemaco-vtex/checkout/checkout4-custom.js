!function(a,b){function c(b,c,d){var f=[];return(b.reduction||b).filter(a.validity.settings.elementSupport).each(function(){c(this)?f.push(this):e(this,h(d,{field:i(this)}))}),b.reduction=a(f),b}function d(){a.validity.isValidating()&&(a.validity.report.errors++,a.validity.report.valid=!1)}function e(b,c){d(),a.validity.out.raise(a(b),c)}function f(b,c){d(),a.validity.out.raiseAggregate(b,c)}function g(a){var b=0;return a.each(function(){var a=parseFloat(this.value);b+=isNaN(a)?0:a}),b}function h(a,b){for(var c in b)b.hasOwnProperty(c)&&(a=a.replace(RegExp("#\\{"+c+"\\}","g"),b[c]));return j(a)}function i(b){var b=a(b),c=b.prop("id"),d=a.validity.settings.defaultFieldName;if(b.prop("title").length)d=b.prop("title");else if(/^([A-Z0-9][a-z]*)+$/.test(c))d=c.replace(/([A-Z0-9])[a-z]*/g," $&");else if(/^[a-z0-9]+(_[a-z0-9]+)*$/.test(c)){for(b=c.split("_"),c=0;c<b.length;++c)b[c]=j(b[c]);d=b.join(" ")}return a.trim(d)}function j(a){return a.substring?a.substring(0,1).toUpperCase()+a.substring(1,a.length):a}var k;a.validity={settings:a.extend({outputMode:"tooltip",scrollTo:!1,modalErrorsClickable:!0,defaultFieldName:"This field",elementSupport:":text, :password, textarea, select, :radio, :checkbox, input[type='hidden'], input[type='email']",argToString:function(a){return a.getDate?[a.getMonth()+1,a.getDate(),a.getFullYear()].join("/"):a+""},debugPrivates:!1},{}),patterns:{integer:/^\d+$/,date:/^((0?\d)|(1[012]))[\/-]([012]?\d|30|31)[\/-]\d{1,4}$/,email:/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i,usd:/^\$?((\d{1,3}(,\d{3})*)|\d+)(\.(\d{2})?)?$/,url:/^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,number:/^[+-]?(\d+(\.\d*)?|\.\d+)([Ee]-?\d+)?$/,zip:/^\d{5}(-\d{4})?$/,phone:/^[2-9]\d{2}-\d{3}-\d{4}$/,guid:/^(\{?([0-9a-fA-F]){8}-(([0-9a-fA-F]){4}-){3}([0-9a-fA-F]){12}\}?)$/,time12:/^((0?\d)|(1[012])):[0-5]\d?\s?[aApP]\.?[mM]\.?$/,time24:/^(20|21|22|23|[01]\d|\d)(([:][0-5]\d){1,2})$/,nonHtml:/^[^<>]*$/},messages:{require:"#{field} is required.",match:"#{field} is in an invalid format.",integer:"#{field} must be a positive, whole number.",date:"#{field} must be formatted as a date. (mm/dd/yyyy)",email:"#{field} must be formatted as an email.",usd:"#{field} must be formatted as a US Dollar amount.",url:"#{field} must be formatted as a URL.",number:"#{field} must be formatted as a number.",zip:"#{field} must be formatted as a zipcode ##### or #####-####.",phone:"#{field} must be formatted as a phone number ###-###-####.",guid:"#{field} must be formatted as a guid like {3F2504E0-4F89-11D3-9A0C-0305E82C3301}.",time24:"#{field} must be formatted as a 24 hour time: 23:00.",time12:"#{field} must be formatted as a 12 hour time: 12:00 AM/PM",lessThan:"#{field} must be less than #{max}.",lessThanOrEqualTo:"#{field} must be less than or equal to #{max}.",greaterThan:"#{field} must be greater than #{min}.",greaterThanOrEqualTo:"#{field} must be greater than or equal to #{min}.",range:"#{field} must be between #{min} and #{max}.",tooLong:"#{field} cannot be longer than #{max} characters.",tooShort:"#{field} cannot be shorter than #{min} characters.",nonHtml:"#{field} cannot contain HTML characters.",alphabet:"#{field} contains disallowed characters.",minCharClass:"#{field} cannot have more than #{min} #{charClass} characters.",maxCharClass:"#{field} cannot have less than #{min} #{charClass} characters.",equal:"Values don't match.",distinct:"A value was repeated.",sum:"Values don't add to #{sum}.",sumMax:"The sum of the values must be less than #{max}.",sumMin:"The sum of the values must be greater than #{min}.",radioChecked:"The selected value is not valid.",generic:"Invalid."},out:{start:function(){this.defer("start")},end:function(a){this.defer("end",a)},raise:function(a,b){this.defer("raise",a,b)},raiseAggregate:function(a,b){this.defer("raiseAggregate",a,b)},defer:function(b){var c=a.validity,c=c.outputs[c.settings.outputMode];c[b].apply(c,Array.prototype.slice.call(arguments,1))}},charClasses:{alphabetical:/\w/g,numeric:/\d/g,alphanumeric:/[A-Za-z0-9]/g,symbol:/[^A-Za-z0-9]/g},outputs:{},__private:b,setup:function(c){this.settings=a.extend(this.settings,c),this.__private=this.settings.debugPrivates?k:b},report:null,isValidating:function(){return!!this.report},start:function(){this.out.start(),this.report={errors:0,valid:!0}},end:function(){var a=this.report||{errors:0,valid:!0};return this.report=null,this.out.end(a),a},clear:function(){this.start(),this.end()}},a.fn.extend({validity:function(b){return this.each(function(){if("form"==this.tagName.toLowerCase()){var c=null;"string"==typeof b?c=function(){a(b).require()}:a.isFunction(b)&&(c=b),b&&a(this).bind("submit",function(){return a.validity.start(),c(),a.validity.end().valid})}})},require:function(b){return c(this,function(b){return!!a(b).val().length},b||a.validity.messages.require)},match:function(b,d){return d||(d=a.validity.messages.match,"string"==typeof b&&a.validity.messages[b]&&(d=a.validity.messages[b])),"string"==typeof b&&(b=a.validity.patterns[b]),c(this,a.isFunction(b)?function(a){return!a.value.length||b(a.value)}:function(a){return b.global&&(b.lastIndex=0),!a.value.length||b.test(a.value)},d)},range:function(b,d,e){return c(this,b.getTime&&d.getTime?function(a){return a=new Date(a.value),a>=new Date(b)&&a<=new Date(d)}:b.substring&&d.substring&&Big?function(a){return a=new Big(a.value),a.greaterThanOrEqualTo(new Big(b))&&a.lessThanOrEqualTo(new Big(d))}:function(a){return a=parseFloat(a.value),a>=b&&a<=d},e||h(a.validity.messages.range,{min:a.validity.settings.argToString(b),max:a.validity.settings.argToString(d)}))},greaterThan:function(b,d){return c(this,b.getTime?function(a){return new Date(a.value)>b}:b.substring&&Big?function(a){return new Big(a.value).greaterThan(new Big(b))}:function(a){return parseFloat(a.value)>b},d||h(a.validity.messages.greaterThan,{min:a.validity.settings.argToString(b)}))},greaterThanOrEqualTo:function(b,d){return c(this,b.getTime?function(a){return new Date(a.value)>=b}:b.substring&&Big?function(a){return new Big(a.value).greaterThanOrEqualTo(new Big(b))}:function(a){return parseFloat(a.value)>=b},d||h(a.validity.messages.greaterThanOrEqualTo,{min:a.validity.settings.argToString(b)}))},lessThan:function(b,d){return c(this,b.getTime?function(a){return new Date(a.value)<b}:b.substring&&Big?function(a){return new Big(a.value).lessThan(new Big(b))}:function(a){return parseFloat(a.value)<b},d||h(a.validity.messages.lessThan,{max:a.validity.settings.argToString(b)}))},lessThanOrEqualTo:function(b,d){return c(this,b.getTime?function(a){return new Date(a.value)<=b}:b.substring&&Big?function(a){return new Big(a.value).lessThanOrEqualTo(new Big(b))}:function(a){return parseFloat(a.value)<=b},d||h(a.validity.messages.lessThanOrEqualTo,{max:a.validity.settings.argToString(b)}))},maxLength:function(b,d){return c(this,function(a){return a.value.length<=b},d||h(a.validity.messages.tooLong,{max:b}))},minLength:function(b,d){return c(this,function(a){return a.value.length>=b},d||h(a.validity.messages.tooShort,{min:b}))},alphabet:function(b,d){var e=[];return c(this,function(a){for(var c=0;c<a.value.length;++c)if(b.indexOf(a.value.charAt(c))==-1)return e.push(a.value.charAt(c)),!1;return!0},d||h(a.validity.messages.alphabet,{chars:e.join(", ")}))},minCharClass:function(b,d,e){return"string"==typeof b&&(b=b.toLowerCase(),a.validity.charClasses[b]&&(b=a.validity.charClasses[b])),c(this,function(a){return(a.value.match(b)||[]).length>=d},e||h(a.validity.messages.minCharClass,{min:d,charClass:b}))},maxCharClass:function(b,d,e){return"string"==typeof b&&(b=b.toLowerCase(),a.validity.charClasses[b]&&(b=a.validity.charClasses[b])),c(this,function(a){return(a.value.match(b)||[]).length<=d},e||h(a.validity.messages.maxCharClass,{max:d,charClass:b}))},nonHtml:function(b){return c(this,function(b){return a.validity.patterns.nonHtml.test(b.value)},b||a.validity.messages.nonHtml)},equal:function(b,c){var d=(this.reduction||this).filter(a.validity.settings.elementSupport),e=function(a){return a},g=a.validity.messages.equal;if(d.length){a.isFunction(b)?(e=b,"string"==typeof c&&(g=c)):"string"==typeof b&&(g=b);var k,h=a.map(d,function(a){return e(a.value)}),i=h[0],j=!0;for(k in h)h[k]!=i&&(j=!1);j||(f(d,g),this.reduction=a([]))}return this},distinct:function(b,c){var d=(this.reduction||this).filter(a.validity.settings.elementSupport),e=function(a){return a},g=a.validity.messages.distinct,h=[],i=[],j=!0;if(d.length){a.isFunction(b)?(e=b,"string"==typeof c&&(g=c)):"string"==typeof b&&(g=b);for(var k=a.map(d,function(a){return e(a.value)}),l=0;l<k.length;++l)if(k[l].length){for(var m=0;m<h.length;++m)h[m]==k[l]&&(j=!1,i.push(k[l]));h.push(k[l])}if(!j){for(i=a.unique(i),h=0,j=i.length;h<j;++h)f(d.filter("[value='"+i[h]+"']"),g);this.reduction=a([])}}return this},sum:function(b,c){var d=(this.reduction||this).filter(a.validity.settings.elementSupport);return d.length&&b!=g(d)&&(f(d,c||h(a.validity.messages.sum,{sum:b})),this.reduction=a([])),this},sumMax:function(b,c){var d=(this.reduction||this).filter(a.validity.settings.elementSupport);return d.length&&b<g(d)&&(f(d,c||h(a.validity.messages.sumMax,{max:b})),this.reduction=a([])),this},sumMin:function(b,c){var d=(this.reduction||this).filter(a.validity.settings.elementSupport);return d.length&&b>g(d)&&(f(d,c||h(a.validity.messages.sumMin,{min:b})),this.reduction=a([])),this},radioChecked:function(b,c){var d=(this.reduction||this).filter(a.validity.settings.elementSupport);d.is(":radio")&&d.find(":checked").val()!=b&&f(d,c||a.validity.messages.radioChecked)},radioNotChecked:function(b,c){var d=(this.reduction||this).filter(a.validity.settings.elementSupport);d.is(":radio")&&d.filter(":checked").val()==b&&f(d,c||a.validity.messages.radioChecked)},checkboxChecked:function(b){var c=(this.reduction||this).filter(a.validity.settings.elementSupport);c.is(":checkbox")&&!c.is(":checked")&&f(c,b||a.validity.messages.radioChecked)},assert:function(b,d){var e=this.reduction||this;if(e.length){if(a.isFunction(b))return c(this,b,d||a.validity.messages.generic);b||(f(e,d||a.validity.messages.generic),this.reduction=a([]))}return this},fail:function(a){return this.assert(!1,a)}}),k={validate:c,addToReport:d,raiseError:e,raiseAggregateError:f,numericSum:g,format:h,infer:i,capitalize:j}}(jQuery),function(a){a.validity.outputs.tooltip={tooltipClass:"validity-tooltip",start:function(){a("."+a.validity.outputs.tooltip.tooltipClass).remove()},end:function(b){!b.valid&&a.validity.settings.scrollTo&&(document.body.scrollTop=a("."+a.validity.outputs.tooltip.tooltipClass).offset().top)},raise:function(b,c){var d=b.offset();d.left+=b.width()+18,d.top+=8,a('<div class="validity-tooltip">'+c+'<div class="validity-tooltip-outer"><div class="validity-tooltip-inner"></div></div></div>').click(function(){b.focus(),a(this).fadeOut()}).css(d).hide().appendTo("body").fadeIn()},raiseAggregate:function(a,b){a.length&&this.raise(a.filter(":last"),b)}}}(jQuery),function(a){function b(a){return a.attr("id").length?a.attr("id"):a.attr("name")}a.validity.outputs.label={cssClass:"error",start:function(){a("."+a.validity.outputs.label.cssClass).remove()},end:function(b){!b.valid&&a.validity.settings.scrollTo&&(location.hash=a("."+a.validity.outputs.label.cssClass+":eq(0)").attr("for"))},raise:function(c,d){var e="."+a.validity.outputs.label.cssClass+"[for='"+b(c)+"']";a(e).length?a(e).text(d):a("<label/>").attr("for",b(c)).addClass(a.validity.outputs.label.cssClass).text(d).click(function(){c.length&&c[0].select()}).insertAfter(c)},raiseAggregate:function(b,c){b.length&&this.raise(a(b.get(b.length-1)),c)}}}(jQuery),function(a){a.validity.outputs.modal={start:function(){a(".validity-modal-msg").remove()},end:function(b){!b.valid&&a.validity.settings.scrollTo&&(location.hash=a(".validity-modal-msg:eq(0)").attr("id"))},raise:function(b,c){if(b.length){var d=b.offset();b.get(0),d={left:parseInt(d.left+b.width()+4,10)+"px",top:parseInt(d.top-10,10)+"px"},a("<div/>").addClass("validity-modal-msg").css(d).text(c).click(a.validity.settings.modalErrorsClickable?function(){a(this).remove()}:null).appendTo("body")}},raiseAggregate:function(b,c){b.length&&this.raise(a(b.get(b.length-1)),c)}}}(jQuery),function(a){var b=[];a.validity.outputs.summary={start:function(){a(".validity-erroneous").removeClass("validity-erroneous"),b=[]},end:function(){if(a(".validity-summary-container").hide().find("ul").html(""),b.length){for(var c=0;c<b.length;++c)a("<li/>").text(b[c]).appendTo(".validity-summary-container ul");a(".validity-summary-container").show(),a.validity.settings.scrollTo&&(location.hash=a(".validity-erroneous:eq(0)").attr("id"))}},raise:function(a,c){b.push(c),a.addClass("validity-erroneous")},raiseAggregate:function(a,b){this.raise(a,b)},container:function(){document.write('<div class="validity-summary-container">The form didn\'t submit for the following reason(s):<ul></ul></div>')}}}(jQuery);

$(function(){
	var flag=0;
	var intervalOrderPlaced=setInterval(function(){
		console.log('intervalOrderPlaced');
		if($('.cconf-continue-button').length || $('.cconf-continue-button').is(':visible') || flag>100){
			clearInterval(intervalOrderPlaced);
			if($('.cconf-continue-button').length || $('.cconf-continue-button').is(':visible')){
				load_og();
				$('.cconf-continue-button').after('<a class="show-billing-modal fr mb2 ml3 w5-ns w-100 hover-no-underline dib link ba tc pv3 ph3 br2 bg-near-white hover-bg-light-gray b--light-silver near-black hover-near-black fw4" href="#"><span>Datos de facturación</span></a>');
				$('.cconf-summary').insertAfter('#app-container .ph3-ns > .cf > .cf.pv4-ns > .w-third-l');
				$('#app-container .ph3-ns > .cf > .cf.pv4-ns > .w-two-thirds-l').insertAfter('.cconf-payment');
				var margin_top_container=$('.cconf-product-table').closest('.w-two-thirds-l').height() - 350;
				if(margin_top_container<15){
					margin_top_container=15;
				}
				$('body').append('<style id="orderPlaced-styles">@media (min-width: 1024px){#app-container .cf.mt4.mt0-ns.mb3{margin-top:'+margin_top_container+'px;}}</style>');
			}
			change_texts();
			format_price();
			load_select_address();
		}
		flag++;
	},100);

	$('body').on('click', '.show-billing-modal', function(e){
		e.preventDefault();
		$('html').addClass('billing-modal');
	});
	setTimeout(function(){
		$('html').addClass('billing-modal');
	},3000);

	$('body').on('click', '.modal-billing__close, .js-close_modal', function(e){
        setTimeout(() => {
            close_modal();
        }, 500);
	});

	$('body').on('change', '#select-billing', function(){
		var that=$(this);
		if(that.val()!=''){
			var name=that.find('option:selected').attr('data-name'),
				nit=that.find('option:selected').attr('data-nit'),
				address=that.find('option:selected').attr('data-address');
			$('#nit').val(nit);
			$('#name').val(name);
			$('#address').val(address);
			$('label.error').remove();
		}
	});

	$(document).keydown(function(e) {
		if (e.keyCode == 27) {
			if($('.modal-billing').css('opacity'))
			close_modal();
		}
	});

	// Remove error messages
	$('body').on('focus', 'input, select', function(){
		$(this).closest('.form__input-wrapper').find('.error').remove();
	});

	// Send Form
	$('form').submit(function(e){
		$.validity.setup({ outputMode:"label" });
		e.preventDefault();
		var that=$(this);
		that.find('.error').remove();
		if(!that.hasClass('sending')){
			var id = that.attr('id');
			if(validate_ajax(id)){
				var datos = {};
                var datosfc = {};

				datos.email=$('.cconf-client-email').html();
                datosfc.email=$('.cconf-client-email').html();

				datos.document=$('#nit').val();
                datosfc.document=$('#nit').val();

				datos.address=$('#address').val();
                datosfc.address=$('#address').val();

				datos.name=$('#name').val();
                datosfc.name=$('#name').val();

				datos.orderid=$('#orderid').val();
				// console.log(datos);

				save_data(datos, datosfc);

			}
		}
		return false;
	});
});

//number of decimals, decimal, separator
Number.prototype.formatMoney = function(c, d, t){
var n = this,
	c = isNaN(c = Math.abs(c)) ? 2 : c,
	d = d == undefined ? "." : d,
	t = t == undefined ? "," : t,
	s = n < 0 ? "-" : "",
	i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))),
	j = (j = i.length) > 3 ? j % 3 : 0;
	return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
};

function format_price(){
	var selectors='.cconf-summary p.b--light-gray span.fr span:contains($), .cconf-payment span.mb1.db span:contains($), .cconf-product-table div.gray span:contains($)',
		currency_symbol='$',
		decimal='.',
		separator=',';
	$(selectors).each(function(index, item){
		var price=parseFloat($(this).html().replace(/\$/g, '').replace(/,/g, ''));
		price=currency_symbol+price.formatMoney(2, decimal, separator);
		$(this).html(price)
	});
}

function change_texts(){
	console.log('cahange texts');
	var selectors='#app-container .b--moon-gray .pa3 div span, .bg-light-gray span, tr.cconf-product .gray';
	$(selectors).each(function(index, item){
		var html=$(this).html(),
			txt=$(this).text()
		console.log(html);
		if(html.indexOf('En hasta')!=-1){
			html=html.replace('En hasta','Hasta');
			$(this).html(html);
		}
		if(html.indexOf('en hasta')!=-1){
			html=html.replace('en hasta','hasta');
			$(this).html(html);
		}
	});
}

function load_select_address(){
	var profile_email=$('strong.cconf-client-email').html();
	console.log(profile_email);
	$.get('/api/dataentities/FC/search?_fields=email,name,address,document&_where=(email='+profile_email+')',function(data){
		console.log(data);
		var options='';
		$.each(data, function(index, item){
			options+='<option data-name="'+item.name+'" data-nit="'+item.document+'" data-address="'+item.address+'">'+item.name+' - '+item.document+'</option>';
		});
		var msj='<br><p>Datos de facturación previamente guardados</p>';
		console.log(options);
		if(options!=''){
			options='<select id="select-billing"><option value="">Selecciona una opción</option>'+options+'</select>';
			console.log(options, $('#select-address').length);
			$('#select-address').html(msj+options);
		}
	});
}

function validate_ajax(id){
	$.validity.start();
	var nit = $('#'+id+' #nit').val();
	nit = nit.replace(/-/g,'');
	$('#'+id+' #nit').val(nit);
	$('#'+id+' #nit').require('Campo requerido').assert(validate_nit(nit), 'NIT invalido');
	$('#'+id+' #name').require('Campo requerido');
	$('#'+id+' #address').require('Campo requerido');
	var result = $.validity.end();
	return result.valid;
}
function validate_nit(nit){
	if(nit.length){
		var originalNit = nit,
		initialNit = String(originalNit).slice(0,-1), Number,
		nitToSum = Array.from(initialNit).reverse(),
		correctNit,
		sum,
		resultCheck;

		// Sum Operation
		(function(){
			var initialMultiplier = 2,
			numbersMultiplieds = nitToSum.map( (e) => {
				var multiplierElement = initialMultiplier++;
				return e * multiplierElement;
			} );
			sum = numbersMultiplieds.reduce( (a,b) => a + b );
		})();

		// Check Digit
		(function(){
			var checkNumber = 11,
			moduleNumber = sum % checkNumber;
			resultCheck = checkNumber - moduleNumber;
		})();

		// Correct NIT
		if ( resultCheck === 10 ){
			correctNit = initialNit + 'K'
		}
		else if( resultCheck === 11 ){
			correctNit = initialNit + '0'
		}
		else{
			correctNit = "" + initialNit + resultCheck
		}

		// Final Validation
		console.log(originalNit, correctNit)
		if (originalNit == correctNit){
			return true
		}
		else{
			return false
		}
	}
}

function save_data(datos, datosFC){
	$.ajax({
		url:'/api/dataentities/FE/documents',
		accept: 'application/vnd.vtex.ds.v10+json',
		contentType: 'application/json; charset=utf-8',
		crossDomain: true,
		type:'PUT',
		data: JSON.stringify(datos),
		beforeSend: function(){
			$('#billing-form').addClass('sending');
		},
		error:function(x,s){
			console.log(x);
			console.log(s);
			$('#billing-form').removeClass('sending');
		},
		success: function(data){
            $.get('/api/dataentities/FC/search?_fields=email,document&_where=(email='+datosFC.email+')',function(datosFacturacion){
                let nitsFactura = datosFacturacion.map( factura => {
                    return factura.document
                } )
                if ( nitsFactura.indexOf(datosFC.document)==-1 ){
                    //console.log('No existe esta información de facturación');
                    $.ajax({
                        url:'/api/dataentities/FC/documents',
                        accept: 'application/vnd.vtex.ds.v10+json',
                        contentType: 'application/json; charset=utf-8',
                        crossDomain: true,
                        type:'PUT',
                        data: JSON.stringify(datosFC),
                        beforeSend: function(){
                            console.log('sending');
                        },
                        error:function(x,s){
                            console.log(x);
                            console.log(s);
                            $('#billing-form').removeClass('sending');
                        },
                        success: function(data){
                            $('#billing-form').html('<h2 class="text-center">Información enviada con éxito</h2>');
                            $('#billing-form').removeClass('sending');
                            $('body').on('click', '.overlay-billing', function(e){
                                e.preventDefault();
                                close_modal();
                            });
                            setTimeout(function(){
                                close_modal();
                            },5000);
                        }
                    });
                }
                else{
                    //console.log('Ya existe esta información de facturación');
                    $('#billing-form').html('<h2 class="text-center">Información enviada con éxito</h2>');
                    $('#billing-form').removeClass('sending');
                    $('body').on('click', '.overlay-billing', function(e){
                        e.preventDefault();
                        close_modal();
                    });
                    setTimeout(function(){
                        close_modal();
                    },5000);
                }
            });
		}
	});
}

function load_og(){
	var search=window.location.search.replace('?','').split('&');
	$.each(search, function(i,item){
		if(item.indexOf('og=')!=-1){
			var orderid=item.replace('og=', '');
			$('#orderid').val(orderid+'-01');
			return false;
		}
	});
}

function close_modal(){
	$('html').removeClass('billing-modal');
}
