"use strict";
var isMobileDesktop = function () {
        /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(
            navigator.userAgent
        ) ||
        /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
            navigator.userAgent.substr(0, 4)
        )
            ? $("html").addClass("browser--mobile").removeClass("browser--desktop")
            : $("html").addClass("browser--desktop").removeClass("browser--mobile");
    },
    isIOSDevice = function () {
        var e = window.navigator.userAgent;
        (e.match(/iPad/i) || e.match(/iPhone/i)) && $("html").addClass("device--iOS");
    },
    $_window = $(window),
    $_body = $("body");
function consoleLog(e) {
    if (e) {
        for (var t = arguments.length, i = new Array(1 < t ? t - 1 : 0), o = 1; o < t; o++) i[o - 1] = arguments[o];
        return (e = console).log.apply(e, i);
    }
}
function capitalizeFirstLetter(e) {
    return e.charAt(0).toUpperCase() + e.slice(1);
}
function flagsFromAttribute(e) {
    $(".product-item__wrapper").each(function () {
        var e,
            t = $(this);
        t.hasClass("flags-loaded") || ((e = t.find(".product_field_303 > ul > li").text()), t.find(".product-item__flags--attributes"), console.log("Flag: ".concat(e)), t.addClass("flags-loaded"));
    });
}
var dataLayerInfo = $('script:contains("vtex.events.addData")').length ? $.parseJSON($('script:contains("vtex.events.addData")').html().replace("vtex.events.addData(", "").replace(");", "")) : "",
    sameHeight = function () {
        $('[data-height="parent"]').each(function () {
            var e,
                t,
                i,
                o,
                s,
                n,
                a,
                r,
                c,
                l,
                d,
                h,
                u,
                v,
                g = $(this),
                m = $('[data-height="siblings"]', g),
                p = 0;
            m.hasClass("product-item__wrapper")
                ? (flagsFromAttribute(),
                  $('[data-height="siblings"] .contenedor-img', g).each(function () {
                      var e = $(this),
                          t = +parseInt(e.css("width"));
                      setTimeout(function () {
                          $("img", e).each(function () {
                              var e = $(this);
                              setTimeout(function () {
                                  var i = parseInt(e.innerHeight());
                                  Math.round((t - i) / 2),
                                      setTimeout(function () {
                                          e.css({ visibility: "visible", opacity: 1 });
                                      }, 300);
                              }, 200);
                          });
                      }, 50);
                  }),
                  $('[data-height="siblings"] .product-item__department', g).each(function () {
                      var e = $(this);
                      "Mesa de Regalos" == e.html() && e.parents("li").remove();
                  }),
                  $('[data-height="siblings"] .product-item__category', g).each(function () {
                      var e = $(this),
                          t = e.text().replace(/ /g, "-").toLowerCase();
                      e.closest(".product-item").addClass(t);
                  }),
                  (e = $('[data-height="siblings"] .product-item__caption', g)),
                  (t = 0),
                  e.each(function () {
                      $(this).outerHeight() > t && ($(e).removeAttr("style"), (t = $(this).outerHeight()));
                  }),
                  e.css({ minHeight: t }),
                  (i = $('[data-height="siblings"] .product-item__price', g)),
                  (o = 0),
                  i.each(function () {
                      var e = $(this);
                      e.outerHeight() > o && ($(i).removeAttr("style"), (o = e.outerHeight())), e.find(".price-promo").length && e.siblings(".product-item__offer").html("Oferta");
                  }),
                  i.css({ minHeight: o }),
                  (s = $('[data-height="siblings"] .product-item__flags--discounts', g)),
                  (n = 0),
                  s.each(function () {
                      var e = $(this);
                      e.find(".flag").each(function () {
                          var e = $(this),
                              t = e.html().replace(":", " </br>");
                          e.html(t);
                      }),
                          e.outerHeight() > n && ($(s).removeAttr("style"), (n = $(this).outerHeight()));
                  }),
                  s.css({ height: n }),
                  (a = $('[data-height="siblings"] .product-item__flags--attributes', g)),
                  (r = 0),
                  a.each(function () {
                      var e = $(this);
                      e.find(".flag").each(function () {
                          var e = $(this),
                              t = e.html().replace(":", " </br>");
                          e.html(t);
                      }),
                          e.outerHeight() > r && ($(a).removeAttr("style"), (r = $(this).outerHeight()));
                  }),
                  a.css({ height: r }),
                  (c = $('[data-height="siblings"] .product-item__flags--collections', g)),
                  (l = 0),
                  c.each(function () {
                      $(this).outerHeight() > l && ($(c).removeAttr("style"), (l = $(this).outerHeight()));
                  }),
                  c.css({ height: l }),
                  (c = $('[data-height="siblings"] .product-item__skus', g)),
                  (l = 0),
                  c.each(function () {
                      $(this).outerHeight() > l && ($(c).removeAttr("style"), (l = $(this).outerHeight()));
                  }),
                  c.css({ height: l }),
                  $('div[class*="product-item__flags"]').length && $(this).find("ul").addClass("flag-list"))
                : m.hasClass("item-generic")
                ? ($('[data-height="siblings"] .contenedor-img', g).each(function () {
                      var e = $(this),
                          t = 0.66 * parseInt(e.css("width"));
                      e.css("height", t),
                          $(".img-centrada", e).each(function () {
                              var e = $(this);
                              $(this).css("max-height", t - 10 + "px");
                              var i = parseInt(e.css("height"));
                              i = Math.round((t - i) / 2);
                              e.css({ position: "relative", top: i }),
                                  $(window).load(function () {
                                      e.css("visibility", "visible").animate({ opacity: 1 }, 200);
                                  });
                          });
                  }),
                  (d = $('[data-height="siblings"] .item-generic-title', g)),
                  (h = 0),
                  d.each(function () {
                      $(this).outerHeight() > h && ($(d).removeAttr("style"), (h = $(this).outerHeight()));
                  }),
                  d.css({ minHeight: h }),
                  (u = $('[data-height="siblings"] .item-generic-caption', g)),
                  (v = 0),
                  u.each(function () {
                      $(this).outerHeight() > v && ($(u).removeAttr("style"), (v = $(this).outerHeight()));
                  }),
                  u.css({ minHeight: v + 1 }))
                : (m.each(function () {
                      $(this).outerHeight() > p && ($(m).removeAttr("style"), (p = $(this).outerHeight() + 1));
                  }),
                  m.css({ minHeight: p }));
        });
    },
    heightWidth = function () {
        $('[data-height="height-width"]').each(function () {
            var e = $(this).css("width");
            $(this).css("height", e);
        });
    },
    heightPhoto32 = function () {
        $('[data-height="photo-3-2"]').each(function () {
            var e = parseInt($(this).css("width"));
            e = Math.floor(0.66 * e) + 1;
            $(this).css("height", e);
        });
    },
    sameHeightPhoto32 = function () {
        $('[data-height="gallery-3-2"]').each(function () {
            var e = $(this),
                t = $('[data-height="gallery-siblings"]', e),
                i = 0;
            t.each(function () {
                $(this).outerWidth() > i && ($(t).removeAttr("style"), (i = $(this).outerWidth()));
            }),
                t.css({ minHeight: Math.floor(0.66 * i) });
        });
    },
    heightViewport = function () {
        var e = Reapp.getViewPort().height - $(".site-header").outerHeight();
        $(".cintillo").length && $(".cintillo").outerHeight(),
            $('[data-height="viewport"]').each(function () {
                $(this).hasClass("re-ul-principal") ? $(this).css("height", 50 + e) : $(this).hasClass("page-main--internal-page") ? $(this).css("min-height", e + 1.25 * $(".site-header").outerHeight()) : $(this).css("height", e);
            });
    },
    heightViewportHalf = function () {
        $('[data-height="viewport-half"]').each(function () {
            var e = (Reapp.getViewPort().height - $(".site-header").outerHeight()) / 1.75;
            $(this).css("height", e);
        });
    },
    heightMain = function () {
        return Reapp.getViewPort().height - $(".site-header").outerHeight() - $("#siteFooter").outerHeight() - $("#siteNewsletter").outerHeight() - 50;
    },
    heightAsideFilters = function () {
        var e = Reapp.getViewPort().height - $(".site-header").outerHeight() - $(".page-header--product-list").outerHeight() - 100,
            t = 0;
        $(".cintillo").length && (t = $(".cintillo").outerHeight()),
            $(".product-list__filters").each(function () {
                var i;
                $(this).hasClass("product-list__filters") && ((i = $(".site-sidebar").outerWidth()), 1024 <= window.innerWidth ? $(this).css({ width: i, height: e - t }) : (window.innerWidth, $(this).css("height", e - t)));
            });
    },
    productGallery = function () {
        $('[data-image="product-gallery"]').each(function () {
            var e = $(this),
                t = parseInt(e.css("width"));
            e.css("height", t),
                $(".img-centrada", e).each(function () {
                    var e = $(this);
                    $(this).css("max-height", t - 30 + "px");
                    var i = parseInt(e.css("height"));
                    i = Math.round((t - i) / 2);
                    e.css({ position: "relative", top: i }),
                        $(window).load(function () {
                            e.css("visibility", "visible");
                        });
                });
        }),
            $("ul.miniaturas").on("click", "li img", function () {
                var e = $(this).attr("src");
                $(".product-detail-image img.img-centrada").fadeOut(100, function () {
                    $(this)
                        .attr("src", e)
                        .fadeIn(100, function () {
                            $('[data-image="product-gallery"]').each(function () {
                                var e = $(this),
                                    t = parseInt(e.css("width"));
                                e.css("height", t),
                                    $(".img-centrada", e).each(function () {
                                        var e = $(this);
                                        $(this).css("max-height", t - 30 + "px");
                                        var i = parseInt(e.css("height"));
                                        i = Math.round((t - i) / 2);
                                        e.css({ position: "relative", top: i }), e.css("visibility", "visible");
                                    });
                            });
                        })
                        .css("visibility", "hidden");
                });
            });
    },
    photoGallery = function () {
        $('[data-image="photo-gallery"]').each(function () {
            var e = $(this),
                t = parseInt(e.css("width")),
                i = 0.66 * t;
            e.css("height", i),
                $(".img-centrada", e).each(function () {
                    var e = $(this);
                    $(this).css("max-height", t - 20 + "px");
                    var o = parseInt(e.css("height"));
                    o = Math.round((i - o) / 2);
                    e.css({ position: "relative", top: o }),
                        $(window).load(function () {
                            e.css("visibility", "visible");
                        });
                });
        }),
            $("ul.miniaturas").on("click", "li img", function () {
                var e = $(this).attr("src");
                $(".news-single-image img.img-centrada").fadeOut(100, function () {
                    $(this)
                        .attr("src", e)
                        .fadeIn(100, function () {
                            $('[data-image="photo-gallery"]').each(function () {
                                var e = $(this),
                                    t = 0.66 * parseInt(e.css("width"));
                                e.css("height", t),
                                    $(".img-centrada", e).each(function () {
                                        var e = $(this);
                                        $(this).css("max-height", t - 20 + "px");
                                        var i = parseInt(e.css("height"));
                                        i = Math.round((t - i) / 2);
                                        e.css({ position: "relative", top: i }), e.css("visibility", "visible");
                                    });
                            });
                        })
                        .css("visibility", "hidden");
                });
            });
    },
    pageScrollActive = (function () {
        function e() {
            $(window).scrollTop() > t ? $("body").addClass("page-scroll-on") : $("body").removeClass("page-scroll-on");
        }
        var t = parseInt(0 < $(".site-header").attr("data-offset") ? parseInt($(".site-header").attr("data-offset")) : 150);
        return {
            init: function () {
                e(),
                    $(window).scroll(function () {
                        e();
                    });
            },
        };
    })(),
    onePageNav = {
        init: function () {
            var e,
                t =
                    0 < $(".menu-onepage__dots").size()
                        ? (0 < $(".menu-onepage__link-dots-wrapper").size() && $(".menu-onepage__link-dots-wrapper").css("margin-top", -$(".menu-onepage__link-dots-wrapper").outerHeight() / 2),
                          parseInt($(".menu-onepage__dots").attr("data-onepage-animation-speed")))
                        : parseInt($(".menu-onepage").attr("data-onepage-animation-speed") || 1e3);
            $(".brand-onepage, .menu-onepage__link").on("click", function (i) {
                i.preventDefault(), (e = $(window).outerWidth() <= 768 ? $(".site-header").outerHeight() : $(".site-header").outerHeight() - $(".top-bar").outerHeight());
                var o = (n = $(this).attr("href")).indexOf("#"),
                    s = n.slice(0, o),
                    n = (i = n.slice(o)).slice(i.indexOf("#") + 1);
                o = 0;
                $(i).length ? ("#sectionHome" !== i && (o = $(i).offset().top - e), $("html, body").stop().animate({ scrollTop: o }, t)) : (window.location.href = "".concat(s, "?anchor=").concat(n)),
                    Reapp.getViewPort().width < Reapp.getBreakpoint("md") && $(".c-hor-nav-toggler").click();
            });
        },
    },
    onePageNavTrigger = function () {
        var e = window.location.pathname,
            t = window.location.search;
        0 <= (t = "".concat(e).concat(t)).indexOf("?anchor=") && ((t = t.replace("?anchor=", "#")), $('[href="'.concat(t, '"]')).trigger("click"));
    };
