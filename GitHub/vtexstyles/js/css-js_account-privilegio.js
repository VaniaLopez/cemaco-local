// ----------------- Account Privilegio Validations ----------------- //
// Validity
!function(a,b){function c(b,c,d){var f=[];return(b.reduction||b).filter(a.validity.settings.elementSupport).each(function(){c(this)?f.push(this):e(this,h(d,{field:i(this)}))}),b.reduction=a(f),b}function d(){a.validity.isValidating()&&(a.validity.report.errors++,a.validity.report.valid=!1)}function e(b,c){d(),a.validity.out.raise(a(b),c)}function f(b,c){d(),a.validity.out.raiseAggregate(b,c)}function g(a){var b=0;return a.each(function(){var a=parseFloat(this.value);b+=isNaN(a)?0:a}),b}function h(a,b){for(var c in b)b.hasOwnProperty(c)&&(a=a.replace(RegExp("#\\{"+c+"\\}","g"),b[c]));return j(a)}function i(b){var b=a(b),c=b.prop("id"),d=a.validity.settings.defaultFieldName;if(b.prop("title").length)d=b.prop("title");else if(/^([A-Z0-9][a-z]*)+$/.test(c))d=c.replace(/([A-Z0-9])[a-z]*/g," $&");else if(/^[a-z0-9]+(_[a-z0-9]+)*$/.test(c)){for(b=c.split("_"),c=0;c<b.length;++c)b[c]=j(b[c]);d=b.join(" ")}return a.trim(d)}function j(a){return a.substring?a.substring(0,1).toUpperCase()+a.substring(1,a.length):a}var k;a.validity={settings:a.extend({outputMode:"tooltip",scrollTo:!1,modalErrorsClickable:!0,defaultFieldName:"This field",elementSupport:":text, :password, textarea, select, :radio, :checkbox, input[type='hidden'], input[type='email']",argToString:function(a){return a.getDate?[a.getMonth()+1,a.getDate(),a.getFullYear()].join("/"):a+""},debugPrivates:!1},{}),patterns:{integer:/^\d+$/,date:/^((0?\d)|(1[012]))[\/-]([012]?\d|30|31)[\/-]\d{1,4}$/,email:/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i,usd:/^\$?((\d{1,3}(,\d{3})*)|\d+)(\.(\d{2})?)?$/,url:/^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,number:/^[+-]?(\d+(\.\d*)?|\.\d+)([Ee]-?\d+)?$/,zip:/^\d{5}(-\d{4})?$/,phone:/^[2-9]\d{2}-\d{3}-\d{4}$/,guid:/^(\{?([0-9a-fA-F]){8}-(([0-9a-fA-F]){4}-){3}([0-9a-fA-F]){12}\}?)$/,time12:/^((0?\d)|(1[012])):[0-5]\d?\s?[aApP]\.?[mM]\.?$/,time24:/^(20|21|22|23|[01]\d|\d)(([:][0-5]\d){1,2})$/,nonHtml:/^[^<>]*$/},messages:{require:"#{field} is required.",match:"#{field} is in an invalid format.",integer:"#{field} must be a positive, whole number.",date:"#{field} must be formatted as a date. (mm/dd/yyyy)",email:"#{field} must be formatted as an email.",usd:"#{field} must be formatted as a US Dollar amount.",url:"#{field} must be formatted as a URL.",number:"#{field} must be formatted as a number.",zip:"#{field} must be formatted as a zipcode ##### or #####-####.",phone:"#{field} must be formatted as a phone number ###-###-####.",guid:"#{field} must be formatted as a guid like {3F2504E0-4F89-11D3-9A0C-0305E82C3301}.",time24:"#{field} must be formatted as a 24 hour time: 23:00.",time12:"#{field} must be formatted as a 12 hour time: 12:00 AM/PM",lessThan:"#{field} must be less than #{max}.",lessThanOrEqualTo:"#{field} must be less than or equal to #{max}.",greaterThan:"#{field} must be greater than #{min}.",greaterThanOrEqualTo:"#{field} must be greater than or equal to #{min}.",range:"#{field} must be between #{min} and #{max}.",tooLong:"#{field} cannot be longer than #{max} characters.",tooShort:"#{field} cannot be shorter than #{min} characters.",nonHtml:"#{field} cannot contain HTML characters.",alphabet:"#{field} contains disallowed characters.",minCharClass:"#{field} cannot have more than #{min} #{charClass} characters.",maxCharClass:"#{field} cannot have less than #{min} #{charClass} characters.",equal:"Values don't match.",distinct:"A value was repeated.",sum:"Values don't add to #{sum}.",sumMax:"The sum of the values must be less than #{max}.",sumMin:"The sum of the values must be greater than #{min}.",radioChecked:"The selected value is not valid.",generic:"Invalid."},out:{start:function(){this.defer("start")},end:function(a){this.defer("end",a)},raise:function(a,b){this.defer("raise",a,b)},raiseAggregate:function(a,b){this.defer("raiseAggregate",a,b)},defer:function(b){var c=a.validity,c=c.outputs[c.settings.outputMode];c[b].apply(c,Array.prototype.slice.call(arguments,1))}},charClasses:{alphabetical:/\w/g,numeric:/\d/g,alphanumeric:/[A-Za-z0-9]/g,symbol:/[^A-Za-z0-9]/g},outputs:{},__private:b,setup:function(c){this.settings=a.extend(this.settings,c),this.__private=this.settings.debugPrivates?k:b},report:null,isValidating:function(){return!!this.report},start:function(){this.out.start(),this.report={errors:0,valid:!0}},end:function(){var a=this.report||{errors:0,valid:!0};return this.report=null,this.out.end(a),a},clear:function(){this.start(),this.end()}},a.fn.extend({validity:function(b){return this.each(function(){if("form"==this.tagName.toLowerCase()){var c=null;"string"==typeof b?c=function(){a(b).require()}:a.isFunction(b)&&(c=b),b&&a(this).bind("submit",function(){return a.validity.start(),c(),a.validity.end().valid})}})},require:function(b){return c(this,function(b){return!!a(b).val().length},b||a.validity.messages.require)},match:function(b,d){return d||(d=a.validity.messages.match,"string"==typeof b&&a.validity.messages[b]&&(d=a.validity.messages[b])),"string"==typeof b&&(b=a.validity.patterns[b]),c(this,a.isFunction(b)?function(a){return!a.value.length||b(a.value)}:function(a){return b.global&&(b.lastIndex=0),!a.value.length||b.test(a.value)},d)},range:function(b,d,e){return c(this,b.getTime&&d.getTime?function(a){return a=new Date(a.value),a>=new Date(b)&&a<=new Date(d)}:b.substring&&d.substring&&Big?function(a){return a=new Big(a.value),a.greaterThanOrEqualTo(new Big(b))&&a.lessThanOrEqualTo(new Big(d))}:function(a){return a=parseFloat(a.value),a>=b&&a<=d},e||h(a.validity.messages.range,{min:a.validity.settings.argToString(b),max:a.validity.settings.argToString(d)}))},greaterThan:function(b,d){return c(this,b.getTime?function(a){return new Date(a.value)>b}:b.substring&&Big?function(a){return new Big(a.value).greaterThan(new Big(b))}:function(a){return parseFloat(a.value)>b},d||h(a.validity.messages.greaterThan,{min:a.validity.settings.argToString(b)}))},greaterThanOrEqualTo:function(b,d){return c(this,b.getTime?function(a){return new Date(a.value)>=b}:b.substring&&Big?function(a){return new Big(a.value).greaterThanOrEqualTo(new Big(b))}:function(a){return parseFloat(a.value)>=b},d||h(a.validity.messages.greaterThanOrEqualTo,{min:a.validity.settings.argToString(b)}))},lessThan:function(b,d){return c(this,b.getTime?function(a){return new Date(a.value)<b}:b.substring&&Big?function(a){return new Big(a.value).lessThan(new Big(b))}:function(a){return parseFloat(a.value)<b},d||h(a.validity.messages.lessThan,{max:a.validity.settings.argToString(b)}))},lessThanOrEqualTo:function(b,d){return c(this,b.getTime?function(a){return new Date(a.value)<=b}:b.substring&&Big?function(a){return new Big(a.value).lessThanOrEqualTo(new Big(b))}:function(a){return parseFloat(a.value)<=b},d||h(a.validity.messages.lessThanOrEqualTo,{max:a.validity.settings.argToString(b)}))},maxLength:function(b,d){return c(this,function(a){return a.value.length<=b},d||h(a.validity.messages.tooLong,{max:b}))},minLength:function(b,d){return c(this,function(a){return a.value.length>=b},d||h(a.validity.messages.tooShort,{min:b}))},alphabet:function(b,d){var e=[];return c(this,function(a){for(var c=0;c<a.value.length;++c)if(b.indexOf(a.value.charAt(c))==-1)return e.push(a.value.charAt(c)),!1;return!0},d||h(a.validity.messages.alphabet,{chars:e.join(", ")}))},minCharClass:function(b,d,e){return"string"==typeof b&&(b=b.toLowerCase(),a.validity.charClasses[b]&&(b=a.validity.charClasses[b])),c(this,function(a){return(a.value.match(b)||[]).length>=d},e||h(a.validity.messages.minCharClass,{min:d,charClass:b}))},maxCharClass:function(b,d,e){return"string"==typeof b&&(b=b.toLowerCase(),a.validity.charClasses[b]&&(b=a.validity.charClasses[b])),c(this,function(a){return(a.value.match(b)||[]).length<=d},e||h(a.validity.messages.maxCharClass,{max:d,charClass:b}))},nonHtml:function(b){return c(this,function(b){return a.validity.patterns.nonHtml.test(b.value)},b||a.validity.messages.nonHtml)},equal:function(b,c){var d=(this.reduction||this).filter(a.validity.settings.elementSupport),e=function(a){return a},g=a.validity.messages.equal;if(d.length){a.isFunction(b)?(e=b,"string"==typeof c&&(g=c)):"string"==typeof b&&(g=b);var k,h=a.map(d,function(a){return e(a.value)}),i=h[0],j=!0;for(k in h)h[k]!=i&&(j=!1);j||(f(d,g),this.reduction=a([]))}return this},distinct:function(b,c){var d=(this.reduction||this).filter(a.validity.settings.elementSupport),e=function(a){return a},g=a.validity.messages.distinct,h=[],i=[],j=!0;if(d.length){a.isFunction(b)?(e=b,"string"==typeof c&&(g=c)):"string"==typeof b&&(g=b);for(var k=a.map(d,function(a){return e(a.value)}),l=0;l<k.length;++l)if(k[l].length){for(var m=0;m<h.length;++m)h[m]==k[l]&&(j=!1,i.push(k[l]));h.push(k[l])}if(!j){for(i=a.unique(i),h=0,j=i.length;h<j;++h)f(d.filter("[value='"+i[h]+"']"),g);this.reduction=a([])}}return this},sum:function(b,c){var d=(this.reduction||this).filter(a.validity.settings.elementSupport);return d.length&&b!=g(d)&&(f(d,c||h(a.validity.messages.sum,{sum:b})),this.reduction=a([])),this},sumMax:function(b,c){var d=(this.reduction||this).filter(a.validity.settings.elementSupport);return d.length&&b<g(d)&&(f(d,c||h(a.validity.messages.sumMax,{max:b})),this.reduction=a([])),this},sumMin:function(b,c){var d=(this.reduction||this).filter(a.validity.settings.elementSupport);return d.length&&b>g(d)&&(f(d,c||h(a.validity.messages.sumMin,{min:b})),this.reduction=a([])),this},radioChecked:function(b,c){var d=(this.reduction||this).filter(a.validity.settings.elementSupport);d.is(":radio")&&d.find(":checked").val()!=b&&f(d,c||a.validity.messages.radioChecked)},radioNotChecked:function(b,c){var d=(this.reduction||this).filter(a.validity.settings.elementSupport);d.is(":radio")&&d.filter(":checked").val()==b&&f(d,c||a.validity.messages.radioChecked)},checkboxChecked:function(b){var c=(this.reduction||this).filter(a.validity.settings.elementSupport);c.is(":checkbox")&&!c.is(":checked")&&f(c,b||a.validity.messages.radioChecked)},assert:function(b,d){var e=this.reduction||this;if(e.length){if(a.isFunction(b))return c(this,b,d||a.validity.messages.generic);b||(f(e,d||a.validity.messages.generic),this.reduction=a([]))}return this},fail:function(a){return this.assert(!1,a)}}),k={validate:c,addToReport:d,raiseError:e,raiseAggregateError:f,numericSum:g,format:h,infer:i,capitalize:j}}(jQuery),function(a){a.validity.outputs.tooltip={tooltipClass:"validity-tooltip",start:function(){a("."+a.validity.outputs.tooltip.tooltipClass).remove()},end:function(b){!b.valid&&a.validity.settings.scrollTo&&(document.body.scrollTop=a("."+a.validity.outputs.tooltip.tooltipClass).offset().top)},raise:function(b,c){var d=b.offset();d.left+=b.width()+18,d.top+=8,a('<div class="validity-tooltip">'+c+'<div class="validity-tooltip-outer"><div class="validity-tooltip-inner"></div></div></div>').click(function(){b.focus(),a(this).fadeOut()}).css(d).hide().appendTo("body").fadeIn()},raiseAggregate:function(a,b){a.length&&this.raise(a.filter(":last"),b)}}}(jQuery),function(a){function b(a){return a.attr("id").length?a.attr("id"):a.attr("name")}a.validity.outputs.label={cssClass:"error",start:function(){a("."+a.validity.outputs.label.cssClass).remove()},end:function(b){!b.valid&&a.validity.settings.scrollTo&&(location.hash=a("."+a.validity.outputs.label.cssClass+":eq(0)").attr("for"))},raise:function(c,d){var e="."+a.validity.outputs.label.cssClass+"[for='"+b(c)+"']";a(e).length?a(e).text(d):a("<label/>").attr("for",b(c)).addClass(a.validity.outputs.label.cssClass).text(d).click(function(){c.length&&c[0].select()}).insertAfter(c)},raiseAggregate:function(b,c){b.length&&this.raise(a(b.get(b.length-1)),c)}}}(jQuery),function(a){a.validity.outputs.modal={start:function(){a(".validity-modal-msg").remove()},end:function(b){!b.valid&&a.validity.settings.scrollTo&&(location.hash=a(".validity-modal-msg:eq(0)").attr("id"))},raise:function(b,c){if(b.length){var d=b.offset();b.get(0),d={left:parseInt(d.left+b.width()+4,10)+"px",top:parseInt(d.top-10,10)+"px"},a("<div/>").addClass("validity-modal-msg").css(d).text(c).click(a.validity.settings.modalErrorsClickable?function(){a(this).remove()}:null).appendTo("body")}},raiseAggregate:function(b,c){b.length&&this.raise(a(b.get(b.length-1)),c)}}}(jQuery),function(a){var b=[];a.validity.outputs.summary={start:function(){a(".validity-erroneous").removeClass("validity-erroneous"),b=[]},end:function(){if(a(".validity-summary-container").hide().find("ul").html(""),b.length){for(var c=0;c<b.length;++c)a("<li/>").text(b[c]).appendTo(".validity-summary-container ul");a(".validity-summary-container").show(),a.validity.settings.scrollTo&&(location.hash=a(".validity-erroneous:eq(0)").attr("id"))}},raise:function(a,c){b.push(c),a.addClass("validity-erroneous")},raiseAggregate:function(a,b){this.raise(a,b)},container:function(){document.write('<div class="validity-summary-container">The form didn\'t submit for the following reason(s):<ul></ul></div>')}}}(jQuery);
var dataToPost={
	"Cta":						"",
	"Nombres":					"",
	"Apellidos":				"",
	"Mail":						"",
	"Sexo":						"",
	"Nacimiento":				"",
	"EstadoCivil":				"",
	"TipoID":					"0",
	"Identificacion":			"",
	"PaisPasaporte":			"",
	"NIT":						"",
	"NombreFactura":			"",
	"AsociarNIT":				"",
	"NIT2":						"",
	"NombreFactura2":			"",
	"AsociarNIT2":				"",
	"PaisPostal":				"",
	"DeptoPostal":				"0",
	"MuniPostal":				"0",
	"ZonaPostal":				"",
	"DireccionPostal":			"",
	"PaisResidencia":			"GTM",
	"DeptoResidencia":			"",
	"MuniResidencia":			"",
	"ZonaResidencia":			"",
	"DireccionResidencia":		"",
	"Vivesen":					"",
	"PaisFact":					"",
	"DeptoFact":				"0",
	"MuniFact":					"0",
	"ZonaFact":					"",
	"DireccionFact":			"",
	"Telefono1":				"",
	"Telefono2":				"",
	"Telefono3":				""
},
userId;
$.get('/no-cache/profileSystem/getProfile',function(data){
	userId=data.UserId;
	dataToPost.Cta=userId;
	dataToPost.Nombres=data.FirstName;
	dataToPost.Apellidos=data.LastName;
	dataToPost.Mail=data.Email;
	$('#name').val(data.FirstName);
	$('#lastname').val(data.LastName);
	$('#email').val(data.Email).prop('readonly', true);
});
$(function(){
	$('body').on('change keyup keydown', '#Identificacion', function(e){
		$('#Identificacion').val($('#Identificacion').val().replace(/[^a-z0-9]/gi,''));
	});
	$.validity.setup({ outputMode:"label" });
	$('#form-create-priv:not(.sending)').on('submit', function(e){
		e.preventDefault();
		var that=$(this);
		var id=that.attr('id');
		$('.error').remove();
		if(validate_ajax(id)){
			let nombre = $('#name').val();
			let apellido = $('#lastname').val();
			let nombreTarjeta = $('#nameCard').val();
            let direccionResidencia = $('#address').val();
            //Funcion quitar acentos
			function quitarAcentos(cadena){
				const acentos = {
						'á':'a','é':'e','í':'i','ó':'o','ú':'u',
						'à':'a','é':'e','ì':'i','ò':'o','ù':'u',
						'À':'A','È':'E','Ì':'I','Ò':'O','Ù':'U',
						'\u00C1':'A','\u00C9':'E','\u00CD':'I','\u00D3':'O','\u00DA':'U', '\u00C7': 'C'
					};
				return cadena.split('').map( letra => acentos[letra] || letra).join('').toString();
			}
			dataToPost.Nombres=nombre.toUpperCase()
            dataToPost.Nombres = quitarAcentos(dataToPost.Nombres)
			dataToPost.Apellidos = apellido.toUpperCase();
			dataToPost.Apellidos = quitarAcentos(dataToPost.Apellidos)
			dataToPost.EstadoCivil=$('#civil').val();
			dataToPost.Nacimiento=$('#birthdate-alt').val();
			dataToPost.Sexo=$('#gender').val();
			dataToPost.Telefono1=$('#phone').val();
			dataToPost.Mail=$('#email').val();
			dataToPost.NombreFactura= nombreTarjeta.toUpperCase();
			dataToPost.NombreFactura = quitarAcentos(dataToPost.NombreFactura);
            dataToPost.DireccionResidencia = quitarAcentos(direccionResidencia.toUpperCase());
			dataToPost.DeptoResidencia=$('#depto-input').val();
			dataToPost.MuniResidencia=$('#municipality-input').val();
			dataToPost.ZonaResidencia=$('#zone-input').val();
			dataToPost.TipoID=$('#TipoID').val();
			dataToPost.Identificacion=$('#Identificacion').val();
			if($('#NIT').val().length){
				dataToPost.NIT=$('#NIT').val();
			}
			console.log(dataToPost);
			$.ajax({
				type: 'POST',
				url: 'https://privivtex.cemaco.com:4443/apiecommercedev/api/privi/nuevoasociado/'+userId,
				data: JSON.stringify(dataToPost),
				beforeSend: function(){
					that.addClass('sending');
				},
				success: function(data){
					console.log(data);
					if(typeof data.Result !== 'undefined' && data.Result.Res){
						$('#priv__create').html('<h2 class="text-center priv__state-subtitle-black">\u00A1Cuenta privilegio creada con \u00C9xito!<br>Tarjeta: '+data.Data.Tarjeta+'</h2>');
					}else{
						var msj_error='Error PRV0003';
						if(typeof data.Result !== 'undefined' && data.Result.Res==false){
							msj_error='Hubo un error: Error PRV0004, '+data.Result.Mensaje;
						}else if(typeof data.Message !== 'undefined'){
							msj_error='Hubo un error: Error PRV0005, '+data.Message;
						}
						$('h2.priv__state-subtitle-black').after('<div class="error">'+msj_error+'</div>');
						$('.error').fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
					}
				},
				error: function(xmlHttpRequest, textStatus){
					console.log(textStatus);
					that.find('button').before('<div class="error">'+textStatus+'</div>');
					that.find('error').fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
					that.removeClass('sending');
				}
			});
		}
	});
});
function validate_ajax(id){
	console.log(id);
	$.validity.start();
	$('#'+id+' #name').require('Campo requerido');
	$('#'+id+' #lastname').require('Campo requerido');
	$('#'+id+' #civil').require('Campo requerido');
	$('#'+id+' #birthdate').require('Campo requerido');
	$('#'+id+' #gender').require('Campo requerido');
	$('#'+id+' #phone').require('Campo requerido').minLength(8,'Deben ser 8 dígitos').maxLength(8,'Deben ser 8 dígitos');
	$('#'+id+' #email').require('Campo requerido').match('email','Debe tener formato de email, ej. nombre@email.com');
	$('#'+id+' #nameCard').require('Campo requerido');
	$('#'+id+' #address').require('Campo requerido');
	$('#'+id+' #depto').require('Campo requerido');
	$('#'+id+' #municipality').require('Campo requerido');
	$('#'+id+' #zone').require('Campo requerido');
	$('#'+id+' #TipoID').require('Campo requerido');
	if($('#'+id+' #TipoID').val()=='2'){
		$('#'+id+' #Identificacion').require('Campo requerido').minLength(13,'Deben ser 13 dígitos').maxLength(13,'Deben ser 13 dígitos');
	}else if($('#'+id+' #TipoID').val()=='3'){
		$('#'+id+' #Identificacion').require('Campo requerido').minLength(5,'Deben ser mínimo 5 caracteres').maxLength(30,'Deben ser máximo 30 caracteres');
	}
	if($('#'+id+' #NIT').val().length){
		$('#'+id+' #NIT').assert(validate_nit(), 'NIT invalido');
	}
	// $('#'+id+' #dpi').require('Campo requerido').minLength(13,'Deben ser 13 dígitos').maxLength(13,'Deben ser 13 dígitos');
	$('#'+id+' #terms-check').assert( validate_privacy(), 'Debes aceptar los términos y condiciones');
	var result = $.validity.end();
	return result.valid;
}
function validate_privacy(){
	if($('#terms-check:checked').length==0){
		return false;
	}else{
		return true;
	}
}
function validate_nit(nit){
	var nit=$('#NIT').val();
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
// ----------------- END Account Privilegio Validations ----------------- //
// --------------------------------------------------------------------- //
// --------------------------------------------------------------------- //
// --------------------------------------------------------------------- //
// ----------------- Account Privilegio Datepicker ----------------- //
$(function(){
	jq2.datepicker.regional['es'] = {
		closeText: "Cerrar",
		prevText: "&#x3C;Ant",
		nextText: "Sig&#x3E;",
		currentText: "Hoy",
		monthNames: [ "Enero","Febrero","Marzo","Abril","Mayo","Junio",
		"Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre" ],
		monthNamesShort: [ "ene","feb","mar","abr","may","jun",
		"jul","ago","sep","oct","nov","dic" ],
		dayNames: [ "domingo","lunes","martes","miércoles","jueves","viernes","sábado" ],
		dayNamesShort: [ "dom","lun","mar","mié","jue","vie","sáb" ],
		dayNamesMin: [ "Do","Lu","Ma","Mi","Ju","Vi","Sá" ],
		weekHeader: "Sm",
		dateFormat: "dd/mm/yy",
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ""
	};
	jq2.datepicker.setDefaults( jq2.datepicker.regional['es'] );

	// datepicker create list
	jq2('#birthdate').prop('readonly', true).datepicker({
		dateFormat: "dd/mm/yy",
		altField: "#birthdate-alt",
		altFormat: "yymmdd",
		changeMonth: true,
		changeYear: true,
		yearRange: '1925:2000',
		defaultDate: "-30y",
		maxDate: -365
	});
});
// ----------------- END Account Privilegio Datepicker ----------------- //
// --------------------------------------------------------------------- //
// --------------------------------------------------------------------- //
// --------------------------------------------------------------------- //
// ----------------- Account Privilegio Address ----------------- //
var countryRegions = {"config":{"show_all_regions":true,"regions_required":["AT","CA","EE","FI","FR","DE","LV","LT","RO","ES","CH","US"]},"ES":{"130":{"code":"A Coru\u0441a","name":"A Coru\u00f1a"},"131":{"code":"Alava","name":"Alava"},"132":{"code":"Albacete","name":"Albacete"},"133":{"code":"Alicante","name":"Alicante"},"134":{"code":"Almeria","name":"Almeria"},"135":{"code":"Asturias","name":"Asturias"},"136":{"code":"Avila","name":"Avila"},"137":{"code":"Badajoz","name":"Badajoz"},"138":{"code":"Baleares","name":"Baleares"},"139":{"code":"Barcelona","name":"Barcelona"},"140":{"code":"Burgos","name":"Burgos"},"141":{"code":"Caceres","name":"Caceres"},"142":{"code":"Cadiz","name":"Cadiz"},"143":{"code":"Cantabria","name":"Cantabria"},"144":{"code":"Castellon","name":"Castellon"},"145":{"code":"Ceuta","name":"Ceuta"},"146":{"code":"Ciudad Real","name":"Ciudad Real"},"147":{"code":"Cordoba","name":"Cordoba"},"148":{"code":"Cuenca","name":"Cuenca"},"149":{"code":"Girona","name":"Girona"},"150":{"code":"Granada","name":"Granada"},"151":{"code":"Guadalajara","name":"Guadalajara"},"152":{"code":"Guipuzcoa","name":"Guipuzcoa"},"153":{"code":"Huelva","name":"Huelva"},"154":{"code":"Huesca","name":"Huesca"},"155":{"code":"Jaen","name":"Jaen"},"156":{"code":"La Rioja","name":"La Rioja"},"157":{"code":"Las Palmas","name":"Las Palmas"},"158":{"code":"Leon","name":"Leon"},"159":{"code":"Lleida","name":"Lleida"},"160":{"code":"Lugo","name":"Lugo"},"161":{"code":"Madrid","name":"Madrid"},"162":{"code":"Malaga","name":"Malaga"},"163":{"code":"Melilla","name":"Melilla"},"164":{"code":"Murcia","name":"Murcia"},"165":{"code":"Navarra","name":"Navarra"},"166":{"code":"Ourense","name":"Ourense"},"167":{"code":"Palencia","name":"Palencia"},"168":{"code":"Pontevedra","name":"Pontevedra"},"169":{"code":"Salamanca","name":"Salamanca"},"170":{"code":"Santa Cruz de Tenerife","name":"Santa Cruz de Tenerife"},"171":{"code":"Segovia","name":"Segovia"},"172":{"code":"Sevilla","name":"Sevilla"},"173":{"code":"Soria","name":"Soria"},"174":{"code":"Tarragona","name":"Tarragona"},"175":{"code":"Teruel","name":"Teruel"},"176":{"code":"Toledo","name":"Toledo"},"177":{"code":"Valencia","name":"Valencia"},"178":{"code":"Valladolid","name":"Valladolid"},"179":{"code":"Vizcaya","name":"Vizcaya"},"180":{"code":"Zamora","name":"Zamora"},"181":{"code":"Zaragoza","name":"Zaragoza"}},"CH":{"104":{"code":"AG","name":"Aargau"},"106":{"code":"AR","name":"Appenzell Ausserrhoden"},"105":{"code":"AI","name":"Appenzell Innerrhoden"},"108":{"code":"BL","name":"Basel-Landschaft"},"109":{"code":"BS","name":"Basel-Stadt"},"107":{"code":"BE","name":"Bern"},"110":{"code":"FR","name":"Freiburg"},"111":{"code":"GE","name":"Genf"},"112":{"code":"GL","name":"Glarus"},"113":{"code":"GR","name":"Graub\u00fcnden"},"114":{"code":"JU","name":"Jura"},"115":{"code":"LU","name":"Luzern"},"116":{"code":"NE","name":"Neuenburg"},"117":{"code":"NW","name":"Nidwalden"},"118":{"code":"OW","name":"Obwalden"},"120":{"code":"SH","name":"Schaffhausen"},"122":{"code":"SZ","name":"Schwyz"},"121":{"code":"SO","name":"Solothurn"},"119":{"code":"SG","name":"St. Gallen"},"124":{"code":"TI","name":"Tessin"},"123":{"code":"TG","name":"Thurgau"},"125":{"code":"UR","name":"Uri"},"126":{"code":"VD","name":"Waadt"},"127":{"code":"VS","name":"Wallis"},"128":{"code":"ZG","name":"Zug"},"129":{"code":"ZH","name":"Z\u00fcrich"}},"LV":{"471":{"code":"\u0100da\u017eu novads","name":"\u0100da\u017eu novads"},"366":{"code":"Aglonas novads","name":"Aglonas novads"},"367":{"code":"LV-AI","name":"Aizkraukles novads"},"368":{"code":"Aizputes novads","name":"Aizputes novads"},"369":{"code":"Akn\u012bstes novads","name":"Akn\u012bstes novads"},"370":{"code":"Alojas novads","name":"Alojas novads"},"371":{"code":"Alsungas novads","name":"Alsungas novads"},"372":{"code":"LV-AL","name":"Al\u016bksnes novads"},"373":{"code":"Amatas novads","name":"Amatas novads"},"374":{"code":"Apes novads","name":"Apes novads"},"375":{"code":"Auces novads","name":"Auces novads"},"376":{"code":"Bab\u012btes novads","name":"Bab\u012btes novads"},"377":{"code":"Baldones novads","name":"Baldones novads"},"378":{"code":"Baltinavas novads","name":"Baltinavas novads"},"379":{"code":"LV-BL","name":"Balvu novads"},"380":{"code":"LV-BU","name":"Bauskas novads"},"381":{"code":"Bever\u012bnas novads","name":"Bever\u012bnas novads"},"382":{"code":"Broc\u0113nu novads","name":"Broc\u0113nu novads"},"383":{"code":"Burtnieku novads","name":"Burtnieku novads"},"384":{"code":"Carnikavas novads","name":"Carnikavas novads"},"387":{"code":"LV-CE","name":"C\u0113su novads"},"385":{"code":"Cesvaines novads","name":"Cesvaines novads"},"386":{"code":"Ciblas novads","name":"Ciblas novads"},"388":{"code":"Dagdas novads","name":"Dagdas novads"},"355":{"code":"LV-DGV","name":"Daugavpils"},"389":{"code":"LV-DA","name":"Daugavpils novads"},"390":{"code":"LV-DO","name":"Dobeles novads"},"391":{"code":"Dundagas novads","name":"Dundagas novads"},"392":{"code":"Durbes novads","name":"Durbes novads"},"393":{"code":"Engures novads","name":"Engures novads"},"472":{"code":"\u0112rg\u013cu novads","name":"\u0112rg\u013cu novads"},"394":{"code":"Garkalnes novads","name":"Garkalnes novads"},"395":{"code":"Grobi\u0146as novads","name":"Grobi\u0146as novads"},"396":{"code":"LV-GU","name":"Gulbenes novads"},"397":{"code":"Iecavas novads","name":"Iecavas novads"},"398":{"code":"Ik\u0161\u0137iles novads","name":"Ik\u0161\u0137iles novads"},"399":{"code":"Il\u016bkstes novads","name":"Il\u016bkstes novads"},"400":{"code":"In\u010dukalna novads","name":"In\u010dukalna novads"},"401":{"code":"Jaunjelgavas novads","name":"Jaunjelgavas novads"},"402":{"code":"Jaunpiebalgas novads","name":"Jaunpiebalgas novads"},"403":{"code":"Jaunpils novads","name":"Jaunpils novads"},"357":{"code":"J\u0113kabpils","name":"J\u0113kabpils"},"405":{"code":"LV-JK","name":"J\u0113kabpils novads"},"356":{"code":"LV-JEL","name":"Jelgava"},"404":{"code":"LV-JL","name":"Jelgavas novads"},"358":{"code":"LV-JUR","name":"J\u016brmala"},"406":{"code":"Kandavas novads","name":"Kandavas novads"},"412":{"code":"K\u0101rsavas novads","name":"K\u0101rsavas novads"},"473":{"code":"\u0136eguma novads","name":"\u0136eguma novads"},"474":{"code":"\u0136ekavas novads","name":"\u0136ekavas novads"},"407":{"code":"Kokneses novads","name":"Kokneses novads"},"410":{"code":"LV-KR","name":"Kr\u0101slavas novads"},"408":{"code":"Krimuldas novads","name":"Krimuldas novads"},"409":{"code":"Krustpils novads","name":"Krustpils novads"},"411":{"code":"LV-KU","name":"Kuld\u012bgas novads"},"413":{"code":"Lielv\u0101rdes novads","name":"Lielv\u0101rdes novads"},"359":{"code":"LV-LPX","name":"Liep\u0101ja"},"360":{"code":"LV-LE","name":"Liep\u0101jas novads"},"417":{"code":"L\u012bgatnes novads","name":"L\u012bgatnes novads"},"414":{"code":"LV-LM","name":"Limba\u017eu novads"},"418":{"code":"L\u012bv\u0101nu novads","name":"L\u012bv\u0101nu novads"},"415":{"code":"Lub\u0101nas novads","name":"Lub\u0101nas novads"},"416":{"code":"LV-LU","name":"Ludzas novads"},"419":{"code":"LV-MA","name":"Madonas novads"},"421":{"code":"M\u0101lpils novads","name":"M\u0101lpils novads"},"422":{"code":"M\u0101rupes novads","name":"M\u0101rupes novads"},"420":{"code":"Mazsalacas novads","name":"Mazsalacas novads"},"423":{"code":"Nauk\u0161\u0113nu novads","name":"Nauk\u0161\u0113nu novads"},"424":{"code":"Neretas novads","name":"Neretas novads"},"425":{"code":"N\u012bcas novads","name":"N\u012bcas novads"},"426":{"code":"LV-OG","name":"Ogres novads"},"427":{"code":"Olaines novads","name":"Olaines novads"},"428":{"code":"Ozolnieku novads","name":"Ozolnieku novads"},"432":{"code":"P\u0101rgaujas novads","name":"P\u0101rgaujas novads"},"433":{"code":"P\u0101vilostas novads","name":"P\u0101vilostas novads"},"434":{"code":"P\u013cavi\u0146u novads","name":"P\u013cavi\u0146u novads"},"429":{"code":"LV-PR","name":"Prei\u013cu novads"},"430":{"code":"Priekules novads","name":"Priekules novads"},"431":{"code":"Prieku\u013cu novads","name":"Prieku\u013cu novads"},"435":{"code":"Raunas novads","name":"Raunas novads"},"361":{"code":"LV-REZ","name":"R\u0113zekne"},"442":{"code":"LV-RE","name":"R\u0113zeknes novads"},"436":{"code":"Riebi\u0146u novads","name":"Riebi\u0146u novads"},"362":{"code":"LV-RIX","name":"R\u012bga"},"363":{"code":"LV-RI","name":"R\u012bgas novads"},"437":{"code":"Rojas novads","name":"Rojas novads"},"438":{"code":"Ropa\u017eu novads","name":"Ropa\u017eu novads"},"439":{"code":"Rucavas novads","name":"Rucavas novads"},"440":{"code":"Rug\u0101ju novads","name":"Rug\u0101ju novads"},"443":{"code":"R\u016bjienas novads","name":"R\u016bjienas novads"},"441":{"code":"Rund\u0101les novads","name":"Rund\u0101les novads"},"444":{"code":"Salacgr\u012bvas novads","name":"Salacgr\u012bvas novads"},"445":{"code":"Salas novads","name":"Salas novads"},"446":{"code":"Salaspils novads","name":"Salaspils novads"},"447":{"code":"LV-SA","name":"Saldus novads"},"448":{"code":"Saulkrastu novads","name":"Saulkrastu novads"},"455":{"code":"S\u0113jas novads","name":"S\u0113jas novads"},"449":{"code":"Siguldas novads","name":"Siguldas novads"},"451":{"code":"Skr\u012bveru novads","name":"Skr\u012bveru novads"},"450":{"code":"Skrundas novads","name":"Skrundas novads"},"452":{"code":"Smiltenes novads","name":"Smiltenes novads"},"453":{"code":"Stopi\u0146u novads","name":"Stopi\u0146u novads"},"454":{"code":"Stren\u010du novads","name":"Stren\u010du novads"},"456":{"code":"LV-TA","name":"Talsu novads"},"458":{"code":"T\u0113rvetes novads","name":"T\u0113rvetes novads"},"457":{"code":"LV-TU","name":"Tukuma novads"},"459":{"code":"Vai\u0146odes novads","name":"Vai\u0146odes novads"},"460":{"code":"LV-VK","name":"Valkas novads"},"364":{"code":"Valmiera","name":"Valmiera"},"461":{"code":"LV-VM","name":"Valmieras novads"},"462":{"code":"Varak\u013c\u0101nu novads","name":"Varak\u013c\u0101nu novads"},"469":{"code":"V\u0101rkavas novads","name":"V\u0101rkavas novads"},"463":{"code":"Vecpiebalgas novads","name":"Vecpiebalgas novads"},"464":{"code":"Vecumnieku novads","name":"Vecumnieku novads"},"365":{"code":"LV-VEN","name":"Ventspils"},"465":{"code":"LV-VE","name":"Ventspils novads"},"466":{"code":"Vies\u012btes novads","name":"Vies\u012btes novads"},"467":{"code":"Vi\u013cakas novads","name":"Vi\u013cakas novads"},"468":{"code":"Vi\u013c\u0101nu novads","name":"Vi\u013c\u0101nu novads"},"470":{"code":"Zilupes novads","name":"Zilupes novads"}},"FI":{"339":{"code":"Ahvenanmaa","name":"Ahvenanmaa"},"333":{"code":"Etel\u00e4-Karjala","name":"Etel\u00e4-Karjala"},"326":{"code":"Etel\u00e4-Pohjanmaa","name":"Etel\u00e4-Pohjanmaa"},"325":{"code":"Etel\u00e4-Savo","name":"Etel\u00e4-Savo"},"337":{"code":"It\u00e4-Uusimaa","name":"It\u00e4-Uusimaa"},"322":{"code":"Kainuu","name":"Kainuu"},"335":{"code":"Kanta-H\u00e4me","name":"Kanta-H\u00e4me"},"330":{"code":"Keski-Pohjanmaa","name":"Keski-Pohjanmaa"},"331":{"code":"Keski-Suomi","name":"Keski-Suomi"},"338":{"code":"Kymenlaakso","name":"Kymenlaakso"},"320":{"code":"Lappi","name":"Lappi"},"334":{"code":"P\u00e4ij\u00e4t-H\u00e4me","name":"P\u00e4ij\u00e4t-H\u00e4me"},"328":{"code":"Pirkanmaa","name":"Pirkanmaa"},"327":{"code":"Pohjanmaa","name":"Pohjanmaa"},"323":{"code":"Pohjois-Karjala","name":"Pohjois-Karjala"},"321":{"code":"Pohjois-Pohjanmaa","name":"Pohjois-Pohjanmaa"},"324":{"code":"Pohjois-Savo","name":"Pohjois-Savo"},"329":{"code":"Satakunta","name":"Satakunta"},"336":{"code":"Uusimaa","name":"Uusimaa"},"332":{"code":"Varsinais-Suomi","name":"Varsinais-Suomi"}},"FR":{"182":{"code":"1","name":"Ain"},"183":{"code":"2","name":"Aisne"},"184":{"code":"3","name":"Allier"},"185":{"code":"4","name":"Alpes-de-Haute-Provence"},"187":{"code":"6","name":"Alpes-Maritimes"},"188":{"code":"7","name":"Ard\u00e8che"},"189":{"code":"8","name":"Ardennes"},"190":{"code":"9","name":"Ari\u00e8ge"},"191":{"code":"10","name":"Aube"},"192":{"code":"11","name":"Aude"},"193":{"code":"12","name":"Aveyron"},"249":{"code":"67","name":"Bas-Rhin"},"194":{"code":"13","name":"Bouches-du-Rh\u00f4ne"},"195":{"code":"14","name":"Calvados"},"196":{"code":"15","name":"Cantal"},"197":{"code":"16","name":"Charente"},"198":{"code":"17","name":"Charente-Maritime"},"199":{"code":"18","name":"Cher"},"200":{"code":"19","name":"Corr\u00e8ze"},"201":{"code":"2A","name":"Corse-du-Sud"},"203":{"code":"21","name":"C\u00f4te-d'Or"},"204":{"code":"22","name":"C\u00f4tes-d'Armor"},"205":{"code":"23","name":"Creuse"},"261":{"code":"79","name":"Deux-S\u00e8vres"},"206":{"code":"24","name":"Dordogne"},"207":{"code":"25","name":"Doubs"},"208":{"code":"26","name":"Dr\u00f4me"},"273":{"code":"91","name":"Essonne"},"209":{"code":"27","name":"Eure"},"210":{"code":"28","name":"Eure-et-Loir"},"211":{"code":"29","name":"Finist\u00e8re"},"212":{"code":"30","name":"Gard"},"214":{"code":"32","name":"Gers"},"215":{"code":"33","name":"Gironde"},"250":{"code":"68","name":"Haut-Rhin"},"202":{"code":"2B","name":"Haute-Corse"},"213":{"code":"31","name":"Haute-Garonne"},"225":{"code":"43","name":"Haute-Loire"},"234":{"code":"52","name":"Haute-Marne"},"252":{"code":"70","name":"Haute-Sa\u00f4ne"},"256":{"code":"74","name":"Haute-Savoie"},"269":{"code":"87","name":"Haute-Vienne"},"186":{"code":"5","name":"Hautes-Alpes"},"247":{"code":"65","name":"Hautes-Pyr\u00e9n\u00e9es"},"274":{"code":"92","name":"Hauts-de-Seine"},"216":{"code":"34","name":"H\u00e9rault"},"217":{"code":"35","name":"Ille-et-Vilaine"},"218":{"code":"36","name":"Indre"},"219":{"code":"37","name":"Indre-et-Loire"},"220":{"code":"38","name":"Is\u00e8re"},"221":{"code":"39","name":"Jura"},"222":{"code":"40","name":"Landes"},"223":{"code":"41","name":"Loir-et-Cher"},"224":{"code":"42","name":"Loire"},"226":{"code":"44","name":"Loire-Atlantique"},"227":{"code":"45","name":"Loiret"},"228":{"code":"46","name":"Lot"},"229":{"code":"47","name":"Lot-et-Garonne"},"230":{"code":"48","name":"Loz\u00e8re"},"231":{"code":"49","name":"Maine-et-Loire"},"232":{"code":"50","name":"Manche"},"233":{"code":"51","name":"Marne"},"235":{"code":"53","name":"Mayenne"},"236":{"code":"54","name":"Meurthe-et-Moselle"},"237":{"code":"55","name":"Meuse"},"238":{"code":"56","name":"Morbihan"},"239":{"code":"57","name":"Moselle"},"240":{"code":"58","name":"Ni\u00e8vre"},"241":{"code":"59","name":"Nord"},"242":{"code":"60","name":"Oise"},"243":{"code":"61","name":"Orne"},"257":{"code":"75","name":"Paris"},"244":{"code":"62","name":"Pas-de-Calais"},"245":{"code":"63","name":"Puy-de-D\u00f4me"},"246":{"code":"64","name":"Pyr\u00e9n\u00e9es-Atlantiques"},"248":{"code":"66","name":"Pyr\u00e9n\u00e9es-Orientales"},"251":{"code":"69","name":"Rh\u00f4ne"},"253":{"code":"71","name":"Sa\u00f4ne-et-Loire"},"254":{"code":"72","name":"Sarthe"},"255":{"code":"73","name":"Savoie"},"259":{"code":"77","name":"Seine-et-Marne"},"258":{"code":"76","name":"Seine-Maritime"},"275":{"code":"93","name":"Seine-Saint-Denis"},"262":{"code":"80","name":"Somme"},"263":{"code":"81","name":"Tarn"},"264":{"code":"82","name":"Tarn-et-Garonne"},"272":{"code":"90","name":"Territoire-de-Belfort"},"277":{"code":"95","name":"Val-d'Oise"},"276":{"code":"94","name":"Val-de-Marne"},"265":{"code":"83","name":"Var"},"266":{"code":"84","name":"Vaucluse"},"267":{"code":"85","name":"Vend\u00e9e"},"268":{"code":"86","name":"Vienne"},"270":{"code":"88","name":"Vosges"},"271":{"code":"89","name":"Yonne"},"260":{"code":"78","name":"Yvelines"}},"US":{"1":{"code":"AL","name":"Alabama"},"2":{"code":"AK","name":"Alaska"},"3":{"code":"AS","name":"American Samoa"},"4":{"code":"AZ","name":"Arizona"},"5":{"code":"AR","name":"Arkansas"},"6":{"code":"AF","name":"Armed Forces Africa"},"7":{"code":"AA","name":"Armed Forces Americas"},"8":{"code":"AC","name":"Armed Forces Canada"},"9":{"code":"AE","name":"Armed Forces Europe"},"10":{"code":"AM","name":"Armed Forces Middle East"},"11":{"code":"AP","name":"Armed Forces Pacific"},"12":{"code":"CA","name":"California"},"13":{"code":"CO","name":"Colorado"},"14":{"code":"CT","name":"Connecticut"},"15":{"code":"DE","name":"Delaware"},"16":{"code":"DC","name":"District of Columbia"},"17":{"code":"FM","name":"Federated States Of Micronesia"},"18":{"code":"FL","name":"Florida"},"19":{"code":"GA","name":"Georgia"},"20":{"code":"GU","name":"Guam"},"21":{"code":"HI","name":"Hawaii"},"22":{"code":"ID","name":"Idaho"},"23":{"code":"IL","name":"Illinois"},"24":{"code":"IN","name":"Indiana"},"25":{"code":"IA","name":"Iowa"},"26":{"code":"KS","name":"Kansas"},"27":{"code":"KY","name":"Kentucky"},"28":{"code":"LA","name":"Louisiana"},"29":{"code":"ME","name":"Maine"},"30":{"code":"MH","name":"Marshall Islands"},"31":{"code":"MD","name":"Maryland"},"32":{"code":"MA","name":"Massachusetts"},"33":{"code":"MI","name":"Michigan"},"34":{"code":"MN","name":"Minnesota"},"35":{"code":"MS","name":"Mississippi"},"36":{"code":"MO","name":"Missouri"},"37":{"code":"MT","name":"Montana"},"38":{"code":"NE","name":"Nebraska"},"39":{"code":"NV","name":"Nevada"},"40":{"code":"NH","name":"New Hampshire"},"41":{"code":"NJ","name":"New Jersey"},"42":{"code":"NM","name":"New Mexico"},"43":{"code":"NY","name":"New York"},"44":{"code":"NC","name":"North Carolina"},"45":{"code":"ND","name":"North Dakota"},"46":{"code":"MP","name":"Northern Mariana Islands"},"47":{"code":"OH","name":"Ohio"},"48":{"code":"OK","name":"Oklahoma"},"49":{"code":"OR","name":"Oregon"},"50":{"code":"PW","name":"Palau"},"51":{"code":"PA","name":"Pennsylvania"},"52":{"code":"PR","name":"Puerto Rico"},"53":{"code":"RI","name":"Rhode Island"},"54":{"code":"SC","name":"South Carolina"},"55":{"code":"SD","name":"South Dakota"},"56":{"code":"TN","name":"Tennessee"},"57":{"code":"TX","name":"Texas"},"58":{"code":"UT","name":"Utah"},"59":{"code":"VT","name":"Vermont"},"60":{"code":"VI","name":"Virgin Islands"},"61":{"code":"VA","name":"Virginia"},"62":{"code":"WA","name":"Washington"},"63":{"code":"WV","name":"West Virginia"},"64":{"code":"WI","name":"Wisconsin"},"65":{"code":"WY","name":"Wyoming"}},"RO":{"278":{"code":"AB","name":"Alba"},"279":{"code":"AR","name":"Arad"},"280":{"code":"AG","name":"Arge\u015f"},"281":{"code":"BC","name":"Bac\u0103u"},"282":{"code":"BH","name":"Bihor"},"283":{"code":"BN","name":"Bistri\u0163a-N\u0103s\u0103ud"},"284":{"code":"BT","name":"Boto\u015fani"},"286":{"code":"BR","name":"Br\u0103ila"},"285":{"code":"BV","name":"Bra\u015fov"},"287":{"code":"B","name":"Bucure\u015fti"},"288":{"code":"BZ","name":"Buz\u0103u"},"290":{"code":"CL","name":"C\u0103l\u0103ra\u015fi"},"289":{"code":"CS","name":"Cara\u015f-Severin"},"291":{"code":"CJ","name":"Cluj"},"292":{"code":"CT","name":"Constan\u0163a"},"293":{"code":"CV","name":"Covasna"},"294":{"code":"DB","name":"D\u00e2mbovi\u0163a"},"295":{"code":"DJ","name":"Dolj"},"296":{"code":"GL","name":"Gala\u0163i"},"297":{"code":"GR","name":"Giurgiu"},"298":{"code":"GJ","name":"Gorj"},"299":{"code":"HR","name":"Harghita"},"300":{"code":"HD","name":"Hunedoara"},"301":{"code":"IL","name":"Ialomi\u0163a"},"302":{"code":"IS","name":"Ia\u015fi"},"303":{"code":"IF","name":"Ilfov"},"304":{"code":"MM","name":"Maramure\u015f"},"305":{"code":"MH","name":"Mehedin\u0163i"},"306":{"code":"MS","name":"Mure\u015f"},"307":{"code":"NT","name":"Neam\u0163"},"308":{"code":"OT","name":"Olt"},"309":{"code":"PH","name":"Prahova"},"311":{"code":"SJ","name":"S\u0103laj"},"310":{"code":"SM","name":"Satu-Mare"},"312":{"code":"SB","name":"Sibiu"},"313":{"code":"SV","name":"Suceava"},"314":{"code":"TR","name":"Teleorman"},"315":{"code":"TM","name":"Timi\u015f"},"316":{"code":"TL","name":"Tulcea"},"318":{"code":"VL","name":"V\u00e2lcea"},"317":{"code":"VS","name":"Vaslui"},"319":{"code":"VN","name":"Vrancea"}},"CA":{"66":{"code":"AB","name":"Alberta"},"67":{"code":"BC","name":"British Columbia"},"68":{"code":"MB","name":"Manitoba"},"70":{"code":"NB","name":"New Brunswick"},"69":{"code":"NL","name":"Newfoundland and Labrador"},"72":{"code":"NT","name":"Northwest Territories"},"71":{"code":"NS","name":"Nova Scotia"},"73":{"code":"NU","name":"Nunavut"},"74":{"code":"ON","name":"Ontario"},"75":{"code":"PE","name":"Prince Edward Island"},"76":{"code":"QC","name":"Quebec"},"77":{"code":"SK","name":"Saskatchewan"},"78":{"code":"YT","name":"Yukon Territory"}},"GT":{"501":{"code":"16","name":"ALTA VERAPAZ"},"500":{"code":"15","name":"BAJA VERAPAZ"},"489":{"code":"4","name":"CHIMALTENANGO"},"505":{"code":"20","name":"CHIQUIMULA"},"487":{"code":"2","name":"EL PROGRESO"},"499":{"code":"14","name":"EL QUICH\u00c9"},"490":{"code":"5","name":"ESCUINTLA"},"486":{"code":"1","name":"GUATEMALA"},"498":{"code":"13","name":"HUEHUETENANGO"},"503":{"code":"18","name":"IZABAL"},"506":{"code":"21","name":"JALAPA"},"507":{"code":"22","name":"JUTIAPA"},"502":{"code":"17","name":"PET\u00c9N"},"494":{"code":"9","name":"QUETZALTENANGO"},"496":{"code":"11","name":"RETALHULEU"},"488":{"code":"3","name":"SACATEPEQUEZ"},"497":{"code":"12","name":"SAN MARCOS"},"491":{"code":"6","name":"SANTA ROSA"},"492":{"code":"7","name":"SOLOL\u00c1"},"495":{"code":"10","name":"SUCHITEPEQUEZ"},"493":{"code":"8","name":"TOTONICAP\u00c1N"},"504":{"code":"19","name":"ZACAPA"}},"LT":{"475":{"code":"LT-AL","name":"Alytaus Apskritis"},"476":{"code":"LT-KU","name":"Kauno Apskritis"},"477":{"code":"LT-KL","name":"Klaip\u0117dos Apskritis"},"478":{"code":"LT-MR","name":"Marijampol\u0117s Apskritis"},"479":{"code":"LT-PN","name":"Panev\u0117\u017eio Apskritis"},"480":{"code":"LT-SA","name":"\u0160iauli\u0173 Apskritis"},"481":{"code":"LT-TA","name":"Taurag\u0117s Apskritis"},"482":{"code":"LT-TE","name":"Tel\u0161i\u0173 Apskritis"},"483":{"code":"LT-UT","name":"Utenos Apskritis"},"484":{"code":"LT-VL","name":"Vilniaus Apskritis"}},"DE":{"80":{"code":"BAW","name":"Baden-W\u00fcrttemberg"},"81":{"code":"BAY","name":"Bayern"},"82":{"code":"BER","name":"Berlin"},"83":{"code":"BRG","name":"Brandenburg"},"84":{"code":"BRE","name":"Bremen"},"85":{"code":"HAM","name":"Hamburg"},"86":{"code":"HES","name":"Hessen"},"87":{"code":"MEC","name":"Mecklenburg-Vorpommern"},"79":{"code":"NDS","name":"Niedersachsen"},"88":{"code":"NRW","name":"Nordrhein-Westfalen"},"89":{"code":"RHE","name":"Rheinland-Pfalz"},"90":{"code":"SAR","name":"Saarland"},"91":{"code":"SAS","name":"Sachsen"},"92":{"code":"SAC","name":"Sachsen-Anhalt"},"93":{"code":"SCN","name":"Schleswig-Holstein"},"94":{"code":"THE","name":"Th\u00fcringen"}},"AT":{"102":{"code":"BL","name":"Burgenland"},"99":{"code":"KN","name":"K\u00e4rnten"},"96":{"code":"NO","name":"Nieder\u00f6sterreich"},"97":{"code":"OO","name":"Ober\u00f6sterreich"},"98":{"code":"SB","name":"Salzburg"},"100":{"code":"ST","name":"Steiermark"},"101":{"code":"TI","name":"Tirol"},"103":{"code":"VB","name":"Voralberg"},"95":{"code":"WI","name":"Wien"}},"EE":{"340":{"code":"EE-37","name":"Harjumaa"},"341":{"code":"EE-39","name":"Hiiumaa"},"342":{"code":"EE-44","name":"Ida-Virumaa"},"344":{"code":"EE-51","name":"J\u00e4rvamaa"},"343":{"code":"EE-49","name":"J\u00f5gevamaa"},"346":{"code":"EE-59","name":"L\u00e4\u00e4ne-Virumaa"},"345":{"code":"EE-57","name":"L\u00e4\u00e4nemaa"},"348":{"code":"EE-67","name":"P\u00e4rnumaa"},"347":{"code":"EE-65","name":"P\u00f5lvamaa"},"349":{"code":"EE-70","name":"Raplamaa"},"350":{"code":"EE-74","name":"Saaremaa"},"351":{"code":"EE-78","name":"Tartumaa"},"352":{"code":"EE-82","name":"Valgamaa"},"353":{"code":"EE-84","name":"Viljandimaa"},"354":{"code":"EE-86","name":"V\u00f5rumaa"}}};
var regionCities = {"486":{"676":{"code":"2","name":"AMATITL\u00c1N"},"688":{"code":"14","name":"CHINAUTLA"},"689":{"code":"15","name":"CHUARRANCHO"},"677":{"code":"3","name":"FRAIJANES"},"675":{"code":"1","name":"GUATEMALA"},"678":{"code":"4","name":"MIXCO"},"679":{"code":"5","name":"PALENCIA"},"690":{"code":"16","name":"SAN JOS\u00c9 DEL GOLFO"},"680":{"code":"6","name":"SAN JOS\u00c9 PINULA"},"681":{"code":"7","name":"SAN JUAN SACATEP\u00c9QUEZ"},"682":{"code":"8","name":"SAN MIGUEL PETAPA"},"691":{"code":"17","name":"SAN PEDRO AYAMPUC"},"683":{"code":"9","name":"SAN PEDRO SACATEP\u00c9QUEZ"},"684":{"code":"10","name":"SAN RAYMUNDO"},"685":{"code":"11","name":"SANTA CATARINA PINULA"},"686":{"code":"12","name":"VILLA CANALES"},"687":{"code":"13","name":"VILLA NUEVA"}},"487":{"693":{"code":"2","name":"EL J\u00cdCARO"},"692":{"code":"1","name":"GUASTATOYA"},"694":{"code":"3","name":"MORAZ\u00c1N"},"695":{"code":"4","name":"SAN AGUST\u00cdN ACASAGUASTL\u00c1N"},"696":{"code":"5","name":"SAN ANTONIO LA PAZ"},"697":{"code":"6","name":"SAN CRIST\u00d3BAL ACASAGUASTL\u00c1N"},"698":{"code":"7","name":"SANARATE"},"699":{"code":"8","name":"SANSARE"}},"488":{"700":{"code":"1","name":"ANTIGUA GUATEMALA"},"702":{"code":"3","name":"CIUDAD VIEJA"},"703":{"code":"4","name":"JOCOTENANGO"},"704":{"code":"5","name":"MAGDALENA MILPAS ALTAS"},"705":{"code":"6","name":"PASTORES"},"706":{"code":"7","name":"SAN ANTONIO AGUAS CALIENTES"},"707":{"code":"8","name":"SAN BARTOLOM\u00c9 MILPAS ALTAS"},"701":{"code":"2","name":"SAN JUAN ALOTENANGO"},"708":{"code":"9","name":"SAN LUCAS SACATEP\u00c9QUEZ"},"709":{"code":"10","name":"SAN MIGUEL DUE\u00d1AS"},"710":{"code":"11","name":"SANTA CATARINA BARAHONA"},"711":{"code":"12","name":"SANTA LUC\u00cdA MILPAS ALTAS"},"712":{"code":"13","name":"SANTA MAR\u00cdA DE JES\u00daS"},"713":{"code":"14","name":"SANTIAGO SACATEP\u00c9QUEZ"},"714":{"code":"15","name":"SANTO DOMINGO XENACOJ"},"715":{"code":"16","name":"SUMPANGO"}},"489":{"725":{"code":"10","name":"ACATENANGO"},"716":{"code":"1","name":"CHIMALTENANGO"},"717":{"code":"2","name":"EL TEJAR"},"718":{"code":"3","name":"PARRAMOS"},"729":{"code":"14","name":"PATZIC\u00cdA"},"719":{"code":"4","name":"PATZ\u00daN"},"720":{"code":"5","name":"SAN ANDR\u00c9S ITZAPA"},"726":{"code":"11","name":"SAN JOS\u00c9 POAQUIL"},"730":{"code":"15","name":"SAN JUAN COMALAPA"},"724":{"code":"9","name":"SAN MART\u00cdN JILOTEPEQUE"},"727":{"code":"12","name":"SAN MIGUEL POCHUTA"},"728":{"code":"13","name":"SAN PEDRO YEPOCAPA"},"721":{"code":"6","name":"SANTA APOLONIA"},"731":{"code":"16","name":"SANTA CRUZ BALANY\u00c1"},"722":{"code":"7","name":"TECP\u00c1N GUATEMALA"},"723":{"code":"8","name":"ZARAGOZA"}},"490":{"732":{"code":"1","name":"ESCUINTLA"},"743":{"code":"12","name":"GUANAGAZAPA"},"735":{"code":"4","name":"IZTAPA"},"737":{"code":"6","name":"LA DEMOCRACIA"},"738":{"code":"7","name":"LA GOMERA"},"744":{"code":"13","name":"MASAGUA"},"740":{"code":"9","name":"NUEVA CONCEPCI\u00d3N"},"733":{"code":"2","name":"PAL\u00cdN"},"742":{"code":"11","name":"PUEBLO NUEVO TIQUISATE"},"734":{"code":"3","name":"PUERTO SAN JOS\u00c9"},"739":{"code":"8","name":"SAN VICENTE PACAYA"},"736":{"code":"5","name":"SANTA LUC\u00cdA COTZUMALGUAPA"},"741":{"code":"10","name":"SIQUINAL\u00c1"}},"491":{"746":{"code":"2","name":"BARBERENA"},"747":{"code":"3","name":"CASILLAS"},"755":{"code":"11","name":"CHIQUIMULILLA"},"745":{"code":"1","name":"CUILAPA"},"748":{"code":"4","name":"GUAZACAP\u00c1N"},"749":{"code":"5","name":"NUEVA SANTA ROSA"},"750":{"code":"6","name":"ORATORIO"},"751":{"code":"7","name":"PUEBLO NUEVO VI\u00d1AS"},"752":{"code":"8","name":"SAN JUAN TECUACO"},"757":{"code":"13","name":"SAN RAFAEL LAS FLORES"},"753":{"code":"9","name":"SANTA CRUZ NARANJO"},"758":{"code":"14","name":"SANTA MAR\u00cdA IXHUAT\u00c1N"},"754":{"code":"10","name":"SANTA ROSA DE LIMA"},"756":{"code":"12","name":"TAXISCO"}},"492":{"764":{"code":"6","name":"CONCEPCI\u00d3N"},"760":{"code":"2","name":"NAHUAL\u00c1"},"761":{"code":"3","name":"PANAJACHEL"},"762":{"code":"4","name":"SAN ANDR\u00c9S SEMETABAJ"},"765":{"code":"7","name":"SAN ANTONIO PALOP\u00d3"},"766":{"code":"8","name":"SAN JOS\u00c9 CHACAY\u00c1"},"767":{"code":"9","name":"SAN JUAN LA LAGUNA"},"769":{"code":"11","name":"SAN LUCAS TOLIM\u00c1N"},"770":{"code":"12","name":"SAN MARCOS LA LAGUNA"},"768":{"code":"10","name":"SAN PABLO LA LAGUNA"},"771":{"code":"13","name":"SAN PEDRO LA LAGUNA"},"777":{"code":"19","name":"SANTA CATARINA IXTAHUAC\u00c1N"},"763":{"code":"5","name":"SANTA CATARINA PALOP\u00d3"},"772":{"code":"14","name":"SANTA CLARA LA LAGUNA"},"773":{"code":"15","name":"SANTA CRUZ LA LAGUNA"},"774":{"code":"16","name":"SANTA LUC\u00cdA UTATL\u00c1N"},"776":{"code":"18","name":"SANTA MAR\u00cdA VISITACI\u00d3N"},"775":{"code":"17","name":"SANTIAGO ATITL\u00c1N"},"759":{"code":"1","name":"SOLOL\u00c1"}},"493":{"782":{"code":"5","name":"MOMOSTENANGO"},"779":{"code":"2","name":"SAN ANDR\u00c9S XECUL"},"783":{"code":"6","name":"SAN BARTOLO AGUAS CALIENTES"},"780":{"code":"3","name":"SAN CRIST\u00d3BAL TOTONICAP\u00c1N"},"781":{"code":"4","name":"SAN FRANCISCO EL ALTO"},"785":{"code":"8","name":"SANTA LUC\u00cdA LA REFORMA"},"784":{"code":"7","name":"SANTA MAR\u00cdA CHIQUIMULA"},"778":{"code":"1","name":"TOTONICAP\u00c1N"}},"494":{"787":{"code":"2","name":"ALMOLONGA"},"803":{"code":"18","name":"CABRIC\u00c1N"},"804":{"code":"19","name":"CAJOL\u00c1"},"788":{"code":"3","name":"CANTEL"},"799":{"code":"14","name":"COATEPEQUE"},"800":{"code":"15","name":"COLOMBA"},"789":{"code":"4","name":"CONCEPCI\u00d3N CHIQUIRICHAPA"},"790":{"code":"5","name":"EL PALMAR"},"801":{"code":"16","name":"FLORES COSTA CUCA"},"802":{"code":"17","name":"G\u00c9NOVA"},"805":{"code":"20","name":"HUIT\u00c1N"},"809":{"code":"24","name":"LA ESPERANZA"},"791":{"code":"6","name":"OLINTEPEQUE"},"793":{"code":"8","name":"PALESTINA DE LOS ALTOS"},"786":{"code":"1","name":"QUETZALTENANGO"},"794":{"code":"9","name":"SALCAJ\u00c1"},"806":{"code":"21","name":"SAN CARLOS SIJA"},"795":{"code":"10","name":"SAN FRANCISCO LA UNI\u00d3N"},"792":{"code":"7","name":"SAN JUAN OSTUNCALCO"},"796":{"code":"11","name":"SAN MART\u00cdN SACATEP\u00c9QUEZ"},"797":{"code":"12","name":"SAN MATEO"},"807":{"code":"22","name":"SAN MIGUEL SIG\u00dcIL\u00c1"},"808":{"code":"23","name":"SIBILIA"},"798":{"code":"13","name":"ZUNIL"}},"495":{"812":{"code":"3","name":"CHICACAO"},"813":{"code":"4","name":"CUYOTENANGO"},"810":{"code":"1","name":"MAZATENANGO"},"814":{"code":"6","name":"PATULUL"},"825":{"code":"17","name":"PUEBLO NUEVO"},"815":{"code":"7","name":"R\u00cdO BRAVO"},"816":{"code":"8","name":"SAMAYAC"},"817":{"code":"9","name":"SAN ANTONIO SUCHITEP\u00c9QUEZ"},"818":{"code":"10","name":"SAN BERNARDINO"},"819":{"code":"11","name":"SAN FRANCISCO ZAPOTITL\u00c1N"},"820":{"code":"12","name":"SAN GABRIEL"},"821":{"code":"13","name":"SAN JOS\u00c9 EL \u00cdDOLO"},"830":{"code":"23","name":"SAN JOSE LA MAQUINA"},"822":{"code":"14","name":"SAN JUAN BAUTISTA"},"823":{"code":"15","name":"SAN LORENZO"},"826":{"code":"18","name":"SAN MIGUEL PAN\u00c1N"},"811":{"code":"2","name":"SAN PABLO JOCOPILAS"},"824":{"code":"16","name":"SANTA B\u00c1RBARA"},"827":{"code":"20","name":"SANTO DOMINGO SUCHITEP\u00c9QUEZ"},"828":{"code":"21","name":"SANTO TOM\u00c1S LA UNI\u00d3N"},"829":{"code":"22","name":"ZUNILITO"}},"496":{"832":{"code":"2","name":"CHAMPERICO"},"833":{"code":"3","name":"EL ASINTAL"},"834":{"code":"4","name":"NUEVO SAN CARLOS"},"831":{"code":"1","name":"RETALHULEU"},"835":{"code":"5","name":"SAN ANDR\u00c9S VILLA SECA"},"836":{"code":"6","name":"SAN FELIPE"},"837":{"code":"7","name":"SAN MART\u00cdN ZAPOTITL\u00c1N"},"838":{"code":"8","name":"SAN SEBASTI\u00c1N"},"839":{"code":"9","name":"SANTA CRUZ MULU\u00c1"}},"497":{"868":{"code":"29","name":"AYUTLA TEC\u00daN UM\u00c1N"},"850":{"code":"11","name":"CATARINA"},"859":{"code":"20","name":"COMITANCILLO"},"851":{"code":"12","name":"CONCEPCI\u00d3N TUTUAPA"},"860":{"code":"21","name":"EL QUETZAL"},"854":{"code":"15","name":"EL TUMBADOR"},"841":{"code":"2","name":"ESQUIPULAS PALO GORDO"},"861":{"code":"22","name":"IXCHIGU\u00c1N"},"869":{"code":"30","name":"LA BLANCA"},"858":{"code":"19","name":"LA REFORMA"},"849":{"code":"10","name":"MALACAT\u00c1N"},"862":{"code":"23","name":"NUEVO PROGRESO"},"863":{"code":"24","name":"OC\u00d3S"},"848":{"code":"9","name":"PAJAPITA"},"864":{"code":"25","name":"R\u00cdO BLANCO"},"842":{"code":"3","name":"SAN ANTONIO SACATEP\u00c9QUEZ"},"865":{"code":"26","name":"SAN CRIST\u00d3BAL CUCHO"},"852":{"code":"13","name":"SAN JOS\u00c9 EL RODEO"},"866":{"code":"27","name":"SAN JOS\u00c9 OJETEN\u00c1N"},"843":{"code":"4","name":"SAN LORENZO"},"840":{"code":"1","name":"SAN MARCOS"},"847":{"code":"8","name":"SAN MIGUEL IXTAHUAC\u00c1N"},"846":{"code":"7","name":"SAN PABLO"},"844":{"code":"5","name":"SAN PEDRO SACATEP\u00c9QUEZ"},"856":{"code":"17","name":"SAN RAFAEL PIE DE LA CUESTA"},"857":{"code":"18","name":"SIBINAL"},"853":{"code":"14","name":"SIPACAPA"},"867":{"code":"28","name":"TACAN\u00c1"},"855":{"code":"16","name":"TAJUMULCO"},"845":{"code":"6","name":"TEJUTLA"}},"498":{"873":{"code":"4","name":"AGUACAT\u00c1N"},"871":{"code":"2","name":"CHIANTLA"},"875":{"code":"6","name":"COLOTENANGO"},"876":{"code":"7","name":"CONCEPCI\u00d3N HUISTA"},"877":{"code":"8","name":"CUILCO"},"870":{"code":"1","name":"HUEHUETENANGO"},"881":{"code":"12","name":"IXTAHUAC\u00c1N"},"878":{"code":"9","name":"JACALTENANGO"},"879":{"code":"10","name":"LA DEMOCRACIA"},"880":{"code":"11","name":"LA LIBERTAD"},"872":{"code":"3","name":"MALACATANCITO"},"882":{"code":"13","name":"NENT\u00d3N"},"883":{"code":"14","name":"SAN ANTONIO HUISTA"},"884":{"code":"15","name":"SAN GASPAR IXCHIL"},"899":{"code":"30","name":"SAN JUAN ATIT\u00c1N"},"885":{"code":"16","name":"SAN JUAN IXCOY"},"886":{"code":"17","name":"SAN MATEO IXTAT\u00c1N"},"900":{"code":"31","name":"SAN MIGUEL ACAT\u00c1N"},"887":{"code":"18","name":"SAN PEDRO NECTA"},"897":{"code":"28","name":"SAN PEDRO SOLOMA"},"888":{"code":"19","name":"SAN RAFAEL LA INDEPENDENCIA"},"889":{"code":"20","name":"SAN RAFAEL PETZAL"},"890":{"code":"21","name":"SAN SEBASTI\u00c1N"},"891":{"code":"22","name":"SAN SEBASTI\u00c1N COAT\u00c1N"},"892":{"code":"23","name":"SANTA ANA HUISTA"},"893":{"code":"24","name":"SANTA B\u00c1RBARA"},"894":{"code":"25","name":"SANTA CRUZ BARILLAS"},"895":{"code":"26","name":"SANTA EULALIA"},"896":{"code":"27","name":"SANTIAGO CHIMALTENANGO"},"874":{"code":"5","name":"TECTIT\u00c1N"},"898":{"code":"29","name":"TODOS SANTOS CUCHUMAT\u00c1N"},"901":{"code":"32","name":"UNI\u00d3N CANTINIL"}},"499":{"914":{"code":"13","name":"CANILL\u00c1"},"911":{"code":"10","name":"CHAJUL"},"912":{"code":"11","name":"CHICAM\u00c1N"},"921":{"code":"20","name":"CHICH\u00c9"},"905":{"code":"4","name":"CHINIQUE"},"913":{"code":"12","name":"CUN\u00c9N"},"906":{"code":"5","name":"JOYABAJ"},"920":{"code":"19","name":"PACHAL\u00daM"},"903":{"code":"2","name":"PATZIT\u00c9"},"917":{"code":"16","name":"PLAYA GRANDE IXC\u00c1N"},"919":{"code":"18","name":"SACAPULAS"},"907":{"code":"6","name":"SAN ANDR\u00c9S SAJCABAJ\u00c1"},"908":{"code":"7","name":"SAN ANTONIO ILOTENANGO"},"916":{"code":"15","name":"SAN BARTOLOM\u00c9 JOCOTENANGO"},"918":{"code":"17","name":"SAN JUAN COTZAL"},"922":{"code":"21","name":"SAN MIGUEL USPANT\u00c1N"},"909":{"code":"8","name":"SAN PEDRO JOCOPILAS"},"902":{"code":"1","name":"SANTA CRUZ DEL QUICH\u00c9"},"915":{"code":"14","name":"SANTA MAR\u00cdA NEBAJ"},"904":{"code":"3","name":"SANTO TOMAS CHICHICASTENANGO"},"910":{"code":"9","name":"ZACUALPA"}},"500":{"927":{"code":"5","name":"CUBULCO"},"929":{"code":"7","name":"GRANADOS"},"924":{"code":"2","name":"PURULH\u00c1"},"930":{"code":"8","name":"RABINAL"},"923":{"code":"1","name":"SALAM\u00c1"},"925":{"code":"3","name":"SAN JER\u00d3NIMO"},"926":{"code":"4","name":"SAN MIGUEL CHICAJ"},"928":{"code":"6","name":"SANTA CRUZ EL CHOL"}},"501":{"941":{"code":"11","name":"CHAHAL"},"946":{"code":"16","name":"CHISEC"},"931":{"code":"1","name":"COB\u00c1N"},"942":{"code":"12","name":"FRAY BARTOLOM\u00c9 DE LAS CASAS"},"943":{"code":"13","name":"LANQU\u00cdN"},"939":{"code":"9","name":"PANZ\u00d3S"},"947":{"code":"17","name":"RAXRUJ\u00c1"},"932":{"code":"2","name":"SAN CRIST\u00d3BAL VERAPAZ"},"933":{"code":"3","name":"SAN JUAN CHAMELCO"},"937":{"code":"7","name":"SAN MIGUEL TUCUR\u00da"},"934":{"code":"4","name":"SAN PEDRO CARCH\u00c1"},"938":{"code":"8","name":"SANTA CATARINA LA TINTA"},"935":{"code":"5","name":"SANTA CRUZ VERAPAZ"},"945":{"code":"15","name":"SANTA MAR\u00cdA CAHAB\u00d3N"},"940":{"code":"10","name":"SENAH\u00da"},"936":{"code":"6","name":"TACTIC"},"944":{"code":"14","name":"TAMAH\u00da"}},"502":{"951":{"code":"4","name":"DOLORES"},"960":{"code":"13","name":"EL CHAL"},"948":{"code":"1","name":"FLORES"},"956":{"code":"9","name":"LA LIBERTAD"},"955":{"code":"8","name":"MELCHOR DE MENCOS"},"952":{"code":"5","name":"POPT\u00daN"},"958":{"code":"11","name":"SAN ANDR\u00c9S"},"949":{"code":"2","name":"SAN BENITO"},"953":{"code":"6","name":"SAN FRANCISCO"},"959":{"code":"12","name":"SAN JOS\u00c9"},"950":{"code":"3","name":"SAN LUIS"},"954":{"code":"7","name":"SANTA ANA"},"957":{"code":"10","name":"SAYAXCH\u00c9"}},"503":{"964":{"code":"4","name":"EL ESTOR"},"965":{"code":"5","name":"L\u00cdVINGSTON"},"962":{"code":"2","name":"LOS AMATES"},"963":{"code":"3","name":"MORALES"},"961":{"code":"1","name":"PUERTO BARRIOS"}},"504":{"972":{"code":"7","name":"CABA\u00d1AS"},"967":{"code":"2","name":"ESTANZUELA"},"971":{"code":"6","name":"GUAL\u00c1N"},"973":{"code":"8","name":"HUIT\u00c9"},"974":{"code":"9","name":"LA UNI\u00d3N"},"968":{"code":"3","name":"R\u00cdO HONDO"},"975":{"code":"10","name":"SAN DIEGO"},"976":{"code":"11","name":"SAN JORGE"},"969":{"code":"4","name":"TECULUT\u00c1N"},"970":{"code":"5","name":"USUMATL\u00c1N"},"966":{"code":"1","name":"ZACAPA"}},"505":{"984":{"code":"8","name":"CAMOT\u00c1N"},"977":{"code":"1","name":"CHIQUIMULA"},"982":{"code":"6","name":"CONCEPCI\u00d3N LAS MINAS"},"980":{"code":"4","name":"ESQUIPULAS"},"981":{"code":"5","name":"IPALA"},"985":{"code":"9","name":"JOCOT\u00c1N"},"986":{"code":"10","name":"OLOPA"},"983":{"code":"7","name":"QUEZALTEPEQUE"},"978":{"code":"2","name":"SAN JACINTO"},"979":{"code":"3","name":"SAN JOS\u00c9 LA ARADA"},"987":{"code":"11","name":"SAN JUAN ERMITA"}},"506":{"988":{"code":"1","name":"JALAPA"},"992":{"code":"5","name":"MATAQUESCUINTLA"},"989":{"code":"2","name":"MONJAS"},"990":{"code":"3","name":"SAN CARLOS ALZATATE"},"991":{"code":"4","name":"SAN LUIS JILOTEPEQUE"},"994":{"code":"7","name":"SAN MANUEL CHAPARR\u00d3N"},"993":{"code":"6","name":"SAN PEDRO PINULA"}},"507":{"996":{"code":"2","name":"AGUA BLANCA"},"997":{"code":"3","name":"ASUNCI\u00d3N MITA"},"998":{"code":"4","name":"ATESCATEMPA"},"1005":{"code":"11","name":"COMAPA"},"1010":{"code":"16","name":"CONGUACO"},"1006":{"code":"12","name":"EL ADELANTO"},"999":{"code":"5","name":"EL PROGRESO"},"1000":{"code":"6","name":"JALPATAGUA"},"1007":{"code":"13","name":"JEREZ"},"995":{"code":"1","name":"JUTIAPA"},"1011":{"code":"17","name":"MOYUTA"},"1001":{"code":"7","name":"PASACO"},"1002":{"code":"8","name":"QUESADA"},"1003":{"code":"9","name":"SAN JOS\u00c9 ACATEMPA"},"1004":{"code":"10","name":"SANTA CATARINA MITA"},"1008":{"code":"14","name":"YUPILTEPEQUE"},"1009":{"code":"15","name":"ZAPOTITL\u00c1N"}}};
var zonesJson = {"675":{"1573":{"code":"1573","name":"01"},"1574":{"code":"1574","name":"02"},"1575":{"code":"1575","name":"03"},"1576":{"code":"1576","name":"04"},"1577":{"code":"1577","name":"05"},"1578":{"code":"1578","name":"06"},"1579":{"code":"1579","name":"07"},"1580":{"code":"1580","name":"08"},"1581":{"code":"1581","name":"09"},"1582":{"code":"1582","name":"10"},"1583":{"code":"1583","name":"11"},"1584":{"code":"1584","name":"12"},"1585":{"code":"1585","name":"13"},"1586":{"code":"1586","name":"14"},"1587":{"code":"1587","name":"15"},"1588":{"code":"1588","name":"16"},"1589":{"code":"1589","name":"17"},"1590":{"code":"1590","name":"18"},"1591":{"code":"1591","name":"19"},"1592":{"code":"1592","name":"21"},"1593":{"code":"1593","name":"24"},"1594":{"code":"1594","name":"CARRETERA AL SALVADOR"},"1595":{"code":"1595","name":"sin zona"}},"676":{"1596":{"code":"1596","name":"sin zona"}},"677":{"1597":{"code":"1597","name":"sin zona"}},"678":{"1598":{"code":"1598","name":"01"},"1599":{"code":"1599","name":"02"},"1600":{"code":"1600","name":"03"},"1601":{"code":"1601","name":"04"},"1602":{"code":"1602","name":"05"},"1603":{"code":"1603","name":"06"},"1604":{"code":"1604","name":"07"},"1605":{"code":"1605","name":"08"},"1606":{"code":"1606","name":"09"},"1607":{"code":"1607","name":"10"},"1608":{"code":"1608","name":"11"},"1609":{"code":"1609","name":"sin zona"}},"679":{"1610":{"code":"1610","name":"sin zona"}},"680":{"1611":{"code":"1611","name":"sin zona"}},"681":{"1612":{"code":"1612","name":"sin zona"}},"682":{"1613":{"code":"1613","name":"sin zona"}},"683":{"1614":{"code":"1614","name":"sin zona"}},"684":{"1615":{"code":"1615","name":"sin zona"}},"685":{"1616":{"code":"1616","name":"sin zona"}},"686":{"1617":{"code":"1617","name":"sin zona"}},"687":{"1618":{"code":"1618","name":"01"},"1619":{"code":"1619","name":"02"},"1620":{"code":"1620","name":"03"},"1621":{"code":"1621","name":"04"},"1622":{"code":"1622","name":"05"},"1623":{"code":"1623","name":"06"},"1624":{"code":"1624","name":"07"},"1625":{"code":"1625","name":"08"},"1626":{"code":"1626","name":"09"},"1627":{"code":"1627","name":"10"},"1628":{"code":"1628","name":"11"},"1629":{"code":"1629","name":"12"},"1630":{"code":"1630","name":"sin zona"}},"688":{"1631":{"code":"1631","name":"sin zona"}},"689":{"1632":{"code":"1632","name":"sin zona"}},"690":{"1633":{"code":"1633","name":"sin zona"}},"691":{"1634":{"code":"1634","name":"sin zona"}},"692":{"1635":{"code":"1635","name":"sin zona"}},"693":{"1636":{"code":"1636","name":"sin zona"}},"694":{"1637":{"code":"1637","name":"sin zona"}},"695":{"1638":{"code":"1638","name":"sin zona"}},"696":{"1639":{"code":"1639","name":"sin zona"}},"697":{"1640":{"code":"1640","name":"sin zona"}},"698":{"1641":{"code":"1641","name":"sin zona"}},"699":{"1642":{"code":"1642","name":"sin zona"}},"700":{"1643":{"code":"1643","name":"sin zona"}},"701":{"1644":{"code":"1644","name":"sin zona"}},"702":{"1645":{"code":"1645","name":"sin zona"}},"703":{"1646":{"code":"1646","name":"sin zona"}},"704":{"1647":{"code":"1647","name":"sin zona"}},"705":{"1648":{"code":"1648","name":"sin zona"}},"706":{"1649":{"code":"1649","name":"sin zona"}},"707":{"1650":{"code":"1650","name":"sin zona"}},"708":{"1651":{"code":"1651","name":"sin zona"}},"709":{"1652":{"code":"1652","name":"sin zona"}},"710":{"1653":{"code":"1653","name":"sin zona"}},"711":{"1654":{"code":"1654","name":"sin zona"}},"712":{"1655":{"code":"1655","name":"sin zona"}},"713":{"1656":{"code":"1656","name":"sin zona"}},"714":{"1657":{"code":"1657","name":"sin zona"}},"715":{"1658":{"code":"1658","name":"sin zona"}},"716":{"1659":{"code":"1659","name":"sin zona"}},"717":{"1660":{"code":"1660","name":"sin zona"}},"718":{"1661":{"code":"1661","name":"sin zona"}},"719":{"1662":{"code":"1662","name":"sin zona"}},"720":{"1663":{"code":"1663","name":"sin zona"}},"721":{"1664":{"code":"1664","name":"sin zona"}},"722":{"1665":{"code":"1665","name":"sin zona"}},"723":{"1666":{"code":"1666","name":"sin zona"}},"724":{"1667":{"code":"1667","name":"sin zona"}},"725":{"1668":{"code":"1668","name":"sin zona"}},"726":{"1669":{"code":"1669","name":"sin zona"}},"727":{"1670":{"code":"1670","name":"sin zona"}},"728":{"1671":{"code":"1671","name":"sin zona"}},"729":{"1672":{"code":"1672","name":"sin zona"}},"730":{"1673":{"code":"1673","name":"sin zona"}},"731":{"1674":{"code":"1674","name":"sin zona"}},"732":{"1675":{"code":"1675","name":"sin zona"}},"733":{"1676":{"code":"1676","name":"sin zona"}},"734":{"1677":{"code":"1677","name":"sin zona"}},"735":{"1678":{"code":"1678","name":"sin zona"}},"736":{"1679":{"code":"1679","name":"sin zona"}},"737":{"1680":{"code":"1680","name":"sin zona"}},"738":{"1681":{"code":"1681","name":"sin zona"}},"739":{"1682":{"code":"1682","name":"sin zona"}},"740":{"1683":{"code":"1683","name":"sin zona"}},"741":{"1684":{"code":"1684","name":"sin zona"}},"742":{"1685":{"code":"1685","name":"sin zona"}},"743":{"1686":{"code":"1686","name":"sin zona"}},"744":{"1687":{"code":"1687","name":"sin zona"}},"745":{"1688":{"code":"1688","name":"sin zona"}},"746":{"1689":{"code":"1689","name":"sin zona"}},"747":{"1690":{"code":"1690","name":"sin zona"}},"748":{"1691":{"code":"1691","name":"sin zona"}},"749":{"1692":{"code":"1692","name":"sin zona"}},"750":{"1693":{"code":"1693","name":"sin zona"}},"751":{"1694":{"code":"1694","name":"sin zona"}},"752":{"1695":{"code":"1695","name":"sin zona"}},"753":{"1696":{"code":"1696","name":"sin zona"}},"754":{"1697":{"code":"1697","name":"sin zona"}},"755":{"1698":{"code":"1698","name":"sin zona"}},"756":{"1699":{"code":"1699","name":"sin zona"}},"757":{"1700":{"code":"1700","name":"sin zona"}},"758":{"1701":{"code":"1701","name":"sin zona"}},"759":{"1702":{"code":"1702","name":"sin zona"}},"760":{"1703":{"code":"1703","name":"sin zona"}},"761":{"1704":{"code":"1704","name":"sin zona"}},"762":{"1705":{"code":"1705","name":"sin zona"}},"763":{"1706":{"code":"1706","name":"sin zona"}},"764":{"1707":{"code":"1707","name":"sin zona"}},"765":{"1708":{"code":"1708","name":"sin zona"}},"766":{"1709":{"code":"1709","name":"sin zona"}},"767":{"1710":{"code":"1710","name":"sin zona"}},"768":{"1711":{"code":"1711","name":"sin zona"}},"769":{"1712":{"code":"1712","name":"sin zona"}},"770":{"1713":{"code":"1713","name":"sin zona"}},"771":{"1714":{"code":"1714","name":"sin zona"}},"772":{"1715":{"code":"1715","name":"sin zona"}},"773":{"1716":{"code":"1716","name":"sin zona"}},"774":{"1717":{"code":"1717","name":"sin zona"}},"775":{"1718":{"code":"1718","name":"sin zona"}},"776":{"1719":{"code":"1719","name":"sin zona"}},"777":{"1720":{"code":"1720","name":"sin zona"}},"778":{"1721":{"code":"1721","name":"sin zona"}},"779":{"1722":{"code":"1722","name":"sin zona"}},"780":{"1723":{"code":"1723","name":"sin zona"}},"781":{"1724":{"code":"1724","name":"sin zona"}},"782":{"1725":{"code":"1725","name":"sin zona"}},"783":{"1726":{"code":"1726","name":"sin zona"}},"784":{"1727":{"code":"1727","name":"sin zona"}},"785":{"1728":{"code":"1728","name":"sin zona"}},"786":{"1729":{"code":"1729","name":"sin zona"}},"787":{"1730":{"code":"1730","name":"sin zona"}},"788":{"1731":{"code":"1731","name":"sin zona"}},"789":{"1732":{"code":"1732","name":"sin zona"}},"790":{"1733":{"code":"1733","name":"sin zona"}},"791":{"1734":{"code":"1734","name":"sin zona"}},"792":{"1735":{"code":"1735","name":"sin zona"}},"793":{"1736":{"code":"1736","name":"sin zona"}},"794":{"1737":{"code":"1737","name":"sin zona"}},"795":{"1738":{"code":"1738","name":"sin zona"}},"796":{"1739":{"code":"1739","name":"sin zona"}},"797":{"1740":{"code":"1740","name":"sin zona"}},"798":{"1741":{"code":"1741","name":"sin zona"}},"799":{"1742":{"code":"1742","name":"sin zona"}},"800":{"1743":{"code":"1743","name":"sin zona"}},"801":{"1744":{"code":"1744","name":"sin zona"}},"802":{"1745":{"code":"1745","name":"sin zona"}},"803":{"1746":{"code":"1746","name":"sin zona"}},"804":{"1747":{"code":"1747","name":"sin zona"}},"805":{"1748":{"code":"1748","name":"sin zona"}},"806":{"1749":{"code":"1749","name":"sin zona"}},"807":{"1750":{"code":"1750","name":"sin zona"}},"808":{"1751":{"code":"1751","name":"sin zona"}},"809":{"1752":{"code":"1752","name":"sin zona"}},"810":{"1753":{"code":"1753","name":"sin zona"}},"811":{"1754":{"code":"1754","name":"sin zona"}},"812":{"1755":{"code":"1755","name":"sin zona"}},"813":{"1756":{"code":"1756","name":"sin zona"}},"814":{"1757":{"code":"1757","name":"sin zona"}},"815":{"1758":{"code":"1758","name":"sin zona"}},"816":{"1759":{"code":"1759","name":"sin zona"}},"817":{"1760":{"code":"1760","name":"sin zona"}},"818":{"1761":{"code":"1761","name":"sin zona"}},"819":{"1762":{"code":"1762","name":"sin zona"}},"820":{"1763":{"code":"1763","name":"sin zona"}},"821":{"1764":{"code":"1764","name":"sin zona"}},"822":{"1765":{"code":"1765","name":"sin zona"}},"823":{"1766":{"code":"1766","name":"sin zona"}},"824":{"1767":{"code":"1767","name":"sin zona"}},"825":{"1768":{"code":"1768","name":"sin zona"}},"826":{"1769":{"code":"1769","name":"sin zona"}},"827":{"1770":{"code":"1770","name":"sin zona"}},"828":{"1771":{"code":"1771","name":"sin zona"}},"829":{"1772":{"code":"1772","name":"sin zona"}},"830":{"1773":{"code":"1773","name":"sin zona"}},"831":{"1774":{"code":"1774","name":"sin zona"}},"832":{"1775":{"code":"1775","name":"sin zona"}},"833":{"1776":{"code":"1776","name":"sin zona"}},"834":{"1777":{"code":"1777","name":"sin zona"}},"835":{"1778":{"code":"1778","name":"sin zona"}},"836":{"1779":{"code":"1779","name":"sin zona"}},"837":{"1780":{"code":"1780","name":"sin zona"}},"838":{"1781":{"code":"1781","name":"sin zona"}},"839":{"1782":{"code":"1782","name":"sin zona"}},"840":{"1783":{"code":"1783","name":"sin zona"}},"841":{"1784":{"code":"1784","name":"sin zona"}},"842":{"1785":{"code":"1785","name":"sin zona"}},"843":{"1786":{"code":"1786","name":"sin zona"}},"844":{"1787":{"code":"1787","name":"sin zona"}},"845":{"1788":{"code":"1788","name":"sin zona"}},"846":{"1789":{"code":"1789","name":"sin zona"}},"847":{"1790":{"code":"1790","name":"sin zona"}},"848":{"1791":{"code":"1791","name":"sin zona"}},"849":{"1792":{"code":"1792","name":"sin zona"}},"850":{"1793":{"code":"1793","name":"sin zona"}},"851":{"1794":{"code":"1794","name":"sin zona"}},"852":{"1795":{"code":"1795","name":"sin zona"}},"853":{"1796":{"code":"1796","name":"sin zona"}},"854":{"1797":{"code":"1797","name":"sin zona"}},"855":{"1798":{"code":"1798","name":"sin zona"}},"856":{"1799":{"code":"1799","name":"sin zona"}},"857":{"1800":{"code":"1800","name":"sin zona"}},"858":{"1801":{"code":"1801","name":"sin zona"}},"859":{"1802":{"code":"1802","name":"sin zona"}},"860":{"1803":{"code":"1803","name":"sin zona"}},"861":{"1804":{"code":"1804","name":"sin zona"}},"862":{"1805":{"code":"1805","name":"sin zona"}},"863":{"1806":{"code":"1806","name":"sin zona"}},"864":{"1807":{"code":"1807","name":"sin zona"}},"865":{"1808":{"code":"1808","name":"sin zona"}},"866":{"1809":{"code":"1809","name":"sin zona"}},"867":{"1810":{"code":"1810","name":"sin zona"}},"868":{"1811":{"code":"1811","name":"sin zona"}},"869":{"1812":{"code":"1812","name":"sin zona"}},"870":{"1813":{"code":"1813","name":"sin zona"}},"871":{"1814":{"code":"1814","name":"sin zona"}},"872":{"1815":{"code":"1815","name":"sin zona"}},"873":{"1816":{"code":"1816","name":"sin zona"}},"874":{"1817":{"code":"1817","name":"sin zona"}},"875":{"1818":{"code":"1818","name":"sin zona"}},"876":{"1819":{"code":"1819","name":"sin zona"}},"877":{"1820":{"code":"1820","name":"sin zona"}},"878":{"1821":{"code":"1821","name":"sin zona"}},"879":{"1822":{"code":"1822","name":"sin zona"}},"880":{"1823":{"code":"1823","name":"sin zona"}},"881":{"1824":{"code":"1824","name":"sin zona"}},"882":{"1825":{"code":"1825","name":"sin zona"}},"883":{"1826":{"code":"1826","name":"sin zona"}},"884":{"1827":{"code":"1827","name":"sin zona"}},"885":{"1828":{"code":"1828","name":"sin zona"}},"886":{"1829":{"code":"1829","name":"sin zona"}},"887":{"1830":{"code":"1830","name":"sin zona"}},"888":{"1831":{"code":"1831","name":"sin zona"}},"889":{"1832":{"code":"1832","name":"sin zona"}},"890":{"1833":{"code":"1833","name":"sin zona"}},"891":{"1834":{"code":"1834","name":"sin zona"}},"892":{"1835":{"code":"1835","name":"sin zona"}},"893":{"1836":{"code":"1836","name":"sin zona"}},"894":{"1837":{"code":"1837","name":"sin zona"}},"895":{"1838":{"code":"1838","name":"sin zona"}},"896":{"1839":{"code":"1839","name":"sin zona"}},"897":{"1840":{"code":"1840","name":"sin zona"}},"898":{"1841":{"code":"1841","name":"sin zona"}},"899":{"1842":{"code":"1842","name":"sin zona"}},"900":{"1843":{"code":"1843","name":"sin zona"}},"901":{"1844":{"code":"1844","name":"sin zona"}},"902":{"1845":{"code":"1845","name":"sin zona"}},"903":{"1846":{"code":"1846","name":"sin zona"}},"904":{"1847":{"code":"1847","name":"sin zona"}},"905":{"1848":{"code":"1848","name":"sin zona"}},"906":{"1849":{"code":"1849","name":"sin zona"}},"907":{"1850":{"code":"1850","name":"sin zona"}},"908":{"1851":{"code":"1851","name":"sin zona"}},"909":{"1852":{"code":"1852","name":"sin zona"}},"910":{"1853":{"code":"1853","name":"sin zona"}},"911":{"1854":{"code":"1854","name":"sin zona"}},"912":{"1855":{"code":"1855","name":"sin zona"}},"913":{"1856":{"code":"1856","name":"sin zona"}},"914":{"1857":{"code":"1857","name":"sin zona"}},"915":{"1858":{"code":"1858","name":"sin zona"}},"916":{"1859":{"code":"1859","name":"sin zona"}},"917":{"1860":{"code":"1860","name":"sin zona"}},"918":{"1861":{"code":"1861","name":"sin zona"}},"919":{"1862":{"code":"1862","name":"sin zona"}},"920":{"1863":{"code":"1863","name":"sin zona"}},"921":{"1864":{"code":"1864","name":"sin zona"}},"922":{"1865":{"code":"1865","name":"sin zona"}},"923":{"1866":{"code":"1866","name":"sin zona"}},"924":{"1867":{"code":"1867","name":"sin zona"}},"925":{"1868":{"code":"1868","name":"sin zona"}},"926":{"1869":{"code":"1869","name":"sin zona"}},"927":{"1870":{"code":"1870","name":"sin zona"}},"928":{"1871":{"code":"1871","name":"sin zona"}},"929":{"1872":{"code":"1872","name":"sin zona"}},"930":{"1873":{"code":"1873","name":"sin zona"}},"931":{"1874":{"code":"1874","name":"sin zona"}},"932":{"1875":{"code":"1875","name":"sin zona"}},"933":{"1876":{"code":"1876","name":"sin zona"}},"934":{"1877":{"code":"1877","name":"sin zona"}},"935":{"1878":{"code":"1878","name":"sin zona"}},"936":{"1879":{"code":"1879","name":"sin zona"}},"937":{"1880":{"code":"1880","name":"sin zona"}},"938":{"1881":{"code":"1881","name":"sin zona"}},"939":{"1882":{"code":"1882","name":"sin zona"}},"940":{"1883":{"code":"1883","name":"sin zona"}},"941":{"1884":{"code":"1884","name":"sin zona"}},"942":{"1885":{"code":"1885","name":"sin zona"}},"943":{"1886":{"code":"1886","name":"sin zona"}},"944":{"1887":{"code":"1887","name":"sin zona"}},"945":{"1888":{"code":"1888","name":"sin zona"}},"946":{"1889":{"code":"1889","name":"sin zona"}},"947":{"1890":{"code":"1890","name":"sin zona"}},"948":{"1891":{"code":"1891","name":"sin zona"}},"949":{"1892":{"code":"1892","name":"sin zona"}},"950":{"1893":{"code":"1893","name":"sin zona"}},"951":{"1894":{"code":"1894","name":"sin zona"}},"952":{"1895":{"code":"1895","name":"sin zona"}},"953":{"1896":{"code":"1896","name":"sin zona"}},"954":{"1897":{"code":"1897","name":"sin zona"}},"955":{"1898":{"code":"1898","name":"sin zona"}},"956":{"1899":{"code":"1899","name":"sin zona"}},"957":{"1900":{"code":"1900","name":"sin zona"}},"958":{"1901":{"code":"1901","name":"sin zona"}},"959":{"1902":{"code":"1902","name":"sin zona"}},"960":{"1903":{"code":"1903","name":"sin zona"}},"961":{"1904":{"code":"1904","name":"sin zona"}},"962":{"1905":{"code":"1905","name":"sin zona"}},"963":{"1906":{"code":"1906","name":"sin zona"}},"964":{"1907":{"code":"1907","name":"sin zona"}},"965":{"1908":{"code":"1908","name":"sin zona"}},"966":{"1909":{"code":"1909","name":"sin zona"}},"967":{"1910":{"code":"1910","name":"sin zona"}},"968":{"1911":{"code":"1911","name":"sin zona"}},"969":{"1912":{"code":"1912","name":"sin zona"}},"970":{"1913":{"code":"1913","name":"sin zona"}},"971":{"1914":{"code":"1914","name":"sin zona"}},"972":{"1915":{"code":"1915","name":"sin zona"}},"973":{"1916":{"code":"1916","name":"sin zona"}},"974":{"1917":{"code":"1917","name":"sin zona"}},"975":{"1918":{"code":"1918","name":"sin zona"}},"976":{"1919":{"code":"1919","name":"sin zona"}},"977":{"1920":{"code":"1920","name":"sin zona"}},"978":{"1921":{"code":"1921","name":"sin zona"}},"979":{"1922":{"code":"1922","name":"sin zona"}},"980":{"1923":{"code":"1923","name":"sin zona"}},"981":{"1924":{"code":"1924","name":"sin zona"}},"982":{"1925":{"code":"1925","name":"sin zona"}},"983":{"1926":{"code":"1926","name":"sin zona"}},"984":{"1927":{"code":"1927","name":"sin zona"}},"985":{"1928":{"code":"1928","name":"sin zona"}},"986":{"1929":{"code":"1929","name":"sin zona"}},"987":{"1930":{"code":"1930","name":"sin zona"}},"988":{"1931":{"code":"1931","name":"sin zona"}},"989":{"1932":{"code":"1932","name":"sin zona"}},"990":{"1933":{"code":"1933","name":"sin zona"}},"991":{"1934":{"code":"1934","name":"sin zona"}},"992":{"1935":{"code":"1935","name":"sin zona"}},"993":{"1936":{"code":"1936","name":"sin zona"}},"994":{"1937":{"code":"1937","name":"sin zona"}},"995":{"1938":{"code":"1938","name":"sin zona"}},"996":{"1939":{"code":"1939","name":"sin zona"}},"997":{"1940":{"code":"1940","name":"sin zona"}},"998":{"1941":{"code":"1941","name":"sin zona"}},"999":{"1942":{"code":"1942","name":"sin zona"}},"1000":{"1943":{"code":"1943","name":"sin zona"}},"1001":{"1944":{"code":"1944","name":"sin zona"}},"1002":{"1945":{"code":"1945","name":"sin zona"}},"1003":{"1946":{"code":"1946","name":"sin zona"}},"1004":{"1947":{"code":"1947","name":"sin zona"}},"1005":{"1948":{"code":"1948","name":"sin zona"}},"1006":{"1949":{"code":"1949","name":"sin zona"}},"1007":{"1950":{"code":"1950","name":"sin zona"}},"1008":{"1951":{"code":"1951","name":"sin zona"}},"1009":{"1952":{"code":"1952","name":"sin zona"}},"1010":{"1953":{"code":"1953","name":"sin zona"}},"1011":{"1954":{"code":"1954","name":"sin zona"}}};

Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
};

