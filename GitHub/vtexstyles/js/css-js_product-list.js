/**
*	Pesquisa Inteligente
*	@description Execurar buscas sem recarregar a pÃƒÂ¡gina
*	@author Carlos Vinicius
*	@contributor Edson Domingos JÃƒÂºnior
*	@version 3.9
*	@date 2012-10-22
*/
"function"!==typeof String.prototype.replaceSpecialChars&&(String.prototype.replaceSpecialChars=function(){var b={"\u00e7":"c","\u00e6":"ae","\u0153":"oe","\u00e1":"a","\u00e9":"e","\u00ed":"i","\u00f3":"o","\u00fa":"u","\u00e0":"a","\u00e8":"e","\u00ec":"i","\u00f2":"o","\u00f9":"u","\u00e4":"a","\u00eb":"e","\u00ef":"i","\u00f6":"o","\u00fc":"u","\u00ff":"y","\u00e2":"a","\u00ea":"e","\u00ee":"i","\u00f4":"o","\u00fb":"u","\u00e5":"a","\u00e3":"a","\u00f8":"o","\u00f5":"o",u:"u","\u00c1":"A","\u00c9":"E","\u00cd":"I","\u00d3":"O","\u00da":"U","\u00ca":"E","\u00d4":"O","\u00dc":"U","\u00c3":"A","\u00d5":"O","\u00c0":"A","\u00c7":"C"};return this.replace(/[\u00e0-\u00fa]/g,function(a){return"undefined"!=typeof b[a]?b[a]:a})});
"function"!==typeof String.prototype.trim&&(String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"")});
jQuery.fn.vtexSmartResearch=function(opts)
{
	var $this=jQuery(this);

	var log=function(msg,type){
		if(typeof console=="object")
			console.log("[Smart Research - "+(type||"Erro")+"] "+msg);
	};

    var defaults=
	{
		pageLimit:null, // NÃƒÂºmero mÃƒÂ¡ximo de pÃƒÂ¡ginas que o script irÃƒÂ¡ retornar. Exemplo "pageLimit=3" sÃƒÂ³ serÃƒÂ¡ retornado resultados atÃƒÂ© a terceira pÃƒÂ¡gina
		loadContent:".prateleira[id^=ResultItems]", // Elemento que esta em volta da(s) prateleira(s) de produtos.
		shelfClass:".prateleira", // Pratelira de produtos (filha do elemento definido de um "loadContent")
		filtersMenu:".search-multiple-navigator", // Menu com os filtros
		linksMenu:".search-single-navigator", // Menu de links
		menuDepartament:".navigation .menu-departamento", // seletor do menu da pÃƒÂ¡gina de departamentos
		mergeMenu:true, // Define se o menu de links serÃƒÂ¡ mesclado com o de filtros serÃƒÂ¡ mesclado na pÃƒÂ¡gina de departamento
		insertMenuAfter:".search-multiple-navigator h3:first", // O menu de links serÃƒÂ¡ inserido apÃƒÂ³s este elemento
		emptySearchElem:jQuery('<div class="vtexsr-emptySearch"></div>'), // Elemento Html (em Objeto jQuery) no qual serÃƒÂ¡ adicionado a mensagem de busca vazia
		elemLoading:'<div id="scrollLoading">Cargando ... </div>', // Elemento com mensagem de carregando ao iniciar a requisiÃƒÂ§ÃƒÂ£o da pÃƒÂ¡gina seguinte
		returnTopText:'<span class="text">Regresar</span> <span class="text2">arriba</span>', // Mensagem de "retornar ao topo"
		emptySearchMsg:'<h3>Esta combinaciÃƒÂ³n de filtros no arrojÃƒÂ³ ningÃƒÂºn resultado.</h3>', // Html com a mensagem para ser apresentada quando nÃƒÂ£o existirem resultados para os filtros selecionados
		filterErrorMsg:"Hubo un error al intentar filtrar la pÃƒÂ¡gina", // Mensagem de erro exibida quando existe algum erro de servidor ao aplicar os filtros
		searchUrl:null, // Url da pÃƒÂ¡gina de busca (opicional)
		usePopup:false, // OpÃƒÂ§ÃƒÂ£o p/ definir se deseja que a mensagem de nÃƒÂ£o localizado seja exibida em um popup
		showLinks:true, // Exibe o menu de links caso o de filtro nÃƒÂ£o seja encontrado
		popupAutoCloseSeconds:3, // Caso esteja utilizando popup, defina aqui o tempo para que ele feche automaticamente
		// FunÃƒÂ§ÃƒÂ£o que retorna o valor p/ onde a pÃƒÂ¡gina deve rolar quando o usuÃƒÂ¡rio marca ou desmarca um filtro
		filterScrollTop:function(shelfOffset)
		{
			return (shelfOffset.top-20);
		},
		callback:function(){},
		// CÃƒÂ¡lculo do tamanho do conteÃƒÂºdo/vitrine para que uma nova pÃƒÂ¡gina seja chamada antes do usuÃƒÂ¡rio chegar ao "final" do site
		getShelfHeight:function(container)
		{
			return (container.scrollTop()+container.height());
		},
		// Callback apÃƒÂ³s inserir a prateleira na pÃƒÂ¡gina
		shelfCallback:function(){},
		// Callback em cada requisiÃƒÂ§ÃƒÂ£o Ajax (Para requisiÃƒÂ§ÃƒÂµes feitas com sucesso)
		// Recebe como parÃƒÂ¢metro um objeto contendo a quantidade total de requisiÃƒÂ§ÃƒÂµes feitas e a quantidade de filtros selecionados
		ajaxCallback:function(){},
		// FunÃƒÂ§ÃƒÂ£o que ÃƒÂ© executada quando a seleÃƒÂ§ÃƒÂ£o de filtros nÃƒÂ£o retorna nenhum resultado
		// Recebe como parÃƒÂ¢metro um objeto contendo a quantidade total de requisiÃƒÂ§ÃƒÂµes feitas e a quantidade de filtros selecionados
		emptySearchCallback:function(){},
		// FunÃƒÂ§ÃƒÂ£o para permitir ou nÃƒÂ£o que a rolagem infinita execute na pÃƒÂ¡gina esta deve retornar "true" ou "false"
		// Recebe como parÃƒÂ¢metro um objeto contendo a quantidade total de requisiÃƒÂ§ÃƒÂµes feitas e a quantidade de filtros selecionados
		authorizeScroll:function(){return true;},
		// FunÃƒÂ§ÃƒÂ£o para permitir ou nÃƒÂ£o que o conteÃƒÂºdo de "loadContent" seja atualizado. Esta deve retornar "true" ou "false"
		// Recebe como parÃƒÂ¢metro um objeto contendo a quantidade total de requisiÃƒÂ§ÃƒÂµes feitas e a quantidade de filtros selecionados
		authorizeUpdate:function(){return true;},
		// Callback de cada laÃƒÂ§o percorrendo os fildsets e os labels. Retorna um objeto com algumas informaÃƒÂ§ÃƒÂµes
		labelCallback:function(data){}
	};

    var options=jQuery.extend(defaults, opts),
		_console="object"===typeof(console),
		$empty=jQuery(""),
		elemLoading=jQuery(options.elemLoading),
		currentPage=2,
		moreResults=true,
		_window=jQuery(window),
		_document=jQuery(document),
		_html=jQuery("html,body"),
		body=jQuery("body"),
		currentSearchUrl="",
		urlFilters="",
		current_uri=window.location.href,
		filter_indicator="",
		searchUrl="",
		animatingFilter=false,
		loadContentE=jQuery(options.loadContent),
		filtersMenuE=jQuery(options.filtersMenu),
		ajaxCallbackObj={requests:0,filters:0,isEmpty:false},
		labelCallbackData={};
	var parameters=window.location.search.split('&');
	if(current_uri.indexOf('filter_indicator=')!=-1){
		$.each(parameters, function(i, item){
			if(item.indexOf('filter_indicator')!=-1){
				filter_indicator+=item.replace('?','');
				return false;
			}
		});
	}
	if(filter_indicator!=''){
		current_uri=current_uri.replace(filter_indicator,'').replace('?&','?').replace('&&','&');
		if(parameters.length==1){
			filter_indicator='?'+filter_indicator;
		}else{
			filter_indicator='&'+filter_indicator;
		}
		filter_indicator=decodeURI(filter_indicator);
		var last_char=current_uri[current_uri.length -1];
		if(last_char=='&' || last_char=='?'){
			current_uri=current_uri.substring(0, current_uri.length-1);
		}
	}
	console.log(current_uri);
	console.log(filter_indicator);

	var fn=
	{
		getUrl:function(scroll)
		{
			var s=scroll||false;
			if(s)
				return currentSearchUrl.replace(/PageNumber=[0-9]*/,"PageNumber="+currentPage);
			else
				return (searchUrl+urlFilters).replace(/PageNumber=[0-9]*/,"PageNumber="+pageNumber);
		},
		getSearchUrl:function()
		{
			var url, content, preg;
			jQuery("script:not([src])").each(function(){
				content=jQuery(this)[0].innerHTML;
				preg=/\/buscapagina\?.+&PageNumber=/i;
				if(content.search(/\/buscapagina\?/i)>-1)
				{
					url=preg.exec(content);
					return false;
				}
			});

			if(typeof(url)!=="undefined" && typeof(url[0])!=="undefined")
				return url[0];
			else
			{
				log("No se pudo encontrar la url de bÃƒÂºsqueda.\n Intente agregar el .js al final de la pÃƒÂ¡gina. \n[MÃƒÂ©todo: getSearchUrl]");
				return "";
			}
		},
		scrollToTop:function()
		{
			var elem=body.find("#returnToTop");

			if(elem.length<1)
			{
				elem=jQuery('<div id="returnToTop"><a href="#">'+options.returnTopText+'<span class="arrowToTop"></span></a></div>');
				body.append(elem);
			}

			var windowH=_window.height();
			_window.bind("resize",function(){
				windowH=_window.height();
			});
			_window.bind("scroll",function(){
				if(_window.scrollTop()>(windowH))
					elem.stop(true).fadeTo(300,1,function(){elem.show();});
				else
					elem.stop(true).fadeTo(300,0,function(){elem.hide();});
			});
			elem.bind("click",function(){
				_html.animate({scrollTop:0},"slow");
				return false;
			});
		},
		infinitScroll:function()
		{
			var elementPages,pages,currentStatus,tmp,content;

			elementPages=body.find(".pager:first").attr("id");
			tmp=(elementPages||"").split("_").pop();
			pages=(null!==options.pageLimit)?options.pageLimit:window["pagecount_"+tmp];
			currentStatus=true;

			// Reportando erros
			// if("undefined"===typeof pages) log("NÃƒÂ£o foi possÃƒÂ­vel localizar quantidade de pÃƒÂ¡ginas.\n Tente adicionar o .js ao final da pÃƒÂ¡gina. \n[MÃƒÂ©todo: infinitScroll]");

			if("undefined"===typeof pages)
				pages=99999999;

			_window.bind('scroll',function(){
				var _this=jQuery(this);
				if(!animatingFilter && currentPage<=pages && moreResults && options.authorizeScroll(ajaxCallbackObj))
				{
					if((_this.scrollTop()+_this.height())>=(options.getShelfHeight(loadContentE)) && currentStatus)
					{
						var currentItems=loadContentE.find(options.shelfClass).filter(":last");
						currentItems.after(elemLoading);
						currentStatus=false;
						pageJqxhr=jQuery.ajax({
							url: fn.getUrl(true),
							success:function(data)
							{
								if(data.trim().length<1)
								{
									moreResults=false;
									log("No hay mÃƒÂ¡s resultados a partir de la pÃƒÂ¡gina: "+(currentPage-1),"Aviso");
								}
								else{
									content = $(data).find(">ul:first-child>li:not('.helperComplement')");
									//console.log(content);
									loadContentE.append(content);
									//if (typeof yotpo !== "undefined") {
                                    //    yotpo.refreshWidgets();
                                    //    console.log("yotpo refreshed");
                                    //}
								}
								currentStatus=true;
								elemLoading.remove();
								ajaxCallbackObj.requests++;
								options.ajaxCallback(ajaxCallbackObj);
							}
						});
						currentPage++;
					}
				}
				else
					return false;
			});
		}
	};

	if(null!==options.searchUrl)
		currentSearchUrl=searchUrl=options.searchUrl;
	else
		currentSearchUrl=searchUrl=fn.getSearchUrl();

	// Reporting Errors
	if($this.length<1)
	{
		log("Ninguna opciÃƒÂ³n de filtro encontrada","Aviso");
		if(options.showLinks) jQuery(options.linksMenu).css("visibility","visible").show();
		fn.infinitScroll();
		fn.scrollToTop();
		return $this;
	}

	// Reporting Errors
	if(loadContentE.length<1){log("Elemento para destino de la solicitud no se encontrÃƒÂ³ \n ("+loadContentE.selector+")"); return false;}
	if(filtersMenuE.length<1) log("El menÃƒÂº de filtros no fue encontrado \n ("+filtersMenuE.selector+")");

	var currentUrl=document.location.href,
		linksMenuE=jQuery(options.linksMenu),
		prodOverlay=jQuery('<div class="vtexSr-overlay"></div>'),
		departamentE=jQuery(options.menuDepartament),
		loadContentOffset=loadContentE.offset(),
		pageNumber=1,
		shelfJqxhr=null,
		pageJqxhr=null;
	loadContentOffset.top=loadContentOffset.top-200,

	options.emptySearchElem.append(options.emptySearchMsg);
	loadContentE.before(prodOverlay);

	var fns=
	{
		exec:function()
		{
			fns.setFilterMenu();
			fns.fieldsetFormat();
			$this.each(function(){
				var _this=jQuery(this),
					label=_this.parent();

				if(_this.is(":checked"))
				{
					urlFilters+="&"+(_this.attr("rel")||"");
					// Adicionando classe ao label
					label.addClass("sr_selected");
				}

				fns.adjustText(_this);
				// Add span vazio (depois de executar de "adjustText")
				label.append('<span class="sr_box"></span><span class="sr_box2"></span>');

				_this.bind("change",function(){
					fns.inputAction();
					var value=_this.val(),
						text=$('label[title="'+value+'"]').text();;
					// console.log(urlFilters);
					if(_this.is(":checked")){
						fns.addFilter(_this);
						fns.addFilterIndicator(value);
						$('.filter-indicator__wrapper').append('<div class="filter__indicator filter__remove-indicator" data-value="'+value+'" id="filter__indicator-'+value+'"><span class="filter__remove">x</span><div class="filter__value">'+text+'</div></div>');
						if($('#filter__remove-all').length==0){
							$('.filter-indicator__wrapper').prepend('<div class="filter__indicator title">Filtros seleccionados</div>')
							$('.filter-indicator__wrapper').append('<div class="filter__indicator remove-all"><span class="filter__remove-all" id="filter__remove-all">Quitar todos</span></div>')
						}
					}else{
						fns.removeFilter(_this);
						fns.removeFilterIndicator(value);
						if($('.filter__indicator').length==3){
							$('.filter__indicator').fadeOut(300, function(){ $(this).remove(); });
						}else{
							$('.filter__indicator[data-value="'+value+'"]').fadeOut(300, function(){ $(this).remove(); });
						}
					}
					ajaxCallbackObj.filters=$this.filter(":checked").length;
				});
			});

			$('body').on('click', '.filter__remove-indicator', function(){
				var value=$(this).attr('data-value');
				if($('.filter__indicator').length==3){
					$('.filter__indicator').fadeOut(300, function(){ $(this).remove(); });
				}else{
					$('.filter__indicator[data-value="'+value+'"]').fadeOut(300, function(){ $(this).remove(); });
				}
				fns.removeFilterIndicator(value);
				$('label.sr_selected[title="'+value+'"]').removeClass('sr_selected').find('input').prop('checked', false);
				var url=($('label[title="'+value+'"] input').attr("rel")||"");
				prodOverlay.fadeTo(300,0.6);
				if(url!=="")
					urlFilters=urlFilters.replace("&"+url,"");

				currentSearchUrl=fn.getUrl();
				shelfJqxhr=jQuery.ajax({
					url:currentSearchUrl,
					success:fns.filterAjaxSuccess,
					error:fns.filterAjaxError
				});
			});

			$('body').on('click', '#filter__remove-all', function(){
				$('label.sr_selected').removeClass('sr_selected').find('input').prop('checked', false);
				$('.filter__indicator').fadeOut(300,function(){ $(this).remove(); });
				filter_indicator='';
				window.history.replaceState(null, null, current_uri);
				urlFilters='';
				currentSearchUrl=fn.getUrl();
				prodOverlay.fadeTo(300,0.6);
				shelfJqxhr=jQuery.ajax({
					url:currentSearchUrl,
					success:fns.filterAjaxSuccess,
					error:fns.filterAjaxError
				});
			});

			if(""!==urlFilters)
				fns.addFilter($empty);
		},
		loadFilterIndicator:function(){
			if(filter_indicator!=''){
				var filters=filter_indicator.substring(filter_indicator.indexOf('=')+1);
				filters=filters.split(',');
				console.log(filters);
				$.each(filters,function(i,item){
					var value=decodeURI(item),
						text=$('label[title="'+value+'"]').text();
					$('label[title="'+value+'"]').addClass('sr_selected').find('input').prop('checked', true);
					urlFilters+="&"+($('label[title="'+value+'"] input').attr("rel")||"");
					$('.filter-indicator__wrapper').append('<div class="filter__indicator filter__remove-indicator" data-value="'+value+'" id="filter__indicator-'+value+'"><span class="filter__remove">x</span><div class="filter__value">'+text+'</div></div>');
					if($('#filter__remove-all').length==0){
						$('.filter-indicator__wrapper').prepend('<div class="filter__indicator title">Filtros seleccionados</div>')
						$('.filter-indicator__wrapper').append('<div class="filter__indicator remove-all"><span class="filter__remove-all" id="filter__remove-all">Quitar todos</span></div>')
					}
				});
				currentSearchUrl=fn.getUrl();
				prodOverlay.fadeTo(300,0.6);
				shelfJqxhr=jQuery.ajax({
					url:currentSearchUrl,
					success:fns.filterAjaxSuccess,
					error:fns.filterAjaxError
				});
			}
		},
		addFilterIndicator:function(filter_value){
			console.log(filter_indicator);
			if(filter_indicator==''){
				if(current_uri.indexOf('?')!=-1){
					filter_indicator='&';
				}else{
					filter_indicator='?';
				}
				filter_indicator+='filter_indicator=';
			}
			console.log(filter_indicator.length);
			if(filter_indicator.length>'18'){
				filter_indicator+=',';
			}
			filter_indicator+=filter_value;
			window.history.replaceState(null, null, current_uri+filter_indicator);
		},
		removeFilterIndicator:function(filter_value){
			var value=encodeURI(filter_value);
			filter_indicator=filter_indicator.replace(','+filter_value,'').replace(filter_value,'').replace('=,','=');
			console.log(filter_indicator);
			console.log(filter_indicator.length);
			if(filter_indicator.length=='18'){
				filter_indicator='';
			}
			console.log(current_uri);
			console.log(filter_indicator);
			window.history.replaceState(null, null, current_uri+filter_indicator);
		},
		mergeMenu:function()
		{
			if(!options.mergeMenu) return false;

			var elem=departamentE;
			elem.insertAfter(options.insertMenuAfter);
			fns.departamentMenuFormat(elem);
		},
		mergeMenuList:function()
		{
			var i=0;
			filtersMenuE.find("h3,h4").each(function(){
				var ul=linksMenuE.find("h3,h4").eq(i).next("ul");
				//ul.insertAfter(jQuery(this));
				fns.departamentMenuFormat(ul);
				i++;
			});
		},
		departamentMenuFormat:function(elem)
		{
			elem.find("a").each(function(){
				var a=jQuery(this);
				a.text(fns.removeCounter(a.text()));
			});
		},
		fieldsetFormat:function()
		{
			labelCallbackData.fieldsetCount=0;
			labelCallbackData.tmpCurrentLabel={};

			filtersMenuE.find("fieldset").each(function(){
				var $t=jQuery(this),
					label=$t.find("label"),
					fieldsetClass="filtro_"+($t.find("h5:first").text()||"").toLowerCase().replaceSpecialChars().replace(/\s/g,"-");

				labelCallbackData[fieldsetClass]={};

				// Ocultar fieldset quando nÃƒÂ£o existe filtro e sair desste mÃƒÂ©todo
				if(label.length<1)
				{
					$t.hide();
					return;
				}

				// Adicionar classe ao fieldset
				$t.addClass(fieldsetClass);

				// Adicionando classe e tÃƒÂ­tulo ao label
				label.each(function(ndx){
					var t=jQuery(this),
						v=(t.find("input").val()||""),
						labelClass="sr_"+v.toLowerCase().replaceSpecialChars().replace(/\s/g,"-");

					labelCallbackData.tmpCurrentLabel=
					{
						fieldsetParent:[$t,fieldsetClass],
						elem:t
					};

					labelCallbackData[fieldsetClass][ndx.toString()]=
					{
						className:labelClass,
						title:v
					};

					t.addClass(labelClass).attr({"title":v,"index":ndx});

					options.labelCallback(labelCallbackData);
				});

				labelCallbackData.fieldsetCount++;
			});
		},
		inputAction:function()
		{
			if(null!==pageJqxhr) pageJqxhr.abort();
			if(null!==shelfJqxhr) shelfJqxhr.abort();
			currentPage=2;
			moreResults=true;
		},
		addFilter:function(input)
		{
			urlFilters+="&"+(input.attr("rel")||"");
			prodOverlay.fadeTo(300,0.6);
			currentSearchUrl=fn.getUrl();
			shelfJqxhr=jQuery.ajax({
				url:currentSearchUrl,
				success:fns.filterAjaxSuccess,
				error:fns.filterAjaxError
			});
			// Adicionando classe ao label
            input.parent().addClass("sr_selected");
            $('#filtersApply').addClass('is-active')
		},
		removeFilter:function(input)
		{
			var url=(input.attr("rel")||"");
			prodOverlay.fadeTo(300,0.6);
			if(url!=="")
				urlFilters=urlFilters.replace("&"+url,"");

			currentSearchUrl=fn.getUrl();
			shelfJqxhr=jQuery.ajax({
				url:currentSearchUrl,
				success:fns.filterAjaxSuccess,
				error:fns.filterAjaxError
			});
			// Removendo classe do label
            input.parent().removeClass("sr_selected");
            if( !$('.sr_selected').length ){
                $('#filtersApply').removeClass('is-active')
            }
		},
		filterAjaxSuccess:function(data)
		{
			var $data=jQuery(data);
			prodOverlay.fadeTo(300,0,function(){jQuery(this).hide();});
			fns.updateContent($data);
			ajaxCallbackObj.requests++;
            options.ajaxCallback(ajaxCallbackObj);
            console.log(currentSearchUrl)
           /* $.ajax({
                url: `${currentSearchUrl.replace('buscapagina','busca')}&lid=5911a982-c0b0-4586-b359-2ed865412783`,
                success: function(data){
                    let totalNodeWrapper = document.createRange().createContextualFragment(data).querySelector('.resultado-busca-numero .value'),
                        totalNumber

                    if(totalNodeWrapper != null){
                        totalNumber = parseInt(totalNodeWrapper.textContent)
                    }
                    console.log(totalNumber)
                    totalItems_Text(totalNumber, 'body .category-name')
                }
            })*/
			// _html.animate({scrollTop:options.filterScrollTop((loadContentOffset||{top:0,left:0}))},600);
		},
		filterAjaxError:function()
		{
			prodOverlay.fadeTo(300,0,function(){jQuery(this).hide();});
			// alert(options.filterErrorMsg);
			log("Hubo un error al intentar hacer la peticiÃƒÂ³n de la pÃƒÂ¡gina de filtros.");
		},
		updateContent:function($data)
		{
			animatingFilter=true;
			if(!options.authorizeUpdate(ajaxCallbackObj)) return false;

			$data=$data.find(">ul:first-child>li:not('.helperComplement')");

			var shelf=$data.filter('li');
			var shelfPage=loadContentE.find('li');
			console.log(shelfPage);

			(shelfPage.length>0?loadContentE:options.emptySearchElem).slideUp(600,function(){
				shelfPage.remove();

				// Removendo a mensagem de busca vazia, esta remoÃƒÂ§ÃƒÂ£o "forÃƒÂ§ada" foi feita para
				// corrigir um bug encontrado ao clicar em vÃƒÂ¡rios filtros
				if(options.usePopup)
					body.find(".boxPopUp2").vtexPopUp2();
				else
					options.emptySearchElem.remove();

				if(shelf.length>0)
				{
					//shelfPage.hide();
					loadContentE.append(shelf);
					options.shelfCallback();
					loadContentE.slideDown(600,function(){
						animatingFilter=false;
						loadContentE.slideDown(500);
					});
					ajaxCallbackObj.isEmpty=false;
				}
				else
				{
					ajaxCallbackObj.isEmpty=true;

					if(options.usePopup)
						options.emptySearchElem.addClass("freeContent autoClose ac_"+options.popupAutoCloseSeconds).vtexPopUp2().stop(true).show();
					else
					{
						loadContentE.append(options.emptySearchElem);
						options.emptySearchElem.show().css("height","auto").fadeTo(300,0.2,function(){
							options.emptySearchElem.fadeTo(300,1);
						});
					}

					options.emptySearchCallback(ajaxCallbackObj);
				}
			});
		},
		adjustText:function(input)
		{
			var label=input.parent(),
				text=label.text(),
				qtt="";

			text=fns.removeCounter(text);

			label.text(text).prepend(input);
		},
		removeCounter:function(text)
		{
            return text.replace(/\([0-9]+\)/ig,function(a){
                var qtt="";
				qtt=a.replace(/\(|\)/,"");
				return "";
			});
		},
		setFilterMenu:function()
		{
			if(filtersMenuE.length>0)
			{
				linksMenuE.hide();
				filtersMenuE.show();
			}
		}
	};

	if(body.hasClass("departamento"))
		fns.mergeMenu();
	else if(body.hasClass("categoria") || body.hasClass("resultado-busca"))
		fns.mergeMenuList();

	fns.exec();
	fn.infinitScroll();
	fn.scrollToTop();
	options.callback();
	fns.loadFilterIndicator();

	// Exibindo o menu
	filtersMenuE.css("visibility","visible");
};


