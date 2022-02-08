$(document).ready(function () {
    function getMpn() {
        var tableDescription = document.querySelectorAll('.ProductSpecifications-Group .value-field.Descripcion-amplia table')[0].rows;
        var mpn = '';

        for (var i = 0; i < tableDescription.length; i++) {
            if (tableDescription[i].cells[0].textContent == 'Modelo') {
                mpn = tableDescription[i].cells[1].textContent;
            }
        }

        return mpn;
    }
    
    (async () => {
        /*Await until product variable is defined on website*/
        while (!window.hasOwnProperty('product')) {
            await new Promise(resolve => setTimeout(resolve, 1000))
        }
        /*Await until product variable is defined on website*/

        var product_mpn = getMpn()
        var product_ean = (product.productEans.length > 0) ? product.productEans[0] : ''
        var product_brand = product.productBrandName;
        var distributor = "14918";
        var language = "gu"
        var headID = document.getElementsByTagName("head")[0];
        var flixScript = document.createElement('script');

        flixScript.type = 'text/javascript';
        flixScript.async = true;
        flixScript.src = '//media.flixfacts.com/js/loader.js';
        flixScript.setAttribute('data-flix-distributor', distributor);
        flixScript.setAttribute('data-flix-language', language);
        flixScript.setAttribute('data-flix-brand', product_brand);
        flixScript.setAttribute('data-flix-ean', product_ean);
        flixScript.setAttribute('data-flix-mpn', product_mpn);
        flixScript.setAttribute('data-flix-button', 'flix-minisite');
        flixScript.setAttribute('data-flix-inpage', 'flix-inpage');
        flixScript.setAttribute('data-flix-fallback-language', 't2');
        flixScript.setAttribute('data-flix-price', '');
        headID.appendChild(flixScript)
    })();
});