function sort_select_options(selector){
	var options = $(selector);
	var arr = options.map(function(_, o) { return { t: $(o).text(), v: o.value }; }).get();
	arr.sort(function(o1, o2) { return o1.t > o2.t ? 1 : o1.t < o2.t ? -1 : 0; });
	options.each(function(i, o) {
		o.value = arr[i].v;
		$(o).text(arr[i].t);
	});
}
function load_municipality(){
	var depto=$('#depto').val(),
		options='<option value=""> Selecciona el municipio</option>';
	get_depto_id(depto);
	if(depto!=''){
		for(var item in regionCities[depto]){
			options+='<option value="'+item+'">'+regionCities[depto][item].name+'</option>';
		}
		$('#municipality').html(options);
		sort_select_options('#municipality option')
	}else{
		$('#municipality').html(options);
	}
}
function load_zones(){
	var municipality=$('#municipality').val(),
		depto=$('#depto').val(),
		options='<option value=""> Elige una zona</option>';
	get_municipality_id(depto,municipality);
	if(municipality!=''){
		var size = Object.size(zonesJson[municipality]);
		for(var item in zonesJson[municipality]){
			if(size==1 && zonesJson[municipality][item].name=='sin zona'){
				options='<option value="'+item+'">'+zonesJson[municipality][item].name+'</option>';
			}else{
				options+='<option value="'+item+'">'+zonesJson[municipality][item].name+'</option>';
			}
		}
		$('#zone').html(options);
		if(size==1){
			$('#zone').hide();
			$('#zone-input').val('SZ');
		}else{
			$('#zone').show();
			sort_select_options('#zone option')
		}
	}else{
		$('#zone').html(options);
	}
}
function get_depto_id(depto){
	var depto_id=countryRegions.GT[''+depto].code;
	$('#depto-input').val(depto_id);
	console.log('DEPTO---------------->>>>>'+depto_id);
}
function get_municipality_id(depto,municipality){
	var municipality_id=regionCities[''+depto][''+municipality].code;
	$('#municipality-input').val(municipality_id);
	console.log('MUNI---------------->>>>>'+municipality_id);
}
function get_zone_id(municipality,zone){
	var zone=''+zonesJson[''+municipality][''+zone].name;
	if(zone=='sin zona'){
		zone='SZ'
	}
	$('#zone-input').val(zone);
	console.log('ZONE---------------->>>>>'+zone);
}