setTimeout(function () {
    onePageNavTrigger();
}, 1e3);
var goToTop = (function () {
        function e() {
            300 < $(window).scrollTop() ? $(".go-to-top").fadeIn() : $(".go-to-top").fadeOut();
        }
        return {
            init: function () {
                e(),
                    navigator.userAgent.match(/iPhone|iPad|iPod/i)
                        ? $(window).bind("touchend touchcancel touchleave", function (t) {
                              e();
                          })
                        : $(window).scroll(function () {
                              e();
                          }),
                    $(".go-to-top").on("click", function (e) {
                        e.preventDefault(), $("html, body").animate({ scrollTop: 0 }, 600);
                    });
            },
        };
    })(),
    toggle_load_more = function () {
        $(".product-item__colors .product-item__color:last-child").each(function (e, t) {
            var i = $(this);
            20 < i.position().top ? i.parent().parent().addClass("has-more") : i.parent().parent().removeClass("has-more");
        });
    },
    Reapp = (function () {
        function e() {
            for (var e = 0; e < t.length; e++) t[e].call();
        }
        var t = [];
        return {
            init: function () {
                var t;
                isMobileDesktop(),
                    isIOSDevice(),
                    siteHeaderFixed(),
                    sameHeight(),
                    heightWidth(),
                    heightPhoto32(),
                    sameHeightPhoto32(),
                    heightViewport(),
                    heightViewportHalf(),
                    heightAsideFilters(),
                    productGallery(),
                    photoGallery(),
                    this.addResizeHandler(isMobileDesktop),
                    this.addResizeHandler(siteHeaderFixed),
                    this.addResizeHandler(sameHeight),
                    this.addResizeHandler(heightWidth),
                    this.addResizeHandler(heightPhoto32),
                    this.addResizeHandler(sameHeightPhoto32),
                    this.addResizeHandler(heightViewport),
                    this.addResizeHandler(heightViewportHalf),
                    this.addResizeHandler(heightAsideFilters),
                    this.addResizeHandler(productGallery),
                    this.addResizeHandler(photoGallery),
                    this.addResizeHandler(toggle_load_more),
                    $(window).resize(function () {
                        t && clearTimeout(t),
                            (t = setTimeout(function () {
                                e();
                            }, 50));
                    });
            },
            addResizeHandler: function (e) {
                t.push(e);
            },
            runResizeHandlers: function () {
                e();
            },
            getViewPort: function () {
                var e = window,
                    t = "inner";
                return "innerWidth" in window || ((t = "client"), (e = document.documentElement || document.body)), { width: e[t + "Width"], height: e[t + "Height"] };
            },
            getBreakpoint: function (e) {
                return { xs: 480, sm: 768, md: 992, lg: 1200 }[e] || 0;
            },
        };
    })();