/*!
  * General Script - IvÃƒÂ¡n Luna [RE]
  * ivanluna.re@outlook.com
*/
/*--------------------------------------------------------------------------------*/
// Product List
/*--------------------------------------------------------------------------------*/
// $(function(){
// 	viewList();
// 	viewGridLarge();
// 	viewGridSmall();
// });


$(function(){
	//Avoid scroll on load page
	var interval_scroll = '',
        interval_index  = 0;

	interval_scroll = setInterval(function(){
		$('html,body').stop();
		interval_index++;
		if(interval_index>=40){
			clearInterval(interval_scroll);
		}
	},10);
	// Order element
	$('#O').appendTo('#order-by-wrapper');
	$("#O option[value=OrderByBestDiscountDESC]").text('Mejor descuento');
});

let removeCounter = function(text)
		{
            return text.replace(/\([0-9]+\)/ig,function(a){
                var qtt="";
				qtt=a.replace(/\(|\)/,"");
				return "";
			});
        }

// Filters
;(function(c){
    $(window).on('load', function(){
        var $_searchMultipleNavigator   = $('.search-multiple-navigator'),
            $_searchSingleNavigator     = $('.search-single-navigator'),
            $_searchStaticNavigator     = $('.search-static-navigator'),
            $_searchSSNavigator         = $('.search-single-navigator, .search-static-navigator'),
            initialStateFilters         = 'is-expanded',
            initialStateLinks           = 'is-expanded',
            initialStateLinksInside     = 'is-collapsed',
            initialSVGFilters           = initialStateFilters === 'is-collapsed' ? '#svg-icon-chevron-down' : '#svg-icon-chevron-up',
            initialSVGLinks             = initialStateLinks === 'is-collapsed' ? '#svg-icon-chevron-down' : '#svg-icon-chevron-up',
            initialSVGLinksInside       = initialStateLinksInside === 'is-collapsed' ? '#svg-icon-chevron-down' : '#svg-icon-chevron-up'

        // -----Show / Hide wrapper on mobile-----
        $('#filtersOpen').on('click', function(event){
            event.preventDefault();
            $('.product-list__filters').toggleClass('is-visible');
            $('body')
                .toggleClass('active-filters no-overflow')
                .append('<div class="overlay overlay--filters is-active" />')
        });
        $('body').on('click', '#filtersApply, #filtersClose, .overlay--filters', function(event){
            event.preventDefault();
            $('.product-list__filters').toggleClass('is-visible');
            $('body div.overlay.is-active').remove()
            $('body').removeClass('active-filters no-overflow')
        });

        // -----Create categoriesList & Sort filters depending on whether it is Department / Category list [Improve!]-----
        let changeOrder = true
        if( $('body').hasClass('departamento') || $('body').hasClass('categoria') || $('body').hasClass('resultado-busca') ){
            var urlSearch = window.location.search;
            // Dynamic categories list
            if( $('body').hasClass('departamento') ){
                let departmentTitle = $_searchSingleNavigator.find('h3')
                $_searchSingleNavigator.find(departmentTitle).before(`
                    <h3 class="${departmentTitle.attr('class')} duplicated">${departmentTitle.text()}</h3>
                    <ul id="categoriesList" class="PLP-categoriesList"></ul>
                `);

                $_searchSingleNavigator.find('h4').each(function(index, item){
                    let $_this = $(item)
                    $('#categoriesList').append($_this.next('ul').andSelf())

                    c($_this)
                    c($_this.next().children().length)

                    // Remove elements
                    // $_this.next().remove()
                    // $_this.remove()
                });
                // Remove original h3 [Department name]
                $_searchSingleNavigator.find('h3:not(.duplicated)').remove()
            }
            //
            if ( changeOrder && !urlSearch.includes('specificationFilter') ){
                $_searchSingleNavigator.insertBefore($_searchMultipleNavigator);
            }
            // $_searchMultipleNavigator.find('fieldset.filtro_talla').insertBefore('fieldset.filtro_color');
            // $_searchMultipleNavigator.find('fieldset.filtro_color-principal').insertBefore('fieldset.filtro_talla');
        }

        // -----Collapse-----
        $(  '.search-multiple-navigator h3,'+
            '.search-multiple-navigator h4,'+
            '.search-multiple-navigator h5,'+
            '.search-single-navigator h3,'+
            '.search-single-navigator h4,'+
            '.search-single-navigator h5,'+
            '.search-static-navigator h3,'+
            '.search-static-navigator h4,'+
            '.search-static-navigator h5').on('click', function(e){
            var $_this              = $(this),
                $_accordionTrigger  = $_this,
                $_svgIcon           = $_this.find('use'),
                $_isShown           = $('#searchNavigator-wrapper .filter-accordion__trigger.is-collapsed');

            if( $_accordionTrigger.hasClass('is-collapsed') ){
                $_accordionTrigger.closest('fieldset.is-collapsed').removeClass('is-collapsed').addClass('is-expanded')
                $_accordionTrigger.closest('div.is-collapsed').removeClass('is-collapsed').addClass('is-expanded')
                $_accordionTrigger.next().removeClass('is-collapsed').addClass('is-expanded')
                $_accordionTrigger.removeClass('is-collapsed').addClass('is-expanded')
                $_svgIcon.attr('xlink:href', '#svg-icon-chevron-up')
            }
            else if($_accordionTrigger.hasClass('is-expanded')){
                // $_isShown.closest('fieldset.is-collapsed').removeClass('is-collapsed')
                // $_isShown.next().removeClass('is-collapsed')
                // $_isShown.removeClass('is-collapsed')

                $_svgIcon.attr('xlink:href', '#svg-icon-chevron-down')
                $_accordionTrigger.removeClass('is-expanded').addClass('is-collapsed')
                $_accordionTrigger.next().removeClass('is-expanded').addClass('is-collapsed')
                $_accordionTrigger.closest('div.is-expanded').removeClass('is-expanded').addClass('is-collapsed')
                $_accordionTrigger.closest('fieldset.is-expanded').removeClass('is-expanded').addClass('is-collapsed')
            }
        })

        // -----Remove counter from links [ToCheck]-----
        $_searchSingleNavigator.find('h4 > a').each(function(){
            let $_this = $(this)
            $_this.text(removeCounter($_this.text()))
        })
        $_searchSingleNavigator.find('ul > li > a').each(function(){
            let $_this = $(this)
            $_this.text(removeCounter($_this.text()))
        })

        // -----Wrapping h3 + ul / h4 + ul / h5 + ul-----
        // Single
        $_searchSingleNavigator.find('> h3, > h4, > h5').each(function(){
            let $_this      = $(this),
                className   = $_this.text().toLowerCase().trim().replace(/\s/g,'-'),
                classNameUL = ($_this.next('ul').length)
                    ? $_this.next().attr('class').toLowerCase().replace('even','').replace('caracteristicas','').trim().replace(/\s/g,'-')
                    : '[ ]',
                linkType    = !$_this.is('h5')
                                ? $_this.is('h3') ? 'is-department' : 'is-category'
                                : 'is-field'

            //
            c('%c%s', 'color: gold', `Heading text: ${className}`)
            c('%c%s', 'color: tomato', `   UL class: ${classNameUL}`)
            c('%c%s', 'color: tomato', `   Type: ${linkType}`)
            if($_this.next('ul').length){
                $_this.next().andSelf().wrapAll(`<div class="links-wrapper links-wrapper--${classNameUL} ${linkType}"/>`);
            }
            else{
                $_this.wrapAll(`<div class="links-wrapper links-wrapper--${className} ${linkType}"/>`);
            }
        })
        // Static
        $_searchStaticNavigator.find('> h3').each(function(){
            let $_this      = $(this)

            if($_this.next('ul').length){
                $_this.next().andSelf().wrapAll(`<div class="links-wrapper"/>`);
            }
            else{
                $_this.wrapAll(`<div class="links-wrapper"/>`);
            }
        })

        // -----Add SVG-----
        $('#searchNavigator-wrapper fieldset div').each(function(){
            let $_this  = $(this)
            $_this.has('label').prev().addClass(`filter-accordion__trigger ${initialStateFilters}`)
            .append(`
            <svg class="svg-icon">
                <use xlink:href="${initialSVGFilters}"></use>
            </svg>`
            )
            $_this.addClass(`${initialStateFilters}`)
            $_this.parent().addClass(`${initialStateFilters}`)
        })
        $('#searchNavigator-wrapper .links-wrapper > ul').each(function(){
            let $_this  = $(this)
            if( $_this.children().length > 0 ){
                $_this.prev().addClass(`filter-accordion__trigger ${initialStateLinks}`)
                .append(`
                <svg class="svg-icon">
                    <use xlink:href="${initialSVGLinks}"></use>
                </svg>`
                )
                $_this.addClass(`${initialStateLinks}`)
                $_this.parent().addClass(`${initialStateLinks}`)
            }
            else{
                $_this.remove()
            }
        })
        $('#searchNavigator-wrapper .links-wrapper > ul > ul').each(function(){
            let $_this  = $(this)
            if( $_this.children().length > 0 ){
                $_this.prev().addClass(`filter-accordion__trigger ${initialStateLinksInside}`)
                .append(`
                <svg class="svg-icon">
                    <use xlink:href="${initialSVGLinksInside}"></use>
                </svg>`
                )
                $_this.addClass(`${initialStateLinksInside}`)
                $_this.parent().addClass(`${initialStateLinksInside}`)
            }
            else{
                $_this.remove()
            }
        })

        // -----Filter counter & Clean filter-----
        $('.search-multiple-navigator fieldset label').on('click', function(){
            setTimeout(() => {
                let $_this = $(this),
					filterItemsSelected = $_this.closest('div').children('.sr_selected'),
					filterTitle = $_this.closest('div').prev().find('.filter-accordion__number');

				filterTitle.html('('+filterItemsSelected.length+')')
            }, 500);
        })

        // -----It's loaded-----
        $('#searchNavigator-wrapper').addClass('is-loaded');
    })
})(console.log);

