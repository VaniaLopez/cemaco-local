"use strict";

$(document).ready(function () {
	if(window.location.hash == "#/payment"){
    	if($("div#iframe-placeholder-creditCardPaymentGroup").hasClass("active")){
        	if(document.querySelector("#creditCardpayment-card-0Brand option[value='']") != null){
            	$("#creditCardpayment-card-0Brand option[value='']").remove;
        	}
    	}
	}
});

function makeid(e) {
    for (var t = "", a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", o = a.length, n = 0; n < e; n++) t += a.charAt(Math.floor(Math.random() * o));
    return t;
}
function load_payment_texts() {
    $(".box-payment-option.custom202PaymentGroupPaymentGroup").length &&
        0 == $(".box-payment-option.custom202PaymentGroupPaymentGroup .payment-desc").length &&
        $(".box-payment-option.custom202PaymentGroupPaymentGroup p.payment-description").after(
            '\n             <div class="payment-desc">\n                 <p>Después de finalizar la compra tienes 3 días calendario para realizar el pago en tu agencia Banco Industrial más cercana o a través de transferencia electrónica en tu banca en línea para que podamos procesar tu orden. ¡Es superfácil!</p>\n                 <p><strong>Banca en línea</strong></p>\n                 <p>Para hacer tu pago a través de banca en línea sigue los siguientes pasos:</p>\n                 <ol>\n                     <li>Ingresa a <strong>www.bienlinea.bi.com.gt</strong>.</li>\n                     <li>Selecciona la pestaña de <strong>Operaciones Electrónicas</strong> y luego <strong>Pago de servicios</strong>.</li>\n                     <li>Ingresa tu número de token o genera uno nuevo por seguridad. Este número lo enviará Banco industrial a tu número de celular registrado o correo electrónico.<br>En la sección <strong>Pago de Servicios</strong>, escribe <strong>CEMACO</strong> y haz clic en <strong>CEMACO</strong>.</li>\n                     <li>Ingresa tu ID de pago y el monto exacto de tu pedido ubicados en la boleta y</li>\n                     <li>Haz clic en <strong>Confirmar pago</strong>.<br>Confirma tu pago y ¡listo!</li>\n                 </ol>\n                 <p><strong>O, visita tu banco</strong></p>\n                 <p>Si no puedes hacer tu pago a través de banca en línea puedes realizar tu depósito\n                     en agencias Banco Industrial. Por el momento, no se aceptan transacciones en\n                     Agentes BI.</p>\n                 <ol>\n                     <li>Imprime la boleta o anota los datos que te brindamos al finalizar tu compra.</li>\n                     <li>Dirígete a cualquier agencia de Banco Industrial para realizar tu pago. Presenta la boleta impresa de pago o los datos que has anotado anteriormente.</li>\n                     <li>Recibirás un correo electrónico confirmando que tu orden será procesada</li>\n                 </ol>\n             </div>\n         '
        ),
        $(".box-payment-option.custom203PaymentGroupPaymentGroup").length &&
            0 == $(".box-payment-option.custom203PaymentGroupPaymentGroup .payment-desc").length &&
            $(".box-payment-option.custom203PaymentGroupPaymentGroup p.payment-description").after(
                '\n             <div class="payment-desc">\n                 <p>Después de finalizar la compra tienes 3 días calendario para realizar el pago en tu agencia BANTRAB más cercana o a través de transferencia electrónica en tu banca en línea para que podamos procesar tu orden. ¡Es súper fácil!</p>\n                 <p><strong>Banca en línea</strong></p>\n                 <p>Para hacer tu pago a través de banca en línea sigue los siguientes pasos:</p>\n                 <ol>\n                     <li>Ingresa a <strong>https://bancaenlinea.bantrab.com.gt</strong> con tu código, usuario y contraseña.</li>\n                     <li>Dirígete al menú de Pagos, ingresa a la opción de "Multipagos" y selecciona el ícono de Cemaco.</li>\n                     <li>Ingresa el código de pago ubicado en la boleta generada en cemaco.com y presiona "Agregar identificador" para habilitar la opcion de "Consultar seleccionado" en donde aparecerá el saldo a pagar.</li>\n                     <li>Elige si pagarás con débito a cuenta monetaria o con tarjeta de crédito Bantrab.</li>\n                     <li>Confirma tu pago ingresando el token que se enviará a tu celular o correo electrónico y ¡Listo! Tu pago fue realizado.</li>\n                 </ol>\n                 <p><strong>O, visita tu banco</strong></p>\n                 <ol>\n                     <li>Imprime la boleta o anota los datos que te brindamos al finalizar tu compra.</li>\n                     <li>Dirígete a cualquier agencia Bantrab para realizar tu pago. Presenta la boleta impresa de pago o los datos que has anotado anteriormente.</li>\n                 </ol>\n             </div>\n         '
            ),
        $(".box-payment-option.custom204PaymentGroupPaymentGroup").length &&
            0 == $(".box-payment-option.custom204PaymentGroupPaymentGroup .payment-desc").length &&
            $(".box-payment-option.custom204PaymentGroupPaymentGroup p.payment-description").after(
                '\n             <div class="payment-desc">\n                 <p>Después de finalizar la compra tienes 3 días calendario para realizar el pago en tu agencia BAM más cercana o a través de transferencia electrónica en tu banca en línea para que podamos procesar tu orden. ¡Es súper fácil!</p>\n                 <p><strong>Banca en línea</strong></p>\n                 <p>Para hacer tu pago a través de banca en línea sigue los siguientes pasos:</p>\n                 <ol>\n                     <li>Ingresa a <strong>https://www.bam.com.gt/</strong> con tu usuario y contraseña.</li>\n                     <li>Dirígete al menú de pagos, ingresa a la opción de "Pagos de servicio" e ingresa CEMACO en la opción de búsqueda.</li>\n                     <li>Ingresa el número de tu pedido para que aparezca el saldo a pagar.</li>\n                     <li>Selecciona la cuenta monetaria con la que realizarás el pago.</li>\n                     <li>¡Listo! Tu pago fue realizado.</li>\n                 </ol>\n                 <p><strong>O, visita tu banco</strong></p>\n                 <ol>\n                     <li>Imprime la boleta o anota los datos que te brindamos al finalizar tu compra.</li>\n                     <li>Dirígete a cualquier agencia BAM para realizar tu pago. Presenta los datos que has anotado anteriormente.</li>\n                     <li>Recibirás un correo electrónico de confirmación que tu orden será procesada.</li>\n                 </ol>\n             </div>\n         '
            ),
        $(".box-payment-option.custom201PaymentGroupPaymentGroup").length &&
            0 == $(".box-payment-option.custom201PaymentGroupPaymentGroup .payment-desc").length &&
            $(".box-payment-option.custom201PaymentGroupPaymentGroup p.payment-description").after(
                '\n             <div class="payment-desc">\n                 <p>Después de finalizar la compra tienes 3 días calendario para realizar tu pago a través de banca en línea o visitando tu banco.</p>\n                 <p><strong>Banca en línea</strong></p>\n                 <p>Para hacer tu pago a través de banca en línea sigue los siguientes pasos:</p>\n                 <ol>\n                     <li>Ingresa a <strong>gytcontinental.com.gt</strong> o utiliza la <strong>aplicación de G&T</strong> desde tu móvil.</li>\n                     <li>Selecciona la pestaña de <strong>Pagos</strong> y dirígete a <strong>Pago de servicios</strong>.</li>\n                     <li>En la sección <strong>Buscar servicios</strong>, escribe <strong>CEMACO</strong> y haz clic en <strong>CEMACO</strong> en Línea</li>\n                     <li>Ingresa tu ID de pago, llave y valor del monto exacto ubicados en tu boleta y haz clic en <strong>Procesar</strong>.</li>\n                     <li>Confirma tu pedido y ¡Listo!</li>\n                 </ol>\n                 <p><strong>O, visita tu banco</strong></p>\n                 <ol>\n                     <li>Imprime la boleta con los datos que te brindaremos</li>\n                     <li>Dirígete a cualquier banco o agente G&T Continental para realizar tu pago. Presenta la boleta impresa o los datos que has anotado anteriormente.</li>\n                     <li>Recibirás un correo electrónico de confirmación que tu orden será procesada.</li>\n                 </ol>\n             </div>\n         '
            ),
        $(".box-payment-option.promissoryPaymentGroup").length &&
            0 == $(".box-payment-option.promissoryPaymentGroup .payment-desc").length &&
            $(".box-payment-option.promissoryPaymentGroup p.payment-description").after(
                '\n             <div class="payment-desc">\n                 <p>Sigue estos sencillos pasos en tu agencia o en tu banca en línea para que podamos procesar tu orden. ¡Es súper fácil!</p>\n                 <p><strong>Banca en línea</strong></p>\n                 <p>Para hacer tu pago a través de banca en línea sigue los siguientes pasos:</p>\n                 <ol>\n                     <li>Ingresa a <strong>https://www.banrural.com.gt/</strong> con tu usuario y contraseña.</li>\n                     <li>Dirígete al menú de transferencias, y selecciona la opción "Cuentas de terceros".</li>\n                     <li>Agrega el siguiente numero de cuenta de ahorros 4445203857 a nombre de Nuevos Almacenes S.A (CEMACO) y seleccionalo para realizar la transferencias de fondos.</li>\n                     <li>Selecciona la cuenta monetaria con la que realizarás el pago, ingresa el monto de tu pedido y una breve descripción y presiona el botón "transferir".</li>\n                     <li>¡Listo! Tu pago fue realizado. Envía la palabra "BANRURAL" a nuestro WhatsApp 2499-9990. Asegúrate de seguir las instrucciones de nuestro asesor virtual para confirmar tu pago y procesar tu pedido.</li>\n                 </ol>\n                 <p><strong>O, visita tu banco</strong></p>\n                 <ol>\n                     <li>Dirígete a cualquier agencia Banrural y realiza el depósito a la cuenta de ahorros No. 4445203857 a nombre de Nuevos Almacenes S.A.</li>\n                     <li>Envía la palabra "BANRURAL" a nuestro WhatsApp 2499-9990. Asegúrate de seguir las instrucciones de nuestro asesor virtual para confirmar tu pago y procesar tu pedido.</li>\n                     <li>¡Listo! Tu pedido será procesado.</li>\n                 </ol>\n             </div>\n         '
            );
}
function preselect_payment_option() {
    $("#payment-group-creditCardPaymentGroup").click();
}
function slug(e) {
    e = (e = e.replace(/^\s+|\s+$/g, "")).toLowerCase();
    for (var t = "ÁÄÂÀÃÅČÇĆĎÉĚËÈÊẼĔȆĞÍÌÎÏİŇÑÓÖÒÔÕØŘŔŠŞŤÚŮÜÙÛÝŸŽáäâàãåčçćďéěëèêẽĕȇğíìîïıňñóöòôõøðřŕšşťúůüùûýÿžþÞĐđßÆa·/_,:;", a = 0, o = t.length; a < o; a++)
        e = e.replace(new RegExp(t.charAt(a), "g"), "AAAAAACCCDEEEEEEEEGIIIIINNOOOOOORRSSTUUUUUYYZaaaaaacccdeeeeeeeegiiiiinnooooooorrsstuuuuuyyzbBDdBAa------".charAt(a));
    return (e = e
        .replace(/[^a-z0-9 -]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-"));
}
function mobile_payment_order() {
    var e = $(window).width();
    if ((console.log("mobile_payment_order"), e < min_width_mobile && (null == is_mobile || 0 == is_mobile) && $("#payment-data .payment-group-item.active").length && $("#payment-data .steps-view").length)) {
        var t = $("#payment-data .payment-group-item.active").css("order");
        (is_mobile = !0),
            console.log("mobile_payment_order paso 1", is_mobile),
            $("#payment-data .steps-view").insertAfter("#payment-data .payment-group-item.active").css("order", t),
            $("html, body").animate({ scrollTop: $("#payment-data .payment-group-item.active").offset().top }, 700);
    } else
        min_width_mobile <= e &&
            $("#payment-data .payment-group-list-btn .steps-view").length &&
            (1 == is_mobile || null == is_mobile) &&
            ((is_mobile = !1), console.log("mobile_payment_order paso 2", is_mobile), $("#payment-data .payment-group-list-btn .steps-view").insertAfter("#payment-data form.form-step fieldset.payment-group"));
}
function show_gift_message_inputs() {
    $(".gift-message-textarea").each(function () {
        var e = $(this),
            t = e.val();
        if (t.length) {
            var a = t.split("||");
            e.after(
                '\n                 <input value="' +
                    a[0] +
                    '" class="gift-from" id="gift-from-' +
                    gigm +
                    '" type="text" maxlength="50" placeholder="De: ">\n                 <textarea class="gift-message" id="gift-message-textarea-' +
                    gigm +
                    '" rowa="2" maxlength="250" placeholder="Mensaje:">' +
                    a[1] +
                    "</textarea>\n             "
            );
        }
        gigm++;
    });
}
function empty_cart(e) {
    0 == e.items.length ? $("body").addClass("empty-cart") : $("body").removeClass("empty-cart");
}
function body_classes() {
    var e = window.location.hash;
    "" != e &&
        (-1 != e.indexOf("cart")
            ? $("body").removeClass("in-cart in-email in-profile in-shipping in-payment").addClass("in-cart")
            : -1 != e.indexOf("email")
            ? ($("#client-profile-data .emailInfo").html($("#email-info-checkout-wrapper").html()), $("body").removeClass("in-cart in-email in-profile in-shipping in-payment").addClass("in-email"))
            : -1 != e.indexOf("profile")
            ? $("body").removeClass("in-cart in-email in-profile in-shipping in-payment").addClass("in-profile in-payment")
            : -1 != e.indexOf("shipping")
            ? $("body").removeClass("in-cart in-email in-profile in-shipping in-payment").addClass("in-shipping in-payment")
            : -1 != e.indexOf("payment") && $("body").removeClass("in-cart in-email in-profile in-shipping in-payment").addClass("in-payment"));
}
function body_class_giftlist() {
    "undefined" != typeof vtexjs && void 0 !== vtexjs.checkout && void 0 !== vtexjs.checkout.orderForm && null != vtexjs.checkout.orderForm.giftRegistryData
        ? $("body")
              .addClass("giftlist giftlist-cart")
              .append('<style id="giftlist-styles" type="text/css">body.giftlist-cart #shipping-preview-container:before{content:"Dirección de entrega: ' + vtexjs.checkout.orderForm.giftRegistryData.giftRegistryTypeName + '";}</style>')
        : ($("body").removeClass("giftlist"), $("#giftlist-styles").remove());
}
function agregarTextosModal() {
    var e = setInterval(function () {
        0 != $(".vtex-pickup-points-modal-3-x-searchAlone").length &&
            (clearInterval(e),
            $(".vtex-pickup-points-modal-3-x-searchAloneTitle").after(
                '\n                 <ol>\n                     <li>\n                         1.- Escribe tu dirección, departamento o municipio.\n                     </li>\n                     <li>\n                         2.- Selecciona del listado la ubicación más cercana\n                     </li>\n                     <li>\n                         3.- Haz clic en la tienda de tu preferencia\n                     </li>\n                 </ol>\n                 <p class="vtex-pickup-points-modal-3-x-utiliza-icon">\n                     <svg height="16" viewBox="0 0 16 16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M8 5.09a2.908 2.908 0 1 0 0 5.82 2.908 2.908 0 1 0 0-5.82zm6.502 2.183a6.541 6.541 0 0 0-5.775-5.775V0H7.273v1.498a6.541 6.541 0 0 0-5.775 5.775H0v1.454h1.498a6.541 6.541 0 0 0 5.775 5.775V16h1.454v-1.498a6.541 6.541 0 0 0 5.775-5.775H16V7.273h-1.498zM8 13.09A5.092 5.092 0 0 1 8 2.909a5.092 5.092 0 0 1 0 10.182z" fill="currentColor"></path></svg>\n                     Utiliza el icono azul para ubicar automáticamente ¡Asegurate de tener la ubicación GPS habilitada en tu dispositivo!\n                 </p>\n             '
            ));
    }, 100);
}
function functions_orderForm() {
    void 0 !== validate_product_b && validate_product_b();
}
function functions_orderForm_updated() {
    void 0 !== validate_product_b && validate_product_b();
}
function load_input_tp() {
    $("#cart-note").length &&
        $("p.payment-submit-wrap").length &&
        0 == $("#tp__input--wrapper").length &&
        ($("p.payment-submit-wrap").before('<div class="tp__wrapper"><label>Tarjeta Privilegio:</label><div id="tp__input--wrapper"><input type="tel" maxlength="13" id="privilegio-card"></div></div>'),
        $("#cart-note").appendTo("#tp__input--wrapper"));
}
function load_tp() {
    if (
        (console.log(tp_loaded),
        0 == tp_loaded &&
            "undefined" != typeof vtexjs &&
            void 0 !== vtexjs.checkout &&
            void 0 !== vtexjs.checkout.orderForm &&
            void 0 !== vtexjs.checkout.orderForm.openTextField &&
            (null == vtexjs.checkout.orderForm.openTextField || (null != vtexjs.checkout.orderForm.openTextField && null == vtexjs.checkout.orderForm.openTextField.value)))
    ) {
        if (
            void 0 !== vtexjs.checkout.orderForm.clientProfileData &&
            null != vtexjs.checkout.orderForm.clientProfileData &&
            null != vtexjs.checkout.orderForm.clientProfileData.email &&
            "" != vtexjs.checkout.orderForm.clientProfileData.email
        ) {
            var e = vtexjs.checkout.orderForm.clientProfileData.email;
            $.get("/api/dataentities/CL/search?_fields=tarjetaPrivilegio,email&_where=(email=" + e + ")", function (e) {
                if ((console.log(e), e.length && void 0 !== e[0].tarjetaPrivilegio && "" != e[0].tarjetaPrivilegio && null != e[0].tarjetaPrivilegio)) {
                    var a = e[0].tarjetaPrivilegio;
                    vtexjs.checkout
                        .getOrderForm()
                        .then(function (e) {
                            var t = a;
                            return vtexjs.checkout.sendAttachment("openTextField", { value: t });
                        })
                        .done(function (e) {
                            console.log("openTextField guardado con TP: ", e.openTextField), $("#privilegio-card").val(e.openTextField.value), (tp_loaded = !0);
                        });
                } else tp_loaded = !0;
            });
        }
    } else
        "undefined" != typeof vtexjs &&
            void 0 !== vtexjs.checkout &&
            void 0 !== vtexjs.checkout.orderForm &&
            void 0 !== vtexjs.checkout.orderForm.openTextField &&
            null != vtexjs.checkout.orderForm.openTextField &&
            null != vtexjs.checkout.orderForm.openTextField.value &&
            validate_privilegio(vtexjs.checkout.orderForm.openTextField.value) &&
            load_tp_if_valid(vtexjs.checkout.orderForm.openTextField.value);
}
function validate_privilegio(e) {
    if (13 == e.length) {
        var t = e.split(""),
            a =
                (10 -
                    ((parseInt(t[0]) + parseInt(t[2]) + parseInt(t[4]) + parseInt(t[6]) + parseInt(t[8]) + parseInt(t[10]) + 3 * (parseInt(t[1]) + parseInt(t[3]) + parseInt(t[5]) + parseInt(t[7]) + parseInt(t[9]) + parseInt(t[11]))) %
                        10)) %
                10;
        return console.log(a), a == parseInt(t[12]) ? (console.log("Is valid"), !0) : (console.log("Not valid"), !1);
    }
}
function load_tp_if_valid(e) {
    validate_privilegio(e)
        ? ($("#cart-note").val(e).trigger("keydown").trigger("change"), $("#privilegio-card").val(e), $(".error-privilegio").remove())
        : ($("#privilegio-card").after('<div class="error error-privilegio">Tarjeta inválida, favor de revisar</div>'),
          $("#cart-note").val("").trigger("keydown").trigger("change"),
          $(".error-privilegio").fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100),
          0 == e.length && $(".error-privilegio").remove());
}
function validate_visacuotas() {
    if (-1 != window.location.href.indexOf("payment") && vtexjs.checkout.orderForm.paymentData && vtexjs.checkout.orderForm.paymentData.payments.length && "205" == vtexjs.checkout.orderForm.paymentData.payments[0].paymentSystem)
        if (vtexjs.checkout.orderForm.customData && vtexjs.checkout.orderForm.customData.customApps.length) {
            var a = 0;
            $.each(vtexjs.checkout.orderForm.customData.customApps, function (e, t) {
                if (
                    void 0 !== t.fields.installments &&
                    (-1 != visacuotas_installments.indexOf(t.fields.installments) && ($("#visacuotas-installments").val(t.fields.installments), $("body").removeClass("validate-visacuotas"), a++),
                    -1 != visacuotas_types.indexOf(t.fields.type))
                )
                    return $("#visacuotas-type").val(t.fields.type), $("body").removeClass("validate-visacuotas"), a++, !1;
            }),
                2 == a ? $("body").removeClass("validate-visacuotas") : $("body").addClass("validate-visacuotas");
        } else $("body").addClass("validate-visacuotas");
    else $("body").removeClass("validate-visacuotas");
}
function save_visacuotas_orderform(e, t) {
    var a = {};
    (a.installments = e),
        (a.type = t),
        $(".cart-fixed").addClass("loading"),
        $.ajax({
            url: "/api/checkout/pub/orderForm/" + vtexjs.checkout.orderForm.orderFormId + "/customData/visacuotas",
            type: "PUT",
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(a),
            success: function (e) {
                console.log(e),
                    vtexjs.checkout.getOrderForm().done(function (e) {
                        console.log(e), validate_visacuotas();
                    });
            },
            complete: function () {
                $(".cart-fixed").removeClass("loading");
            },
        });
}
function load_visacuotas_functions() {
    validate_visacuotas(),
        window.addEventListener("hashchange", function () {
            setTimeout(function () {
                validate_visacuotas();
            }, 500);
        }),
        $(window).on("orderFormUpdated.vtex", function (e, t) {
            clearTimeout(timeout_tp),
                (timeout_tp = setTimeout(function () {
                    validate_visacuotas();
                }, 200));
        }),
        $(document).ajaxComplete(function (e, t, a) {
            clearTimeout(timeout_tp_ajax),
                (timeout_tp_ajax = setTimeout(function () {
                    validate_visacuotas();
                }, 200));
        }),
        $("body").on("change", "#visacuotas-installments, #visacuotas-type", function () {
            var e = $("#visacuotas-installments").val(),
                t = $("#visacuotas-type").val();
            "" != e && "" != t ? save_visacuotas_orderform(e, t) : $("body").addClass("validate-visacuotas");
        });
}
function load_visacuotas_styles() {
    $("body").addClass("validate-visacuotas");
    $("body").append(
        "<style id=\"visacuotas-styles\">\n\tbody.validate-visacuotas .payment-confirmation-wrap button{\n\t\tpointer-events: none!important;\n\t\topacity: .5;\n\t}\n\t.cart-fixed.loading{\n\t\tposition: relative;\n\t}\n\tcart-fixed.loading *{\n\t\tpointer-events: none!important;\n\t}\n\t.cart-fixed.loading:after{\n\t\tcontent: '';\n\t\tposition: absolute;\n\t\tleft: 0;\n\t\ttop: 0;\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\tbackground: rgba(255,255,255,.5);\n\t}\n\t.payment-desc label{\n\t\tmargin-top: 5px;\n\t}\n\t</style>"
    );
}
function load_visacuotas_text() {
    if ($(".box-payment-option.custom205PaymentGroupPaymentGroup").length && 0 == $(".box-payment-option.custom205PaymentGroupPaymentGroup .payment-desc").length) {
        var a = "",
            o = "";
        $.each(visacuotas_installments, function (e, t) {
            a += '<option value="' + t + '">' + t + "</option>";
        }),
            $.each(visacuotas_types, function (e, t) {
                o += '<option value="' + t + '">' + t + "</option>";
            }),
            $(".box-payment-option.custom205PaymentGroupPaymentGroup p.payment-description").after(
                '\n            <div class="payment-desc">\n                <p>Sigue estos sencillos pasos para que podamos procesar tu orden. ¡Es súper fácil!</p>\n                <ol>\n                    <li>Confirma tu orden en cemaco.com a través de esta opción de Visa/ Master cuotas.</li>\n                    <li>Recibirás por correo electrónico un enlace en donde deberás ingresar número de tarjeta, nombre, fecha de vencimiento y número de cuotas para que puedas pagar tu compra.</li>\n                    <li>¡Listo! Realizaste tu compra por medio de Visa/ Master cuotas.<br>\n\t\t\t\t\tRecibirás tu pedido en un periodo de 1 a 3 días para entregas a la capital. Para entregas en el interior del país este tiempo puede variar.\n                    </li>\n                    <li>Si deseas realizar tu compra con cuotas Credomatic comunícate con nosotros al 24999990.</li>\n                </ol>\n                <p>\n                    <label for="visacuotas-type">Tipo de cuotas</label>\n                    <select name="visacuotas-type" id="visacuotas-type">\n                        <option value="">Seleccionar</option>\n                        ' +
                    o +
                    '\n                    </select>\n                    <label for="visacuotas-type">Cantidad de cuotas</label>\n                    <select name="visacuotas-installments" id="visacuotas-installments">\n                        <option value="">Seleccionar</option>\n                        ' +
                    a +
                    "\n                    </select>\n                </p>\n            </div>\n        "
            ),
            null != validate_visacuotas && validate_visacuotas();
    }
}
function validate_fs_mdr() {
    if (($("body").addClass("loading-fs-mdr"), null != vtexjs.checkout.orderForm.giftRegistryData && null != vtexjs.checkout.orderForm.giftRegistryData && "" != vtexjs.checkout.orderForm.giftRegistryData))
        if (null == vtexjs.checkout.orderForm.ratesAndBenefitsData || (null != vtexjs.checkout.orderForm.ratesAndBenefitsData && null != vtexjs.checkout.orderForm.ratesAndBenefitsData.rateAndBenefitsIdentifiers)) {
            var e,
                a = !1;
            if (
                ($.each(vtexjs.checkout.orderForm.ratesAndBenefitsData.rateAndBenefitsIdentifiers, function (e, t) {
                    if ("Envío gratis MDR" == t.name || "20201297-5247-4590-8309-4fc488b07fc4" == t.id) return !(a = !0);
                }),
                $.each(vtexjs.checkout.orderForm.totalizers, function (e, t) {
                    "Shipping" == t.id && 0 == t.value && (a = !0);
                }),
                a)
            )
                $("body").removeClass("loading-fs-mdr");
            else
                ((e =
                    null == vtexjs.checkout.orderForm.marketingData
                        ? { coupon: null, marketingTags: ["vtexSocialSelling"], utmCampaign: null, utmMedium: null, utmSource: null, utmiCampaign: null, utmiPart: null, utmipage: null }
                        : vtexjs.checkout.orderForm.marketingData).utmiCampaign = "freeshipmdr"),
                    vtexjs.checkout.sendAttachment("marketingData", e);
        } else $("body").removeClass("loading-fs-mdr");
    else
        null != vtexjs.checkout.orderForm.marketingData && "freeshipmdr" == vtexjs.checkout.orderForm.marketingData.utmiCampaign
            ? (((e = vtexjs.checkout.orderForm.marketingData).utmiCampaign = ""), vtexjs.checkout.sendAttachment("marketingData", e))
            : $("body").removeClass("loading-fs-mdr");
}
function load_fs_mdr_styles() {}
function validate_product_b() {
    var e = vtexjs.checkout.orderForm;
    if (null == e.giftRegistryData && e.items.length) {
        var o = [];
        $.each(e.items, function (e, t) {
            if (null != t.productCategories[53]) {
                var a = { index: e, quantity: 0 };
                o.push(a);
            }
        }),
            o.length &&
                ($("body").addClass("loading"),
                vtexjs.checkout
                    .getOrderForm()
                    .then(function (e) {
                        return vtexjs.checkout.removeItems(o);
                    })
                    .done(function (e) {
                        $("body").removeClass("loading");
                    }));
    }
}
var _typeof =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                  return typeof e;
              }
            : function (e) {
                  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
              },
    js_visacuotas_variables = document.createElement("script");
(js_visacuotas_variables.type = "text/javascript"),
    (js_visacuotas_variables.src = "/files/checkout-visacuotas-variables.js?v=" + makeid(10)),
    document.body.appendChild(js_visacuotas_variables),
    $(function () {
        $(window).on("load", function () {
            load_payment_texts(), preselect_payment_option();
        }),
            window.addEventListener("hashchange", function () {
                -1 != window.location.href.indexOf("payment") &&
                    (load_payment_texts(),
                    preselect_payment_option(),
                    setTimeout(function () {
                        -1 != window.location.href.indexOf("payment") && (load_payment_texts(), preselect_payment_option());
                    }, 500));
            });
    });
var load_shipping_texts = function () {
        $("#delivery-packages-options").append(
            '\n         <div class="pickup-points-recomendations">\n             <p>Por tu seguridad, para retirar tu pedido debes llevar:</p>\n             <ul>\n                 <li>La tarjeta con la que realizaste tu compra.</li>\n                 <li>Una identificación.</li>\n                 <li>\n                     Si recoge una tercera persona, debe llevar el número de autorización de la transacción emitido por\n                     el banco emisor de la tarjeta con la que se realizó la compra.\n                 </li>\n             </ul>\n         <div>\n     '
        );
    },
    load_attachment_buttons = function () {
        $(".add-item-attachment").each(function (e, t) {
            var a = $(this),
                o = slug(a.html());
            a.addClass(o);
        });
    };
$(function () {
    load_attachment_buttons(),
        $(window).on("load", function () {
            load_shipping_texts();
        }),
        window.addEventListener("hashchange", function () {
            load_attachment_buttons(),
                setTimeout(function () {
                    load_attachment_buttons();
                }, 500),
                -1 != window.location.href.indexOf("shipping") &&
                    (load_shipping_texts(),
                    setTimeout(function () {
                        -1 != window.location.href.indexOf("payment") && load_shipping_texts();
                    }, 500));
        });
});
var timeoutMobileOrder,
    min_width_mobile = 768,
    is_mobile = null;
$(function () {
    $(window).on("load", function () {
        mobile_payment_order();
    }),
        window.addEventListener("hashchange", function () {
            -1 != window.location.href.indexOf("payment") &&
                (mobile_payment_order(),
                setTimeout(function () {
                    -1 != window.location.href.indexOf("payment") && mobile_payment_order();
                }, 500));
        }),
        $("body").on("click", "#payment-data .payment-group-item", function () {
            setTimeout(function () {
                mobile_payment_order();
            }, 100);
        }),
        $(window).on("resize", function () {
            clearTimeout(timeoutMobileOrder),
                (timeoutMobileOrder = setTimeout(function () {
                    mobile_payment_order();
                }, 500));
        });
}),
    $(function () {
        body_classes(),
            $(window).on("load", function () {
                body_class_giftlist();
            }),
            $(document).ajaxComplete(function (e, t, a) {
                body_class_giftlist();
            }),
            window.addEventListener("hashchange", function () {
                body_classes(), body_class_giftlist();
            }),
            $("body").on("change", "#ship-neighborhood", function () {
                var e = $(this)
                    .val()
                    .replace(/\"/g, "")
                    .replace(/&quot;/g, "");
                $("#ship-neighborhood option:selected").attr("value", e);
            }),
            $("body").on("click", 'a[href*="sepomex"]', function (e) {
                e.preventDefault(), window.open("https://www.correosdemexico.gob.mx/SSLServicios/ConsultaCP/Descarga.aspx", "_blank");
            }),
            vtexjs.checkout.getOrderForm().done(function (e) {
                empty_cart(e);
            }),
            $(window).on("orderFormUpdated.vtex", function (e, t) {
                empty_cart(t),
                    body_class_giftlist(),
                    load_attachment_buttons(),
                    validate_product_b(),
                    setTimeout(function () {
                        load_attachment_buttons();
                    }, 500);
            });
        var e = setInterval(function () {
            console.log("intervalCheckoutLayout"),
                ($("#cart-choose-more-products").length || $(".empty-cart-content").is(":visible")) &&
                    (clearInterval(e),
                    $(".cart-links.cart-links-bottom").appendTo(".cart-template.full-cart .summary-template-holder .summary-totalizers"),
                    $(".link-choose-more-products-wrapper").appendTo(".cart-links.cart-links-bottom"),
                    $("#cart-title").prependTo("#cartLoadedDiv"),
                    load_payment_texts(),
                    preselect_payment_option());
        }, 100);
    });
var interval_orderForm,
    gigm = 0;
$(function () {
    $("body").on("click", ".gift-message-add", function () {
        $(this)
            .closest(".gift-message-container")
            .find(".gift-message-field")
            .append(
                '\n         <input class="gift-from" id="gift-from-' +
                    gigm +
                    '" type="text" maxlength="50" placeholder="De: ">\n         <textarea class="gift-message" id="gift-message-textarea-' +
                    gigm +
                    '" rowa="2" maxlength="250" placeholder="Mensaje:"></textarea>\n         '
            ),
            $(".gift-from").focus(),
            gigm++;
    }),
        $("body").on("change", ".gift-from, .gift-message", function () {
            var e = $(this).closest(".gift-message-field").find(".gift-from").val(),
                t = $(this).closest(".gift-message-field").find(".gift-message").val();
            console.log(e, t),
                $(this)
                    .closest(".gift-message-field")
                    .find(".gift-message-textarea")
                    .val(e + "||" + t)
                    .trigger("keydown")
                    .trigger("blur");
        }),
        $(window).on("orderFormUpdated.vtex", function (e, t) {
            show_gift_message_inputs();
        });
}),
    $(function () {
        $("body").on("click", "#show-gift-card-group", function () {
            $(this).parent().addClass("active");
        }),
            $(window).on("orderFormUpdated.vtex", function (e, t) {
                setTimeout(function () {
                    $("p.link-gift-card + .gift-card-section.form-step.box-default").length ? $(".link.link-gift-card").addClass("active") : $(".link.link-gift-card").removeClass("active");
                }, 500);
            });
    }),
    $(function () {
        function o() {
            null != vtexjs.checkout.orderForm.items &&
                vtexjs.checkout.orderForm.items.length &&
                $.each(vtexjs.checkout.orderForm.items, function (e, t) {
                    var a;
                    1 < t.quantity
                        ? $(".product-item").each(function () {
                              (a = $(this).attr("data-sku")), t.id === a && $(this).addClass("show-decrement-button");
                          })
                        : $(".product-item").each(function () {
                              (a = $(this).attr("data-sku")), t.id === a && $(this).removeClass("show-decrement-button");
                          });
                });
        }
        var e = setInterval(function () {
            "undefined" != typeof vtexjs &&
                void 0 !== vtexjs.checkout &&
                void 0 !== vtexjs.checkout.orderForm &&
                (clearInterval(e),
                o(),
                window.addEventListener("hashchange", function () {
                    setTimeout(function () {
                        o();
                    }, 500);
                }),
                $(window).on("orderFormUpdated.vtex", function (e, t) {
                    setTimeout(function () {
                        o();
                    }, 700);
                }),
                $(document).ajaxComplete(function (e, t, a) {
                    o();
                }));
        }, 200);
    }),
    $("body").on("click", "#find-pickup-link, .vtex-pickup-points-modal-3-x-errorBackButton, #find-pickups-manualy-button", function () {
        agregarTextosModal();
    }),
    $(function () {
        (interval_orderForm = setInterval(function () {
            "undefined" != typeof vtexjs && void 0 !== vtexjs.checkout && void 0 !== vtexjs.checkout.orderForm && (clearInterval(interval_orderForm), functions_orderForm());
        }, 200)),
            $(window).on("orderFormUpdated.vtex", function (e, t) {
                functions_orderForm_updated();
            });
    }),
    $(document).on("mouseenter", "#swal2-content code", function () {
        $("#swal2-content code").html($("#swal2-content code").html().replace("https://cemacogt.myvtex.com/", "https://cemaco.com/"));
    });
var timeout_tp,
    timeout_tp_ajax,
    interval_visacuotas,
    interval_fs_mdr,
    tp_loaded = !1;
$(window).on("load", function () {
    load_input_tp(),
        setTimeout(function () {
            load_tp();
        }, 100),
        body_class_giftlist(),
        window.addEventListener("hashchange", function () {
            (-1 == window.location.href.indexOf("profile") && -1 == window.location.href.indexOf("shipping") && -1 == window.location.href.indexOf("payment")) ||
                setTimeout(function () {
                    load_input_tp();
                }, 500);
        });
}),
    $(window).on("load", function () {
        window.addEventListener("hashchange", function () {
            setTimeout(function () {
                0 == tp_loaded && load_tp();
            }, 500);
        }),
            $(window).on("orderFormUpdated.vtex", function (e, t) {
                clearTimeout(timeout_tp),
                    (timeout_tp = setTimeout(function () {
                        0 == tp_loaded && load_tp();
                    }, 2e3));
            }),
            $(document).ajaxComplete(function (e, t, a) {
                clearTimeout(timeout_tp_ajax),
                    (timeout_tp_ajax = setTimeout(function () {
                        0 == tp_loaded && load_tp();
                    }, 2e3));
            });
    }),
    $(function () {
        $("body").on("focusin", "#privilegio-card", function () {
            $("body").addClass("loading-priv");
        }),
            $("body").on("focusout", "#privilegio-card", function () {
                setTimeout(function () {
                    $("body").removeClass("loading-priv");
                }, 1e3);
            }),
            $("body").on("click", ".error-privilegio", function () {
                $(this).fadeOut(300, $(this).remove());
            }),
            $("body").on("keyup", "#privilegio-card", function () {
                $(".error-privilegio").remove(), load_tp_if_valid($(this).val());
            }),
            $("body").on("change", "#privilegio-card", function () {
                $(".error-privilegio").remove(), load_tp_if_valid($(this).val());
            });
    }),
    $(function () {
        load_visacuotas_styles(),
            (interval_visacuotas = setInterval(function () {
                console.log("interval_visacuotas", "undefined" == typeof visacuotas_installments ? "undefined" : _typeof(visacuotas_installments), "undefined" == typeof visacuotas_types ? "undefined" : _typeof(visacuotas_types)),
                    "undefined" != typeof vtexjs &&
                        void 0 !== vtexjs.checkout &&
                        void 0 !== vtexjs.checkout.orderForm &&
                        "undefined" != typeof visacuotas_installments &&
                        "undefined" != typeof visacuotas_types &&
                        (clearInterval(interval_visacuotas),
                        load_visacuotas_functions(),
                        load_visacuotas_text(),
                        window.addEventListener("hashchange", function () {
                            -1 != window.location.href.indexOf("payment") &&
                                (load_visacuotas_text(),
                                setTimeout(function () {
                                    -1 != window.location.href.indexOf("payment") && load_visacuotas_text();
                                }, 500));
                        }),
                        $(window).on("orderFormUpdated.vtex", function (e, t) {
                            load_visacuotas_text(), validate_visacuotas();
                        }));
            }, 200));
    }),
    $(function () {
        load_fs_mdr_styles(),
            (interval_fs_mdr = setInterval(function () {
                console.log("interval_fs_mdr", "undefined" == typeof visacuotas_installments ? "undefined" : _typeof(visacuotas_installments), "undefined" == typeof visacuotas_types ? "undefined" : _typeof(visacuotas_types)),
                    "undefined" != typeof vtexjs &&
                        void 0 !== vtexjs.checkout &&
                        void 0 !== vtexjs.checkout.orderForm &&
                        (clearInterval(interval_fs_mdr),
                        console.log("-------------------------------------------------------------------interval_fs_mdr"),
                        validate_fs_mdr(),
                        window.addEventListener("hashchange", function () {
                            validate_fs_mdr();
                        }),
                        $(window).on("orderFormUpdated.vtex", function (e, t) {
                            validate_fs_mdr();
                        }),
                        $(window).on("checkoutRequestBegin.vtex", function (e, t) {
                            $("body").addClass("loading-fs-mdr");
                        }),
                        $(window).on("checkoutRequestEnd.vtex", function (e, t) {
                            $("body").removeClass("loading-fs-mdr");
                        }));
            }, 200));
    });
var is_giftcard_production = !0;
if (-1 != window.location.href.indexOf("vtex") || is_giftcard_production) {
    var interval_vtexjs,
        validate_send_giftcard = function () {
            var s = 1;
            return (
                $(".item-attachments-item-fields").each(function (e, t) {
                    var a = $(this),
                        o = a.find('input[id*="envio-de-gift-card-nombre"]'),
                        n = a.find('input[id*="envio-de-gift-card-apellido"]'),
                        i = a.find('textarea[id*="envio-de-gift-card-email"]'),
                        r = a.find('textarea[id*="envio-de-gift-card-confirmar-email"]');
                    console.log(o.length, n.length, i.length, r.length),
                        o.length &&
                            n.length &&
                            i.length &&
                            r.length &&
                            ("" == o.val() ? ((s = 0), a.addClass("giftcard-error-required-name")) : a.removeClass("giftcard-error-required-name"),
                            "" == n.val() ? ((s = 0), a.addClass("giftcard-error-required-lastname")) : a.removeClass("giftcard-error-required-lastname"),
                            "" == i.val()
                                ? ((s = 0), a.addClass("giftcard-error-required-email"))
                                : (a.removeClass("giftcard-error-required-email"), validate_email(i) ? a.removeClass("giftcard-error-not-valid-email") : ((s = 0), a.addClass("giftcard-error-not-valid-email"))),
                            "" == r.val()
                                ? ((s = 0), a.addClass("giftcard-error-required-email2"))
                                : (a.removeClass("giftcard-error-required-email2"), validate_same_email(i, r) ? a.removeClass("giftcard-error-not-same-email") : ((s = 0), a.addClass("giftcard-error-not-same-email"))));
                }),
                console.log("validate_send_giftcard", s),
                !!s || !(window.location.hash = "#/cart")
            );
        },
        validate_email = function (e) {
            var t = e.val();
            return /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(t);
        },
        validate_same_email = function (e, t) {
            var a = e.val(),
                o = t.val();
            return "" != a && a == o;
        };
    $(function () {
        (interval_vtexjs = setInterval(function () {
            "undefined" != typeof vtexjs &&
                void 0 !== vtexjs.checkout &&
                void 0 !== vtexjs.checkout.orderForm &&
                (clearInterval(interval_vtexjs),
                validate_send_giftcard(),
                $("#cart-to-orderform").after('<a href="#" target="_self" id="validate-send-giftcard" class="btn btn-large btn-success pull-left-margin btn-place-order">Finalizar compra</a>'),
                window.addEventListener("hashchange", function () {
                    setTimeout(function () {
                        validate_send_giftcard();
                    }, 500);
                }),
                $(window).on("orderFormUpdated.vtex", function (e, t) {
                    setTimeout(function () {
                        validate_send_giftcard();
                    }, 700);
                }),
                $(document).ajaxComplete(function (e, t, a) {
                    validate_send_giftcard(),
                        setTimeout(function () {
                            validate_send_giftcard();
                        }, 500);
                }));
        }, 200)),
            $("body")
                .off("click", "#validate-send-giftcard")
                .on("click", "#validate-send-giftcard", function (e) {
                    if ((e.preventDefault(), $('textarea[id*="envio-de-gift-card-confirmar-email"]').length)) {
                        if (!validate_send_giftcard()) return !1;
                        window.location.hash = "#/orderform";
                    } else window.location.hash = "#/orderform";
                });
    }),
        $(window).on("load", function () {
            validate_send_giftcard(),
                setTimeout(function () {
                    validate_send_giftcard();
                }, 500);
        });
}
$(".PaymentInstallments select").val("1");

function selectInstallments() {
    let optionList = document.getElementById("creditCardpayment-card-0Brand");
    setTimeout(() => {
        optionList.value = 1;
    }, 3000);

    console.log("selection changed");
}
if (window.location.href.indexOf("payment") >= 0) {
    selectInstallments();
}
window.addEventListener("hashchange", function () {
    if (window.location.href.indexOf("payment") >= 0) {
        selectInstallments();
    }
});