function development(e, t, i) {
    var o,
        s,
        n = window.location.hostname,
        a = document.body;
    Math.floor(1e3 * Math.random()),
        (n.includes("localhost") ||
            n.includes("192.168.100") ||
            n.includes("".concat(e, ".myvtex.com")) ||
            n.includes("".concat(e, ".vtexcommercestable.com.br")) ||
            n.includes("".concat(e, ".vtexcommercebeta.com.br")) ||
            n.includes("beta.".concat(i))) &&
            (a.classList.add("in-development"),
            $("#globalStyles").length && ((a = (i = $("#globalStyles")).attr("href")).includes("vicom.mx") || i.attr("href", "https://vicom.mx/demos/".concat(t).concat(a))),
            $("#checkout-custom-css").length && ((s = (o = $("#checkout-custom-css")).attr("href").replace("/files", "")), o.attr("href", "https://vicom.mx/demos/".concat(t, "/_checkout").concat(s))),
            (o = document.getElementsByTagName("img")),
            (s = document.getElementsByTagName("source")),
            Array.from(o).forEach(function (e) {
                var i = e.getAttribute("src").indexOf("/arquivos"),
                    o = "";
                0 == i &&
                    $.ajax({
                        url: "https://vicom.mx/demos/".concat(t).concat(e.getAttribute("src")),
                        success: function (e) {
                            o = !0;
                        },
                        error: function () {
                            o = !1;
                        },
                        complete: function () {
                            o && e.setAttribute("src", "https://vicom.mx/demos/".concat(t).concat(e.getAttribute("src")));
                        },
                    });
            }),
            Array.from(s).forEach(function (e) {
                var i = e.getAttribute("srcset").indexOf("/arquivos"),
                    o = "";
                0 == i &&
                    $.ajax({
                        url: "https://vicom.mx/demos/".concat(t).concat(e.getAttribute("srcset")),
                        success: function (e) {
                            o = !0;
                        },
                        error: function () {
                            o = !1;
                        },
                        complete: function () {
                            o && e.setAttribute("srcset", "https://vicom.mx/demos/".concat(t).concat(e.getAttribute("srcset")));
                        },
                    });
            }));
}
function msieVersion() {
    return (0 < window.navigator.userAgent.indexOf("MISE ") || navigator.userAgent.match(/Trident.*rv\:11\./)) && $("html").addClass("browser-IE"), !1;
}
function getStyleSheets() {
    var e = document.styleSheets,
        t = 0,
        i = [];
    console.log(e),
        Array.from(e).forEach(function (e) {
            null != e.href && ((e = "".concat(t, ". ").concat(e.href)), i.push(e)), t++;
        }),
        console.log("-----External-----", i);
}
function getScripts() {
    var e = document.scripts,
        t = 0,
        i = [],
        o = [],
        s = [],
        n = [],
        a = [];
    Array.from(e).forEach(function (e) {
        var r, c;
        null != (e = e.getAttribute("src")) &&
            (e.includes("/Scripts") || e.includes("/scripts")
                ? ((r = "".concat(t, ". ").concat(e)), i.push(r))
                : e.includes("io.vtex")
                ? ((r = "".concat(t, ". ").concat(e)), o.push(r))
                : e.includes("/arquivos")
                ? ((c = "".concat(t, ". ").concat(e)), s.push(c))
                : e.includes("/files")
                ? ((c = "".concat(t, ". ").concat(e)), n.push(c))
                : ((e = "".concat(t, ". ").concat(e)), a.push(e))),
            t++;
    }),
        console.log("-----Vtex IMG-----", i),
        console.log("-----IO-----", o),
        console.log("-----Custom [Arquivos]-----", s),
        console.log("-----Custom [Files]-----", n),
        console.log("-----Other-----", a);
}
$(document).ready(function () {
    function e() {
        window.fcWidget.init({ token: "c726946d-756a-4bab-a909-e686d64770fb", host: "https://wchat.freshchat.com", locale: "es", tags: ["web"] });
    }
    function t() {
        var t, i, o;
        (i = "freshchat-js-sdk"), (t = document).getElementById(i) ? e() : (((o = t.createElement("script")).id = i), (o.async = !0), (o.src = "https://wchat.freshchat.com/js/widget.js"), (o.onload = e), t.head.appendChild(o));
    }
    $(window).scroll(function () {
        $(this).width() < 1024 && t();
    }),
        $(".televentas_item").click(function () {
            t(),
                setTimeout(function () {
                    fcWidget.open();
                }, 1e3);
        }),
        $(".nav-item--departamentos").off("hover"),
        consoleLog("Hover off"),
        $(".nav-item--departamentos").click(function () {
            $(".nav-item--departamentos").hasClass("is-active") ? $(".nav-item--departamentos").removeClass("is-active") : $(".nav-item--departamentos").addClass("is-active");
        }),
        $(".nav-item--bodas").off("hover"),
        $(".nav-item--bodas").click(function () {
            !$(".nav-item--bodas").hasClass("is-active") || $(".submenu__boda .submenu__boda-search-input").is(":focus") ? $(".nav-item--bodas").addClass("is-active") : $(".nav-item--bodas").removeClass("is-active");
        }),
        $(".nav-item--level-0:nth-child(2)").off("hover"),
        $(".nav-item--level-0:nth-child(2)").click(function () {
            $(".nav-item--level-0:nth-child(2)").hasClass("is-active") ? $(".nav-item--level-0:nth-child(2)").removeClass("is-active") : $(".nav-item--level-0:nth-child(2)").addClass("is-active");
        }),
        $("#accountTriggerWrapper").off("hover"),
        pageScrollActive.init(),
        onePageNav.init(),
        goToTop.init(),
        $("#cleanSearch").removeClass("hidden-lg-up"),
        0 < $("#search").val().length ? $("#cleanSearch").show() : $("#cleanSearch").hide(),
        $("#search").on("change paste keyup", function () {
            0 < $(this).val().length ? $("#cleanSearch").show() : $("#cleanSearch").hide();
        }),
        $("#cleanSearch").on("click", function () {
            $("#cleanSearch").hide();
        });
        
}),
    $(window).on("load", function () {
        msieVersion();
        let ventana = $(window);
        let tamanioVentana = ventana.width();
        console.log('El tamanio es' + tamanioVentana);
        if (tamanioVentana < 1024) {
            $('.add-to-cart .ng-binding').text(' ');
        }
        
    }),
    $(":required").one("blur keydown", function () {
        $(this).addClass("touched");
    }),
    $("a.link--call").click(function () {
        return null != navigator.userAgent.match(/Android|iPhone|iPad|iPod|Mobile/i);
    }),
    (function () {
        var e = $("#bodyAddDynamicClass").text();
        $("body").addClass(e);
    })();
