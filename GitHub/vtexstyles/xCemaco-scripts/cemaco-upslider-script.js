$(document).ready(function(){
    $(window).load(function (){
        console.log('...upslider load...');
        (async() => {
            while(!$('#box_ofertas_bubble_button').length){
                await new Promise(resolve => setTimeout(resolve, 1000));
            }
            console.log('upslider button loaded')
            /*Search and include swiper css*/
            var list = document.getElementsByTagName('link');
            var i = list.length, flagcss1 = false;
            while (i--) {
                if ( list[i].href.includes('swiper-bundle.min.css') ) {
                    flagcss1 = true;
                    break;
                }
            }
            if(!flagcss1){
                var link = document.createElement("link");
                link.rel = "stylesheet";
                link.href = "https://cemacogt.vteximg.com.br/arquivos/swiper-bundle.min.css?v=637612031674570000";
                document.getElementsByTagName("head")[0].appendChild(link);
            }
    
            /*Search and include cemaco swiper css*/
            var list = document.getElementsByTagName('link');
            var i = list.length, flagcss2 = false;
            while (i--) {
                if ( list[i].href.includes('cemaco-swiper.min.css') ) {
                    flagcss2 = true;
                    break;
                }
            }
            if(!flagcss2){
                var link = document.createElement("link");
                link.rel = "stylesheet";
                link.href = "https://cemacogt.vteximg.com.br/arquivos/cemaco-swiper.min.css?v=1329";
                document.getElementsByTagName("head")[0].appendChild(link);
            }
    
            /*Search and include script*/
            var list = document.getElementsByTagName('script');
            var i = list.length, flagjs = false;
            while (i--) {
                if ( list[i].src.includes('swiper-bundle.min.js') ) {
                    flagjs = true;
                    break;
                }
            }
            if (!flagjs) {
                var tag = document.createElement('script');
                tag.src = 'https://cemacogt.vteximg.com.br/arquivos/swiper-bundle.min.js?v=637696474793700000';
                document.getElementsByTagName('body')[0].appendChild(tag);
            }
            var upsliderSwiper = new Swiper(".mySwiper", {
                slidesPerView: 1,
                spaceBetween: 10,
                pagination: {
                  el: ".swiper-pagination",
                  clickable: true,
                },
                navigation: {
                    
                      nextEl: ".swiper-button-next",
                      prevEl: ".swiper-button-prev",
                },
                breakpoints: {
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 4,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 6,
                    spaceBetween: 40,
                  },
                },
            });
            
            $('.clickable, #backdrop_ofertas').click(e => {
                console.log("ofertas click!")
              $('#box_ofertas_banners').toggleClass('active');
              $('#backdrop_ofertas').toggleClass('active');
              $('.ofertas_bubble_arrow').toggleClass('rotateArrow');
              $('#wrapper_ofertas_bubble').toggleClass('activeBubble');
            });
        })();
    });
});