$(function(){
	console.log('Puntos privilegio');
	$('#depto').on('change', function(){
		load_municipality();
	});
	$('#municipality').on('change', function(){
		load_zones();
	});
	$('#zone').on('change', function(){
		var municipality=$('#municipality').val(),
			zone=$(this).val();
		get_zone_id(municipality,zone);
	});
});
// ----------------- END Account Privilegio Address ----------------- //
// --------------------------------------------------------------------- //
// --------------------------------------------------------------------- //
// --------------------------------------------------------------------- //
// ----------------- Account Privilegio ----------------- //
/*
Habrá 4 pantallas:
1 - Init, seleccionar si crear una nueva tarjeta o asociar una existente
2 - Formulario para crear tarjeta
3 - Formulario para asociar tarjeta
4 - Mostrar información de la tarjeta, saldo y puntos
*/
function get_privilegio_data(email,tp){
	$.ajax({
		url: 'https://privivtex.cemaco.com:4443/apiecommercedev/api/privi/validartarjeta/'+email+'/'+tp,
		type: 'GET',
		success: function(data){
			console.log(data);
			if(data.Result.Res){
				console.log(data.Data.Nombre+' - '+data.Data.Puntos+' - '+data.Data.Saldo);
				$('#priv__state-info-name').html(data.Data.Nombre);
				$('#priv__state-info-card').html(tp);
				$('#priv__state-info-balance').html('Saldo: Q'+parseFloat(data.Data.Saldo).formatMoney(2, decimal, separator));
				show_info_priv()
			}else{
				$('h1.tag-title--account').after('<div>Hubo un error: Error PRV0001, '+data.Result.Mensaje+'</div>');
				setTimeout(function(){
					show_init_priv();
				}, 5000);
			}
		}
	});
}
function show_init_priv(){
	$('#priv__loading').slideUp(500);
	$('.priv__state').stop(true, true).slideUp(500);
	$('#priv__init').stop(true, true).slideDown(500);
}
function show_link_priv(){
	$('#priv__loading').slideUp(500);
	$('.priv__state').stop(true, true).slideUp(500);
	$('#priv__link').stop(true, true).slideDown(500);
}
function show_create_priv(){
	$('#priv__loading').slideUp(500);
	$('.priv__state').stop(true, true).slideUp(500);
	$('#priv__create').stop(true, true).slideDown(500);
}
function show_info_priv(){
	$('#priv__loading').slideUp(500);
	$('.priv__state').stop(true, true).slideUp(500);
	$('#priv__info').stop(true, true).slideDown(500);
}
$(function(){
	$.get('/no-cache/profileSystem/getProfile',function(data){
		console.log(data);
		profile_email=data.Email;
		$.get('/api/dataentities/CL/search?_fields=tarjetaPrivilegio&_where=(email='+profile_email+')',function(privtex){
			if(privtex.length && privtex[0].tarjetaPrivilegio!=null && privtex[0].tarjetaPrivilegio!=''){
				var tp=privtex[0].tarjetaPrivilegio;
				get_privilegio_data(profile_email, tp);
			}else{
				show_init_priv();
			}
		});
	});
	$('.priv__state-back').on('click', function(e){
		e.preventDefault();
		show_init_priv();
	});
	$('#priv__state-create').on('click', function(e){
		e.preventDefault();
		show_create_priv();
	});
	$('#priv__state-link').on('click', function(e){
		e.preventDefault();
		show_link_priv();
	});
});
// ----------------- END Account Privilegio ----------------- //