var overlay = function (e, t) {
        var i = $("body"),
            o = e;
        t = $(t);
        $(".overlay--".concat(o)).length
            ? (i.removeClass("no-overflow"),
              $(".overlay--".concat(o)).removeClass("is-active"),
              "nav" === o
                  ? setTimeout(function () {
                        $(".overlay--".concat(o)).remove();
                    }, 500)
                  : $(".overlay--".concat(o)).remove())
            : (i.addClass("no-overflow"),
              t.after('<div class="overlay overlay--'.concat(o, '"></div>')),
              setTimeout(function () {
                  $(".overlay--".concat(o)).addClass("is-active");
              }, 100));
    },
    siteNav = function () {
        var e = $(".nav-list--level-1");
        $(".nav-trigger--open").on("click", function (e) {
            window.innerWidth <= 1023 &&
                (e.stopPropagation(),
                e.preventDefault(),
                $(this).parents(".site-nav").addClass("menu-shown"),
                $(this).parent(".nav-item--level-0").addClass("menu-shown"),
                $(this).parent(".nav-item--level-0").siblings(".nav-item--level-0 ").removeClass("menu-shown"),
                $(this).parent(".nav-item--level-0").siblings().find(".nav-item--level-0 ").removeClass("menu-shown"),
                $(this).parent(".nav-item--level-0").parent().siblings(".nav-item--level-0 ").removeClass("menu-shown"),
                $("#navClose").addClass("is-active"),
                $(".overlay--nav").addClass("is-active"),
                $("body").addClass("no-overflow"),
                $("body").addClass("menu-shown"),
                $(window).scrollTop(0));
        }),
            $("body").on("click", ".overlay--nav, #navClose", function (e) {
                $("#navClose").removeClass("is-active"),
                    $(this).parents(".site-nav").removeClass("menu-shown"),
                    $(".nav-trigger--open").parent(".nav-item--level-0").removeClass("menu-shown"),
                    $(".overlay--nav").removeClass("is-active"),
                    $("body").removeClass("no-overflow"),
                    $("body").removeClass("menu-shown");
            }),
            $(".nav-item--level-0 ").on("mouseenter mouseleave", function (e) {
                e.preventDefault(),
                    1024 <= window.innerWidth &&
                        ("mouseenter" === e.type ? $(this).addClass("is-active") : "mouseleave" === e.type && $(this).removeClass("is-active"),
                        $(this).siblings(".nav-trigger--open").remove("is-active"),
                        $(".overlay--nav").toggleClass("is-active"));
            }),
            $(".nav-item--level-0").on("mouseleave", function (t) {
                e.removeClass("ListL3-shown");
            });
        var t = $(".nav-item--level-1"),
            i = $(".nav-list--level-2"),
            o = $(".nav-item--level-2:not(.nav-item--offers)");
        t.each(function () {
            var t,
                i,
                o = $(this),
                s = $(this).find(".nav-accordion__trigger:first").clone(),
                n = o.find(".nav-list--level-2"),
                a = o.find(".nav-item--level-2"),
                r = o.find(".nav-item--level-2:first-child:not(.nav-item--offers)");
            n.prepend('<li class="nav-item--level-2 nav-item__title"></li>'),
                o.find(".nav-item__title").append(s),
                o
                    .on("mouseenter", function (o) {
                        var s = $(this);
                        clearTimeout(i),
                            (t = setTimeout(function () {
                                s.addClass("is-active"), s.siblings().removeClass("is-active"), 0 === s.find(".is-hover").length && r.hasClass("has-children") && n.addClass("grandchildren-shown");
                            }, 400)),
                            setTimeout(function () {
                                e.addClass("ListL2-shown");
                            }, 500);
                    })
                    .on("mouseleave", function (o) {
                        var s = $(this);
                        clearTimeout(t),
                            (i = setTimeout(function () {
                                s.removeClass("is-active"),
                                    a.removeClass("is-hover"),
                                    s.find(".grandchildren-shown").removeClass("grandchildren-shown"),
                                    o.relatedTarget.className.includes("nav-item--level-1")
                                        ? consoleLog(!1, "=====Go to another nav-item--level-1=====")
                                        : (e.removeClass("ListL2-shown"), e.find(".has-children").removeClass("has-children"));
                            }, 500));
                    });
        }),
            i.each(function () {
                var e = $(this).find(".nav-list--level-3"),
                    t = 0;
                consoleLog(!1, "-----L3-----"),
                    e.each(function () {
                        var e = $(this);
                        consoleLog(!1, e.outerHeight()), e.outerHeight() > t && (t = e.outerHeight());
                    });
            }),
            o.each(function () {
                var t,
                    i,
                    o = $(this),
                    s = o.find(".nav-list--level-3"),
                    n = o.find(".nav-accordion__trigger:first").clone();
                s.prepend('<li class="nav-item--level-3 nav-item__title"></li>'),
                    o.find(".nav-item__title").append(n),
                    o
                        .on("mouseenter", function (s) {
                            o.has("ul").addClass("has-children"),
                                clearTimeout(i),
                                (t = setTimeout(function () {
                                    o.addClass("is-hover"),
                                        o.siblings().removeClass("is-hover"),
                                        o.hasClass("has-children") ? (e.addClass("ListL3-shown"), o.parent().addClass("grandchildren-shown")) : (e.removeClass("ListL3-shown"), o.parent().removeClass("grandchildren-shown"));
                                }, 100));
                        })
                        .on("mouseleave", function (s) {
                            clearTimeout(t),
                                (i = setTimeout(function () {
                                    console.log("testing..."),
                                        console.log(s.relatedTarget.className),
                                        s.relatedTarget.className.includes("nav-item--level-2") ||
                                            s.relatedTarget.className.includes("nav-list--level-2") ||
                                            s.relatedTarget.className.includes("nav-list--level-3") ||
                                            s.relatedTarget.className.includes("nav-item--level-3") ||
                                            s.relatedTarget.className.includes("nav-image") ||
                                            (o.removeClass("has-children"), e.removeClass("ListL3-shown"), o.removeClass("is-hover"), o.parent().removeClass("grandchildren-shown"));
                                }, 500));
                        });
            });
    };