// Cambio de layout
var viewList = function(){
	$('body').on('click', '.trigger-list', function(e){
		e.preventDefault()
		$('.product-list').fadeOut(100, function(){
			$(this)
			.removeClass('grid-view')
			.addClass('list-view')
			.fadeIn('fast', function(){
				sameHeight()
			})
        })
        $(this).addClass('is-active').siblings().removeClass('is-active')

	})
}
var viewGridLarge = function(){
	$('body').on('click', '.grid-large', function(e){
		e.preventDefault()
		$('.product-list').fadeOut(100, function(){
			$(this)
			.removeClass('list-view grid-small')
			.addClass('grid-view grid-large')
			.fadeIn('fast', function(){
				sameHeight()
			})
        })
        console.log($(this))
		$(this).addClass('is-active').siblings().removeClass('is-active')
	})
}
var viewGridSmall = function(){
	$('body').on('click', '.grid-small', function(e){
		e.preventDefault()
		$('.product-list').fadeOut(100, function(){
			$(this)
			.removeClass('list-view grid-large')
			.addClass('grid-view grid-small')
			.fadeIn('fast', function(){
				sameHeight()
			})
        })
        console.log($(this))
		$(this).addClass('is-active').siblings().removeClass('is-active')
	})
}

// Select size
$('.product-sizes').on('click', '.product-size:not(.disabled)', function()
{
	var sizeSelected = $(this).text()
	// console.log(sizeSelected)
	$(this).addClass('active').siblings().removeClass('active')

	$(this).closest('.product-item')
		.find('.size-selected').remove()

	$(this).closest('.product-item')
		.children().prepend('<span class="size-selected">Talla seleccionada: <strong>' + sizeSelected + '</strong></span>')
});

