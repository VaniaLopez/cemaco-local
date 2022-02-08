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

    // Cambio nombre PDP descripciÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³n amplia por decripciÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³n
    $('.produto .caracteristicas .even th.Descripcion-amplia').html('DescripciÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³n');
    
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
       
    
       
    });
    
    function changeLabelForm() {
             if ($('.vtex-address-form__street .vtex-input__label').text() == 'Calle') {
                    $('.vtex-address-form__street .vtex-input__label').text('DirecciÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³n');
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
                verificar()
                // crearX()
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
        const slogan = 'Cemaco Guatemala - Tienda en LÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â­nea';

        if($('.category-name #h1_name').text() == 'Alarmas Sensores Y Detectores'){
            document.title = `Alarmas, Sensores y Detectores | ${slogan}`;
            $('.category-name #h1_name').text('Alarmas, Sensores y Detectores');
        }
        if($('.category-name #h1_name').text() == 'Popurri Y Sus Accesorios'){
            document.title = `PopurrÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â­ Y Sus Accesorios | ${slogan}`;
            $('.category-name #h1_name').text('PopurrÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â­ Y Sus Accesorios');
        }
        if($('.category-name #h1_name').text() == 'Organizadores Para Bano'){
            document.title = `Organizadores Para BaÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â±o | ${slogan}`;
            $('.category-name #h1_name').text('Organizadores Para BaÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â±o');
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
            document.title = `Escaleras De CombinaciÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³n | ${slogan}`;
            $('.category-name #h1_name').text('Escaleras De CombinaciÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³n');
        }
        if($('.category-name #h1_name').text() == 'Lamparas De Mesa'){
            document.title = `LÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¡mparas De Mesa | ${slogan}`;
            $('.category-name #h1_name').text('LÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¡mparas De Mesa');
        }
        if($('.category-name #h1_name').text() == 'Lamparas De Pie'){
            document.title = `LÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¡mparas De Pie | ${slogan}`;
            $('.category-name #h1_name').text('LÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¡mparas De Pie');
        }
        if($('.category-name #h1_name').text() == 'Lamparas De Pared'){
            document.title = `LÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¡mparas De Pared | ${slogan}`;
            $('.category-name #h1_name').text('LÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¡mparas De Pared');
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
            document.title = `EstanterÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â­as | ${slogan}`;
            $('.category-name #h1_name').text('EstanterÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â­as');
        }
        if($('.category-name #h1_name').text() == 'Sabanas Sobrefundas Y Vuelos Para Cama'){
            document.title = `SÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¡banas, Sobrefundas Y Vuelos Para Cama | ${slogan}`;
            $('.category-name #h1_name').text('SÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¡banas, Sobrefundas Y Vuelos Para Cama');
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
            document.title = `AlcancÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â­as | ${slogan}`;
            $('.category-name #h1_name').text('AlcancÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â­as');
        }
        if($('.category-name #h1_name').text() == 'Albumes Para Fotos'){
            document.title = `ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Âlbumes Para Fotos | ${slogan}`;
            $('.category-name #h1_name').text('ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Âlbumes Para Fotos');
        }
        if($('.category-name #h1_name').text() == 'Quinques'){
            document.title = `QuinquÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â©s | ${slogan}`;
            $('.category-name #h1_name').text('QuinquÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â©s');
        }
        if($('.category-name #h1_name').text() == 'Pachonestermosyhieleras'){
            document.title = `Pachones, Termos Y Hieleras | ${slogan}`;
            $('.category-name #h1_name').text('Pachones, Termos Y Hieleras');
        }
        if($('.category-name #h1_name').text() == 'Antorchaslamparasyaccesorios'){
            document.title = `Antorchas, Antorchas, LÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¡mparas Y Accesorios | ${slogan}`;
            $('.category-name #h1_name').text('Antorchas, LÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¡mparas Y Accesorios');
        }
        if($('.category-name #h1_name').text() == 'Limpiadores De Banos'){
            document.title = `Limpiadores De BaÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â±os | ${slogan}`;
            $('.category-name #h1_name').text('Limpiadores De BaÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â±os');
        }
        if($('.category-name #h1_name').text() == 'Azucar Y Sustitutos'){
            document.title = `AzÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Âºcar Y Sustitutos | ${slogan}`;
            $('.category-name #h1_name').text('AzÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Âºcar Y Sustitutos');
        }
        if($('.category-name #h1_name').text() == 'Comidas Instantaneas'){
            document.title = `Comidas InstantÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¡neas | ${slogan}`;
            $('.category-name #h1_name').text('Comidas InstantÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¡neas');
        }
        if($('.category-name #h1_name').text() == 'Snacks Para Bebe'){
            document.title = `Snacks Para BebÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â© | ${slogan}`;
            $('.category-name #h1_name').text('Snacks Para BebÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â©');
        }
        if($('.category-name #h1_name').text() == 'Snaks'){
            document.title = `Snacks | ${slogan}`;
            $('.category-name #h1_name').text('Snacks');
        }
        if($('.category-name #h1_name').text() == 'Numeros Letras Y Rotulos'){
            document.title = `NÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Âºmeros, Letras Y RÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â³tulos | ${slogan}`;
            $('.category-name #h1_name').text('NÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Âºmeros, Letras Y RÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â³tulos');
        }
        if($('.category-name #h1_name').text() == 'Juguetes De Bano'){
            document.title = `Juguetes De BaÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â±o | ${slogan}`;
            $('.category-name #h1_name').text('Juguetes De BaÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â±o');
        }
         if($('.category-name #h1_name').text() == 'Trajes De Bano'){
            document.title = `Trajes De BaÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â±o | ${slogan}`;
            $('.category-name #h1_name').text('Trajes De BaÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â±o');
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
            document.title = `Batas De BaÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â±o | ${slogan}`;
            $('.category-name #h1_name').text('Batas De BaÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â±o');
        }
        if($('.category-name #h1_name').text() == 'Cortinas Alfombras Y Accesorios'){
            document.title = `Cortinas, Alfombras Y Accesorios | ${slogan}`;
            $('.category-name #h1_name').text('Cortinas, Alfombras Y Accesorios');
        }
        if($('.category-name #h1_name').text() == 'Suavizantes Y Liquidos Para Planchar'){
            document.title = `Suavizantes Y LÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â­quidos Para Planchar | ${slogan}`;
            $('.category-name #h1_name').text('Suavizantes Y LÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â­quidos Para Planchar');
        }
        if($('.category-name #h1_name').text() == 'Mochilas Bolsos Y Estuches'){
            document.title = `Mochilas, Bolsos Y Estuches | ${slogan}`;
            $('.category-name #h1_name').text('Mochilas, Bolsos Y Estuches');
        }
        if($('.category-name #h1_name').text() == 'Servilletas Mayordomo Y Papel Higienico'){
            document.title = `Servilletas, Mayordomo Y Papel HigiÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â©nico | ${slogan}`;
            $('.category-name #h1_name').text('Servilletas, Mayordomo Y Papel HigiÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â©nico');
        }
        if($('.category-name #h1_name').text() == 'Grama Sintetica'){
            document.title = `Grama SintÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â©tica | ${slogan}`;
            $('.category-name #h1_name').text('Grama SintÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â©tica');
        }

        if($('.category-name #h1_name').text() == 'Cuchillos Afiladores Y Tablas Para Cortar'){
            document.title = `Cuchillos, Afiladores Y Tablas Para Cortar | ${slogan}`;
            $('.category-name #h1_name').text('Cuchillos, Afiladores Y Tablas Para Cortar');
        }
        if($('.category-name #h1_name').text() == 'Decoracion'){
            document.title = `DecoraciÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³n | ${slogan}`;
            $('.category-name #h1_name').text('DecoraciÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³n');
        }
        if($('.category-name #h1_name').text() == 'Griferia Y Accesorios'){
            document.title = `GriferÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â­a Y Accesorios | ${slogan}`;
            $('.category-name #h1_name').text('GriferÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â­a Y Accesorios');
        }
        if($('.category-name #h1_name').text() == 'Abrelatas Y Cuchillos Electricos'){
            document.title = `Abrelatas Y Cuchillos ElÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â©ctricos | ${slogan}`;
            $('.category-name #h1_name').text('Abrelatas Y Cuchillos ElÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â©ctricos');
        }
        if($('.category-name #h1_name').text() == 'Cafe Y Te'){
            document.title = `CafÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â© Y TÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â© | ${slogan}`;
            $('.category-name #h1_name').text('CafÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â© Y TÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â©');
        }
        if($('.category-name #h1_name').text() == 'Olla Vaporera Electrica'){
            document.title = `Olla Vaporera ElÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â©ctrica | ${slogan}`;
            $('.category-name #h1_name').text('Olla Vaporera ElÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â©ctrica');
        }
        if($('.category-name #h1_name').text() == 'Parrillas Y Sartenes Electricos'){
            document.title = `Parrillas Y Sartenes ElÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â©ctricos | ${slogan}`;
            $('.category-name #h1_name').text('Parrillas Y Sartenes ElÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â©ctricos');
        }
        if($('.category-name #h1_name').text() == 'Cristaleria Botellas Y Jarras'){
            document.title = `CristalerÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â­a, Botellas Y Jarras | ${slogan}`;
            $('.category-name #h1_name').text('CristalerÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â­a, Botellas Y Jarras');
        }
        if($('.category-name #h1_name').text() == 'Cubiertos Y Cuberteria'){
            document.title = `Cubiertos Y CuberterÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â­a | ${slogan}`;
            $('.category-name #h1_name').text('Cubiertos Y CuberterÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â­a');
        }
        if($('.category-name #h1_name').text() == 'Ninos Y Bebes'){
            document.title = `NiÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â±os Y BebÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â©s | ${slogan}`;
            $('.category-name #h1_name').text('NiÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â±os Y BebÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â©s');
        }
        if($('.category-name #h1_name').text() == 'Platos Vajillas Y Accesorios'){
            document.title = `Platos, Vajillas Y Accesorios | ${slogan}`;
            $('.category-name #h1_name').text('Platos, Vajillas Y Accesorios');
        }
        if($('.category-name #h1_name').text() == 'Organizacion Para Lavaplatos'){
            document.title = `OrganizaciÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³n Para Lavaplatos | ${slogan}`;
            $('.category-name #h1_name').text('OrganizaciÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³n Para Lavaplatos');
        }
        if($('.category-name #h1_name').text() == 'Porta Garrafon'){
            document.title = `Porta GarrafÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â³n | ${slogan}`;
            $('.category-name #h1_name').text('Porta GarrafÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â³n');
        }
        if($('.category-name #h1_name').text() == 'Herramienta De Precision'){
            document.title = `Herramienta De PrecisiÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³n | ${slogan}`;
            $('.category-name #h1_name').text('Herramienta De PrecisiÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³n');
        }
        if($('.category-name #h1_name').text() == 'Herramientas De Precision Y Accesorios'){
            document.title = `Herramientas De PrecisiÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³n Y Accesorios | ${slogan}`;
            $('.category-name #h1_name').text('Herramientas De PrecisiÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³n Y Accesorios');
        }
        if($('.category-name #h1_name').text() == 'Copas Llaves Y Sets De Herramientas'){
            document.title = `Copas, Llaves Y Sets De Herramientas | ${slogan}`;
            $('.category-name #h1_name').text('Copas, Llaves Y Sets De Herramientas');
        }
        if($('.category-name #h1_name').text() == 'Herramientas Para Construccion'){
            document.title = `Herramientas Para ConstrucciÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³n | ${slogan}`;
            $('.category-name #h1_name').text('Herramientas Para ConstrucciÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³n');
        }
        if($('.category-name #h1_name').text() == 'Herramientas Para Jardineria'){
            document.title = `Herramientas Para JardinerÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â­a | ${slogan}`;
            $('.category-name #h1_name').text('Herramientas Para JardinerÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â­a');
        }
        if($('.category-name #h1_name').text() == 'cajas-y-porta-herramientas'){
            document.title = `Cajas Y Porta Herramientas | ${slogan}`;
            $('.category-name #h1_name').text('Cajas Y Porta Herramientas');
        }
        if($('.category-name #h1_name').text() == 'Accesorios Para Cajas Electricas'){
            document.title = `Accesorios Para Cajas ElÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â©ctricas | ${slogan}`;
            $('.category-name #h1_name').text('Accesorios Para Cajas ElÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â©ctricas');
        }
        if($('.category-name #h1_name').text() == 'Accesorios Para Cajas De Distribucion'){
            document.title = `Accesorios Para Cajas De DistribuciÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³n | ${slogan}`;
            $('.category-name #h1_name').text('Accesorios Para Cajas De DistribuciÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³n');
        }
        if($('.category-name #h1_name').text() == 'Cajas De Distribucion'){
            document.title = `Cajas De DistribuciÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³n | ${slogan}`;
            $('.category-name #h1_name').text('Cajas De DistribuciÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³n');
        }
        if($('.category-name #h1_name').text() == 'Baterias Y Cargadores'){
            document.title = `BaterÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â­as Y Cargadores | ${slogan}`;
            $('.category-name #h1_name').text('BaterÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â­as Y Cargadores');
        }
        if($('.category-name #h1_name').text() == 'Camaras Y Accesorios'){
            document.title = `CÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¡maras Y Accesorios | ${slogan}`;
            $('.category-name #h1_name').text('CÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¡maras Y Accesorios');
        }
        if($('.category-name #h1_name').text() == 'Accesorios Para Telefono'){
            document.title = `Accesorios Para TelÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â©fono | ${slogan}`;
            $('.category-name #h1_name').text('Accesorios Para TelÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â©fono');
        }
        if($('.category-name #h1_name').text() == 'Telefonos Celulares Y Accesorios'){
            document.title = `TelÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â©fonos, Celulares Y Accesorios | ${slogan}`;
            $('.category-name #h1_name').text('TelÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â©fonos, Celulares Y Accesorios');
        }
        if($('.category-name #h1_name').text() == 'Bebes'){
            document.title = `BebÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â©s | ${slogan}`;
            $('.category-name #h1_name').text('BebÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â©s');
        }
        if($('.category-name #h1_name').text() == 'Colgadores Tendedores Y Accesorios'){
            document.title = `Colgadores, Tendedores Y Accesorios | ${slogan}`;
            $('.category-name #h1_name').text('Colgadores, Tendedores Y Accesorios');
        }
        if($('.category-name #h1_name').text() == 'Organizacion Lavanderia'){
            document.title = `OrganizaciÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³n LavanderÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â­a | ${slogan}`;
            $('.category-name #h1_name').text('OrganizaciÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³n LavanderÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â­a');
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
            document.title = `Accesorios Para NataciÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³n | ${slogan}`;
            $('.category-name #h1_name').text('Accesorios Para NataciÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³n');
        }
        if($('.category-name #h1_name').text() == 'Maquinas De Ejercicios'){
            document.title = `MÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¡quinas De Ejercicios | ${slogan}`;
            $('.category-name #h1_name').text('MÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¡quinas De Ejercicios');
        }
        if($('.category-name #h1_name').text() == 'Pegamentos Multiples'){
            document.title = `Pegamentos MÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Âºltiples | ${slogan}`;
            $('.category-name #h1_name').text('Pegamentos MÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Âºltiples');
        }
        if($('.category-name #h1_name').text() == 'Atun Y Sardinas'){
            document.title = `AtÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Âºn Y Sardinas | ${slogan}`;
            $('.category-name #h1_name').text('AtÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Âºn Y Sardinas');
        }
        if($('.category-name #h1_name').text() == 'Muebles Y Organizacion'){
            document.title = `Muebles Y OrganizaciÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³n | ${slogan}`;
            $('.category-name #h1_name').text('Muebles Y OrganizaciÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³n');
        }
        if($('.category-name #h1_name').text() == 'Accesorios Y Decoracion'){
            document.title = `Accesorios Y DecoraciÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³n | ${slogan}`;
            $('.category-name #h1_name').text('Accesorios Y DecoraciÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³n');
        }
        if($('.category-name #h1_name').text() == 'Accesorios Para Baterias'){
            document.title = `Accesorios Para BaterÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â­as | ${slogan}`;
            $('.category-name #h1_name').text('Accesorios Para BaterÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â­as');
        }
        if($('.category-name #h1_name').text() == 'Baterias'){
            document.title = `BaterÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â­as | ${slogan}`;
            $('.category-name #h1_name').text('BaterÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â­as');
        }
          if($('.category-name #h1_name').text() == 'Bombillas Lamparas Y Neblineras'){
            document.title = `Bombillas, LÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¡mparas Y Neblineras | ${slogan}`;
            $('.category-name #h1_name').text('Bombillas, LÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¡mparas Y Neblineras');
        }
          if($('.category-name #h1_name').text() == 'Bujias Filtros Y Acc'){
            document.title = `BujÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â­as, Filtros Y Acc | ${slogan}`;
            $('.category-name #h1_name').text('BujÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â­as, Filtros Y Acc');
        }
          if($('.category-name #h1_name').text() == 'Aceites Y Liquidos'){
            document.title = `Aceites Y LÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â­quidos | ${slogan}`;
            $('.category-name #h1_name').text('Aceites Y LÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â­quidos');
        }
          if($('.category-name #h1_name').text() == 'Pisos Ceramicos'){
            document.title = `Pisos CerÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¡micos | ${slogan}`;
            $('.category-name #h1_name').text('Pisos CerÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¡micos');
        }
        if($('.category-name #h1_name').text() == 'Cepillos Electricos'){
            document.title = `Cepillos ElÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â©ctricos | ${slogan}`;
            $('.category-name #h1_name').text('Cepillos ElÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â©ctricos');
        }
        if($('.category-name #h1_name').text() == 'Climatizacion'){
            document.title = `ClimatizaciÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³n | ${slogan}`;
            $('.category-name #h1_name').text('ClimatizaciÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³n');
        }
        if($('.category-name #h1_name').text() == 'Depositos Y Cisternas'){
            document.title = `DepÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â³sitos y Cisternas | ${slogan}`;
            $('.category-name #h1_name').text('DepÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â³sitos y Cisternas');
        }
        if($('.category-name #h1_name').text() == 'Celosia Y Accesorios'){
            document.title = `CelosÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â­a y Accesorios | ${slogan}`;
            $('.category-name #h1_name').text('CelosÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â­a y Accesorios');
        }
         if($('.category-name #h1_name').text() == 'Maderas Y Perfileria'){
            document.title = `Maderas y PerfilerÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â­a | ${slogan}`;
            $('.category-name #h1_name').text('Maderas y PerfilerÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â­a');
        }
         if($('.category-name #h1_name').text() == 'Perfileria De Tabicacion'){
            document.title = `PerfilerÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â­a de TabicaciÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³n | ${slogan}`;
            $('.category-name #h1_name').text('PerfilerÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â­a de TabicaciÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³n');
        }
         if($('.category-name #h1_name').text() == 'Accesorios De Tv Y VÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â­deo'){
            document.title = `Accesorios de TV y Video | ${slogan}`;
            $('.category-name #h1_name').text('Accesorios de TV y Video');
        }
         if($('.category-name #h1_name').text() == 'Organizacion'){
            document.title = `OrganizaciÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³n | ${slogan}`;
            $('.category-name #h1_name').text('OrganizaciÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³n');
        }
          if($('.category-name #h1_name').text() == 'Seguridad Y Accesorios En El Bano'){
            document.title = `Seguridad Y Accesorios En El BaÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â±o | ${slogan}`;
            $('.category-name #h1_name').text('Seguridad Y Accesorios En El BaÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â±o');
        }
          if($('.category-name #h1_name').text() == 'Moviles Y Juguetes Para Cuna'){
            document.title = `MÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â³viles Y Juguetes Para Cuna | ${slogan}`;
            $('.category-name #h1_name').text('MÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â³viles Y Juguetes Para Cuna');
        }
          if($('.category-name #h1_name').text() == 'Sabanas Y Cobertores'){
            document.title = `SÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¡banas Y Cobertores | ${slogan}`;
            $('.category-name #h1_name').text('SÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¡banas Y Cobertores');
        }
          if($('.category-name #h1_name').text() == 'Panaleras Y Cambiadores Portatiles'){
            document.title = `PaÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â±aleras Y Cambiadores PortÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¡tiles | ${slogan}`;
            $('.category-name #h1_name').text('PaÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â±aleras Y Cambiadores PortÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¡tiles');
        }
          if($('.category-name #h1_name').text() == 'Basicos'){
            document.title = `BÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¡sicos | ${slogan}`;
            $('.category-name #h1_name').text('BÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¡sicos');
        }
          if($('.category-name #h1_name').text() == 'Nina'){
            document.title = `NiÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â±a | ${slogan}`;
            $('.category-name #h1_name').text('NiÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â±a');
        }
          if($('.category-name #h1_name').text() == 'Nino'){
            document.title = `NiÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â±o | ${slogan}`;
            $('.category-name #h1_name').text('NiÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â±o');
        }
          if($('.category-name #h1_name').text() == 'Sombrillas'){
            document.title = `Carruajes Sombrilla | ${slogan}`;
            $('.category-name #h1_name').text('Carruajes Sombrilla');
        }
          if($('.category-name #h1_name').text() == 'Portabebes'){
            document.title = `PortabebÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â©s | ${slogan}`;
            $('.category-name #h1_name').text('PortabebÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â©s');
        }
          if($('.category-name #h1_name').text() == 'Pomadas Y Balsamos'){
            document.title = `Pomadas Y BÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¡lsamos | ${slogan}`;
            $('.category-name #h1_name').text('Pomadas Y BÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¡lsamos');
        }
          if($('.category-name #h1_name').text() == 'Toallas Humedas Y Dispensadores'){
            document.title = `Toallas HÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Âºmedas Y Dispensadores | ${slogan}`;
            $('.category-name #h1_name').text('Toallas HÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Âºmedas Y Dispensadores');
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
            document.title = `Peluches Y TÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â­teres | ${slogan}`;
            $('.category-name #h1_name').text('Peluches Y TÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â­teres');
        }
           if($('.category-name #h1_name').text() == 'Camas Elasticas Y Trampolines'){
            document.title = `Camas ElÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¡sticas Y Trampolines | ${slogan}`;
            $('.category-name #h1_name').text('Camas ElÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¡sticas Y Trampolines');
        }
        if (window.location.href.indexOf("/c-bebes/dormitorio/decoracion-y-accesorios") > -1) {
                var referencia = $('.titulo-sessao');
                var elementoRef = referencia[0];
                var encabezado = document.createElement('h1');
                    encabezado.className = 'category-name';
                var span = document.createElement('span');
                    span.innerHTML = 'DecoraciÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³n Y Accesorios';
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
                elem2.innerText = 'Ver MÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¡s';

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
              spanHomeTest.innerText = "Ver MÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¡s >"
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
              // target.parentNode.insertAfter(elemHomeTest, target);
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
            if($('.category-name #h1_name').text() == 'Limpieza y LavanderÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â­a'){
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
            document.title = `IluminaciÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³n Inteligente | ${slogan}`;
            $('.category-name #h1_name').text('IluminaciÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³n Inteligente');
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
            document.title = `CafÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â© | ${slogan}`;
            $('.category-name #h1_name').text('CafÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â©');
        }

           if($('.category-name #h1_name').text() == 'Coctel De Frutas'){
            document.title = `CÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â³ctel De Frutas | ${slogan}`;
            $('.category-name #h1_name').text('CÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â³ctel De Frutas');
        }

          if($('.category-name #h1_name').text() == 'Accesorios Para Mecanicos'){
            document.title = `Accesorios Para MecÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¡nicos | ${slogan}`;
            $('.category-name #h1_name').text('Accesorios Para MecÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¡nicos');
        }

          if($('.category-name #h1_name').text() == 'Pisos Vinilico'){
            document.title = `Pisos VinÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â­lico | ${slogan}`;
            $('.category-name #h1_name').text('Pisos VinÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â­lico');
        }

          if($('.category-name #h1_name').text() == 'Gorras Esponjas Y Guantes'){
            document.title = `Gorras, Esponjas Y Guantes | ${slogan}`;
            $('.category-name #h1_name').text('Gorras, Esponjas Y Guantes');
        }
          if($('.category-name #h1_name').text() == 'Porta Papel Higienico'){
            document.title = `Porta Papel HigiÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â©nico | ${slogan}`;
            $('.category-name #h1_name').text('Porta Papel HigiÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â©nico');
        }

          if($('.category-name #h1_name').text() == 'Calentadores Electricos De Gas Y Solares'){
            document.title = `Calentadores ElÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â©ctricos, De Gas Y Solares | ${slogan}`;
            $('.category-name #h1_name').text('Calentadores ElÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â©ctricos, De Gas Y Solares');
        }

          if($('.category-name #h1_name').text() == 'Organizacion Y Accesorios'){
            document.title = `OrganizaciÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³n Y Accesorios | ${slogan}`;
            $('.category-name #h1_name').text('OrganizaciÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³n Y Accesorios');
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
            document.title = `Grifos Para BaÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â±os | ${slogan}`;
            $('.category-name #h1_name').text('Grifos Para BaÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â±os');
        }

        if($('.category-name #h1_name').text() == 'Contrallaves Y Valvulas'){
            document.title = `Contrallaves Y VÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¡lvulas | ${slogan}`;
            $('.category-name #h1_name').text('Contrallaves Y VÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¡lvulas');
        }

        if($('.category-name #h1_name').text() == 'Destapadores Y Destapacanos'){
            document.title = `Destapadores Y DestapacaÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â±os | ${slogan}`;
            $('.category-name #h1_name').text('Destapadores Y DestapacaÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â±os');
        }

        if($('.category-name #h1_name').text() == 'Spa Masaje Y Relajacion'){
            document.title = `Spa, Masaje Y RelajaciÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³n | ${slogan}`;
            $('.category-name #h1_name').text('Spa, Masaje Y RelajaciÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³n');
        }

        if($('.category-name #h1_name').text() == 'Fuentes Electricas Y Accesorios'){
            document.title = `Fuentes ElÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â©ctricas Y Accesorios | ${slogan}`;
            $('.category-name #h1_name').text('Fuentes ElÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â©ctricas Y Accesorios');
        }

          if($('.category-name #h1_name').text() == 'Banos'){
            document.title = `BaÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â±os | ${slogan}`;
            $('.category-name #h1_name').text('BaÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â±os');
        }

           if($('.category-name #h1_name').text() == 'Lamparas De Colgar'){
            document.title = `LÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¡mparas De Colgar | ${slogan}`;
            $('.category-name #h1_name').text('LÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¡mparas De Colgar');
        }

           if($('.category-name #h1_name').text() == 'Cubrecamas Duvets Y Edredones'){
            document.title = `Cubrecamas, Duvets Y Edredones | ${slogan}`;
            $('.category-name #h1_name').text('Cubrecamas, Duvets Y Edredones');
        }


           if($('.category-name #h1_name').text() == 'Organizadores Para Banos'){
            document.title = `Organizadores Para BaÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â±os | ${slogan}`;
            $('.category-name #h1_name').text('Organizadores Para BaÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â±os');
        }


           if($('.category-name #h1_name').text() == 'Set De Jardin'){
            document.title = `Set De JardÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â­n | ${slogan}`;
            $('.category-name #h1_name').text('Set De JardÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â­n');
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
            document.title = `Accesorios De ComputaciÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³n | ${slogan}`;
            $('.category-name #h1_name').text('Accesorios De ComputaciÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³n');
        }

           if($('.category-name #h1_name').text() == 'Arte Y Diseno'){
            document.title = `Arte Y DiseÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â±o | ${slogan}`;
            $('.category-name #h1_name').text('Arte Y DiseÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â±o');
        }

           if($('.category-name #h1_name').text() == 'Articulos Escolares Y Para Oficina'){
            document.title = `ArtÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â­culos Escolares Y Para Oficina | ${slogan}`;
            $('.category-name #h1_name').text('ArtÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â­culos Escolares Y Para Oficina');
        }

           if($('.category-name #h1_name').text() == 'Articulos Y Accesorios De Oficina'){
            document.title = `ArtÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â­culos Y Accesorios De Oficina | ${slogan}`;
            $('.category-name #h1_name').text('ArtÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â­culos Y Accesorios De Oficina');
        }

           if($('.category-name #h1_name').text() == 'Escolar Arte Y Diseno'){
            document.title = `Escolar, Arte Y DiseÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â±o | ${slogan}`;
            $('.category-name #h1_name').text('Escolar, Arte Y DiseÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â±o');
        }

        if($('.category-name #h1_name').text() == 'Bano Y Entrenadores'){
            document.title = `BaÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â±o Y Entrenadores | ${slogan}`;
            $('.category-name #h1_name').text('BaÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â±o Y Entrenadores');
        }

        if($('.category-name #h1_name').text() == 'Panales'){
            document.title = `PaÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â±ales | ${slogan}`;
            $('.category-name #h1_name').text('PaÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â±ales');
        }

           if($('.category-name #h1_name').text() == 'Papel Impresion Y Copiado'){
            document.title = `Papel ImpresiÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³n Y Copiado | ${slogan}`;
            $('.category-name #h1_name').text('Papel ImpresiÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³n Y Copiado');
        }

              if($('.category-name #h1_name').text() == 'Planificacion Y Cuadernos'){
            document.title = `PlanificaciÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³n Y Cuaderno | ${slogan}`;
            $('.category-name #h1_name').text('PlanificaciÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³n Y Cuadernos');
        }

              if($('.category-name #h1_name').text() == 'Planificacion Y Senalizacion'){
            document.title = `PlanificaciÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³n Y SeÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â±alizaciÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³n | ${slogan}`;
            $('.category-name #h1_name').text('PlanificaciÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³n Y SeÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â±alizaciÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³n');
        }

        if($('.category-name #h1_name').text() == 'Accesorios Para Decoracion'){
            document.title = `Accesorios Para DecoraciÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³n | ${slogan}`;
            $('.category-name #h1_name').text('Accesorios Para DecoraciÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â³n');
        }

        if($('.category-name #h1_name').text() == 'Organizadores De Jardin'){
            document.title = `Organizadores De JardÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â­n | ${slogan}`;
            $('.category-name #h1_name').text('Organizadores De JardÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â­n');
        }

        if($('.category-name #h1_name').text() == 'Repuestos Para Maquinas'){
            document.title = `Repuestos Para MÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¡quinas | ${slogan}`;
            $('.category-name #h1_name').text('Repuestos Para MÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¡quinas');
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
            $('.carruselDepaPlomeriaU .tag-other-products').text('Proyectos de PlomerÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â­a');
        }

         if (window.location.href.indexOf("/mesa-de-regalos/busqueda") > -1) {
            $('.re-central:first-child .primary').attr("href", "/buscar?q=");
            $('.mdr__search-how-to-buy .secondary').attr("href", "/preguntas-frecuentes");
            $('.mdr__search-how-to-buy .secondary').text("Preguntas frecuentes");
        }

            /* Cambios en carruseles de HOME */
        if (window.location.pathname == "/") {


            /* Cambio en carruseles de prueba Home CEmaco */
            /* Validacion si es layout de prueba o de produccion*/
            if ( window.location.search == "?lid=e89fcb92-f3d1-4241-8e99-49992630c951") {
                 /* Layout de Prueba*/
                var urlTest1='/superblack';
                if($('#productsSlider01 .prateleira').length){
                    $('.home .products-slider__wrapper .products-slider__container #productsSlider01 .prateleira > h2').append('<a class="text-center d-none d-md-inline-block fw-normal" href="'+urlTest1+'"><p class="ms-3">Ver todo</p></a>');
                    $('.home .products-slider__wrapper .products-slider__container #productsSlider01 .prateleira > h2').after('<a class="text-center d-sm-block d-md-none fw-normal" href="'+urlTest1+'"><p class="mb-2">Ver todo</p></a>');
                }
            
                var urlTest2='/1563?map=productClusterIds';
                if($('#productsSlider02 .prateleira').length){
                    $('.home .products-slider__wrapper .products-slider__container #productsSlider02 .prateleira > h2').append('<a class="text-center d-none d-md-inline-block fw-normal" href="'+urlTest2+'"><p class="ms-3">Ver todo</p></a>');
                    $('.home .products-slider__wrapper .products-slider__container #productsSlider02 .prateleira > h2').after('<a class="text-center d-sm-block d-md-none fw-normal" href="'+urlTest2+'"><p class="mb-2">Ver todo</p></a>');
                }
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
            
                var ulrProd2='/1563?map=productClusterIds';
                if($('#productsSlider02 .prateleira').length){
                    $('.home .products-slider__wrapper .products-slider__container #productsSlider02 .prateleira > h2').append('<a class="text-center d-none d-md-inline-block fw-normal" href="'+ulrProd2+'"><p class="ms-3">Ver todo</p></a>');
                    $('.home .products-slider__wrapper .products-slider__container #productsSlider02 .prateleira > h2').after('<a class="text-center d-sm-block d-md-none fw-normal" href="'+ulrProd2+'"><p class="mb-2">Ver todo</p></a>');
                }
                if(typeof load_discount_flags !== 'undefined'){
                    load_discount_flags();
                }

            }
            
        }


        
        if (window.location.pathname =="/juguetes/munecas/barbies") {
            $(".category--level-3 .bread-crumbs").css("display", "none");
            $(".category--level-3 .category-name").css("display", "none");
            $(".category--level-3 .product-list__results-items").css("display", "none");
            $(".category--level-3 .product-list__filtersTitle").css("display", "none");
            
            function mediaSize() {
                /* Set the matchMedia */
                if (window.matchMedia('(max-width: 768px)').matches){
                    $(".category--level-3 .product-list__controls #order-by-wrapper").css("display", "block");
                    $(".category--level-3 .product-list__controls #filtersOpen").css("display", "block");
                    $(".category--level-3 .product-list__controls #filtersOpen").css("margin", "0.4rem 0");
                }
                else {
                    /* Reset for CSS changes ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã¢â‚¬Å“ Still need a better way to do this! */
                    $(".category--level-3 .product-list__controls #order-by-wrapper").css("display", "none");
                    $(".category--level-3 .product-list__controls #filtersOpen").css("display", "none");
                }
            }
        
            /* Call the function */
            mediaSize();
            /* Attach the function to the resize event listener */
            window.addEventListener("resize", mediaSize, false);

            

            
           
        }
        

        if (window.location.href.indexOf("/_secure/account#/orders") > -1) {
                $('.t-heading-3 .c-on-base').text('ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¡Bienvenido! AquÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â­ podrÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¡s visualizar y dar seguimiento a todos tus pedidos a partir de ahora.');
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
    
    
    //Clickeable los elementos del header quitando el hover
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
        		$('.nav-item--bodas').removeClass("is-active");
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
    
})