function showCustomTooltip(e, t, i) {
    var o,
        s,
        n = $("".concat(e)),
        a = $("".concat(t));
    console.log(a),
        a.each(function () {
            $(this).hide();
        }),
        $("".concat(e, ", ").concat(t)).on("mouseenter mouseleave", function (r) {
            r.preventDefault(),
                n.hasClass(i)
                    ? "mouseleave" == r.type &&
                      (console.log("mouseleave from wrapper ".concat(t)),
                      clearTimeout(o),
                      (s = setTimeout(function () {
                          a.animate({ opacity: 0 }, 205, function () {
                              a.css({ display: "none" });
                          }).removeClass("is-active is-on-top-of-myself");
                      }, 300)))
                    : $("html").hasClass("no-touch") &&
                      r.currentTarget.id == e.replace("#", "") &&
                      ("mouseenter" == r.type
                          ? (console.log(r.type, r.target),
                            clearTimeout(s),
                            (o = setTimeout(function () {
                                a.css({ display: "block" }).animate({ opacity: 1 }, 205).addClass("is-active");
                            }, 50)))
                          : "mouseleave" == r.type &&
                            (console.log("mouseleave from wrapper ".concat(t)),
                            clearTimeout(o),
                            (s = setTimeout(function () {
                                a.animate({ opacity: 0 }, 205, function () {
                                    a.css({ display: "none" });
                                }).removeClass("is-active is-on-top-of-myself");
                            }, 300))));
        });
}
siteNav(),
    (function () {
        var e;
        $(".nav-accordion__trigger").each(function () {
            var e = $(this);
            e.next().is(".nav-accordion__content") && e.append('<button class="show-more-icon">+</button>'), e.hasClass("nav-accordion__trigger--active") && e.next().css("display", "block");
        }),
            $("body").on("touchstart", ".nav-accordion__trigger", function () {
                (e = !1), console.log(e);
            }),
            $("body").on("touchmove", ".nav-accordion__trigger", function () {
                (e = !0), console.log(e);
            }),
            $("body").on("click touchend", ".nav-accordion__trigger", function (t) {
                var i;
                !1 === e &&
                    window.innerWidth <= 1023 &&
                    ((i = $(this)),
                    t.stopPropagation(),
                    t.preventDefault(),
                    i.closest('[class*="nav-item--"]').hasClass("nav-item--is-active")
                        ? (i.parent().hasClass("nav-item--level-1") &&
                              (i.parent().find(".nav-accordion__trigger--active").removeClass("nav-accordion__trigger--active"), i.parent().find(".nav-item--is-active").removeClass("nav-item--is-active")),
                          i.removeClass("nav-accordion__trigger--active"),
                          i.parent().removeClass("nav-item--is-active"))
                        : (i.addClass("nav-accordion__trigger--active"),
                          i.parent().addClass("nav-item--is-active"),
                          i.parent().hasClass("nav-item--level-1") &&
                              (i.parent().siblings().find(".nav-accordion__trigger--active").removeClass("nav-accordion__trigger--active"),
                              i.parent().siblings().find(".nav-item--is-active").removeClass("nav-item--is-active"),
                              i.parent().siblings().removeClass("nav-item--is-active")))),
                    console.log(e);
            });
    })(),
    $(".searcher__icon-temp").on("click", function () {
        setTimeout(function () {
            $("#search").focus();
        }, 500);
    });