// Validar si hay talla seleccionada
$('.product-buy-action .button-flat').each(function()
{
	$(this).on('click', function()
	{
		if( $(this).closest('.product-item').find('.size-selected').length ){
			// console.log('Si tiene')
			$('#productAttached').modal('show');
		}
		else{
			// console.log('No tiene')
			$(this).siblings('.product-sizes').children('em').addClass('no-selected')

			setTimeout(function() {
				$('.product-sizes').children('em').removeClass('no-selected')
			}, 2000);
		}
	})
})

/*--------------------------------------------------------------------------------*/
// Product's Quick View
/*--------------------------------------------------------------------------------*/
$(".product-modal-thumbnails img").on("click", function(){
	var newImage = $(this).attr("src");
	$("#productSingleModalImage").attr("src", newImage);
});

// Size
$(".product-modal-sizes").on("click", ".product-size", function(){
	$(this).addClass("active").siblings().removeClass("active");
});

// It need improve itself
$(document).on('ready', function(){
	/*var titleDepartmentCategoryVtex = $('h2.titulo-sessao'),
		titleDepartmentCategory = titleDepartmentCategoryVtex.text();*/

	/*let pathname = window.location.pathname;
	let obj      = seo_marti();*/
	//if( !$('body').hasClass('resultado-busca') ){
		/*if(obj[pathname] === undefined){
			titleDepartmentCategoryVtex.before('<h1 class="category-name">'+titleDepartmentCategory+'</h1>');
		}else{
			titleDepartmentCategoryVtex.before('<h1 class="category-name">'+obj[pathname].h1+'</h1>');
		}//end if*/

		//titleDepartmentCategoryVtex.before('<h1 class="category-name">'+titleDepartmentCategory+'</h1>');
	/*}else if( $('body').hasClass('resultado-busca') ){
		titleDepartmentCategoryVtex.text('Resultado de la bÃƒÂºsqueda');
	}//end if*/

	$('.ver-filtros').html('Ver todas las opciones');

	$('.menu-departamento input[type="checkbox"]').vtexSmartResearch({
		loadContent: '.prateleira.vitrine[id^=ResultItems] > div > ul',
		ajaxCallback:function(){
			setTimeout(function(){
                sameHeight();
                heightAsideFilters();
                load_discount_flags();
                if(typeof validate_only_in_store !== 'undefined'){
                	validate_only_in_store()
                }
			},1000)
            $('.prateleira.vitrine .vtexSr-overlay + ul').removeClass('ul-vtex--empty');
			load_skus();
		},
		shelfCallback:function(){
			setTimeout(function(){
				sameHeight();
				load_discount_flags();
				if(typeof validate_only_in_store !== 'undefined'){
					validate_only_in_store()
				}
			},1000)
			$('.prateleira.vitrine .vtexSr-overlay + ul').removeClass('ul-vtex--empty');
			load_skus();
		},
		emptySearchCallback:function(){
			$('.prateleira.vitrine .vtexSr-overlay + ul').addClass('ul-vtex--empty');
		},
		mergeMenu: false
	});
});