// ----------------- Link Privilegio ----------------- //
function link_privilegio_card(card, birthdate){
	$('.error').remove();
	var dataToLink={
	 	"Nacimiento": ""+birthdate,
		"Identificacion": "",
		"Mail": ""+profile_email,
		"NIT": ""
	};
	$.ajax({
		url: 'https://privivtex.cemaco.com:4443/apiecommercedev/api/privi/relacionartarjeta/'+userId+'/'+card,
		type: 'POST',
		data: JSON.stringify(dataToLink),
		success: function(data){
			console.log(data);
			if(data.Result.Res){
				$('#priv__link').html('<h2 class="text-center priv__state-subtitle-black">Tarjeta enlazada de forma correcta</h2>');
				setTimeout(function(){
					location.reload();
				},5000);
			}else{
				$('h2.priv__state-subtitle-black').after('<div class="error">Hubo un error: Error PRV0002, '+data.Result.Mensaje+'</div>');
				$('.error').fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
			}
			$('#priv__state-btn-link, .priv__state-link--wrapper').removeClass('sending');
		}
	});
}
$(function(){
	jq2('#cardBirthday').prop('readonly', true).datepicker({
		dateFormat: "dd/mm/yy",
		altField: "#cardBirthday-alt",
		altFormat: "yymmdd",
		changeMonth: true,
		changeYear: true,
		yearRange: '1925:2000',
		defaultDate: "-30y",
		maxDate: -365
	});

	$('#priv__state-btn-link:not(.sending)').on('click', function(e){
		e.preventDefault();
		$(this).addClass('sending');
		$('.priv__state-link--wrapper').addClass('sending');
		var card=$('#cardNumber').val(),
			birthdate=$('#cardBirthday-alt').val();
		link_privilegio_card(card, birthdate);
	});
});
// ----------------- END Link Privilegio ----------------- //