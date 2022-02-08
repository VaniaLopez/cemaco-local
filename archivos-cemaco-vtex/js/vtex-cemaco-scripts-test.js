$(document).ready(function(){
    
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        $("#accountTriggerWrapper").on('click', function(){
            if( $("#accountMenu").hasClass("is-active") ){
                $('#accountMenu').removeClass("is-active");
                $("#accountMenu").css({"display":"none","opacity":"0"});
            }else{
                $("#accountMenu").addClass("is-active");
                $("#accountMenu").css({"display":"block","opacity":"1"});
            }
        });
    }
    
    // Cambio nombre PDP descripci\u00F3n amplia por decripci\u00F3n
    $('.produto .caracteristicas .even th.Descripcion-amplia').html('Descripci\u00F3n');
    
    // Cambio de titulos en PLP
    $(window).load(function (){
        
        if (window.location.href.indexOf("/limpieza-y-lavanderia/control-de-plagas-e-insecticidas/control-de-plagas/") > -1) {
            $('.category-name #h1_name').css('display', 'none')
        } 
      
        setTimeout(function(){
            changePLPTitle()
        }, 1000);
        
          setTimeout(function(){
            changeDatePrivi()
        }, 6000);
        
       
        changeTextReview()
        changeHrefBread()
       
        CheckSession();
       
    });
    
    function changeLabelForm() {
             if ($('.vtex-address-form__street .vtex-input__label').text() == 'Calle') {
                    $('.vtex-address-form__street .vtex-input__label').text('Direcci\u00F3n');
                }else {
                    clearInterval(setDireccion);
                }
    } 
    
      
    
    function changeDatePrivi() {
        
           if (window.location.href.indexOf("/_secure/account/puntos-privilegio") > -1) {
                 $(".datepick, #birthdate, #cardBirthday").datepicker({
                     yearRange: "1925:2010"
                 });
        } 
    }
    
    function changeTextReview() {
        $('.filters-container .selected:eq(1)').text('Im\u00E1genes Y V\u00EDdeos')
        $('.filters-container .filters-dropdown:eq(1) .list-categories .non-selected-item').text('Con Im\u00E1genes Y V\u00EDdeos')
    }
    
    $(document).ready(function () {
        console.log('Prueba');

            let estadoX = ''
            let estadoPrevioX = document.cookie;
            console.log(estadoX);

            setTimeout(function () {
                //verificar()
                //crearX()
            }, 1800);

            function verificar() {
                if (estadoPrevioX.includes('estadohjar')) {
                    console.log('Teine hotjar');

                    if (estadoPrevioX.includes('estadohjar=oculto')) {
                        console.log('Ocultando');
                        let elementoOcultar = $('._hj-3ZiaL__MinimizedWidgetBottom__container ._hj-4a_14__MinimizedWidgetBottom__left ');
                        console.log(elementoOcultar);
                        $('._hj-3ZiaL__MinimizedWidgetBottom__container ._hj-4a_14__MinimizedWidgetBottom__left ').css('display', 'none')

                     } else {

                        }

                        if (estadoPrevioX.includes('estadohjarChat=oculto')) {
                            console.log('Ocultando chat');
                            $('#fc_frame').css('display', 'none')
                        } else {

                        }
                } else if (estadoPrevioX.includes('estadohjarChat=oculto')) {
                    console.log('Ocultando chat');
                    $('#fc_frame').css('display', 'none')
                }
            }


       


            function crearX() {
                console.log(document.cookie);
                var referencia = $('._hj-3ZiaL__MinimizedWidgetBottom__container ._hj-4a_14__MinimizedWidgetBottom__left ');
                console.log(referencia);
                var elementoRef = referencia[0];
                console.log(elementoRef);
                let elementoChat = $('.d-hotline');
                let chatContent = $('#fc_frame');
                let refChat = chatContent[0]
                console.log(elementoChat);

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
                console.log(otroDiv);

                $('.btn_close_hjar').click(function () {
                    console.log('boton x');
                    document.cookie = "estadohjar=oculto; SameSite=Lax";
                    //setCookie('estadohjar', 'oculto')
                    console.log(document.cookie);
                    $('#_hj_feedback_container').css('display', 'none');

                })

                $('.btn_close_hjar_chat').click(function () {
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
        } else if (bebejugueton > 0) {
            $('.bread-crumb ul:first-child a').attr("href", "/bebe-jugueton")
        }
    }


    function changePLPTitle(){
        const slogan = 'Cemaco Guatemala - Tienda en L\u00EDnea';

        if($('.category-name #h1_name').text() == 'Alarmas Sensores Y Detectores'){
            document.title = `Alarmas, Sensores y Detectores | ${slogan}`;
            $('.category-name #h1_name').text('Alarmas, Sensores y Detectores');
        }
        if($('.category-name #h1_name').text() == 'Popurri Y Sus Accesorios'){
            document.title = `Popurr\u00ED Y Sus Accesorios | ${slogan}`;
            $('.category-name #h1_name').text('Popurr\u00ED Y Sus Accesorios');
        }
        if($('.category-name #h1_name').text() == 'Organizadores Para Bano'){
            document.title = `Organizadores Para Ba\u00F1o | ${slogan}`;
            $('.category-name #h1_name').text('Organizadores Para Ba\u00F1o');
        }
        if($('.category-name #h1_name').text() == 'Mingitorios Bidet Y Tinas'){
            document.title = `Mingitorios, Bidets Y Tinas | ${slogan}`;
            $('.category-name #h1_name').text('Mingitorios, Bidets Y Tinas');
        }
        if($('.category-name #h1_name').text() == 'Barnices Tintes Y Lacas'){
            document.title = `Barnices, Tintes Y Lacas | ${slogan}`;
            $('.category-name #h1_name').text('Barnices, Tintes Y Lacas');
        }
        if($('.category-name #h1_name').text() == 'Escaleras De Combinacion'){
            document.title = `Escaleras De Combinaci\u00F3n | ${slogan}`;
            $('.category-name #h1_name').text('Escaleras De Combinaci\u00F3n');
        }
        if($('.category-name #h1_name').text() == 'Lamparas De Mesa'){
            document.title = `L\u00E1mparas De Mesa | ${slogan}`;
            $('.category-name #h1_name').text('L\u00E1mparas De Mesa');
        }
        if($('.category-name #h1_name').text() == 'Lamparas De Pie'){
            document.title = `L\u00E1mparas De Pie | ${slogan}`;
            $('.category-name #h1_name').text('L\u00E1mparas De Pie');
        }
        if($('.category-name #h1_name').text() == 'Lamparas De Pared'){
            document.title = `L\u00E1mparas De Pared | ${slogan}`;
            $('.category-name #h1_name').text('L\u00E1mparas De Pared');
        }
        if($('.category-name #h1_name').text() == 'Refuerzos Rieles Y Trabadores'){
            document.title = `Refuerzos, Rieles Y Trabadores | ${slogan}`;
            $('.category-name #h1_name').text('Refuerzos, Rieles Y Trabadores');
        }
        if($('.category-name #h1_name').text() == 'Bases Brazos Y Patas'){
            document.title = `Bases, Brazos Y Patas | ${slogan}`;
            $('.category-name #h1_name').text('Bases, Brazos Y Patas');
        }
        if($('.category-name #h1_name').text() == 'Alcayatas Argolla Y Armellas'){
            document.title = `Alcayatas, Argolla Y Armellas | ${slogan}`;
            $('.category-name #h1_name').text('Alcayatas, Argolla Y Armellas');
        }
        if($('.category-name #h1_name').text() == 'Estanterias'){
            document.title = `Estanter\u00EDas | ${slogan}`;
            $('.category-name #h1_name').text('Estanter\u00EDas');
        }
        if($('.category-name #h1_name').text() == 'Sabanas Sobrefundas Y Vuelos Para Cama'){
            document.title = `S\u00E1banas, Sobrefundas Y Vuelos Para Cama | ${slogan}`;
            $('.category-name #h1_name').text('S\u00E1banas, Sobrefundas Y Vuelos Para Cama');
        }
        if($('.category-name #h1_name').text() == 'Edredones Cubrecamas Y Duvets'){
            document.title = `Edredones, Cubrecamas Y Duvets | ${slogan}`;
            $('.category-name #h1_name').text('Edredones, Cubrecamas Y Duvets');
        }
        if($('.category-name #h1_name').text() == 'Almohadas Cojines Y Rellenos'){
            document.title = `Almohadas, Cojines Y Rellenos | ${slogan}`;
            $('.category-name #h1_name').text('Almohadas, Cojines Y Rellenos');
        }
        if($('.category-name #h1_name').text() == 'Alcancias'){
            document.title = `Alcanc\u00EDas | ${slogan}`;
            $('.category-name #h1_name').text('Alcanc\u00EDas');
        }
        if($('.category-name #h1_name').text() == 'Albumes Para Fotos'){
            document.title = `ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬ ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Âlbumes Para Fotos | ${slogan}`;
            $('.category-name #h1_name').text('ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬ ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Âlbumes Para Fotos');
        }
        if($('.category-name #h1_name').text() == 'Quinques'){
            document.title = `Quinqu\u00E9s | ${slogan}`;
            $('.category-name #h1_name').text('Quinqu\u00E9s');
        }
        if($('.category-name #h1_name').text() == 'Pachonestermosyhieleras'){
            document.title = `Pachones, Termos Y Hieleras | ${slogan}`;
            $('.category-name #h1_name').text('Pachones, Termos Y Hieleras');
        }
        if($('.category-name #h1_name').text() == 'Antorchaslamparasyaccesorios'){
            document.title = `Antorchas, Antorchas, L\u00E1mparas Y Accesorios | ${slogan}`;
            $('.category-name #h1_name').text('Antorchas, L\u00E1mparas Y Accesorios');
        }
        if($('.category-name #h1_name').text() == 'Limpiadores De Banos'){
            document.title = `Limpiadores De Ba\u00F1os | ${slogan}`;
            $('.category-name #h1_name').text('Limpiadores De Ba\u00F1os');
        }
        if($('.category-name #h1_name').text() == 'Azucar Y Sustitutos'){
            document.title = `Az\u00FAcar Y Sustitutos | ${slogan}`;
            $('.category-name #h1_name').text('Az\u00FAcar Y Sustitutos');
        }
        if($('.category-name #h1_name').text() == 'Comidas Instantaneas'){
            document.title = `Comidas Instant\u00E1neas | ${slogan}`;
            $('.category-name #h1_name').text('Comidas Instant\u00E1neas');
        }
        if($('.category-name #h1_name').text() == 'Snacks Para Bebe'){
            document.title = `Snacks Para Beb\u00E9 | ${slogan}`;
            $('.category-name #h1_name').text('Snacks Para Beb\u00E9');
        }
        if($('.category-name #h1_name').text() == 'Snaks'){
            document.title = `Snacks | ${slogan}`;
            $('.category-name #h1_name').text('Snacks');
        }
        if($('.category-name #h1_name').text() == 'Numeros Letras Y Rotulos'){
            document.title = `N\u00FAmeros, Letras Y R\u00F3tulos | ${slogan}`;
            $('.category-name #h1_name').text('N\u00FAmeros, Letras Y R\u00F3tulos');
        }
        if($('.category-name #h1_name').text() == 'Juguetes De Bano'){
            document.title = `Juguetes De Ba\u00F1o | ${slogan}`;
            $('.category-name #h1_name').text('Juguetes De Ba\u00F1o');
        }
         if($('.category-name #h1_name').text() == 'Trajes De Bano'){
            document.title = `Trajes De Ba\u00F1o | ${slogan}`;
            $('.category-name #h1_name').text('Trajes De Ba\u00F1o');
        }
        if($('.category-name #h1_name').text() == 'Vajillas Utensilios'){
            document.title = `Vajillas Y Utensilios | ${slogan}`;
            $('.category-name #h1_name').text('Vajillas Y Utensilios');
        }
        if($('.category-name #h1_name').text() == 'Capas Botas Y Sombrillas'){
            document.title = `Capas, Botas Y Sombrillas | ${slogan}`;
            $('.category-name #h1_name').text('Capas, Botas Y Sombrillas');
        }
        if($('.category-name #h1_name').text() == 'Pachones Termos Y Loncheras'){
            document.title = `Pachones, Termos Y Loncheras | ${slogan}`;
            $('.category-name #h1_name').text('Pachones, Termos Y Loncheras');
        }
        if($('.category-name #h1_name').text() == 'Esponjas Guantes Y Gorras'){
            document.title = `Esponjas, Guantes Y Gorras | ${slogan}`;
            $('.category-name #h1_name').text('Esponjas, Guantes Y Gorras');
        }
        if($('.category-name #h1_name').text() == 'Batas De Bano'){
            document.title = `Batas De Ba\u00F1o | ${slogan}`;
            $('.category-name #h1_name').text('Batas De Ba\u00F1o');
        }
        if($('.category-name #h1_name').text() == 'Cortinas Alfombras Y Accesorios'){
            document.title = `Cortinas, Alfombras Y Accesorios | ${slogan}`;
            $('.category-name #h1_name').text('Cortinas, Alfombras Y Accesorios');
        }
        if($('.category-name #h1_name').text() == 'Suavizantes Y Liquidos Para Planchar'){
            document.title = `Suavizantes Y L\u00EDquidos Para Planchar | ${slogan}`;
            $('.category-name #h1_name').text('Suavizantes Y L\u00EDquidos Para Planchar');
        }
        if($('.category-name #h1_name').text() == 'Mochilas Bolsos Y Estuches'){
            document.title = `Mochilas, Bolsos Y Estuches | ${slogan}`;
            $('.category-name #h1_name').text('Mochilas, Bolsos Y Estuches');
        }
        if($('.category-name #h1_name').text() == 'Servilletas Mayordomo Y Papel Higienico'){
            document.title = `Servilletas, Mayordomo Y Papel Higi\u00E9nico | ${slogan}`;
            $('.category-name #h1_name').text('Servilletas, Mayordomo Y Papel Higi\u00E9nico');
        }
        if($('.category-name #h1_name').text() == 'Grama Sintetica'){
            document.title = `Grama Sint\u00E9tica | ${slogan}`;
            $('.category-name #h1_name').text('Grama Sint\u00E9tica');
        }

        if($('.category-name #h1_name').text() == 'Cuchillos Afiladores Y Tablas Para Cortar'){
            document.title = `Cuchillos, Afiladores Y Tablas Para Cortar | ${slogan}`;
            $('.category-name #h1_name').text('Cuchillos, Afiladores Y Tablas Para Cortar');
        }
        if($('.category-name #h1_name').text() == 'Decoracion'){
            document.title = `Decoraci\u00F3n | ${slogan}`;
            $('.category-name #h1_name').text('Decoraci\u00F3n');
        }
        if($('.category-name #h1_name').text() == 'Griferia Y Accesorios'){
            document.title = `GGrifer\u00EDa Y Accesorios | ${slogan}`;
            $('.category-name #h1_name').text('Grifer\u00EDa Y Accesorios');
        }
        if($('.category-name #h1_name').text() == 'Abrelatas Y Cuchillos Electricos'){
            document.title = `Abrelatas Y Cuchillos El\u00E9ctricos | ${slogan}`;
            $('.category-name #h1_name').text('Abrelatas Y Cuchillos El\u00E9ctricos');
        }
        if($('.category-name #h1_name').text() == 'Cafe Y Te'){
            document.title = `Caf\u00E9 Y T\u00E9 | ${slogan}`;
            $('.category-name #h1_name').text('Caf\u00E9 Y T\u00E9');
        }
        if($('.category-name #h1_name').text() == 'Olla Vaporera Electrica'){
            document.title = `Olla Vaporera El\u00E9ctrica | ${slogan}`;
            $('.category-name #h1_name').text('Olla Vaporera El\u00F3ctrica');
        }
        if($('.category-name #h1_name').text() == 'Parrillas Y Sartenes Electricos'){
            document.title = `Parrillas Y Sartenes El\u00E9ctricos | ${slogan}`;
            $('.category-name #h1_name').text('Parrillas Y Sartenes El\u00E9ctricos');
        }
        if($('.category-name #h1_name').text() == 'Cristaleria Botellas Y Jarras'){
            document.title = `Cristaler\u00EDa, Botellas Y Jarras | ${slogan}`;
            $('.category-name #h1_name').text('Cristaler\u00EDa, Botellas Y Jarras');
        }
        if($('.category-name #h1_name').text() == 'Cubiertos Y Cuberteria'){
            document.title = `Cubiertos Y Cuberter\u00EDa | ${slogan}`;
            $('.category-name #h1_name').text('Cubiertos Y Cuberter\u00EDa');
        }
        if($('.category-name #h1_name').text() == 'Ninos Y Bebes'){
            document.title = `Ni\u00F1os Y Beb\u00E9s | ${slogan}`;
            $('.category-name #h1_name').text('Ni\u00F1os Y Beb\u00E9s');
        }
        if($('.category-name #h1_name').text() == 'Platos Vajillas Y Accesorios'){
            document.title = `Platos, Vajillas Y Accesorios | ${slogan}`;
            $('.category-name #h1_name').text('Platos, Vajillas Y Accesorios');
        }
        if($('.category-name #h1_name').text() == 'Organizacion Para Lavaplatos'){
            document.title = `Organizaci\u00F3n Para Lavaplatos | ${slogan}`;
            $('.category-name #h1_name').text('Organizaci\u00F3n Para Lavaplatos');
        }
        if($('.category-name #h1_name').text() == 'Porta Garrafon'){
            document.title = `Porta Garraf\u00F3n | ${slogan}`;
            $('.category-name #h1_name').text('Porta Garraf\u00F3n');
        }
        if($('.category-name #h1_name').text() == 'Herramienta De Precision'){
            document.title = `Herramienta De Precisi\u00F3n | ${slogan}`;
            $('.category-name #h1_name').text('Herramienta De Precisi\u00F3n');
        }
        if($('.category-name #h1_name').text() == 'Herramientas De Precision Y Accesorios'){
            document.title = `Herramientas De Precisi\u00F3n Y Accesorios | ${slogan}`;
            $('.category-name #h1_name').text('Herramientas De Precisi\u00F3n Y Accesorios');
        }
        if($('.category-name #h1_name').text() == 'Copas Llaves Y Sets De Herramientas'){
            document.title = `Copas, Llaves Y Sets De Herramientas | ${slogan}`;
            $('.category-name #h1_name').text('Copas, Llaves Y Sets De Herramientas');
        }
        if($('.category-name #h1_name').text() == 'Herramientas Para Construccion'){
            document.title = `Herramientas Para Construcci\u00F3n | ${slogan}`;
            $('.category-name #h1_name').text('Herramientas Para Construcci\u00F3n');
        }
        if($('.category-name #h1_name').text() == 'Herramientas Para Jardineria'){
            document.title = `Herramientas Para Jardiner\u00EDa | ${slogan}`;
            $('.category-name #h1_name').text('Herramientas Para Jardiner\u00EDa');
        }
        if($('.category-name #h1_name').text() == 'cajas-y-porta-herramientas'){
            document.title = `Cajas Y Porta Herramientas | ${slogan}`;
            $('.category-name #h1_name').text('Cajas Y Porta Herramientas');
        }
        if($('.category-name #h1_name').text() == 'Accesorios Para Cajas Electricas'){
            document.title = `Accesorios Para Cajas El\u00E9ctricas | ${slogan}`;
            $('.category-name #h1_name').text('Accesorios Para Cajas El\u00E9ctricas');
        }
        if($('.category-name #h1_name').text() == 'Accesorios Para Cajas De Distribucion'){
            document.title = `Accesorios Para Cajas De Distribuci\u00F3n | ${slogan}`;
            $('.category-name #h1_name').text('Accesorios Para Cajas De Distribuci\u00F3n');
        }
        if($('.category-name #h1_name').text() == 'Cajas De Distribucion'){
            document.title = `Cajas De Distribuci\u00F3n | ${slogan}`;
            $('.category-name #h1_name').text('Cajas De Distribuci\u00F3n');
        }
        if($('.category-name #h1_name').text() == 'Baterias Y Cargadores'){
            document.title = `Bater\u00EDas Y Cargadores | ${slogan}`;
            $('.category-name #h1_name').text('Bater\u00EDas Y Cargadores');
        }
        if($('.category-name #h1_name').text() == 'Camaras Y Accesorios'){
            document.title = `C\u00E1maras Y Accesorios | ${slogan}`;
            $('.category-name #h1_name').text('C\u00E1maras Y Accesorios');
        }
        if($('.category-name #h1_name').text() == 'Accesorios Para Telefono'){
            document.title = `Accesorios Para Tel\u00E9fono | ${slogan}`;
            $('.category-name #h1_name').text('Accesorios Para Tel\u00E9fono');
        }
        if($('.category-name #h1_name').text() == 'Telefonos Celulares Y Accesorios'){
            document.title = `Tel\u00E9fonos, Celulares Y Accesorios | ${slogan}`;
            $('.category-name #h1_name').text('Tel\u00E9fonos, Celulares Y Accesorios');
        }
        if($('.category-name #h1_name').text() == 'Bebes'){
            document.title = `Beb\u00E9s | ${slogan}`;
            $('.category-name #h1_name').text('Beb\u00E9s');
        }
        if($('.category-name #h1_name').text() == 'Colgadores Tendedores Y Accesorios'){
            document.title = `Colgadores, Tendedores Y Accesorios | ${slogan}`;
            $('.category-name #h1_name').text('Colgadores, Tendedores Y Accesorios');
        }
        if($('.category-name #h1_name').text() == 'Organizacion Lavanderia'){
            document.title = `Organizaci\u00F3n Lavander\u00EDa | ${slogan}`;
            $('.category-name #h1_name').text('Organizaci\u00F3n Lavander\u00EDa');
        }
        if($('.category-name #h1_name').text() == 'Gel Mousse Spray Y Cremas'){
            document.title = `Gel, Mousse, Spray Y Cremas | ${slogan}`;
            $('.category-name #h1_name').text('Gel, Mousse, Spray Y Cremas');
        }
        if($('.category-name #h1_name').text() == 'Pistolas Aspersores Y Regaderas'){
            document.title = `Pistolas, Aspersores Y Regaderas | ${slogan}`;
            $('.category-name #h1_name').text('Pistolas, Aspersores Y Regaderas');
        }
        if($('.category-name #h1_name').text() == 'Accesorios Para Natacion'){
            document.title = `Accesorios Para Nataci\u00F3n | ${slogan}`;
            $('.category-name #h1_name').text('Accesorios Para Nataci\u00F3n');
        }
        if($('.category-name #h1_name').text() == 'Maquinas De Ejercicios'){
            document.title = `M\u00E1quinas De Ejercicios | ${slogan}`;
            $('.category-name #h1_name').text('M\u00E1quinas De Ejercicios');
        }
        if($('.category-name #h1_name').text() == 'Pegamentos Multiples'){
            document.title = `Pegamentos M\u00FAltiples | ${slogan}`;
            $('.category-name #h1_name').text('Pegamentos M\u00FAltiples');
        }
        if($('.category-name #h1_name').text() == 'Atun Y Sardinas'){
            document.title = `At\u00FAn Y Sardinas | ${slogan}`;
            $('.category-name #h1_name').text('At\u00FAn Y Sardinas');
        }
        
       
        if($('.category-name #h1_name').text() == 'Muebles Y Organizacion'){
            document.title = `Muebles Y Organizaci\u00F3n | ${slogan}`;
            $('.category-name #h1_name').text('Muebles Y Organizaci\u00F3n');
        }
        if($('.category-name #h1_name').text() == 'Accesorios Y Decoracion'){
            document.title = `Accesorios Y Decoraci\u00F3n | ${slogan}`;
            $('.category-name #h1_name').text('Accesorios Y Decoraci\u00F3n');
        }
        if($('.category-name #h1_name').text() == 'Accesorios Para Baterias'){
            document.title = `Accesorios Para Bater\u00EDas | ${slogan}`;
            $('.category-name #h1_name').text('Accesorios Para Bater\u00EDas');
        }
        if($('.category-name #h1_name').text() == 'Baterias'){
            document.title = `Bater\u00EDas | ${slogan}`;
            $('.category-name #h1_name').text('Bater\u00EDas');
        }
          if($('.category-name #h1_name').text() == 'Bombillas Lamparas Y Neblineras'){
            document.title = `Bombillas, L\u00E1mparas Y Neblineras | ${slogan}`;
            $('.category-name #h1_name').text('Bombillas, L\u00E1mparas Y Neblineras');
        }
          if($('.category-name #h1_name').text() == 'Bujias Filtros Y Acc'){
            document.title = `Buj\u00EDas, Filtros Y Acc | ${slogan}`;
            $('.category-name #h1_name').text('Buj\u00EDas, Filtros Y Acc');
        }
          if($('.category-name #h1_name').text() == 'Aceites Y Liquidos'){
            document.title = `Aceites Y L\u00EDquidos | ${slogan}`;
            $('.category-name #h1_name').text('Aceites Y L\u00EDquidos');
        }
          if($('.category-name #h1_name').text() == 'Pisos Ceramicos'){
            document.title = `Pisos Cer\u00E1micos | ${slogan}`;
            $('.category-name #h1_name').text('Pisos Cer\u00E1micos');
        }
        if($('.category-name #h1_name').text() == 'Cepillos Electricos'){
            document.title = `Cepillos El\u00E9ctricos | ${slogan}`;
            $('.category-name #h1_name').text('Cepillos El\u00E9ctricos');
        }
        if($('.category-name #h1_name').text() == 'Climatizacion'){
            document.title = `Climatizaci\u00F3n | ${slogan}`;
            $('.category-name #h1_name').text('Climatizaci\u00F3n');
        }
        if($('.category-name #h1_name').text() == 'Depositos Y Cisternas'){
            document.title = `Dep\u00F3sitos y Cisternas | ${slogan}`;
            $('.category-name #h1_name').text('Dep\u00F3sitos y Cisternas');
        }
        if($('.category-name #h1_name').text() == 'Celosia Y Accesorios'){
            document.title = `Celos\u00EDa y Accesorios | ${slogan}`;
            $('.category-name #h1_name').text('Celos\u00EDa y Accesorios');
        }
         if($('.category-name #h1_name').text() == 'Maderas Y Perfileria'){
            document.title = `Maderas y Perfiler\u00EDa | ${slogan}`;
            $('.category-name #h1_name').text('Maderas y Perfiler\u00EDa');
        }
         if($('.category-name #h1_name').text() == 'Perfileria De Tabicacion'){
            document.title = `Perfiler\u00EDa de Tabicaci\u00F3n | ${slogan}`;
            $('.category-name #h1_name').text('Perfiler\u00EDa de Tabicaci\u00F3n');
        }
         if($('.category-name #h1_name').text() == 'Accesorios De Tv Y VÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬ ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬ ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â‚¬Å¾Ã‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â­deo'){
            document.title = `Accesorios de TV y Video | ${slogan}`;
            $('.category-name #h1_name').text('Accesorios de TV y Video');
        }
         if($('.category-name #h1_name').text() == 'Organizacion'){
            document.title = `Organizaci\u00F3n | ${slogan}`;
            $('.category-name #h1_name').text('Organizaci\u00F3n');
        }
          if($('.category-name #h1_name').text() == 'Seguridad Y Accesorios En El Bano'){
            document.title = `Seguridad Y Accesorios En El Ba\u00F1o | ${slogan}`;
            $('.category-name #h1_name').text('Seguridad Y Accesorios En El Ba\u00F1o');
        }
          if($('.category-name #h1_name').text() == 'Moviles Y Juguetes Para Cuna'){
            document.title = `M\u00F3viles Y Juguetes Para Cuna | ${slogan}`;
            $('.category-name #h1_name').text('M\u00F3viles Y Juguetes Para Cuna');
        }
          if($('.category-name #h1_name').text() == 'Sabanas Y Cobertores'){
            document.title = `S\u00E1banas Y Cobertores | ${slogan}`;
            $('.category-name #h1_name').text('S\u00E1banas Y Cobertores');
        }
          if($('.category-name #h1_name').text() == 'Panaleras Y Cambiadores Portatiles'){
            document.title = `Pa\u00F1aleras Y Cambiadores Port\u00E1tiles | ${slogan}`;
            $('.category-name #h1_name').text('Pa\u00F1aleras Y Cambiadores Port\u00E1tiles');
        }
          if($('.category-name #h1_name').text() == 'Basicos'){
            document.title = `B\u00E1sicos | ${slogan}`;
            $('.category-name #h1_name').text('B\u00E1sicos');
        }
          if($('.category-name #h1_name').text() == 'Nina'){
            document.title = `Ni\u00F1a | ${slogan}`;
            $('.category-name #h1_name').text('Ni\u00F1a');
        }
          if($('.category-name #h1_name').text() == 'Nino'){
            document.title = `Ni\u00F1o | ${slogan}`;
            $('.category-name #h1_name').text('Ni\u00F1o');
        }
          if($('.category-name #h1_name').text() == 'Sombrillas'){
            document.title = `Carruajes Sombrilla | ${slogan}`;
            $('.category-name #h1_name').text('Carruajes Sombrilla');
        }
          if($('.category-name #h1_name').text() == 'Portabebes'){
            document.title = `Portabeb\u00E9s | ${slogan}`;
            $('.category-name #h1_name').text('Portabeb\u00E9s');
        }
          if($('.category-name #h1_name').text() == 'Pomadas Y Balsamos'){
            document.title = `Pomadas Y B\u00E1lsamos | ${slogan}`;
            $('.category-name #h1_name').text('Pomadas Y B\u00E1lsamos');
        }
          if($('.category-name #h1_name').text() == 'Toallas Humedas Y Dispensadores'){
            document.title = `Toallas H\u00FAmedas Y Dispensadores | ${slogan}`;
            $('.category-name #h1_name').text('Toallas H\u00FAmedas Y Dispensadores');
        }
           if($('.category-name #h1_name').text() == 'dibujo-y-pintura'){
            document.title = `Dibujo Y Pintura | ${slogan}`;
            $('.category-name #h1_name').text('Dibujo Y Pintura');
        }
           if($('.category-name #h1_name').text() == 'Tobilleras Rodilleras Y Coderas'){
            document.title = `Tobilleras, Rodilleras Y Coderas | ${slogan}`;
            $('.category-name #h1_name').text('Tobilleras, Rodilleras Y Coderas');
        }
           if($('.category-name #h1_name').text() == 'Peluches Y Titeres'){
            document.title = `Peluches Y T\u00EDteres | ${slogan}`;
            $('.category-name #h1_name').text('Peluches Y T\u00EDteres');
        }
           if($('.category-name #h1_name').text() == 'Camas Elasticas Y Trampolines'){
            document.title = `Camas El\u00E1sticas Y Trampolines | ${slogan}`;
            $('.category-name #h1_name').text('Camas El\u00E1sticas Y Trampolines');
        }
        if($('.category-name #h1_name').text() == 'Ninos Bebes Y Vestuario'){
            document.title = `Ni\u00F1os, BebÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â©s y Vestuario | ${slogan}`;
            $('.category-name #h1_name').text('Ni\u00F1os, BebÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â©s y Vestuario');
        }
        if($('.category-name #h1_name').text() == 'Arboles'){
            document.title = `\u00C1rboles | ${slogan}`;
            $('.category-name #h1_name').text('\u00C1rboles');
        }
        if($('.category-name #h1_name').text() == 'Decoracion De Exterior'){
            document.title = `Decoraci\u00F3n De Exterior | ${slogan}`;
            $('.category-name #h1_name').text('Decoraci\u00F3n De Exterior');
        }
        if($('.category-name #h1_name').text() == 'Decoracion De Interior'){
            document.title = `Decoraci\u00F3n De Interior | ${slogan}`;
            $('.category-name #h1_name').text('Decoraci\u00F3n De Interior');
        }
        if($('.category-name #h1_name').text() == 'Decoracion Del Arbol'){
            document.title = `Decoraci\u00F3n Del \u00C1rbol | ${slogan}`;
            $('.category-name #h1_name').text('Decoraci\u00F3n Del \u00C1rbol');
        }
        if($('.category-name #h1_name').text() == 'Munecos Y Figuras De Interior'){
            document.title = `Mu\u00F1ecos Y Figuras De Interior | ${slogan}`;
            $('.category-name #h1_name').text('Mu\u00F1ecos Y Figuras De Interior');
        }
        if (window.location.href.indexOf("/c-bebes/dormitorio/decoracion-y-accesorios") > -1) {
                var referencia = $('.titulo-sessao');
                var elementoRef = referencia[0];
                var encabezado = document.createElement('h1');
                    encabezado.className = 'category-name';
                var span = document.createElement('span');
                    span.innerHTML = 'Decoraci\u00F3n Y Accesorios';
                    span.className = 'h1_name';
                encabezado.appendChild(span);
                elementoRef.parentNode.insertBefore(encabezado, elementoRef);
        }

            if (window.location.href.indexOf("/test-categorias") > -1) {
                // create new element
                const elem2 = document.createElement('p');
                const link = document.createElement('a');

                link.setAttribute('href', "/proyectosparatuhogar");
                link.append(elem2);

                // add text
                elem2.innerText = 'Ver M\u00E1s';

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
              spanHomeTest.innerText = "Ver M\u00E1s >"
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



          if($('.category-name #h1_name').text() == 'Canales'){
            document.title = `Canales Y Accesorios | ${slogan}`;
            $('.category-name #h1_name').text('Canales Y Accesorios');
        }

           if($('.category-name #h1_name').text() == 'Arandelas Roldanas Y Tuercas'){
            document.title = `Arandelas, Roldanas Y Tuercas | ${slogan}`;
            $('.category-name #h1_name').text('Arandelas, Roldanas Y Tuercas');
        }


         if (window.location.href.indexOf("/_secure/account#") > -1) {
            var setDireccion = setInterval(function(){
            changeLabelForm()
            }, 2000);
        }

          if (window.location.href.indexOf("/limpieza-y-lavanderia/control-de-plagas-e-insecticidas/control-de-plagas/") > -1) {
            if($('.category-name #h1_name').text() == 'Limpieza y Lavander\u00EDa'){
                document.title = `Control De Plagas | ${slogan}`;
                $('.category-name #h1_name').text('Control De Plagas');
            }
            $('.category-name #h1_name').css('display', 'block')
        }

         if ((window.location.href.indexOf("/cepillo-para-bano-del-bebe-pez-silicon") > -1) || (window.location.href.indexOf("/frazada-75-x-100-cm-varios-colores-1007412") > -1)) {
                var selectorColor = $('.item-dimension-Descripciondecolor .group_1');
                selectorColor.css("display", "inherit");
        }

           if($('.category-name #h1_name').text() == 'Accesoriosdepescayremos'){
            document.title = `Accesorios De Pesca Y Remos | ${slogan}`;
            $('.category-name #h1_name').text('Accesorios De Pesca Y Remos');
        }

            if($('.category-name #h1_name').text() == 'Iluminacion Inteligente'){
            document.title = `Iluminaci\u00F3n Inteligente | ${slogan}`;
            $('.category-name #h1_name').text('Iluminaci\u00F3n Inteligente');
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

           if($('.category-name #h1_name').text() == 'Cafe'){
            document.title = `Caf\u00E9 | ${slogan}`;
            $('.category-name #h1_name').text('Caf\u00E9');
        }

           if($('.category-name #h1_name').text() == 'Coctel De Frutas'){
            document.title = `C\u00F3ctel De Frutas | ${slogan}`;
            $('.category-name #h1_name').text('C\u00F3ctel De Frutas');
        }

          if($('.category-name #h1_name').text() == 'Accesorios Para Mecanicos'){
            document.title = `Accesorios Para Mec\u00E1nicos | ${slogan}`;
            $('.category-name #h1_name').text('Accesorios Para Mec\u00E1nicos');
        }

          if($('.category-name #h1_name').text() == 'Pisos Vinilico'){
            document.title = `Pisos Vin\u00EDlico | ${slogan}`;
            $('.category-name #h1_name').text('Pisos Vin\u00EDlico');
        }

          if($('.category-name #h1_name').text() == 'Gorras Esponjas Y Guantes'){
            document.title = `Gorras, Esponjas Y Guantes | ${slogan}`;
            $('.category-name #h1_name').text('Gorras, Esponjas Y Guantes');
        }
          if($('.category-name #h1_name').text() == 'Porta Papel Higienico'){
            document.title = `Porta Papel Higi\u00E9nico | ${slogan}`;
            $('.category-name #h1_name').text('Porta Papel Higi\u00E9nico');
        }

          if($('.category-name #h1_name').text() == 'Calentadores Electricos De Gas Y Solares'){
            document.title = `Calentadores El\u00E9ctricos, De Gas Y Solares | ${slogan}`;
            $('.category-name #h1_name').text('Calentadores El\u00E9ctricos, De Gas Y Solares');
        }

          if($('.category-name #h1_name').text() == 'Organizacion Y Accesorios'){
            document.title = `Organizaci\u00F3n Y Accesorios | ${slogan}`;
            $('.category-name #h1_name').text('Organizaci\u00F3n Y Accesorios');
        }

          if($('.category-name #h1_name').text() == 'Ollas Sartenes Y Cacerolas'){
            document.title = `Ollas, Sartenes Y Cacerolas | ${slogan}`;
            $('.category-name #h1_name').text('Ollas, Sartenes Y Cacerolas');
        }

          if($('.category-name #h1_name').text() == 'Ensaladera Fuentes Y Bandejas Para Servir'){
            document.title = `Ensaladera, Fuentes Y Bandejas Para Servir | ${slogan}`;
            $('.category-name #h1_name').text('Ensaladera, Fuentes Y Bandejas Para Servir');
        }


        if($('.category-name #h1_name').text() == 'Grifos Para Banos'){
            document.title = `Grifos Para Ba\u00F1os | ${slogan}`;
            $('.category-name #h1_name').text('Grifos Para Ba\u00F1os');
        }

        if($('.category-name #h1_name').text() == 'Contrallaves Y Valvulas'){
            document.title = `Contrallaves Y V\u00E1lvulas | ${slogan}`;
            $('.category-name #h1_name').text('Contrallaves Y V\u00E1lvulas');
        }

        if($('.category-name #h1_name').text() == 'Destapadores Y Destapacanos'){
            document.title = `Destapadores Y Destapaca\u00F1os | ${slogan}`;
            $('.category-name #h1_name').text('Destapadores Y Destapaca\u00F1os');
        }

        if($('.category-name #h1_name').text() == 'Spa Masaje Y Relajacion'){
            document.title = `Spa, Masaje Y Relajaci\u00F3n | ${slogan}`;
            $('.category-name #h1_name').text('Spa, Masaje Y Relajaci\u00F3n');
        }

        if($('.category-name #h1_name').text() == 'Fuentes Electricas Y Accesorios'){
            document.title = `Fuentes El\u00E9ctricas Y Accesorios | ${slogan}`;
            $('.category-name #h1_name').text('Fuentes El\u00E9ctricas Y Accesorios');
        }

          if($('.category-name #h1_name').text() == 'Banos'){
            document.title = `Ba\u00F1os | ${slogan}`;
            $('.category-name #h1_name').text('Ba\u00F1os');
        }

           if($('.category-name #h1_name').text() == 'Lamparas De Colgar'){
            document.title = `L\u00E1mparas De Colgar | ${slogan}`;
            $('.category-name #h1_name').text('L\u00E1mparas De Colgar');
        }

           if($('.category-name #h1_name').text() == 'Cubrecamas Duvets Y Edredones'){
            document.title = `Cubrecamas, Duvets Y Edredones | ${slogan}`;
            $('.category-name #h1_name').text('Cubrecamas, Duvets Y Edredones');
        }


           if($('.category-name #h1_name').text() == 'Organizadores Para Banos'){
            document.title = `Organizadores Para Ba\u00F1os | ${slogan}`;
            $('.category-name #h1_name').text('Organizadores Para Ba\u00F1os');
        }


           if($('.category-name #h1_name').text() == 'Set De Jardin'){
            document.title = `SSet De Jard\u00EDn | ${slogan}`;
            $('.category-name #h1_name').text('Set De Jard\u00EDn');
        }

           if($('.category-name #h1_name').text() == 'Antejos Y Caretas'){
            document.title = `Anteojos Y Caretas | ${slogan}`;
            $('.category-name #h1_name').text('Anteojos Y Caretas');
        }

           if($('.category-name #h1_name').text() == 'Fachaleta Y Piedradecorativa'){
            document.title = `Fachaleta Y Piedra Decorativa | ${slogan}`;
            $('.category-name #h1_name').text('Fachaleta Y Piedra Decorativa');
        }

           if($('.category-name #h1_name').text() == 'Block Y Blockdevidrio'){
            document.title = `Block Y Block De Vidrio | ${slogan}`;
            $('.category-name #h1_name').text('Block Y Block De Vidrio');
        }

           if($('.category-name #h1_name').text() == 'Accesorios De Computacion'){
            document.title = `Accesorios De Computaci\u00F3n | ${slogan}`;
            $('.category-name #h1_name').text('Accesorios De Computaci\u00F3n');
        }

           if($('.category-name #h1_name').text() == 'Arte Y Diseno'){
            document.title = `Arte Y Dise\u00F1o | ${slogan}`;
            $('.category-name #h1_name').text('Arte Y Dise\u00F1o');
        }

           if($('.category-name #h1_name').text() == 'Articulos Escolares Y Para Oficina'){
            document.title = `Art\u00EDculos Escolares Y Para Oficina | ${slogan}`;
            $('.category-name #h1_name').text('Art\u00EDculos Escolares Y Para Oficina');
        }

           if($('.category-name #h1_name').text() == 'Articulos Y Accesorios De Oficina'){
            document.title = `Art\u00EDculos Y Accesorios De Oficina | ${slogan}`;
            $('.category-name #h1_name').text('Art\u00EDculos Y Accesorios De Oficina');
        }

           if($('.category-name #h1_name').text() == 'Escolar Arte Y Diseno'){
            document.title = `Escolar, Arte Y Dise\u00F1o | ${slogan}`;
            $('.category-name #h1_name').text('Escolar, Arte Y Dise\u00F1o');
        }

        if($('.category-name #h1_name').text() == 'Bano Y Entrenadores'){
            document.title = `Ba\u00F1o Y Entrenadores | ${slogan}`;
            $('.category-name #h1_name').text('Ba\u00F1o Y Entrenadores');
        }

        if($('.category-name #h1_name').text() == 'Panales'){
            document.title = `Pa\u00F1ales | ${slogan}`;
            $('.category-name #h1_name').text('Pa\u00F1ales');
        }

           if($('.category-name #h1_name').text() == 'Papel Impresion Y Copiado'){
            document.title = `Papel Impresi\u00F3n Y Copiado | ${slogan}`;
            $('.category-name #h1_name').text('Papel Impresi\u00F3n Y Copiado');
        }

              if($('.category-name #h1_name').text() == 'Planificacion Y Cuadernos'){
            document.title = `Planificaci\u00F3n Y Cuaderno | ${slogan}`;
            $('.category-name #h1_name').text('Planificaci\u00F3n Y Cuadernos');
        }

              if($('.category-name #h1_name').text() == 'Planificacion Y Senalizacion'){
            document.title = `Planificaci\u00F3n Y Se\u00F1alizaci\u00F3n | ${slogan}`;
            $('.category-name #h1_name').text('Planificaci\u00F3n Y Se\u00F1alizaci\u00F3n');
        }

        if($('.category-name #h1_name').text() == 'Accesorios Para Decoracion'){
            document.title = `Accesorios Para Decoraci\u00F3n | ${slogan}`;
            $('.category-name #h1_name').text('Accesorios Para Decoraci\u00F3n');
        }
        
         $(".submenu__boda .submenu__boda-search-input").focus(function(){
         $(".nav-item--bodas").addClass('is-active')
        })

        if($('.category-name #h1_name').text() == 'Organizadores De Jardin'){
            document.title = `Organizadores De Jard\u00EDn | ${slogan}`;
            $('.category-name #h1_name').text('Organizadores De Jard\u00EDn');
        }

        if($('.category-name #h1_name').text() == 'Repuestos Para Maquinas'){
            document.title = `Repuestos Para M\u00E1quinas | ${slogan}`;
            $('.category-name #h1_name').text('Repuestos Para M\u00E1quinas');
        }

         if($('.category-name #h1_name').text() == 'Fertililzantes Y Cubresuelos'){
            document.title = `Fertilizantes Y Cubresuelos | ${slogan}`;
            $('.category-name #h1_name').text('Fertilizantes Y Cubresuelos');
        }

         if($('.category-name #h1_name').text() == 'Accesoriosdesupervivencia'){
            document.title = `Accesorios De Supervivencia | ${slogan}`;
            $('.category-name #h1_name').text('Accesorios De Supervivencia');
        }

         if($('.category-name #h1_name').text() == 'Pesas Ligas Y Guantes'){
            document.title = `Pesas, Ligas Y Guantes | ${slogan}`;
            $('.category-name #h1_name').text('Pesas, Ligas Y Guantes');
        }

          if($('.category-name #h1_name').text() == 'Brincadres y Ejercitadores'){
            document.title = `Brincadores y Ejercitadores | ${slogan}`;
            $('.category-name #h1_name').text('Brincadores y Ejercitadores');
        }

        if (window.location.href.indexOf("/c-plomeria") > -1) {
            $('.carruselDepaPlomeriaU .tag-other-products').text('Proyectos de Plomer\u00EDa');
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
                function () {
                    $('.yotpo-header .tooltip').text(resenas[0])
                }
            );
        
            $(".stars-wrapper .yotpo-icon-empty-star[data-score=2]").hover(
                function () {
                    $('.yotpo-header .tooltip').text(resenas[1])
                }
            );
            
             $(".stars-wrapper .yotpo-icon-empty-star[data-score=3]").hover(
                function () {
                    $('.yotpo-header .tooltip').text(resenas[2])
                }
            );
            
             $(".stars-wrapper .yotpo-icon-empty-star[data-score=4]").hover(
                function () {
                    $('.yotpo-header .tooltip').text(resenas[3])
                }
            );
            
             $(".stars-wrapper .yotpo-icon-empty-star[data-score=5]").hover(
                function () {
                    $('.yotpo-header .tooltip').text(resenas[4])
                }
            );
            
            })();

             /* Cambios en carruseles de HOME */
            if (window.location.pathname == "/") {


            /* Cambio en carruseles de prueba Home CEmaco */
            /* Validacion si es layout de prueba o de produccion*/
            if ( window.location.search == "?lid=2fa95bfd-bf7c-4ea0-826a-d4d345f53b80") {
                 /* Layout de Prueba*/
                var urlTest1='/superblack';
                if($('#productsSlider01 .prateleira').length){
                    $('.home .products-slider__wrapper .products-slider__container #productsSlider01 .prateleira > h2').append('<a class="text-center d-none d-md-inline-block fw-normal" href="'+urlTest1+'"><p class="ms-3">Ver todo</p></a>');
                    $('.home .products-slider__wrapper .products-slider__container #productsSlider01 .prateleira > h2').after('<a class="text-center d-sm-block d-md-none fw-normal" href="'+urlTest1+'"><p class="mb-2">Ver todo</p></a>');
                }
            
                //var urlTest2='/superblack';
                //if($('#productsSlider02 .prateleira').length){
                    //$('.home .products-slider__wrapper .products-slider__container #productsSlider02 .prateleira > h2').append('<a class="text-center d-none d-md-inline-block fw-normal" href="'+urlTest2+'"><p class="ms-3">Ver todo</p></a>');
                    //$('.home .products-slider__wrapper .products-slider__container #productsSlider02 .prateleira > h2').after('<a class="text-center d-sm-block d-md-none fw-normal" href="'+urlTest2+'"><p class="mb-2">Ver todo</p></a>');
                //}
                if(typeof load_discount_flags !== 'undefined'){
                    load_discount_flags();
                }
            }else {
                  /* Layout de Prod*/
                // Agregar link de colecciones antes del carrusel en home
                // Link productsSlider01 Gran Venta
                // var url1='/seleccion-del-dia?fq=H:1441';
                var ulrProd1='/superblack';
                if($('#productsSlider01 .prateleira').length){
                    $('.home .products-slider__wrapper .products-slider__container #productsSlider01 .prateleira > h2').append('<a class="text-center d-none d-md-inline-block fw-normal" href="'+ulrProd1+'"><p class="ms-3">Ver todo</p></a>');
                    $('.home .products-slider__wrapper .products-slider__container #productsSlider01 .prateleira > h2').after('<a class="text-center d-sm-block d-md-none fw-normal" href="'+ulrProd1+'"><p class="mb-2">Ver todo</p></a>');
                }
            
                //var ulrProd2='/1563?map=productClusterIds';
                //if($('#productsSlider02 .prateleira').length){
                    //$('.home .products-slider__wrapper .products-slider__container #productsSlider02 .prateleira > h2').append('<a class="text-center d-none d-md-inline-block fw-normal" href="'+ulrProd2+'"><p class="ms-3">Ver todo</p></a>');
                    //$('.home .products-slider__wrapper .products-slider__container #productsSlider02 .prateleira > h2').after('<a class="text-center d-sm-block d-md-none fw-normal" href="'+ulrProd2+'"><p class="mb-2">Ver todo</p></a>');
                //}
                if(typeof load_discount_flags !== 'undefined'){
                    load_discount_flags();
                }

            }
            
        }

            if (window.location.pathname =="/barbie") {
                $(".brand .page-main--internal-page").css("background-color", "white");
                $(".brand .re-central--product-list").css("background-color", "#F6F6F6").css("padding", "12px 20px");
                $(".brand .pre-footer").css("margin-top", "2rem");
                $(".brand .bread-crumbs").css("display", "none");
                $(".brand .category-name").css("display", "none");
                $(".brand .product-list__results-items").css("display", "none");
                $(".brand .product-list__filtersTitle").css("display", "none");
                
                function mediaSize() {
                    /* Set the matchMedia */
                    if (window.matchMedia('(max-width: 768px)').matches){
                        $(".brand .product-list__controls #order-by-wrapper").css("display", "block");
                        $(".brand .product-list__controls #filtersOpen").css("display", "block");
                        $(".brand .product-list__controls #filtersOpen").css("margin", "0.4rem 0");
                    }
                    else {
                        /* Reset for CSS changes ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã¢â‚¬Å“ Still need a better way to do this! */
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
                $('.t-heading-3 .c-on-base').text('ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¡Bienvenido! AquÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â­ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â­ podrÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¡s visualizar y dar seguimiento a todos tus pedidos a partir de ahora.');
                $('.br3 .w-50-l').css('width', '80%');
                $('.t-heading-3').css('font-family', 'HelveticaNeueLTW05');
        }



        /*     UTM para guateonline
          if (window.location.href.indexOf("1295") > -1 && window.location.href.indexOf("guatonlinefest2021")) {
            document.querySelector(".collection--image").innerHTML =
          '<img src="/arquivos/2021_cemaco_guatonlinefest_desk.png" class="desktop" /><img src="/arquivos/2021_cemaco_guatonlinefest_mobile.png" class="mobile" />';
        }  */

        $( '._hj_feedback_container' ).click(function() {
          $('._hj_feedback_container ._hj-1Fv4C__Feedback__container').css('z-index', '10 !important');
        });

        $( '._hjRemoteVarsFrame ._hj_feedback_container ._hj-1Fv4C__Feedback__container' ).click(function() {
          $('._hj_feedback_container ._hj-1Fv4C__Feedback__container').css('z-index', '110 !important');
        });

        var elementoSinOferta = $('.product-item__price').prev()
        console.log(elementoSinOferta);

        if ($(elementoSinOferta).hasClass('dt_teasers')) {
            console.log('Clase dt teasers');
        } else {
            $('.product-item__price').css('padding-top', '13px')
            console.log('No encontro clase')
        }

    }


    $('.footer__collapse:first-child').unbind('click').click(function(){
         $('.footer__collapse:first-child ul').slideToggle();
          $('.footer__collapse:first-child h6').toggleClass("footer__collapse--title-active");
    });

    $('.footer__collapse:nth-child(2)').unbind('click').click(function(){
         $('.footer__collapse:nth-child(2) ul').slideToggle();
          $('.footer__collapse:nth-child(2) h6').toggleClass("footer__collapse--title-active");
    });

    $('.footer__collapse:nth-child(3)').unbind('click').click(function(){
         $('.footer__collapse:nth-child(3) ul').slideToggle();
          $('.footer__collapse:nth-child(3) h6').toggleClass("footer__collapse--title-active");
    });

    $('.footer__collapse:nth-child(4)').unbind('click').click(function(){
         $('.footer__collapse:nth-child(4) ul').slideToggle();
          $('.footer__collapse:nth-child(4) h6').toggleClass("footer__collapse--title-active");
    });
    
    $('.footer__collapse:nth-child(5)').unbind('click').click(function(){
         $('.footer__collapse:nth-child(5) ul').slideToggle();
          $('.footer__collapse:nth-child(5) h6').toggleClass("footer__collapse--title-active");
    });

    $('._hj_feedback_container ._hj-1Fv4C__Feedback__container').css('z-index', '10 !important');

    $( "._hj_feedback_container" ).click(function() {
      $('._hj-1Fv4C__Feedback__container').css('z-index', '10 !important');
    });

    $( '._hj_feedback_container' ).click(function() {
      $('._hj_feedback_container ._hj-1Fv4C__Feedback__container').css('z-index', '10 !important');
    });

    $( '._hjRemoteVarsFrame ._hj_feedback_container ._hj-1Fv4C__Feedback__container' ).click(function() {
      $('._hj_feedback_container ._hj-1Fv4C__Feedback__container').css('z-index', '10 !important');
    });
    
    //Clickeable los elementos del header quitando el hover para marcas infantiles
    // departamentos
        $('.nav-item--departamentos').off('hover');
        $(".nav-item--departamentos").click(function(){
        	if( $(".nav-item--departamentos").hasClass("is-active") ){
        		$('.nav-item--departamentos').removeClass("is-active");
        	}else{
        		$(".nav-item--departamentos").addClass("is-active");
        	}
        });
        
        // bodas
        $('.nav-item--bodas').off('hover');
        $(".nav-item--bodas").click(function(){
        	if( $(".nav-item--bodas").hasClass("is-active") ){
        	    if ($(".submenu__boda .submenu__boda-search-input").is(":focus")) {
                    $(".nav-item--bodas").addClass('is-active')
                  }
                  else {
                      $('.nav-item--bodas').removeClass("is-active");
                  }
        		
        		
        	}else{
        		$(".nav-item--bodas").addClass("is-active");
        	}
        });
        
        // ver mas
        $('.nav-item--level-0:nth-child(2)').off('hover');
        $(".nav-item--level-0:nth-child(2)").click(function(){
        	if( $(".nav-item--level-0:nth-child(2)").hasClass("is-active") ){
        		$('.nav-item--level-0:nth-child(2)').removeClass("is-active");
        	}else{
        		$(".nav-item--level-0:nth-child(2)").addClass("is-active");
        	}
        });
        
        // cuenta
        $('#accountTriggerWrapper').off('hover');
        $("#accountTriggerWrapper").click(function(){
        	if( $("#accountMenu").hasClass("is-active") ){
        		$('#accountMenu').removeClass("is-active");
        		$("#accountMenu").css({"display":"none","opacity":"0"});
        	}else{
        		$("#accountMenu").addClass("is-active");
        		$("#accountMenu").css({"display":"block","opacity":"1"});
        	}
        });
        
    $(".submenu__boda .submenu__boda-search-input").focus(function(){
         $(".nav-item--bodas").addClass('is-active')
    })
        
    $('#search').on("change paste keyup", function() {
        if($(this).val().length > 0){
            $("#cleanSearch").show();
        } else {
            $("#cleanSearch").hide();
        }
    });
    
    $('#cleanSearch').on("click", function() {
        $("#cleanSearch").hide();
    });

    $('#cleanSearch').removeClass('hidden-lg-up');

    function CheckSession(){
        (async() => {
            while(!window.hasOwnProperty("profile_email")){
                await new Promise(resolve => setTimeout(resolve, 1000));
            }
            if(profile_email !== ''){
                console.log('email');
                console.log(profile_email);
                $('li.AccountMenu-option__with-log').last().show();
            }else{
                console.log('no email');
                console.log(profile_email);
                $('li.AccountMenu-option__with-log').last().hide();
            }
        })();
    }
})