var accountMenu = function () {
    var e = $("#accountTriggerWrapper > a"),
        t = $("#accountMenu");
    e.on("click", function (e) {
        e.preventDefault(), window.innerWidth <= 1023 && (overlay("account", ".site-nav"));
    }),
        $("body").on("click", "#accountMenuClose, .overlay--account", function () {
            overlay("account");
        }),
        showCustomTooltip("#accountTriggerWrapper", "#accountMenu");
};
accountMenu();
var ua = navigator.userAgent.toLowerCase();
-1 !== ua.indexOf("safari/") && -1 !== ua.indexOf("windows") && -1 === ua.indexOf("chrom") && $(".slider-single-landscape ul li:first-child").remove(),
    $(".accordion__trigger").on("click touchend", function (e) {
        e.preventDefault(),
            $(this).parent().toggleClass("is-active").siblings().removeClass("is-active"),
            ($(this).hasClass("accordion__trigger--bottom") ? $(this).prev() : $(this).next()).slideToggle(500),
            $(this).parent().siblings().find(".accordion__content").slideUp(500);
    }),
    $("#is-home").length || $("body").addClass("body--internal-page"),
    (function () {
        var e;
        $("body").hasClass("categoria") || $("body").hasClass("resultado-busca") || $("body").hasClass("folder")
            ? 2 <= (e = window.location.pathname.split("/").length - 1) && $("body").addClass("category--level-" + e)
            : $("body").hasClass("folder") && ((e = $("#searchNavigator-wrapper .urlLastSearch").text()).substring(e.lastIndexOf("/") + 1), $(".bread-crumbs .bread-crumb ul").append('<li class="last">'.concat(collectionName, "</li>")));
    })();
var cintilloSite = function () {
    var e = $("#cintillo"),
        t = e.find(".Cintillo-slide"),
        i = e.find("#cintilloHide");
    e.length && void 0 === $.cookie("cintilloGeneral") ? ($(e).show(), $("body").addClass("has-cintillo")) : "dontShow" === $.cookie("cintilloGeneral") && ($(e).hide(), $("body").removeClass("has-cintillo")),
        t.on("click", function (e) {
            e.preventDefault(), (e = $(this)), $("body").toggleClass("cintillo-shown"), e.parent().next().slideToggle(200);
        }),
        i.on("click", function (t) {
            t.preventDefault(),
                $.cookie("cintilloGeneral", "dontShow", { expires: 1, path: "/" }),
                $(this)
                    .parent()
                    .slideUp("fast", function () {
                        $("body").removeClass("has-cintillo").removeClass("cintillo-shown");
                    }),
                $(e).slideUp();
        });
};
function totalItems_GetValue() {
    return $(".resultado-busca-numero:first .value").text();
}
function totalItems_Text(e, t) {
    var i;
    switch (e) {
        case void 0:
            i = "Sin Articulos";
            break;
        case 1:
            i = "".concat(e, " Articulo");
            break;
        default:
            i = "".concat(e, " Articulos");
    }
    var o = setInterval(function () {
        var e = $(t);
        e.length &&
            (clearInterval(o),
            $(".product-list__results-value").length
                ? $(".product-list__results-value").text("".concat(i))
                : e.append('\n                    <span class="product-list__results-items">\n                        <span class="product-list__results-value">'.concat(i, "</span>\n                    </span>\n                ")));
    }, 1e3);
}
cintilloSite(), totalItems_Text(totalItems_GetValue(), ".product-list__controls"), totalItems_Text(totalItems_GetValue(), ".resultado-busca .titulo-sessao");
var visibleInViewport = function (e, t) {
        var i = document.getElementById(e),
            o = document.getElementById(t);
        null != i &&
            $(window).on("load", function () {
                $(window).scroll(function () {
                    var e = $(this).scrollTop(),
                        t = e + $(window).height(),
                        s = $(i).offset().top,
                        n = s + $(i).innerHeight();
                    s < t && e < n ? (console.log("It is watching"), $(o).css("height", heightMain())) : heightAsideFilters();
                });
            });
    },
    siteHeaderFixed = function () {
        var e = $(".site-header");
        $("body").addClass("site-header-fixed"), e.css({ position: "fixed", top: 0 });
    },
    footerAccordion = function () {
        var e = $(".FooterAccordion-trigger");
        $(".FooterAccordion-content"),
            e.on("click", function () {
                e.next().slideToggle();
            });
    };