//
var link1 = 'checkout/cart/add?sku=';
var link2= '&qty=1&seller=1&redirect=true&sc=1';

$(document).ready(function(){
	$(".product-item-action .primary").each(function () {
		var link = $(this).attr('href');
		link = link1 + 145 + link2;
		// console.log(link);
	});
});

// Titles
function h2Replace(){
    let titleElementByVtex  = document.querySelector('.titulo-sessao'),
        titleTextByVtex     = titleElementByVtex.textContent,
        dlCategoryId        = dataLayerInfo.categoryId,
        dlPageDepartment    = dataLayerInfo.pageDepartment,
        dlPageCategory      = dataLayerInfo.pageCategory,
        dlPageTitle         = dataLayerInfo.pageTitle,
        dlPageTitleNumber   = dlPageTitle.match(/\d+/g),
        clusterId           = dlPageTitleNumber != null ? dlPageTitleNumber[0] : false,
        titleText           = dlPageCategory.replace(/-/g,' ')

    if(clusterId != false){
        console.log('%c It comes from a cluster', 'color: gold')
        // titleElementByVtex.innerHTML  = titleText
        whatKindOfTommyIs_H2()
    }
    else if(dlPageDepartment != null && titleTextByVtex === 'Resultado de la bÃƒÂºsqueda'){
        console.log('%c It is not clear what happen', 'color: gold')
        titleElementByVtex.innerHTML  = titleText
        whatKindOfTommyIs_H2()
    }
    else if(dlPageDepartment != null){
        console.log('%c It comes from a specific department/category', 'color: gold')
    }
    else{
        console.log('%c It comes from the entire catalog', 'color: gold')
        // titleElementByVtex.innerHTML  = titleText
        whatKindOfTommyIs_H2()
    }
    // Only for Tommy Hilfiger
    function whatKindOfTommyIs_H2(){
        if(dlPageCategory === 'tommy-jeans' || dlPageCategory === 'tommy-sport'){
            let path        = window.location.pathname,
                pathLevels  = path.split('/')
            // The title is the name of the penultimate level
            titleElementByVtex.innerHTML  = pathLevels[pathLevels.length - 2].replace(/-/g,' ')
        }
        else{
            titleElementByVtex.innerHTML  = titleText
        }
    }
    //
    let customHeaders = [
        {
            "url": "/mujer/ropa/sudaderas-y-sueteres",
            "title": "Sudaderas y SuÃƒÂ©teres"
        },
        {
            "url": "/mujer/ropa/sudaderas-y-sueteres/tommy-jeans",
            "title": "Sudaderas y SuÃƒÂ©teres"
        },
        {
            "url": "/hombre/ropa/sudaderas-y-sueteres/tommy-jeans",
            "title": "Sudaderas y SuÃƒÂ©teres"
        },
    ]
    if(customHeaders.includes( customHeaders.find(item  => item.url === window.location.pathname) )){
        console.log('%c H1 was replaced from {customHeaders}', 'color: gold')
        let item = customHeaders.find(item  => item.url === window.location.pathname)
        titleElementByVtex.innerHTML  = item.title
    }

    console.log({department: dlPageDepartment, categoryId: dlCategoryId, clusterId, text: titleText})
}

