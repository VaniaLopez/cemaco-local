$(document).ready(function(){
    (async() => {
        /*Await until product variable is defined on website*/
        while(!window.hasOwnProperty('product')){
            await new Promise(resolve => setTimeout(resolve, 1000))
        }
        /*Await until product variable is defined on website*/
        if(document.querySelector('.y-rich-snippet-script')){
            document.querySelector('.y-rich-snippet-script').remove()
        }

        var schema = document.createElement('script');
        schema.type = 'application/ld+json';
        
        /*Parse data*/
        const jsonSchema = {
            "@context": "http://schema.org/",
            "@type": "Product",
            image: `${document.querySelector('.image-zoom').href}`,
            name: `${product.productName}`,
            sku: `${document.querySelector('.skuReference').textContent}`,
            brand: {
                "@type": 'Brand',
                name: `${product.productBrandName}`
            },
            description: '',
            offers: {
                url: `${product.pageUrl}`,
                "@type": "Offer",
                priceCurrency: "GTQ",
            }
        };
        
        // Set price
        if( product.productPriceFrom == product.productPriceTo ){
            jsonSchema.offers.price = product.productPriceTo;
        }
        if( product.productPriceFrom !== product.productPriceTo ){
            jsonSchema.offers.price = product.productPriceFrom;
            /*jsonSchema.offers.lowPrice = product.productPriceFrom;
            jsonSchema.offers.highPrice = product.productPriceTo;*/
        }
        
        // Set stock
        vtexjs.catalog.getCurrentProductWithVariations().then(res => {
            if( res.available )
                jsonSchema.offers.availability = 'http://schema.org/InStock'
        });
        
        // Set description
        let productDescription = [];
        const tableDescription = document.querySelectorAll('.ProductSpecifications-Group .value-field.Descripcion-amplia table')[0].rows;
        
        for(let i = 0; i < tableDescription.length; i++){
            productDescription.push(`${tableDescription[i].cells[0].textContent}: ${tableDescription[i].cells[1].textContent}`)
        }
        
        jsonSchema.description = productDescription.join(', ');
        
        
        /*Insert schema in header*/
        schema.text = JSON.stringify(jsonSchema);
        document.querySelector('head').appendChild(schema);
    })();
});