footerAccordion();
var stickElement = function (e, t, i) {
        var o,
            s = $(e),
            n = $(i),
            a = $(".site-header").outerHeight(),
            r = $("#cintillo").length ? $("#cintillo").outerHeight() : 0,
            c = ($(window).scrollTop(), 0);
        $(window).outerWidth() <= 768 ? $(".site-header").outerHeight() : ($(".site-header").outerHeight(), $(".top-bar").outerHeight()),
            s.each(function () {
                var e = $(this),
                    i = t ? e.offset().top - e.outerHeight() : e.offset().top;
                consoleLog(!1, s, "\n        With height: ".concat(t, ", Top element: ").concat(i)),
                    jq2(window).on("resize", function () {
                        (i = s.offset().top), (a = $(".site-header").outerHeight()), (r = $("#cintillo").length ? $("#cintillo").outerHeight() : 0), consoleLog(!1, s, "\n            Resize. Element top position: ".concat(i));
                    }),
                    $(window).on("scroll", function () {
                        (o = $(window).scrollTop()),
                            consoleLog(!1, e, "\n            Scroll position: ".concat(o, ", Top element: ").concat(i)),
                            i < o
                                ? (s.addClass("is-sticky"),
                                  n.addClass("is-sticky"),
                                  e.hasClass("site-header") && ($("body").addClass("page-scroll-on"), consoleLog(!1, "Last scroll: ".concat(c, ", Current scroll: ").concat(o)), c < o ? e.css("top", -a) : e.css("top", r)))
                                : (s.removeClass("is-sticky"), n.removeClass("is-sticky"), e.hasClass("site-header") && $("body").removeClass("page-scroll-on")),
                            (c = o);
                    });
            });
    },
    productsSliderOptions = {
        adaptiveHeight: !0,
        autoplay: !1,
        autoplaySpeed: 5e3,
        arrows: !0,
        dots: !0,
        prevArrow: "<button data-role='none' class='slick-arrow slick-prev'><svg class='svg-icon-arrow-left'><use xlink:href='#svg-icon-chevron-left'></use></svg></button>",
        nextArrow: "<button data-role='none' class='slick-arrow slick-next'><svg class='svg-icon-arrow-right'><use xlink:href='#svg-icon-chevron-right'></use></svg></button>",
        cssEase: "linear",
        centerMode: !1,
        centerPadding: "0px",
        focusOnSelect: !1,
        infinite: !0,
        slidesToShow: 2,
        slidesToScroll: 2,
        mobileFirst: !0,
        responsive: [
            { breakpoint: 1023, settings: { slidesToShow: 5, slidesToScroll: 5 } },
            { breakpoint: 1279, settings: { slidesToShow: 5, slidesToScroll: 5 } },
        ],
        touchMove: !0,
        variableWidth: !1,
    },
    productsSliderOptionsBanner = {
        adaptiveHeight: !0,
        autoplay: !1,
        autoplaySpeed: 5e3,
        arrows: !0,
        prevArrow: "<button data-role='none' class='slick-arrow slick-prev'><svg class='svg-icon-arrow-left'><use xlink:href='#svg-icon-chevron-left'></use></svg></button>",
        nextArrow: "<button data-role='none' class='slick-arrow slick-next'><svg class='svg-icon-arrow-right'><use xlink:href='#svg-icon-chevron-right'></use></svg></button>",
        cssEase: "linear",
        centerMode: !1,
        centerPadding: "15px",
        dots: !0,
        focusOnSelect: !1,
        infinite: !1,
        slidesToShow: 2,
        slidesToScroll: 2,
        mobileFirst: !0,
        responsive: [
            { breakpoint: 1279, settings: { slidesToShow: 6, slidesToScroll: 6 } },
            { breakpoint: 1023, settings: { slidesToShow: 5, slidesToScroll: 5 } },
        ],
        touchMove: !0,
        variableWidth: !1,
    },
    productsSliderOptionsFerre = {
        adaptiveHeight: !0,
        autoplay: !0,
        autoplaySpeed: 5e3,
        arrows: !0,
        prevArrow: "<button data-role='none' class='slick-arrow slick-prev'><svg class='svg-icon-arrow-left'><use xlink:href='#svg-icon-chevron-left'></use></svg></button>",
        nextArrow: "<button data-role='none' class='slick-arrow slick-next'><svg class='svg-icon-arrow-right'><use xlink:href='#svg-icon-chevron-right'></use></svg></button>",
        cssEase: "linear",
        centerMode: !1,
        centerPadding: "15px",
        dots: !0,
        focusOnSelect: !1,
        infinite: !1,
        slidesToShow: 2.5,
        slidesToScroll: 2.5,
        mobileFirst: !0,
        responsive: [
            { breakpoint: 1279, settings: { slidesToShow: 5, slidesToScroll: 5 } },
            { breakpoint: 1023, settings: { slidesToShow: 5, slidesToScroll: 5 } },
        ],
        touchMove: !0,
        variableWidth: !1,
    },
    promocionesMenuOptions = {
        adaptiveHeight: !0,
        autoplay: !0,
        autoplaySpeed: 5e3,
        arrows: !0,
        prevArrow: "<button data-role='none' class='slick-arrow slick-prev'><svg class='svg-icon-arrow-left'><use xlink:href='#svg-icon-chevron-left'></use></svg></button>",
        nextArrow: "<button data-role='none' class='slick-arrow slick-next'><svg class='svg-icon-arrow-right'><use xlink:href='#svg-icon-chevron-right'></use></svg></button>",
        cssEase: "linear",
        centerMode: !1,
        centerPadding: "0px",
        dots: !1,
        focusOnSelect: !1,
        infinite: !0,
        slidesToShow: 4,
        touchMove: !0,
        variableWidth: !1,
    };