function metatitles(){
	var titulo = $(document).attr("title");
	var titleText       = dataLayerInfo.pageCategory.replace(/-/g,' ')
	if (titulo.indexOf("Resultado") == -1){
		if($( "body" ).hasClass( "folder" )){
			var titleTextMay       = titleText.replace(/\b[a-z]/g,c=>c.toUpperCase());
	    	titulo                 = titulo.replace(/[0-9]/g, "");
	    	var descripcion_genero = titulo.replace(/[0-9]| Ã¢â‚¬â€œ tommymx/g, "");
	    	titulo                 = titulo.replace ("Ã¢â‚¬â€œ", "|");
	    	var re                 = new RegExp(titleText, 'gi');
	    	titulo                 = titulo.replace (re, "");
	    	descripcion_genero     = descripcion_genero.replace("Ropa - ","");
	    	descripcion_genero     = descripcion_genero.replace(re,"");
	    	titulo                 = titulo.replace (/-/gi, "para");
	    	var texto              = titulo.replace ("tommymx", " Tommy Hilfiger - Tienda en LÃƒÂ­nea");
	    	document.title         = titleTextMay+" | "+texto;
	    	var metadesc           = "Compra "+titleText+" para "+descripcion_genero+". Explora nuestra colecciÃƒÂ³n y redescubre tu estilo conÃ‚ Tommy Hilfiger. Ã‚Â¡Envio gratis en pedidos mayores a $999!"
	    	$("meta[name   ='description']").attr("content", metadesc);
		}else if($( "body" ).hasClass( "categoria" )){
			var descripcion = titulo.replace(/ Ã¢â‚¬â€œ tommymx/g, "");
			descripcion     = descripcion.replace("-","y");
			titulo         = titulo.replace (/-/g, "|");
			var texto      = titulo.replace (/ Ã¢â‚¬â€œ tommymx/gi, " | Tommy Hilfiger - Tienda en LÃƒÂ­nea");
			document.title = texto;
			var metadesc           = "Compra "+descripcion+". Explora nuestra colecciÃƒÂ³n y redescubre tu estilo conÃ‚ Tommy Hilfiger. Ã‚Â¡Envio gratis en pedidos mayores a $999!"
			$("meta[name   ='description']").attr("content", metadesc);
			console.log(metadesc);
		}else if ($( "body" ).hasClass( "departamento" )){
			var descripcion = titulo.replace(/ Ã¢â‚¬â€œ tommymx/g, "");
			titulo         = titulo.replace ("Ã¢â‚¬â€œ", "|");
			titulo         = titulo.replace ("tommymx", "Tommy Hilfiger - Tienda en LÃƒÂ­nea");
			document.title = titulo;
			var metadesc           = "Compra "+descripcion+". Explora nuestra colecciÃƒÂ³n y redescubre tu estilo conÃ‚ Tommy Hilfiger. Ã‚Â¡Envio gratis en pedidos mayores a $999!"
			$("meta[name   ='description']").attr("content", metadesc);
		}
	}


}

