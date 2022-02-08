/*!
----------------------------------------------------------------------------------------------------
* Important! - To edit this JS, you must use the JS source file.
----------------------------------------------------------------------------------------------------
*/
"use strict";
$("#mainSlider").length &&
    ($("#mainSlider").slick({
        arrows: !0,
        prevArrow: "<button data-role='none' class='slick-arrow slick-prev'><svg class='svg-icon-chevron-left'><use xlink:href='#svg-icon-chevron-left'></use></svg></button>",
        nextArrow: "<button data-role='none' class='slick-arrow slick-next'><svg class='svg-icon-chevron-right'><use xlink:href='#svg-icon-chevron-right'></use></svg></button>",
        autoplay: !0,
        autoplaySpeed: 5e3,
        dots: !0,
        infinite: !1,
        responsive: [{ breakpoint: 1023, settings: { arrows: !1 } }],
    }),
    jq2(window).on("resize", function () {
        $("#mainSlider").slick("resize");
    })),
    (function () {
        var r = $(".products-slider__nav .products-slider__nav-item"),
            s = $(".products-slider__container");
        r.on("click", function () {
            var r = $(this),
                e = s.find(r.attr("data-target"));
            r.addClass("is-active").siblings().removeClass("is-active"), e.addClass("is-active").siblings().removeClass("is-active");
        });
    })(),
    $(".products-slider__container.has-banner").each(function () {
        $(this).find(".product-list"), $(this).find(".banner-image").find("img").attr("src"), $(this).find(".banner-image").attr("href");
    }),
    $("#marcasSlider").length &&
        ($("#marcasSlider").slick({
            arrows: !0,
            prevArrow: "<button data-role='none' class='slick-arrow slick-prev'><svg class='svg-icon-chevron-left'><use xlink:href='#svg-icon-chevron-left'></use></svg></button>",
            nextArrow: "<button data-role='none' class='slick-arrow slick-next'><svg class='svg-icon-chevron-right'><use xlink:href='#svg-icon-chevron-right'></use></svg></button>",
            autoplay: !0,
            autoplaySpeed: 5e3,
            dots: !0,
            infinite: !0,
            slidesToShow: 5,
            slidesToScroll: 1,
            responsive: [
                { breakpoint: 1920, settings: { slidesToShow: 5, slidesToScroll: 1 } },
                { breakpoint: 1024, settings: { slidesToShow: 4, slidesToScroll: 1 } },
                { breakpoint: 480, settings: { slidesToShow: 3, slidesToScroll: 1 } },
                { breakpoint: 360, settings: { slidesToShow: 3, slidesToScroll: 1 } },
            ],
            touchMove: !0,
            variableWidth: !1,
        }),
        jq2(window).on("resize", function () {
            $("#marcasSlider").slick("resize");
        }));
var productSliderTitleCta = function (r, s) {
    var e = 1 < arguments.length && void 0 !== s ? s : "#",
        i = $(r).find("h2:first"),
        t = "<a href='" + e + "' class='products-slider__tittleCta hidden-lg-up'><svg class='svg-icon-chevron-right'><use xlink:href='#svg-icon-chevron-right'></use></svg></a>";
    i.addClass("flexible"), i.append(t);
};
    productsSliderCall("#productsSlider01", ".products-slider__wrapper", productsSliderOptions),
    productsSliderCall("#productsSlider02", ".products-slider__wrapper", productsSliderOptions),
    productsSliderCall("#productsSlider03", ".products-slider__wrapper", productsSliderOptions),
    productsSliderCall("#productsSlider04", ".products-slider__wrapper", productsSliderOptionsBanner),
    productsSliderCall("#productsSlider05", ".products-slider__wrapper", productsSliderOptionsBanner),
    productsSliderCall("#productsSlider06", ".products-slider__wrapper", productsSliderOptionsBanner),
    productsSliderCall("#productsSlider07", ".products-slider__wrapper", productsSliderOptions),
    productsSliderCall("#productsSlider08", ".products-slider__wrapper", productsSliderOptions),
    productsSliderCall("#productsSlider09", ".products-slider__wrapper", productsSliderOptions),
    productsSliderCall("#productsSlider10", ".products-slider__wrapper", productsSliderOptions),
    /* Landing Ferre */
    productsSliderCall("#productsSliderFerre01", ".products-slider__wrapper", productsSliderOptionsFerre),
    productsSliderCall("#productsSliderFerre02", ".products-slider__wrapper", productsSliderOptionsFerre),
    productsSliderCall("#productsSliderFerre03", ".products-slider__wrapper", productsSliderOptionsFerre),
    productsSliderCall("#productsSliderFerre04", ".products-slider__wrapper", productsSliderOptionsFerre),
    productSliderTitleCta("#productsSlider01");
//# sourceMappingURL=css-js_home.min.js.map