function sliderCall(e, t) {
    var i = $(e);
    i.length &&
        (i.slick(t),
        jq2(window).on("resize", function () {
            i.slick("resize");
        }));
}
function productsSliderCall(e, t, i) {
    var o = $(e);
    (t = o.closest(t)), (i = i || productsSliderOptions);
    o.find(".prateleira > ul").length
        ? (o.find(".helperComplement").remove(),
          o.find(".products-slider__button").after('<li class="products-slider__space"></li>'),
          1024 <= window.innerWidth && 1 == $(".products-slider__space").length && $(".products-slider__space").remove(),
          o.find(".prateleira > ul").slick(i),
          t.css("opacity", "1"),
          jq2(window).on("resize", function () {
              setTimeout(function () {
                  $(".products-slider__space").remove();
              }, 100),
                  o.find(".prateleira > ul").slick("resize");
          }))
        : t.remove();
}
1024 <= window.innerWidth && sliderCall(".re-ul--promociones", promocionesMenuOptions);
var staticMenu = function () {
    var e = $(".static-layout__menu > ul"),
        t = window.location.pathname.replace("_secure/", "");
    e.find("a").each(function () {
        var e = $(this);
        e.attr("href") === t && e.closest("li").addClass("is-active");
    });
};
$(function () {
    staticMenu();
});
var resilient = {
        init: function () {},
        detectInactivity: function () {
            var e = 0;
            function t() {
                e = 0;
            }
            setInterval(function () {
                (e += 1), console.log("".concat(e, " minutes of inactivity")), 30 <= e && (console.log("Redirect"), (window.location.href = "/logout"));
            }, 6e4),
                (window.onload = t),
                (window.onmousemove = t),
                (window.onmousedown = t),
                (window.onclick = t),
                (window.ontouchstart = t),
                (window.onkeypress = t),
                window.addEventListener("scroll", t, !0);
        },
    },
    resilientGlobal = (function (e) {
        return (
            (e.ifTheUserIsLogged = function () {
                var e = $("#accountMenu"),
                    t = $("#accountMenuTitle"),
                    i = $("#accountTriggerWrapper .nav-ecommerce__label"),
                    o = $("#accountMenuAccess"),
                    s = $("#activateAccount"),
                    n = $("#footerAccess");
                $.ajax({
                    url: "/no-cache/profileSystem/getProfile",
                    dataType: "json",
                    success: function (a, r, c) {
                        console.log(a),
                            a.IsUserDefined
                                ? (null != a.FirstName ? i.html("<strong>".concat(a.FirstName, "</strong>")) : i.html("Bienvenido"),
                                  t.html("Bienvenido"),
                                  s.remove(),
                                  o.html("Cerrar Sesi\u00F3n").attr("href", "/logout"),
                                  n.html("Cerrar Sesi\u00F3n").attr("href", "/logout"))
                                : e.addClass("is-not-logged");
                    },
                });
            }),
            {
                init: function () {
                    e.ifTheUserIsLogged();
                },
            }
        );
    })(resilient || {});
$(document).on("ready", function () {
    Reapp.init(), resilient.init(), resilientGlobal.init();
}),
    $(window).on("load", function () {
        Reapp.init();
    }),
    $("#privilegiosSlider").length &&
        ($("#privilegiosSlider").slick({
            arrows: !0,
            prevArrow: "<button data-role='none' class='slick-arrow slick-prev'><svg class='svg-icon-chevron-left'><use xlink:href='#svg-icon-chevron-left'></use></svg></button>",
            nextArrow: "<button data-role='none' class='slick-arrow slick-next'><svg class='svg-icon-chevron-right'><use xlink:href='#svg-icon-chevron-right'></use></svg></button>",
            autoplay: !0,
            autoplaySpeed: 5e3,
            dots: !0,
            infinite: !0,
            slidesToShow: 5,
            responsive: [
                { breakpoint: 1920, settings: { slidesToShow: 5 } },
                { breakpoint: 1024, settings: { slidesToShow: 5 } },
                { breakpoint: 480, settings: { slidesToShow: 4 } },
                { breakpoint: 360, settings: { slidesToShow: 4 } },
            ],
            touchMove: !0,
            variableWidth: !1,
        }),
        jq2(window).on("resize", function () {
            $("#privilegiosSlider").slick("resize");
        }));
var currentDept = "1";
function activateAccount() {
    var e;
    0 <= window.location.href.indexOf("activateAccount") &&
        (e = setInterval(function () {
            $(".vtexIdUI").length &&
                $(".vtexIdUI-back-link").length &&
                $("#loginWithUserAndPasswordBtn").length &&
                $('[data-i18n="vtexid.forgotPswdHelper"]').length &&
                (clearInterval(e),
                $(".vtexIdUI").css({ opacity: "0", transition: "all ease 0.25s" }),
                $(".vtexIdUI-back-link").css({ opacity: "0", "pointer-events": "none" }),
                $("#loginWithUserAndPasswordBtn").click(),
                $('[data-i18n="vtexid.forgotPswdHelper"]').click(),
                setTimeout(function () {
                    $(".vtexIdUI").css({ opacity: "1" });
                }, 500));
        }, 200));
}
!(function () {
    var e = $(".site-brand"),
        t = $(".footer-brand"),
        i = $("body");
   
    i.hasClass("landing--jugueton")
        ? (
             e.attr("href", "/jugueton"),
            (e.html(' <img src="/arquivos/images_jugueton-big.png" alt="" class="landing-logo"> <img src="/arquivos/images_jugueton-big-mov.png" alt="" class="landing-logo-scroll"> '), t.attr("src", "/arquivos/images_jugueton-big.png"))
            )
        : i.hasClass("landing--bebejugueton") &&
          (e.html(' <img src="/arquivos/images_bebe-big.png" alt="" class="landing-logo"> <img src="/arquivos/images_bebe-big-mov.png?v=20211110-1143" alt="" class="landing-logo-scroll"> '), t.attr("src", "/arquivos/images_bebe-big.png"));
})(),
    activateAccount();
var searcherImprovements = function () {
    var e = $(".searcher__form"),
        t = $("#search");
    e.append("\n            <div id=\"cleanSearch\" class=\"searcher__clean hidden-lg-up\">\n                <svg class='svg-icon'><use xlink:href='#svg-icon-close'></use></svg>\n            </div>\n        "),
        $("body").on("click", ".searcher__clean", function () {
            t.val("");
        });
};
searcherImprovements();
