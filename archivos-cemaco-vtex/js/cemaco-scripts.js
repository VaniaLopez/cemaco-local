$(document).ready(function() {

    /*if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        $("#accountTriggerWrapper").on('click', function(){
            if( $("#accountMenu").hasClass("is-active") ){
                $('#accountMenu').removeClass("is-active");
                $("#accountMenu").css({"display":"none","opacity":"0"});
            }else{
                $("#accountMenu").addClass("is-active");
                $("#accountMenu").css({"display":"block","opacity":"1"});
            }
        });
    }*/

    $(".televentas_item").click(function() {
        initiateCall();
        setTimeout(function () {
                fcWidget.open();
            }, 1000);
    });
    
    $("#new-widgets-center-frame .widgets-center-launcher #cta-wrapper-freshchat").click(function () {
        if (!$(this).hasClass("fcWidget-initialize") ) {
            console.log("Test Entry Click")
            initiateCall();
            setTimeout(function () {
                fcWidget.open();
                $("#new-widgets-center-frame .widgets-center-launcher").css("display", "none");
                $(".blur-layer-widgets-center").removeClass("frame-opened");
                $(this).add("fcWidget-initialize");
                
                window.fcWidget.on("widget:closed", function(resp) {
                    $(".widgets-center-launcher").css("display", "flex");
                    $(".blur-layer-widgets-center").addClass("frame-opened");
                });
            }, 1000);
            
            
        }else {
            
            setTimeout(function () {
                fcWidget.open();
                $("#new-widgets-center-frame .widgets-center-launcher").css("display", "none");
                $(".blur-layer-widgets-center").removeClass("frame-opened");
                
                window.fcWidget.on("widget:closed", function(resp) {
                    $(".widgets-center-launcher").css("display", "flex");
                    $(".blur-layer-widgets-center").addClass("frame-opened");
                });
            }, 1000);
            
            
            
        }
    });
    
    
    function checkMainButtonCloseHotJar() {
        (async() => {
            while(!document.querySelector("#_hj_feedback_container ._hj-2JN4b__ExpandedWidget__closeButton")){
                console.log("check closeButton");
                await new Promise(resolve => setTimeout(resolve, 1000));
            }
            jQuery("#_hj_feedback_container ._hj-2JN4b__ExpandedWidget__closeButton").click(function(){
                jQuery(".widgets-center-launcher").css("display", "flex");
                jQuery(".blur-layer-widgets-center").addClass("frame-opened");
                jQuery("#_hj_feedback_container button").addClass("d-none");
            });
        })();
    }
    
    function checkBlueIconMainButtonCloseHotJar() {
        (async() => {
            while(!document.querySelector("#_hj_feedback_container ._hj-2NdsM__MinimizedWidgetBottom__close")){
                console.log("check closeButton Icon");
                await new Promise(resolve => setTimeout(resolve, 1000));
            }
                jQuery("#_hj_feedback_container ._hj-2NdsM__MinimizedWidgetBottom__close").click(function(){
                jQuery(".widgets-center-launcher").css("display", "flex");
                jQuery(".blur-layer-widgets-center").addClass("frame-opened");
                jQuery("#_hj_feedback_container button").addClass("d-none");
            });
        })();
    }
    
    function checkFinalizeFeedbackCloseButtonHotJar() {
        (async() => {
            while(!document.querySelector("#_hj_feedback_container ._hj-24J4R__MinimizedWidgetMessage__close")){
                console.log("check closeButton Icon");
                await new Promise(resolve => setTimeout(resolve, 1000));
            }
                jQuery("#_hj_feedback_container ._hj-24J4R__MinimizedWidgetMessage__close").click(function(){
                jQuery(".widgets-center-launcher").css("display", "flex");
                jQuery(".blur-layer-widgets-center").addClass("frame-opened");
                jQuery("#_hj_feedback_container button").addClass("d-none");
            });
        })();
    }
    
    function reOpenWCAfterClosed() {
        (async() => {
            
            while(!document.querySelector("#_hj_feedback_container ._hj-1baop__EmailStep__clearButton")){
                console.log("check closeButton Icon");
                await new Promise(resolve => setTimeout(resolve, 1000));
            }
                jQuery(`#_hj_feedback_container ._hj-1baop__EmailStep__clearButton, 
                #_hj_feedback_container ._hj-2wZPy__PrimaryButtonBase__primaryButton `).click(function(){
                jQuery(".widgets-center-launcher").css("display", "flex");
                jQuery(".blur-layer-widgets-center").addClass("frame-opened");
                jQuery("#_hj_feedback_container button").addClass("d-none");
            });
        })();
    }
    
    function showHotJarPopUp(){
        (async() => {
            
            while(!document.querySelector("#_hj_feedback_container button")){
                console.log("check widget HotJar Icon");
                await new Promise(resolve => setTimeout(resolve, 1000));
            }
            
            jQuery("#_hj_feedback_container button").addClass("d-none");
            jQuery("#_hj_feedback_container button").click();
            jQuery("#_hj_feedback_container button").removeClass("d-none");
            jQuery(".widgets-center-launcher").css("display", "none");
            jQuery(".blur-layer-widgets-center").removeClass("frame-opened");
        })();
    }
     $("#new-widgets-center-frame .widgets-center-launcher #cta-wrapper-hotjar").click(function () {

        
        if (!$(this).hasClass("hotjar-initialize") ) {
                $(this).addClass("hotjar-initialize");
                
                initializeHotJar();
                
                showHotJarPopUp();
                checkMainButtonCloseHotJar();
                checkBlueIconMainButtonCloseHotJar();
                checkFinalizeFeedbackCloseButtonHotJar();
            
        }else {
            showHotJarPopUp();
            checkMainButtonCloseHotJar();
            checkBlueIconMainButtonCloseHotJar();
            reOpenWCAfterClosed();
        }
        
    });
    
    function initializeHotJar(){
        // Create the element

        var script = document.createElement("script");
        script.id = "hotjar-js-sdk";

        // Add script content
        
        script.innerHTML = `
        if(location.host=='beta.cemaco.com'){ console.log("beta.cemaco");
      (function(h,o,t,j,a,r){
            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
            h._hjSettings={hjid:403879,hjsv:6};
            a=o.getElementsByTagName('head')[0];
            r=o.createElement('script');r.async=1;
            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
            a.appendChild(r);
        })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');                                                                          
    }else{ console.log("Cemaco");
        (function(h,o,t,j,a,r){
              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:483462,hjsv:5};
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.defer=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
          })(window,document,'//static.hotjar.com/c/hotjar-','.js?sv=');
          window.hj('identify', null, {})
    }`;
        
        // Append

        document.head.appendChild(script);
    }

    function initFreshChat() {
        window.fcWidget.init({
            token: "c726946d-756a-4bab-a909-e686d64770fb",
            host: "https://wchat.freshchat.com",
            locale: "es",
            config: {
                headerProperty: {
                  hideChatButton: true
                }
            },
            tags: [
                "web"
            ],
        });
    }

    function initialize(i, t) {
        var e;
        i.getElementById(t) ? initFreshChat() : ((e = i.createElement("script")).id = t, e
            .async = !0, e.src = "https://wchat.freshchat.com/js/widget.js", e.onload =
            initFreshChat, i.head.appendChild(e))
    }

    function initiateCall() {
        initialize(document, "freshchat-js-sdk")
    }

    // Cambio nombre PDP descripci\u00F3n amplia por decripci\u00F3n
    $('.produto .caracteristicas .even th.Descripcion-amplia').html('Descripción');

    // Cambio de titulos en PLP
    $(window).load(function() {

        if (window.location.href.indexOf("/limpieza-y-lavanderia/control-de-plagas-e-insecticidas/control-de-plagas/") > -1) {
            $('.category-name #h1_name').css('display', 'none')
        }

        setTimeout(function() {
            changePLPTitle()
        }, 1000);

        setTimeout(function() {
            changeDatePrivi()
        }, 6000);


        changeTextReview()
        changeHrefBread()

        //console.log("checkSession - before");
        //CheckSession();

    });

    function changeDatePrivi() {

        if (window.location.href.indexOf("/_secure/account/puntos-privilegio") > -1) {
            $(".datepick, #birthdate, #cardBirthday").datepicker({
                yearRange: "1925:2010"
            });
        }
    }

    function changeTextReview() {
        $('.filters-container .selected:eq(1)').text('Imágenes Y Vídeos')
        $('.filters-container .filters-dropdown:eq(1) .list-categories .non-selected-item').text('Con Imágenes Y Vídeos')
    }
    /*function centroAyudaCanon()
    {
        var canon= document.querySelector("#wrapper-button-canon");
        var claseCanon= document.querySelector(".brandName");
        var nombreClase=claseCanon.className;
        var arregloBrandName=nombreClase.split(' ');
        arregloBrandName.indexOf('Canon');
        var busquedaCanon=arregloBrandName.indexOf('Canon');
        if(busquedaCanon>=1)
        {
            var script = document.createElement("script");
            script.src = "https://atentoapps.atento.com.mx/sites/canon/js/script-canon-chat.js";
            script.type = "text/javascript";
            document.getElementsByTagName("head")[0].appendChild(script);
            canon.hidden = false;
        }else{
            canon.hidden = true;
        }
    }*/


    $(document).ready(function() {

        //centroAyudaCanon();
        let estadoX = ''
        let estadoPrevioX = document.cookie;
        console.log(estadoX);

        setTimeout(function() {
            //verificar()
            //crearX()
        }, 1800);

        function verificar() {
            if (estadoPrevioX.includes('estadohjar')) {
                console.log('Teine hotjar');

                if (estadoPrevioX.includes('estadohjar=oculto')) {
                    let elementoOcultar = $('._hj-3ZiaL__MinimizedWidgetBottom__container ._hj-4a_14__MinimizedWidgetBottom__left ');
                    $('._hj-3ZiaL__MinimizedWidgetBottom__container ._hj-4a_14__MinimizedWidgetBottom__left ').css('display', 'none')

                }
                else {

                }

                if (estadoPrevioX.includes('estadohjarChat=oculto')) {
                    $('#fc_frame').css('display', 'none')
                }
                else {

                }
            }
            else if (estadoPrevioX.includes('estadohjarChat=oculto')) {
                $('#fc_frame').css('display', 'none')
            }
        }





        function crearX() {
            var referencia = $('._hj-3ZiaL__MinimizedWidgetBottom__container ._hj-4a_14__MinimizedWidgetBottom__left ');
            var elementoRef = referencia[0];
            let elementoChat = $('.d-hotline');
            let chatContent = $('#fc_frame');
            let refChat = chatContent[0]

            var span = document.createElement('button');
            span.innerHTML = 'X';
            span.className = 'btn_close_hjar';
            elementoRef.append(span)
            var spanChat = document.createElement('button');
            spanChat.innerHTML = 'X';
            spanChat.className = 'btn_close_hjar_chat'
            //spanChat.css({'top': '2px', 'right': '45px !important'});

            refChat.append(spanChat)
            let otroDiv = $('._hj-2RA7u__EmotionIconDefault__expressionIcon')[0];

            $('.btn_close_hjar').click(function() {
                console.log('boton x');
                document.cookie = "estadohjar=oculto; SameSite=Lax";
                //setCookie('estadohjar', 'oculto')
                console.log(document.cookie);
                $('#_hj_feedback_container').css('display', 'none');

            })

            $('.btn_close_hjar_chat').click(function() {
                console.log('boton x de chat');
                document.cookie = "estadohjarChat=oculto; SameSite=Lax";
                //setCookie('estadohjar', 'oculto')
                console.log(document.cookie);
                $('#fc_frame').css('display', 'none');

            })
        }

        function obtenerCookie(cname) {
            let name = `${cname}   =`
            let decodedCookie = decodeURIComponent(document.cookie);
            let ca = decodedCookie.split(';');
            for (let i = 0; i < ca.length; i) {
                let c = ca[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                    return c.substring(name.length, c.length);
                }
            }
            return "";
        }

    })

    function changeHrefBread() {
        var jugueton, bebejugueton = ''
        jugueton = $('.re-central .jugueton').length;
        bebejugueton = $('.re-central .bebejugueton').length

        if (jugueton > 0) {
            $('.bread-crumb ul:first-child a').attr("href", "/jugueton")
        }
        else if (bebejugueton > 0) {
            $('.bread-crumb ul:first-child a').attr("href", "/bebe-jugueton")
        }
    }


    function changePLPTitle() {
        const slogan = 'Cemaco Guatemala - Tienda en Línea';

        if ($('.category-name #h1_name').text() == 'Alarmas Sensores Y Detectores') {
            document.title = `Alarmas, Sensores y Detectores | ${slogan}`;
            $('.category-name #h1_name').text('Alarmas, Sensores y Detectores');
        }
        if ($('.category-name #h1_name').text() == 'Popurri Y Sus Accesorios') {
            document.title = `Popurrí Y Sus Accesorios | ${slogan}`;
            $('.category-name #h1_name').text('Popurrí Y Sus Accesorios');
        }
        if ($('.category-name #h1_name').text() == 'Organizadores Para Bano') {
            document.title = `Organizadores Para Baño | ${slogan}`;
            $('.category-name #h1_name').text('Organizadores Para Baño');
        }
        if ($('.category-name #h1_name').text() == 'Mingitorios Bidet Y Tinas') {
            document.title = `Mingitorios, Bidets Y Tinas | ${slogan}`;
            $('.category-name #h1_name').text('Mingitorios, Bidets Y Tinas');
        }
        if ($('.category-name #h1_name').text() == 'Barnices Tintes Y Lacas') {
            document.title = `Barnices, Tintes Y Lacas | ${slogan}`;
            $('.category-name #h1_name').text('Barnices, Tintes Y Lacas');
        }
        if ($('.category-name #h1_name').text() == 'Escaleras De Combinacion') {
            document.title = `Escaleras De Combinación | ${slogan}`;
            $('.category-name #h1_name').text('Escaleras De Combinación');
        }
        if ($('.category-name #h1_name').text() == 'Lamparas De Mesa') {
            document.title = `Lámparas De Mesa | ${slogan}`;
            $('.category-name #h1_name').text('Lámparas De Mesa');
        }
        if ($('.category-name #h1_name').text() == 'Lamparas De Pie') {
            document.title = `Lámparas De Pie | ${slogan}`;
            $('.category-name #h1_name').text('Lámparas De Pie');
        }
        if ($('.category-name #h1_name').text() == 'Lamparas De Pared') {
            document.title = `Lámparas De Pared | ${slogan}`;
            $('.category-name #h1_name').text('Lámparas De Pared');
        }
        if ($('.category-name #h1_name').text() == 'Refuerzos Rieles Y Trabadores') {
            document.title = `Refuerzos, Rieles Y Trabadores | ${slogan}`;
            $('.category-name #h1_name').text('Refuerzos, Rieles Y Trabadores');
        }
        if ($('.category-name #h1_name').text() == 'Bases Brazos Y Patas') {
            document.title = `Bases, Brazos Y Patas | ${slogan}`;
            $('.category-name #h1_name').text('Bases, Brazos Y Patas');
        }
        if ($('.category-name #h1_name').text() == 'Alcayatas Argolla Y Armellas') {
            document.title = `Alcayatas, Argolla Y Armellas | ${slogan}`;
            $('.category-name #h1_name').text('Alcayatas, Argolla Y Armellas');
        }
        if ($('.category-name #h1_name').text() == 'Estanterias') {
            document.title = `Estanterías | ${slogan}`;
            $('.category-name #h1_name').text('Estanterías');
        }
        if ($('.category-name #h1_name').text() == 'Sabanas Sobrefundas Y Vuelos Para Cama') {
            document.title = `Sábanas, Sobrefundas Y Vuelos Para Cama | ${slogan}`;
            $('.category-name #h1_name').text('Sábanas, Sobrefundas Y Vuelos Para Cama');
        }
        if ($('.category-name #h1_name').text() == 'Edredones Cubrecamas Y Duvets') {
            document.title = `Edredones, Cubrecamas Y Duvets | ${slogan}`;
            $('.category-name #h1_name').text('Edredones, Cubrecamas Y Duvets');
        }
        if ($('.category-name #h1_name').text() == 'Almohadas Cojines Y Rellenos') {
            document.title = `Almohadas, Cojines Y Rellenos | ${slogan}`;
            $('.category-name #h1_name').text('Almohadas, Cojines Y Rellenos');
        }
        if ($('.category-name #h1_name').text() == 'Alcancias') {
            document.title = `Alcancías | ${slogan}`;
            $('.category-name #h1_name').text('Alcancías');
        }
        if ($('.category-name #h1_name').text() == 'Albumes Para Fotos') {
            document.title = `Álbumes Para Fotos | ${slogan}`;
            $('.category-name #h1_name').text('Álbumes Para Fotos');
        }
        if ($('.category-name #h1_name').text() == 'Quinques') {
            document.title = `Quinqués | ${slogan}`;
            $('.category-name #h1_name').text('Quinqués');
        }
        if ($('.category-name #h1_name').text() == 'Pachonestermosyhieleras') {
            document.title = `Pachones, Termos Y Hieleras | ${slogan}`;
            $('.category-name #h1_name').text('Pachones, Termos Y Hieleras');
        }
        if ($('.category-name #h1_name').text() == 'Antorchaslamparasyaccesorios') {
            document.title = `Antorchas, Antorchas, Lámparas Y Accesorios | ${slogan}`;
            $('.category-name #h1_name').text('Antorchas, Lámparas Y Accesorios');
        }
        if ($('.category-name #h1_name').text() == 'Limpiadores De Banos') {
            document.title = `Limpiadores De Baños | ${slogan}`;
            $('.category-name #h1_name').text('Limpiadores De Baños');
        }
        if ($('.category-name #h1_name').text() == 'Azucar Y Sustitutos') {
            document.title = `Azúcar Y Sustitutos | ${slogan}`;
            $('.category-name #h1_name').text('Azúcar Y Sustitutos');
        }
        if ($('.category-name #h1_name').text() == 'Comidas Instantaneas') {
            document.title = `Comidas Instantáneas | ${slogan}`;
            $('.category-name #h1_name').text('Comidas Instantáneas');
        }
        if ($('.category-name #h1_name').text() == 'Snacks Para Bebe') {
            document.title = `Snacks Para Bebé | ${slogan}`;
            $('.category-name #h1_name').text('Snacks Para Bebé');
        }
        if ($('.category-name #h1_name').text() == 'Snaks') {
            document.title = `Snacks | ${slogan}`;
            $('.category-name #h1_name').text('Snacks');
        }
        if ($('.category-name #h1_name').text() == 'Numeros Letras Y Rotulos') {
            document.title = `Números, Letras Y Rótulos | ${slogan}`;
            $('.category-name #h1_name').text('Números, Letras Y Rótulos');
        }
        if ($('.category-name #h1_name').text() == 'Juguetes De Bano') {
            document.title = `Juguetes De Baño | ${slogan}`;
            $('.category-name #h1_name').text('Juguetes De Baño');
        }
        if ($('.category-name #h1_name').text() == 'Trajes De Bano') {
            document.title = `Trajes De Baño | ${slogan}`;
            $('.category-name #h1_name').text('Trajes De Baño');
        }
        if ($('.category-name #h1_name').text() == 'Vajillas Utensilios') {
            document.title = `Vajillas Y Utensilios | ${slogan}`;
            $('.category-name #h1_name').text('Vajillas Y Utensilios');
        }
        if ($('.category-name #h1_name').text() == 'Capas Botas Y Sombrillas') {
            document.title = `Capas, Botas Y Sombrillas | ${slogan}`;
            $('.category-name #h1_name').text('Capas, Botas Y Sombrillas');
        }
        if ($('.category-name #h1_name').text() == 'Pachones Termos Y Loncheras') {
            document.title = `Pachones, Termos Y Loncheras | ${slogan}`;
            $('.category-name #h1_name').text('Pachones, Termos Y Loncheras');
        }
        if ($('.category-name #h1_name').text() == 'Esponjas Guantes Y Gorras') {
            document.title = `Esponjas, Guantes Y Gorras | ${slogan}`;
            $('.category-name #h1_name').text('Esponjas, Guantes Y Gorras');
        }
        if ($('.category-name #h1_name').text() == 'Batas De Bano') {
            document.title = `Batas De Baño | ${slogan}`;
            $('.category-name #h1_name').text('Batas De Baño');
        }
        if ($('.category-name #h1_name').text() == 'Cortinas Alfombras Y Accesorios') {
            document.title = `Cortinas, Alfombras Y Accesorios | ${slogan}`;
            $('.category-name #h1_name').text('Cortinas, Alfombras Y Accesorios');
        }
        if ($('.category-name #h1_name').text() == 'Suavizantes Y Liquidos Para Planchar') {
            document.title = `Suavizantes Y Líquidos Para Planchar | ${slogan}`;
            $('.category-name #h1_name').text('Suavizantes Y Líquidos Para Planchar');
        }
        if ($('.category-name #h1_name').text() == 'Mochilas Bolsos Y Estuches') {
            document.title = `Mochilas, Bolsos Y Estuches | ${slogan}`;
            $('.category-name #h1_name').text('Mochilas, Bolsos Y Estuches');
        }
        if ($('.category-name #h1_name').text() == 'Servilletas Mayordomo Y Papel Higienico') {
            document.title = `Servilletas, Mayordomo Y Papel Higiénico | ${slogan}`;
            $('.category-name #h1_name').text('Servilletas, Mayordomo Y Papel Higiénico');
        }
        if ($('.category-name #h1_name').text() == 'Grama Sintetica') {
            document.title = `Grama Sintética | ${slogan}`;
            $('.category-name #h1_name').text('Grama Sintética');
        }

        if ($('.category-name #h1_name').text() == 'Cuchillos Afiladores Y Tablas Para Cortar') {
            document.title = `Cuchillos, Afiladores Y Tablas Para Cortar | ${slogan}`;
            $('.category-name #h1_name').text('Cuchillos, Afiladores Y Tablas Para Cortar');
        }
        if ($('.category-name #h1_name').text() == 'Decoracion') {
            document.title = `Decoración | ${slogan}`;
            $('.category-name #h1_name').text('Decoración');
        }
        if ($('.category-name #h1_name').text() == 'Griferia Y Accesorios') {
            document.title = `GGrifería Y Accesorios | ${slogan}`;
            $('.category-name #h1_name').text('Grifería Y Accesorios');
        }
        if ($('.category-name #h1_name').text() == 'Abrelatas Y Cuchillos Electricos') {
            document.title = `Abrelatas Y Cuchillos Eléctricos | ${slogan}`;
            $('.category-name #h1_name').text('Abrelatas Y Cuchillos Eléctricos');
        }
        if ($('.category-name #h1_name').text() == 'Cafe Y Te') {
            document.title = `Café Y Té | ${slogan}`;
            $('.category-name #h1_name').text('Café Y Té');
        }
        if ($('.category-name #h1_name').text() == 'Olla Vaporera Electrica') {
            document.title = `Olla Vaporera Eléctrica | ${slogan}`;
            $('.category-name #h1_name').text('Olla Vaporera Elóctrica');
        }
        if ($('.category-name #h1_name').text() == 'Parrillas Y Sartenes Electricos') {
            document.title = `Parrillas Y Sartenes Eléctricos | ${slogan}`;
            $('.category-name #h1_name').text('Parrillas Y Sartenes Eléctricos');
        }
        if ($('.category-name #h1_name').text() == 'Cristaleria Botellas Y Jarras') {
            document.title = `Cristalería, Botellas Y Jarras | ${slogan}`;
            $('.category-name #h1_name').text('Cristalería, Botellas Y Jarras');
        }
        if ($('.category-name #h1_name').text() == 'Cubiertos Y Cuberteria') {
            document.title = `Cubiertos Y Cubertería | ${slogan}`;
            $('.category-name #h1_name').text('Cubiertos Y Cubertería');
        }
        if ($('.category-name #h1_name').text() == 'Ninos Y Bebes') {
            document.title = `Niños Y Bebés | ${slogan}`;
            $('.category-name #h1_name').text('Niños Y Bebés');
        }
        if ($('.category-name #h1_name').text() == 'Platos Vajillas Y Accesorios') {
            document.title = `Platos, Vajillas Y Accesorios | ${slogan}`;
            $('.category-name #h1_name').text('Platos, Vajillas Y Accesorios');
        }
        if ($('.category-name #h1_name').text() == 'Organizacion Para Lavaplatos') {
            document.title = `Organización Para Lavaplatos | ${slogan}`;
            $('.category-name #h1_name').text('Organización Para Lavaplatos');
        }
        if ($('.category-name #h1_name').text() == 'Porta Garrafon') {
            document.title = `Porta Garrafón | ${slogan}`;
            $('.category-name #h1_name').text('Porta Garrafón');
        }
        if ($('.category-name #h1_name').text() == 'Herramienta De Precision') {
            document.title = `Herramienta De Precisión | ${slogan}`;
            $('.category-name #h1_name').text('Herramienta De Precisión');
        }
        if ($('.category-name #h1_name').text() == 'Herramientas De Precision Y Accesorios') {
            document.title = `Herramientas De Precisión Y Accesorios | ${slogan}`;
            $('.category-name #h1_name').text('Herramientas De Precisión Y Accesorios');
        }
        if ($('.category-name #h1_name').text() == 'Copas Llaves Y Sets De Herramientas') {
            document.title = `Copas, Llaves Y Sets De Herramientas | ${slogan}`;
            $('.category-name #h1_name').text('Copas, Llaves Y Sets De Herramientas');
        }
        if ($('.category-name #h1_name').text() == 'Herramientas Para Construccion') {
            document.title = `Herramientas Para Construcción | ${slogan}`;
            $('.category-name #h1_name').text('Herramientas Para Construcción');
        }
        if ($('.category-name #h1_name').text() == 'Herramientas Para Jardineria') {
            document.title = `Herramientas Para Jardinería | ${slogan}`;
            $('.category-name #h1_name').text('Herramientas Para Jardinería');
        }
        if ($('.category-name #h1_name').text() == 'cajas-y-porta-herramientas') {
            document.title = `Cajas Y Porta Herramientas | ${slogan}`;
            $('.category-name #h1_name').text('Cajas Y Porta Herramientas');
        }
        if ($('.category-name #h1_name').text() == 'Accesorios Para Cajas Electricas') {
            document.title = `Accesorios Para Cajas Eléctricas | ${slogan}`;
            $('.category-name #h1_name').text('Accesorios Para Cajas Eléctricas');
        }
        if ($('.category-name #h1_name').text() == 'Accesorios Para Cajas De Distribucion') {
            document.title = `Accesorios Para Cajas De Distribución | ${slogan}`;
            $('.category-name #h1_name').text('Accesorios Para Cajas De Distribución');
        }
        if ($('.category-name #h1_name').text() == 'Cajas De Distribucion') {
            document.title = `Cajas De Distribución | ${slogan}`;
            $('.category-name #h1_name').text('Cajas De Distribución');
        }
        if ($('.category-name #h1_name').text() == 'Baterias Y Cargadores') {
            document.title = `Baterías Y Cargadores | ${slogan}`;
            $('.category-name #h1_name').text('Baterías Y Cargadores');
        }
        if ($('.category-name #h1_name').text() == 'Camaras Y Accesorios') {
            document.title = `Cámaras Y Accesorios | ${slogan}`;
            $('.category-name #h1_name').text('Cámaras Y Accesorios');
        }
        if ($('.category-name #h1_name').text() == 'Accesorios Para Telefono') {
            document.title = `Accesorios Para Teléfono | ${slogan}`;
            $('.category-name #h1_name').text('Accesorios Para Teléfono');
        }
        if ($('.category-name #h1_name').text() == 'Telefonos Celulares Y Accesorios') {
            document.title = `Teléfonos, Celulares Y Accesorios | ${slogan}`;
            $('.category-name #h1_name').text('Teléfonos, Celulares Y Accesorios');
        }
        if ($('.category-name #h1_name').text() == 'Bebes') {
            document.title = `Bebés | ${slogan}`;
            $('.category-name #h1_name').text('Bebés');
        }
        if ($('.category-name #h1_name').text() == 'Colgadores Tendedores Y Accesorios') {
            document.title = `Colgadores, Tendedores Y Accesorios | ${slogan}`;
            $('.category-name #h1_name').text('Colgadores, Tendedores Y Accesorios');
        }
        if ($('.category-name #h1_name').text() == 'Organizacion Lavanderia') {
            document.title = `Organización Lavandería | ${slogan}`;
            $('.category-name #h1_name').text('Organización Lavandería');
        }
        if ($('.category-name #h1_name').text() == 'Gel Mousse Spray Y Cremas') {
            document.title = `Gel, Mousse, Spray Y Cremas | ${slogan}`;
            $('.category-name #h1_name').text('Gel, Mousse, Spray Y Cremas');
        }
        if ($('.category-name #h1_name').text() == 'Pistolas Aspersores Y Regaderas') {
            document.title = `Pistolas, Aspersores Y Regaderas | ${slogan}`;
            $('.category-name #h1_name').text('Pistolas, Aspersores Y Regaderas');
        }
        if ($('.category-name #h1_name').text() == 'Accesorios Para Natacion') {
            document.title = `Accesorios Para Natación | ${slogan}`;
            $('.category-name #h1_name').text('Accesorios Para Natación');
        }
        if ($('.category-name #h1_name').text() == 'Maquinas De Ejercicios') {
            document.title = `Máquinas De Ejercicios | ${slogan}`;
            $('.category-name #h1_name').text('Máquinas De Ejercicios');
        }
        if ($('.category-name #h1_name').text() == 'Pegamentos Multiples') {
            document.title = `Pegamentos Múltiples | ${slogan}`;
            $('.category-name #h1_name').text('Pegamentos Múltiples');
        }
        if ($('.category-name #h1_name').text() == 'Atun Y Sardinas') {
            document.title = `Atún Y Sardinas | ${slogan}`;
            $('.category-name #h1_name').text('Atún Y Sardinas');
        }


        if ($('.category-name #h1_name').text() == 'Muebles Y Organizacion') {
            document.title = `Muebles Y Organización | ${slogan}`;
            $('.category-name #h1_name').text('Muebles Y Organización');
        }
        if ($('.category-name #h1_name').text() == 'Accesorios Y Decoracion') {
            document.title = `Accesorios Y Decoración | ${slogan}`;
            $('.category-name #h1_name').text('Accesorios Y Decoración');
        }
        if ($('.category-name #h1_name').text() == 'Accesorios Para Baterias') {
            document.title = `Accesorios Para Baterías | ${slogan}`;
            $('.category-name #h1_name').text('Accesorios Para Baterías');
        }
        if ($('.category-name #h1_name').text() == 'Baterias') {
            document.title = `Baterías | ${slogan}`;
            $('.category-name #h1_name').text('Baterías');
        }
        if ($('.category-name #h1_name').text() == 'Bombillas Lamparas Y Neblineras') {
            document.title = `Bombillas, Lámparas Y Neblineras | ${slogan}`;
            $('.category-name #h1_name').text('Bombillas, Lámparas Y Neblineras');
        }
        if ($('.category-name #h1_name').text() == 'Bujias Filtros Y Acc') {
            document.title = `Bujías, Filtros Y Acc | ${slogan}`;
            $('.category-name #h1_name').text('Bujías, Filtros Y Acc');
        }
        if ($('.category-name #h1_name').text() == 'Aceites Y Liquidos') {
            document.title = `Aceites Y Líquidos | ${slogan}`;
            $('.category-name #h1_name').text('Aceites Y Líquidos');
        }
        if ($('.category-name #h1_name').text() == 'Pisos Ceramicos') {
            document.title = `Pisos Cerámicos | ${slogan}`;
            $('.category-name #h1_name').text('Pisos Cerámicos');
        }
        if ($('.category-name #h1_name').text() == 'Cepillos Electricos') {
            document.title = `Cepillos Eléctricos | ${slogan}`;
            $('.category-name #h1_name').text('Cepillos Eléctricos');
        }
        if ($('.category-name #h1_name').text() == 'Climatizacion') {
            document.title = `Climatización | ${slogan}`;
            $('.category-name #h1_name').text('Climatización');
        }
        if ($('.category-name #h1_name').text() == 'Depositos Y Cisternas') {
            document.title = `Depósitos y Cisternas | ${slogan}`;
            $('.category-name #h1_name').text('Depósitos y Cisternas');
        }
        if ($('.category-name #h1_name').text() == 'Celosia Y Accesorios') {
            document.title = `Celosía y Accesorios | ${slogan}`;
            $('.category-name #h1_name').text('Celosía y Accesorios');
        }
        if ($('.category-name #h1_name').text() == 'Maderas Y Perfileria') {
            document.title = `Maderas y Perfilería | ${slogan}`;
            $('.category-name #h1_name').text('Maderas y Perfilería');
        }
        if ($('.category-name #h1_name').text() == 'Perfileria De Tabicacion') {
            document.title = `Perfilería de Tabicación | ${slogan}`;
            $('.category-name #h1_name').text('Perfilería de Tabicación');
        }
        if ($('.category-name #h1_name').text() == 'Accesorios De Tv Y Vídeo') {
            document.title = `Accesorios de TV y Video | ${slogan}`;
            $('.category-name #h1_name').text('Accesorios de TV y Video');
        }
        if ($('.category-name #h1_name').text() == 'Organizacion') {
            document.title = `Organización | ${slogan}`;
            $('.category-name #h1_name').text('Organización');
        }
        if ($('.category-name #h1_name').text() == 'Seguridad Y Accesorios En El Bano') {
            document.title = `Seguridad Y Accesorios En El Baño | ${slogan}`;
            $('.category-name #h1_name').text('Seguridad Y Accesorios En El Baño');
        }
        if ($('.category-name #h1_name').text() == 'Moviles Y Juguetes Para Cuna') {
            document.title = `Móviles Y Juguetes Para Cuna | ${slogan}`;
            $('.category-name #h1_name').text('Móviles Y Juguetes Para Cuna');
        }
        if ($('.category-name #h1_name').text() == 'Sabanas Y Cobertores') {
            document.title = `Sábanas Y Cobertores | ${slogan}`;
            $('.category-name #h1_name').text('Sábanas Y Cobertores');
        }
        if ($('.category-name #h1_name').text() == 'Panaleras Y Cambiadores Portatiles') {
            document.title = `Pañaleras Y Cambiadores Portátiles | ${slogan}`;
            $('.category-name #h1_name').text('Pañaleras Y Cambiadores Portátiles');
        }
        if ($('.category-name #h1_name').text() == 'Basicos') {
            document.title = `Básicos | ${slogan}`;
            $('.category-name #h1_name').text('Básicos');
        }
        if ($('.category-name #h1_name').text() == 'Nina') {
            document.title = `Niña | ${slogan}`;
            $('.category-name #h1_name').text('Niña');
        }
        if ($('.category-name #h1_name').text() == 'Nino') {
            document.title = `Niño | ${slogan}`;
            $('.category-name #h1_name').text('Niño');
        }
        if ($('.category-name #h1_name').text() == 'Sombrillas') {
            document.title = `Carruajes Sombrilla | ${slogan}`;
            $('.category-name #h1_name').text('Carruajes Sombrilla');
        }
        if ($('.category-name #h1_name').text() == 'Portabebes') {
            document.title = `Portabebés | ${slogan}`;
            $('.category-name #h1_name').text('Portabebés');
        }
        if ($('.category-name #h1_name').text() == 'Pomadas Y Balsamos') {
            document.title = `Pomadas Y Bálsamos | ${slogan}`;
            $('.category-name #h1_name').text('Pomadas Y Bálsamos');
        }
        if ($('.category-name #h1_name').text() == 'Toallas Humedas Y Dispensadores') {
            document.title = `Toallas Húmedas Y Dispensadores | ${slogan}`;
            $('.category-name #h1_name').text('Toallas Húmedas Y Dispensadores');
        }
        if ($('.category-name #h1_name').text() == 'dibujo-y-pintura') {
            document.title = `Dibujo Y Pintura | ${slogan}`;
            $('.category-name #h1_name').text('Dibujo Y Pintura');
        }
        if ($('.category-name #h1_name').text() == 'Tobilleras Rodilleras Y Coderas') {
            document.title = `Tobilleras, Rodilleras Y Coderas | ${slogan}`;
            $('.category-name #h1_name').text('Tobilleras, Rodilleras Y Coderas');
        }
        if ($('.category-name #h1_name').text() == 'Peluches Y Titeres') {
            document.title = `Peluches Y Títeres | ${slogan}`;
            $('.category-name #h1_name').text('Peluches Y Títeres');
        }
        if ($('.category-name #h1_name').text() == 'Camas Elasticas Y Trampolines') {
            document.title = `Camas Elásticas Y Trampolines | ${slogan}`;
            $('.category-name #h1_name').text('Camas Elásticas Y Trampolines');
        }
        if ($('.category-name #h1_name').text() == 'Ninos Bebes Y Vestuario') {
            document.title = `Niños, Bebés y Vestuario | ${slogan}`;
            $('.category-name #h1_name').text('Niños, Bebés y Vestuario');
        }
        if ($('.category-name #h1_name').text() == 'Arboles') {
            document.title = `Árboles | ${slogan}`;
            $('.category-name #h1_name').text('Árboles');
        }
        if ($('.category-name #h1_name').text() == 'Decoracion De Exterior') {
            document.title = `Decoración De Exterior | ${slogan}`;
            $('.category-name #h1_name').text('Decoración De Exterior');
        }
        if ($('.category-name #h1_name').text() == 'Decoracion De Interior') {
            document.title = `Decoración De Interior | ${slogan}`;
            $('.category-name #h1_name').text('Decoración De Interior');
        }
        if ($('.category-name #h1_name').text() == 'Decoracion Del Arbol') {
            document.title = `Decoración Del Árbol | ${slogan}`;
            $('.category-name #h1_name').text('Decoración Del Árbol');
        }
        if ($('.category-name #h1_name').text() == 'Munecos Y Figuras De Interior') {
            document.title = `Muñecos Y Figuras De Interior | ${slogan}`;
            $('.category-name #h1_name').text('Muñecos Y Figuras De Interior');
        }
        if ($('.category-name #h1_name').text() == 'Corrales y Moiseses') {
            document.title = `Corrales y Moisés | ${slogan}`;
            $('.category-name #h1_name').text('Corrales y Moisés');
        }
        if (window.location.href.indexOf("/c-bebes/dormitorio/decoracion-y-accesorios") > -1) {
            var referencia = $('.titulo-sessao');
            var elementoRef = referencia[0];
            var encabezado = document.createElement('h1');
            encabezado.className = 'category-name';
            var span = document.createElement('span');
            span.innerHTML = 'Decoración Y Accesorios';
            span.className = 'h1_name';
            encabezado.appendChild(span);
            elementoRef.parentNode.insertBefore(encabezado, elementoRef);
        }
        
        if (window.location.href.indexOf("/c-limpieza-y-lavanderia/control-de-plagas/insecticidas-y-repelentes") > -1) {
            var referencia = $('.titulo-sessao');
            var elementoRef = referencia[0];
            var encabezado = document.createElement('h1');
            encabezado.className = 'category-name';
            var span = document.createElement('span');
            span.innerHTML = 'Insecticidas y Repelentes';
            span.className = 'h1_name';
            encabezado.appendChild(span);
            elementoRef.parentNode.insertBefore(encabezado, elementoRef);
        }

        if (true) {
            console.log('Prueba yott')
        }

        if ($('.product-detail__options').length > 0) {
            console.log('Espera set de yotpo')
            const myTimeout = setTimeout(myGreeting, 1000);

            function myGreeting() {
                $('.mainyotpo .write-question-review-buttons-container .write-review-button .write-question-review-button-text').text('Escribe una opinión')
                $('.mainyotpo .write-question-review-buttons-container .write-question-button .write-question-review-button-text').text('Haz una pregunta')
            }
        }

    }

    if (window.location.href.indexOf("/test-categorias") > -1) {
        // create new element
        const elem2 = document.createElement('p');
        const link = document.createElement('a');

        link.setAttribute('href', "/proyectosparatuhogar");
        link.append(elem2);

        // add text
        elem2.innerText = 'Ver Más';

        // grab target element reference
        const target = document.querySelector('.products-slider__wrapper .products-slider__container .product-list .prateleira .slick-slider');

        //const target = document.querySelector('.products-slider__wrapper');

        console.log(target)
        link.css('text-align', 'center')

        // insert the element before target element
        target.parentNode.insertBefore(link, target);
    }




    /* Cambios en carruseles de HOME TEST */
    if (window.location.href.indexOf("/?lid=d8b18046-85e4-4c6c-ae44-f917deca85db") > -1) {
        // Crear elementos
        const elemHomeTest = document.createElement("div");
        const textHomeTest = document.createElement("h3");
        const brHomeTest = document.createElement("br");
        const linkHomeTest = document.createElement("a");
        const spanHomeTest = document.createElement("span");
        elemHomeTest.className = "txt-topcarrusel"; //Agregar clase al elemento
        textHomeTest.innerText = "Hasta el 50% de descuento"; //Agregar texto al parrafo
        spanHomeTest.innerText = "Ver Más >"
        brHomeTest.append(textHomeTest);
        spanHomeTest.append(linkHomeTest);
        linkHomeTest.append(textHomeTest);


        linkHomeTest.setAttribute("href", "/1435?map=productClusterIds"); //Setear atributo

        //Seleccionar elemento  a donde debe de ir el nuevo elemento
        const target = document.querySelector(
            ".home .products-slider__wrapper .products-slider__container #productsSlider01 .prateleira .slick-slider"
        );

        //Asignar estilos en linea, o se puede agregar una clase y luego modificarla en css
        linkHomeTest.style.cssText = "text-align: center";

        /*Aqui se inserta el elemento, el primer parametro es el elemento nuevo y el segundo el elemento de
                  referencia, y se agrega justo antes de este*/
        target.parentNode.insertAfter(elemHomeTest, target);
    }



    if ($('.category-name #h1_name').text() == 'Canales') {
        document.title = `Canales Y Accesorios | ${slogan}`;
        $('.category-name #h1_name').text('Canales Y Accesorios');
    }

    if ($('.category-name #h1_name').text() == 'Arandelas Roldanas Y Tuercas') {
        document.title = `Arandelas, Roldanas Y Tuercas | ${slogan}`;
        $('.category-name #h1_name').text('Arandelas, Roldanas Y Tuercas');
    }


    if (window.location.href.indexOf("/_secure/account#") > -1) {
        var setDireccion = setInterval(function() {
            if ($('.vtex-address-form__street .vtex-input__label').text() == 'Calle') {
                $('.vtex-address-form__street .vtex-input__label').text('Dirección');
            }
            else {
                clearInterval(setDireccion);
            }
        }, 2000);
    }

    if (window.location.href.indexOf("/_secure/account#/orders") > -1) {
        console.log('Cambio en mis pedidos')
        var setTitle = setInterval(function() {
            if ($('.vtex-account__orders-list .t-heading-3 .c-on-base').text() == '¡Usted todavia no tiene pedidos!') {
                $('.vtex-account__orders-list .t-heading-3 .c-on-base').text('¡Bienvenido! Aquí podrás visualizar y dar seguimiento a todos tus pedidos a partir de ahora.')
            }
            else {
                clearInterval(setTitle);
            }
        }, 2000);
    }

    if (window.location.href.indexOf("/limpieza-y-lavanderia/control-de-plagas-e-insecticidas/control-de-plagas/") > -1) {
        if ($('.category-name #h1_name').text() == 'Limpieza y Lavandería') {
            document.title = `Control De Plagas | ${slogan}`;
            $('.category-name #h1_name').text('Control De Plagas');
        }
        $('.category-name #h1_name').css('display', 'block')
    }

    if ((window.location.href.indexOf("/cepillo-para-bano-del-bebe-pez-silicon") > -1) || (window.location.href.indexOf("/frazada-75-x-100-cm-varios-colores-1007412") > -1)) {
        var selectorColor = $('.item-dimension-Descripciondecolor .group_1');
        selectorColor.css("display", "inherit");
    }

    if ($('.category-name #h1_name').text() == 'Accesoriosdepescayremos') {
        document.title = `Accesorios De Pesca Y Remos | ${slogan}`;
        $('.category-name #h1_name').text('Accesorios De Pesca Y Remos');
    }

    if ($('.category-name #h1_name').text() == 'Iluminacion Inteligente') {
        document.title = `Iluminación Inteligente | ${slogan}`;
        $('.category-name #h1_name').text('Iluminación Inteligente');
    }

    if (window.location.href.indexOf("/truper") > -1) {
        $('.category-name #h1_name').text('');
        $(".bread-crumbs").css("display", "none");
    }

    if (window.location.href.indexOf("/cuidatusalud") > -1) {
        $('.category-name #h1_name').text('');
        $(".bread-crumbs").css("display", "none");
    }

    if (window.location.href.indexOf("/liquidacion") > -1) {
        $('.category-name #h1_name').text('');
        $(".bread-crumbs").css("display", "none");
    }

    if (window.location.href.indexOf("/lego") > -1) {
        $('.category-name #h1_name').text('');
        $(".bread-crumbs").css("display", "none");
    }

    if (window.location.href.indexOf("/c-guatemalanuestra/cocina-y-mesa") > -1) {
        $('.category-name #h1_name').text('');
        $(".bread-crumbs").css("display", "none");
    }

    if (window.location.href.indexOf("/c-guatemalanuestra/decoracion") > -1) {
        $('.category-name #h1_name').text('');
        $(".bread-crumbs").css("display", "none");
    }

    if (window.location.href.indexOf("/c-guatemalanuestra/vestuario-y-accesorios") > -1) {
        $('.category-name #h1_name').text('');
        $(".bread-crumbs").css("display", "none");
    }

    if (window.location.href.indexOf("/c-guatemalanuestra/banos") > -1) {
        $('.category-name #h1_name').text('');
        $(".bread-crumbs").css("display", "none");
    }

    if (window.location.href.indexOf("/c-guatemalanuestra/muebles-y-organizacion") > -1) {
        $('.category-name #h1_name').text('');
        $(".bread-crumbs").css("display", "none");
    }

    if (window.location.href.indexOf("/c-guatemalanuestra/juguetes") > -1) {
        $('.category-name #h1_name').text('');
        $(".bread-crumbs").css("display", "none");
    }

    if (window.location.href.indexOf("/c-bebes") > -1) {
        //$('.category-name #h1_name').text('');
        $('.page-header--product-list .bread-crumbs ul li a').attr("href", "/bebe-jugueton")
    }

    if ($(window).width() > 768) {
        $('.footer__block').removeClass("footer__collapse")
    }

    if ($('.category-name #h1_name').text() == 'Cafe') {
        document.title = `Café | ${slogan}`;
        $('.category-name #h1_name').text('Café');
    }

    if ($('.category-name #h1_name').text() == 'Coctel De Frutas') {
        document.title = `Cóctel De Frutas | ${slogan}`;
        $('.category-name #h1_name').text('Cóctel De Frutas');
    }

    if ($('.category-name #h1_name').text() == 'Accesorios Para Mecanicos') {
        document.title = `Accesorios Para Mecánicos | ${slogan}`;
        $('.category-name #h1_name').text('Accesorios Para Mecánicos');
    }

    if ($('.category-name #h1_name').text() == 'Pisos Vinilico') {
        document.title = `Pisos Vinílico | ${slogan}`;
        $('.category-name #h1_name').text('Pisos Vinílico');
    }

    if ($('.category-name #h1_name').text() == 'Gorras Esponjas Y Guantes') {
        document.title = `Gorras, Esponjas Y Guantes | ${slogan}`;
        $('.category-name #h1_name').text('Gorras, Esponjas Y Guantes');
    }
    if ($('.category-name #h1_name').text() == 'Porta Papel Higienico') {
        document.title = `Porta Papel Higiénico | ${slogan}`;
        $('.category-name #h1_name').text('Porta Papel Higiénico');
    }

    if ($('.category-name #h1_name').text() == 'Calentadores Electricos De Gas Y Solares') {
        document.title = `Calentadores Eléctricos, De Gas Y Solares | ${slogan}`;
        $('.category-name #h1_name').text('Calentadores Eléctricos, De Gas Y Solares');
    }

    if ($('.category-name #h1_name').text() == 'Organizacion Y Accesorios') {
        document.title = `Organización Y Accesorios | ${slogan}`;
        $('.category-name #h1_name').text('Organización Y Accesorios');
    }

    if ($('.category-name #h1_name').text() == 'Ollas Sartenes Y Cacerolas') {
        document.title = `Ollas, Sartenes Y Cacerolas | ${slogan}`;
        $('.category-name #h1_name').text('Ollas, Sartenes Y Cacerolas');
    }

    if ($('.category-name #h1_name').text() == 'Ensaladera Fuentes Y Bandejas Para Servir') {
        document.title = `Ensaladera, Fuentes Y Bandejas Para Servir | ${slogan}`;
        $('.category-name #h1_name').text('Ensaladera, Fuentes Y Bandejas Para Servir');
    }


    if ($('.category-name #h1_name').text() == 'Grifos Para Banos') {
        document.title = `Grifos Para Baños | ${slogan}`;
        $('.category-name #h1_name').text('Grifos Para Baños');
    }

    if ($('.category-name #h1_name').text() == 'Contrallaves Y Valvulas') {
        document.title = `Contrallaves Y Válvulas | ${slogan}`;
        $('.category-name #h1_name').text('Contrallaves Y Válvulas');
    }

    if ($('.category-name #h1_name').text() == 'Destapadores Y Destapacanos') {
        document.title = `Destapadores Y Destapacaños | ${slogan}`;
        $('.category-name #h1_name').text('Destapadores Y Destapacaños');
    }

    if ($('.category-name #h1_name').text() == 'Spa Masaje Y Relajacion') {
        document.title = `Spa, Masaje Y Relajación | ${slogan}`;
        $('.category-name #h1_name').text('Spa, Masaje Y Relajación');
    }

    if ($('.category-name #h1_name').text() == 'Fuentes Electricas Y Accesorios') {
        document.title = `Fuentes Eléctricas Y Accesorios | ${slogan}`;
        $('.category-name #h1_name').text('Fuentes Eléctricas Y Accesorios');
    }

    if ($('.category-name #h1_name').text() == 'Banos') {
        document.title = `Baños | ${slogan}`;
        $('.category-name #h1_name').text('Baños');
    }

    if ($('.category-name #h1_name').text() == 'Lamparas De Colgar') {
        document.title = `Lámparas De Colgar | ${slogan}`;
        $('.category-name #h1_name').text('Lámparas De Colgar');
    }

    if ($('.category-name #h1_name').text() == 'Cubrecamas Duvets Y Edredones') {
        document.title = `Cubrecamas, Duvets Y Edredones | ${slogan}`;
        $('.category-name #h1_name').text('Cubrecamas, Duvets Y Edredones');
    }


    if ($('.category-name #h1_name').text() == 'Organizadores Para Banos') {
        document.title = `Organizadores Para Baños | ${slogan}`;
        $('.category-name #h1_name').text('Organizadores Para Baños');
    }


    if ($('.category-name #h1_name').text() == 'Set De Jardin') {
        document.title = `SSet De Jardín | ${slogan}`;
        $('.category-name #h1_name').text('Set De Jardín');
    }

    if ($('.category-name #h1_name').text() == 'Antejos Y Caretas') {
        document.title = `Anteojos Y Caretas | ${slogan}`;
        $('.category-name #h1_name').text('Anteojos Y Caretas');
    }

    if ($('.category-name #h1_name').text() == 'Fachaleta Y Piedradecorativa') {
        document.title = `Fachaleta Y Piedra Decorativa | ${slogan}`;
        $('.category-name #h1_name').text('Fachaleta Y Piedra Decorativa');
    }

    if ($('.category-name #h1_name').text() == 'Block Y Blockdevidrio') {
        document.title = `Block Y Block De Vidrio | ${slogan}`;
        $('.category-name #h1_name').text('Block Y Block De Vidrio');
    }

    if ($('.category-name #h1_name').text() == 'Accesorios De Computacion') {
        document.title = `Accesorios De Computación | ${slogan}`;
        $('.category-name #h1_name').text('Accesorios De Computación');
    }

    if ($('.category-name #h1_name').text() == 'Arte Y Diseno') {
        document.title = `Arte Y Diseño | ${slogan}`;
        $('.category-name #h1_name').text('Arte Y Diseño');
    }

    if ($('.category-name #h1_name').text() == 'Articulos Escolares Y Para Oficina') {
        document.title = `Artículos Escolares Y Para Oficina | ${slogan}`;
        $('.category-name #h1_name').text('Artículos Escolares Y Para Oficina');
    }

    if ($('.category-name #h1_name').text() == 'Articulos Y Accesorios De Oficina') {
        document.title = `Artículos Y Accesorios De Oficina | ${slogan}`;
        $('.category-name #h1_name').text('Artículos Y Accesorios De Oficina');
    }

    if ($('.category-name #h1_name').text() == 'Escolar Arte Y Diseno') {
        document.title = `Escolar, Arte Y Diseño | ${slogan}`;
        $('.category-name #h1_name').text('Escolar, Arte Y Diseño');
    }

    if ($('.category-name #h1_name').text() == 'Bano Y Entrenadores') {
        document.title = `Baño Y Entrenadores | ${slogan}`;
        $('.category-name #h1_name').text('Baño Y Entrenadores');
    }

    if ($('.category-name #h1_name').text() == 'Panales') {
        document.title = `Pañales | ${slogan}`;
        $('.category-name #h1_name').text('Pañales');
    }

    if ($('.category-name #h1_name').text() == 'Papel Impresion Y Copiado') {
        document.title = `Papel Impresión Y Copiado | ${slogan}`;
        $('.category-name #h1_name').text('Papel Impresión Y Copiado');
    }

    if ($('.category-name #h1_name').text() == 'Planificacion Y Cuadernos') {
        document.title = `Planificación Y Cuaderno | ${slogan}`;
        $('.category-name #h1_name').text('Planificación Y Cuadernos');
    }

    if ($('.category-name #h1_name').text() == 'Planificacion Y Senalizacion') {
        document.title = `Planificación Y Señalización | ${slogan}`;
        $('.category-name #h1_name').text('Planificación Y Señalización');
    }

    if ($('.category-name #h1_name').text() == 'Accesorios Para Decoracion') {
        document.title = `Accesorios Para Decoración | ${slogan}`;
        $('.category-name #h1_name').text('Accesorios Para Decoración');
    }

    $(".submenu__boda .submenu__boda-search-input").focus(function() {
        $(".nav-item--bodas").addClass('is-active')
    })

    if ($('.category-name #h1_name').text() == 'Organizadores De Jardin') {
        document.title = `Organizadores De Jardín | ${slogan}`;
        $('.category-name #h1_name').text('Organizadores De Jardín');
    }

    if ($('.category-name #h1_name').text() == 'Repuestos Para Maquinas') {
        document.title = `Repuestos Para Máquinas | ${slogan}`;
        $('.category-name #h1_name').text('Repuestos Para Máquinas');
    }

    if ($('.category-name #h1_name').text() == 'Fertililzantes Y Cubresuelos') {
        document.title = `Fertilizantes Y Cubresuelos | ${slogan}`;
        $('.category-name #h1_name').text('Fertilizantes Y Cubresuelos');
    }

    if ($('.category-name #h1_name').text() == 'Accesoriosdesupervivencia') {
        document.title = `Accesorios De Supervivencia | ${slogan}`;
        $('.category-name #h1_name').text('Accesorios De Supervivencia');
    }

    if ($('.category-name #h1_name').text() == 'Pesas Ligas Y Guantes') {
        document.title = `Pesas, Ligas Y Guantes | ${slogan}`;
        $('.category-name #h1_name').text('Pesas, Ligas Y Guantes');
    }

    if ($('.category-name #h1_name').text() == 'Brincadres y Ejercitadores') {
        document.title = `Brincadores y Ejercitadores | ${slogan}`;
        $('.category-name #h1_name').text('Brincadores y Ejercitadores');
    }

    if (window.location.href.indexOf("/c-plomeria") > -1) {
        $('.carruselDepaPlomeriaU .tag-other-products').text('Proyectos de Plomería');
    }

    if (window.location.href.indexOf("/mesa-de-regalos/busqueda") > -1) {
        $('.re-central:first-child .primary').attr("href", "/buscar?q=");
        $('.mdr__search-how-to-buy .secondary').attr("href", "/preguntas-frecuentes");
        $('.mdr__search-how-to-buy .secondary').text("Preguntas frecuentes");
    }





    (async () => {
        while (!window.hasOwnProperty('yotpo')) {
            await new Promise(resolve => setTimeout(resolve, 4000))
        }
        var resenas = ['No lo recomiendo', 'Puede Mejorar', 'Aceptable', 'Muy bueno', 'Excelente'];
        $('.yotpo-header').append('<p class = "tooltip">  <p>')

        var estrella1 = $('.stars-wrapper .yotpo-icon-empty-star[data-score=1]');
        var estrella2 = $('.stars-wrapper .yotpo-icon-empty-star[data-score=2]');
        var estrella3 = $('.stars-wrapper .yotpo-icon-empty-star[data-score=3]');
        var estrella4 = $('.stars-wrapper .yotpo-icon-empty-star[data-score=4]');
        var estrella5 = $('.stars-wrapper .yotpo-icon-empty-star[data-score=1]');

        $(".stars-wrapper .yotpo-icon-empty-star[data-score=1]").hover(
            function() {
                $('.yotpo-header .tooltip').text(resenas[0])
            }
        );

        $(".stars-wrapper .yotpo-icon-empty-star[data-score=2]").hover(
            function() {
                $('.yotpo-header .tooltip').text(resenas[1])
            }
        );

        $(".stars-wrapper .yotpo-icon-empty-star[data-score=3]").hover(
            function() {
                $('.yotpo-header .tooltip').text(resenas[2])
            }
        );

        $(".stars-wrapper .yotpo-icon-empty-star[data-score=4]").hover(
            function() {
                $('.yotpo-header .tooltip').text(resenas[3])
            }
        );

        $(".stars-wrapper .yotpo-icon-empty-star[data-score=5]").hover(
            function() {
                $('.yotpo-header .tooltip').text(resenas[4])
            }
        );

    })();
    /*
    function seekCarruselHomeE(){
        if($('.home .carruselHomeE .tag-other-products').length){
            $('.home .carruselHomeE .tag-other-products').append('<a class="text-center d-none d-md-inline-block fw-normal mb-3" href="'+ urlTestCarruselE +'"><p class="ms-3 text-decoration-none">Ver todo <svg class="svg-icon"><use href="#svg-icon-chevron-right"></use></svg></p></a>');
            $(".home .carruselHomeE .tag-other-products br.mobile").remove()
        }
        else {
            setTimeout(function(){
                seekCarruselHomeE();
            },1000);
        }
        
    }
    
    */

    /* Cambios en carruseles de HOME */

    if (window.location.pathname == "/") {

        /* Cambio en carruseles de prueba Home CEmaco */
        /* Validacion si es layout de prueba o de produccion*/
        if (window.location.search == "?lid=6f267d1a-c4a1-4f56-ab72-dd98881672cf") {
            /* Layout de Prueba*/
            var urlTest1 = '/1812?PS=12&map=productClusterIds&O=';

            if ($('#productsSlider01 .prateleira').length) {

                $('.home .products-slider__wrapper .products-slider__container #productsSlider01 .prateleira > h2').append('deas para un estilo <br class="d-block d-md-none">de vida ECO<br class="d-block d-md-none"><a class="text-center d-inline-block fw-normal mb-3" href="' + urlTest1 + '"><p class="ms-3 text-decoration-underline pd-view-all">Ver todo</p></a>');

            }

            var ulrTest3 = '/1764?map=productClusterIds&O=OrderByReleaseDateDESC';
            if ($('#productsSlider03 .prateleira').length) {
                $('.home .products-slider__wrapper .products-slider__container #productsSlider03 .prateleira > h2').append('<a class="text-center d-inline-block fw-normal mb-3" href="' + ulrTest3 + '"><p class="ms-3 text-decoration-underline">Ver todo </p></a>');
            }

            var urlTestCarruselE = '/1465?map=productClusterIds';

            /*
            if(!$('.home .carruselHomeE .tag-other-products').length){
                seekCarruselHomeE();
            }else {
                $(".home .carruselHomeE .tag-other-products br.mobile").remove()
                $('.home .carruselHomeE .tag-other-products').append('<a class="text-center d-none d-md-inline-block fw-normal mb-3" href="'+ urlTestCarruselE +'"><p class="ms-3 text-decoration-none">Ver todo <svg class="svg-icon"><use href="#svg-icon-chevron-right"></use></svg></p></a>');
            }
            
            */

            var urlTestSuperCiber1 = '/magicasofertas';
            if ($('#productsSpecialSlider01 .prateleira').length) {
                $('.home .products-slider__wrapper .products-slider__container #productsSpecialSlider01 .prateleira > h2').addClass("d-none d-md-block");
                $('.home .products-slider__wrapper .products-slider__container #productsSpecialSlider01 .prateleira > h2').append('<a class="text-center d-none d-md-inline-block fw-normal mb-3" href="' + urlTestSuperCiber1 + '"><p class="ms-3 text-decoration-none text-white">Ver todo <svg class="svg-icon"><use href="#svg-icon-chevron-right"></use></svg></p></a>');
                $('.home .products-slider__wrapper .products-slider__container #productsSpecialSlider01 .prateleira > h2').after('<a class="text-center d-flex flex-column justify-content-center d-md-none align-items-center fw-normal" href="' + urlTestSuperCiber1 + '"><img class="col-8 mt-2" src="https://sfo2.digitaloceanspaces.com/cemacogt/cemaco/2021/Magicas%20Ofertas/2021_carrusel_MO-logo_mob.png"><p class="mt-1 mb-3 fw-normal text-decoration-none text-white">Ver todo <svg class="svg-icon"><use href="#svg-icon-chevron-right"></use></svg></p></a>');
            }


            if (typeof load_discount_flags !== 'undefined') {
                load_discount_flags();
            }
        }
        else {
            /* Layout de Prod*/
            // Agregar link de colecciones antes del carrusel en home
            // Link productsSlider01 Gran Venta
            // var url1='/seleccion-del-dia?fq=H:1441';
            var ulrProd1 = '/1764?map=productClusterIds&O=OrderByReleaseDateDESC';
            if ($('#productsSlider01 .prateleira').length) {
                /*
                $('.home .products-slider__wrapper .products-slider__container #productsSlider01 .prateleira > h2').append('<a class="text-center d-inline-block fw-normal mb-3" href="' + ulrProd1 + '"><p class="ms-3 text-decoration-underline">Ver todo </p></a>');
                */
                /*
                $('.home .products-slider__wrapper .products-slider__container #productsSlider01 .prateleira > h2').append('deas para un estilo <br class="d-block d-md-none">de vida ECO<br class="d-block d-md-none"><a class="text-center d-inline-block fw-normal mb-3" href="' + ulrProd1 + '"><p class="ms-3 text-decoration-underline pd-view-all">Ver todo</p></a>');
                */
            }

            var ulrProd3 = '/1764?map=productClusterIds&O=OrderByReleaseDateDESC';
            if ($('#productsSlider03 .prateleira').length) {
                $('.home .products-slider__wrapper .products-slider__container #productsSlider03 .prateleira > h2').append('<a class="text-center d-inline-block fw-normal mb-3" href="' + ulrProd3 + '"><p class="ms-3 text-decoration-underline">Ver todo </p></a>');
            }

            var urlProdCarruselE = '/1465?map=productClusterIds';

            /*
            if(!$('.home .carruselHomeE .tag-other-products').length){
                seekCarruselHomeE();
            }else {
                $(".home .carruselHomeE .tag-other-products br.mobile").remove()
                $('.home .carruselHomeE .tag-other-products').append('<a class="text-center d-none d-md-inline-block fw-normal mb-3" href="'+ urlProdCarruselE +'"><p class="ms-3 text-decoration-none">Ver todo <svg class="svg-icon"><use href="#svg-icon-chevron-right"></use></svg></p></a>');
            }
            
            */

            var urlTestSuperCiber1 = '/magicasofertas';
            if ($('#productsSpecialSlider01 .prateleira').length) {
                $('.home .products-slider__wrapper .products-slider__container #productsSpecialSlider01 .prateleira > h2').addClass("d-none d-md-block");
                $('.home .products-slider__wrapper .products-slider__container #productsSpecialSlider01 .prateleira > h2').append('<a class="text-center d-none d-md-inline-block fw-normal mb-3" href="' + urlProdCarruselE + '"><p class="ms-3 text-decoration-none text-white">Ver todo <svg class="svg-icon"><use href="#svg-icon-chevron-right"></use></svg></p></a>');
                $('.home .products-slider__wrapper .products-slider__container #productsSpecialSlider01 .prateleira > h2').after('<a class="text-center d-flex flex-column justify-content-center d-md-none align-items-center fw-normal" href="' + urlProdCarruselE + '"><img class="col-8 mt-2" src="https://sfo2.digitaloceanspaces.com/cemacogt/cemaco/2021/Magicas%20Ofertas/2021_carrusel_MO-logo_mob.png"><p class="mt-1 mb-3 fw-normal text-decoration-none text-white">Ver todo <svg class="svg-icon"><use href="#svg-icon-chevron-right"></use></svg></p></a>');
            }

            //var ulrProd2='/1563?map=productClusterIds';
            //if($('#productsSlider02 .prateleira').length){
            //$('.home .products-slider__wrapper .products-slider__container #productsSlider02 .prateleira > h2').append('<a class="text-center d-none d-md-inline-block fw-normal" href="'+ulrProd2+'"><p class="ms-3">Ver todo</p></a>');
            //$('.home .products-slider__wrapper .products-slider__container #productsSlider02 .prateleira > h2').after('<a class="text-center d-sm-block d-md-none fw-normal" href="'+ulrProd2+'"><p class="mb-2">Ver todo</p></a>');
            //}
            if (typeof load_discount_flags !== 'undefined') {
                load_discount_flags();
            }

        }

    }

    if (window.location.pathname == "/m/barbie") {
        $(".brand .page-main--internal-page").css("background-color", "white");
        $(".brand .re-central--product-list").css("background-color", "#F6F6F6").css("padding", "12px 20px");
        $(".brand .pre-footer").css("margin-top", "2rem");
        $(".brand .bread-crumbs").css("display", "none");
        $(".brand .category-name").css("display", "none");
        $(".brand .product-list__results-items").css("display", "none");
        $(".brand .product-list__filtersTitle").css("display", "none");

        function mediaSize() {
            /* Set the matchMedia */
            if (window.matchMedia('(max-width: 768px)').matches) {
                $(".brand .product-list__controls #order-by-wrapper").css("display", "block");
                $(".brand .product-list__controls #filtersOpen").css("display", "block");
                $(".brand .product-list__controls #filtersOpen").css("margin", "0.4rem 0");
            }
            else {
                /* Reset for CSS changes ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬ ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬ ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â‚¬Å¾Ã‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¾Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬ ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â���šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€šÃ‚Â¡ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬ ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬ ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â‚¬Å¾Ã‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬ ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€šÃ‚Â¡ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â¦ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¡ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬ ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€šÃ‚Â¡ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬ ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬ ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â‚¬Å¾Ã‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬ ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â¦ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¡ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬ ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¦ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â¦ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã¢â‚¬Å“ Still need a better way to do this! */
                $(".brand .product-list__controls #order-by-wrapper").css("display", "none");
                $(".brand .product-list__controls #filtersOpen").css("display", "none");
            }
        }

        /* Call the function */
        mediaSize();
        /* Attach the function to the resize event listener */
        window.addEventListener("resize", mediaSize, false);

    }

    if (window.location.href.indexOf("/_secure/account#/orders") > -1) {
        $('.t-heading-3 .c-on-base').text('¡Bienvenido! Aquí podrás visualizar y dar seguimiento a todos tus pedidos a partir de ahora.');
        $('.br3 .w-50-l').css('width', '80%');
        $('.t-heading-3').css('font-family', 'HelveticaNeueLTW05');
    }



    /*     UTM para guateonline
      if (window.location.href.indexOf("1295") > -1 && window.location.href.indexOf("guatonlinefest2021")) {
        document.querySelector(".collection--image").innerHTML =
      '<img src="/arquivos/2021_cemaco_guatonlinefest_desk.png" class="desktop" /><img src="/arquivos/2021_cemaco_guatonlinefest_mobile.png" class="mobile" />';
    }  */

    $('._hj_feedback_container').click(function() {
        $('._hj_feedback_container ._hj-1Fv4C__Feedback__container').css('z-index', '10 !important');
    });

    $('._hjRemoteVarsFrame ._hj_feedback_container ._hj-1Fv4C__Feedback__container').click(function() {
        $('._hj_feedback_container ._hj-1Fv4C__Feedback__container').css('z-index', '110 !important');
    });

    var elementoSinOferta = $('.product-item__price').prev()
    console.log(elementoSinOferta);

    if ($(elementoSinOferta).hasClass('dt_teasers')) {
        console.log('Clase dt teasers');
    }
    else {
        $('.product-item__price').css('padding-top', '13px')
        console.log('No encontro clase')
    }


    $('.footer__collapse:first-child').unbind('click').click(function() {
        $('.footer__collapse:first-child ul').slideToggle();
        $('.footer__collapse:first-child h6').toggleClass("footer__collapse--title-active");
    });

    $('.footer__collapse:nth-child(2)').unbind('click').click(function() {
        $('.footer__collapse:nth-child(2) ul').slideToggle();
        $('.footer__collapse:nth-child(2) h6').toggleClass("footer__collapse--title-active");
    });

    $('.footer__collapse:nth-child(3)').unbind('click').click(function() {
        $('.footer__collapse:nth-child(3) ul').slideToggle();
        $('.footer__collapse:nth-child(3) h6').toggleClass("footer__collapse--title-active");
    });

    $('.footer__collapse:nth-child(4)').unbind('click').click(function() {
        $('.footer__collapse:nth-child(4) ul').slideToggle();
        $('.footer__collapse:nth-child(4) h6').toggleClass("footer__collapse--title-active");
    });

    $('.footer__collapse:nth-child(5)').unbind('click').click(function() {
        $('.footer__collapse:nth-child(5) ul').slideToggle();
        $('.footer__collapse:nth-child(5) h6').toggleClass("footer__collapse--title-active");
    });

    $('._hj_feedback_container ._hj-1Fv4C__Feedback__container').css('z-index', '10 !important');

    $("._hj_feedback_container").click(function() {
        $('._hj-1Fv4C__Feedback__container').css('z-index', '10 !important');
    });

    $('._hj_feedback_container').click(function() {
        $('._hj_feedback_container ._hj-1Fv4C__Feedback__container').css('z-index', '10 !important');
    });

    $('._hjRemoteVarsFrame ._hj_feedback_container ._hj-1Fv4C__Feedback__container').click(function() {
        $('._hj_feedback_container ._hj-1Fv4C__Feedback__container').css('z-index', '10 !important');
    });

    //Clickeable los elementos del header quitando el hover para marcas infantiles
    // departamentos
    $('.nav-item--departamentos').off('hover');
    $(".nav-item--departamentos").click(function() {
        /*if( $(this).hasClass("is-active") ){
        	$(this).removeClass("is-active");
        }else{
        	$(this).addClass("is-active");
        }*/

        //	$( ".nav-item--departamentos" ).toggleClass( ".is-active",   $(".nav-item--departamentos").click() );

        $(this).toggleClass(".is-active")


    });

    // bodas
    $('.nav-item--bodas').off('hover');
    $(".nav-item--bodas").click(function() {
        /*if( $(".nav-item--bodas").hasClass("is-active") ){
        	    if ($(".submenu__boda .submenu__boda-search-input").is(":focus")) {
                    $(".nav-item--bodas").addClass('is-active')
                  }
                  else {
                      $('.nav-item--bodas').removeClass("is-active");
                  }
        		
        		
        	}else{
        		$(".nav-item--bodas").addClass("is-active");
        	}*/

        $(this).toggleClass(".is-active")

    });

    // ver mas
    $('.nav-item--level-0:nth-child(2)').off('hover');
    $(".nav-item--level-0:nth-child(2)").click(function() {

        /*
        	if( $(".nav-item--level-0:nth-child(2)").hasClass("is-active") ){
        		$('.nav-item--level-0:nth-child(2)').removeClass("is-active");
        	}else{
        		$(".nav-item--level-0:nth-child(2)").addClass("is-active");
        	}*/

        $(this).toggleClass(".is-active")
    });

    // cuenta
    $('#accountTriggerWrapper').off('hover');
    /*$("#accountTriggerWrapper").click(function(){
    	if( $("#accountMenu").hasClass("is-active") ){
    		$('#accountMenu').removeClass("is-active");
    		$("#accountMenu").css({"display":"none","opacity":"0"});
    	}else{
    		$("#accountMenu").addClass("is-active");
    		$("#accountMenu").css({"display":"block","opacity":"1"});
    	}
    });*/

    $(".submenu__boda .submenu__boda-search-input").focus(function() {
        $(".nav-item--bodas").addClass('is-active')
    })

    $('#search').on("change paste keyup", function() {
        if ($(this).val().length > 0) {
            $("#cleanSearch").show();
        }
        else {
            $("#cleanSearch").hide();
        }
    });

    $('#cleanSearch').on("click", function() {
        $("#cleanSearch").hide();
    });

    $('#cleanSearch').removeClass('hidden-lg-up');

    function CheckSession() {
        console.log("checkSession - start");
        (async () => {
            while (!window.hasOwnProperty("profile_email")) {
                console.log("checkSession - profile check");
                await new Promise(resolve => setTimeout(resolve, 1000));
            }
            if (profile_email !== '') {
                console.log('email');
                console.log(profile_email);
                $('li.AccountMenu-option__with-log').last().show();
            }
            else {
                console.log('no email');
                console.log(profile_email);
                $('li.AccountMenu-option__with-log').last().hide();
            }
        })();
    }


    function CollectionOldPages() {
        var UrlM = "/m/";
        var currentUrl = window.location.href;
        if (currentUrl.indexOf("/truper") > -1 && currentUrl.indexOf(UrlM) <= -1) {
            $(".row.re-central.fluid.bannerTruper").hide();
            $('.re-central.truperCategoria').hide();
            $('.row.re-central.fluid.bannerMedioTruper').hide();
            $(".category-name").hide();
        }
    }
    CollectionOldPages();
    var interval = setInterval(ImagenesCarruselesDatatrics, 5000);
    var contador = 0;
    ImagenesCarruselesDatatrics();

    function ImagenesCarruselesDatatrics() {
        var imgoriginal = document.querySelectorAll(".product-item__figure");

        if (imgoriginal) {
            contador++;

            imgoriginal.forEach(myimg => {
                var imgori = myimg.children[0].children[0].src;
                var array = imgori.split('/');

                if (array[5] !== undefined) {
                    var comprobarMinificada = array[5].split('-');
                    if (comprobarMinificada.length <= 1) {
                        var newurl = imgori.replace(array[5], array[5] + '-255-255');
                        myimg.children[0].children[0].src = newurl;
                    }
                    if (contador >= 3) {
                        clearInterval(interval);
                    }
                }

            });
        }
    }

    if (window.location.href.indexOf("/1299?map=productClusterIds") > -1) {
        window.location = "/ofertasdelasemanajugueton";
    }

});

$(document).ready(function() {
    if (typeof load_discount_flags !== 'undefined') {
        load_discount_flags();
    }
})