function metatitles_busqueda(){
	var titulo = $(document).attr("title");
    if (titulo.indexOf("Resultado") == -1){
        if ($( "body" ).hasClass( "resultado-busca" )){
            console.log(titulo);
            titulo = titulo.replace ("Ã¢â‚¬â€œ", "|");
            console.log(titulo);
            titulo = titulo.replace ("tommymx", "Tommy Hilfiger");

            var texto = "Resultado de bÃƒÂºsqueda - " + titulo +  " | Tienda en lÃƒÂ­nea";
            document.title = texto;
        }
    }
}
function printDepartmentInH1(){
    let pathname                    = window.location.pathname,
        pathnameDepth               = pathname.split('/').length - 1,
        departmentName

    // Validate if the PLP comes from /gender/novedades OR /gender/tommy-brand OR /gender/category
    if(pathname.includes('novedades')){
        console.log('%c%s', 'color: gold', 'Novedades')
        departmentName = 'Novedades'
    }
    else if(pathname.includes('tommy-jeans') || pathname.includes('tommy-sport')){
        console.log('%c%s', 'color: gold', 'Tommy Jeans||Sport')
        departmentName = whatKindOfTommyIs_Department()
    }
    else{
        if(dataLayerInfo.pageDepartment.toUpperCase() === $('h1.category-name').text().toUpperCase()){
            departmentName = pathname.split('/')[1]
        }
        else{
            departmentName = dataLayerInfo.pageDepartment
        }
    }
    // Validate if the url is like /gender/tommy-brand OR /gender/category/tommy-brand
    function whatKindOfTommyIs_Department(){
        let pathnameLevels = pathname.split('/'),
            testing
        if(pathnameDepth >= 3){
            testing = `${pathnameLevels[pathnameLevels.length - 1].replace(/-/g,' ')} ${pathnameLevels[1]}`
        }
        else{
            testing = `${pathnameLevels[pathnameLevels.length - 1].replace(/-/g,' ')}`
        }

        return testing
    }
    console.log('%c%s', 'color: gold', `Department: ${departmentName}`)
    $('h1.category-name').prepend(`
        <a href="${plpBackNavigation()}" class="category-name__back">
            <svg class="svg-icon"><use href="#svg-icon-chevron-left" /></svg>
        </a>
        <span class="category-name__department">${departmentName}</span>
    `)
}
let titleCategory = function(){
    var titleDepartmentCategoryVtex = $('h2.titulo-sessao'),
        titleDepartmentCategory = titleDepartmentCategoryVtex.text()

    if( !$('body').hasClass('resultado-busca') && !$('body').hasClass('brand') ){
        titleDepartmentCategoryVtex.before(`<h1 class="category-name"><span id="h1_name">${titleDepartmentCategory}</span></h1>`)
    }
    else if( $('body').hasClass('resultado-busca') ){
        titleDepartmentCategoryVtex.text('Resultado de la bÃƒÂºsqueda');
    }
    //printDepartmentInH1()
}

//Call functions
$(window).on('load', function(){
    /*if ( $_body.hasClass('brand') || $_body.hasClass('folder') ){
        if(!$_body.hasClass('landing')){
            h2Replace()
        }
    }
    if ( $_body.hasClass('departamento') || $_body.hasClass('categoria') || $_body.hasClass('folder') || $_body.hasClass('landing') ){
        metatitles()
    }*/

    if ( $_body.hasClass('resultado-busca')){
        metatitles_busqueda();
    }
    // productItemUpdateElement()
    titleCategory()
    sameHeight()
})