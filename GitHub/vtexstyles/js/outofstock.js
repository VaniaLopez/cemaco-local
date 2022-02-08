const path = window.location.search;

if( path.includes('ProductLinkNotFound') ){
    const sku = path.split('-').at(-1);

    $.ajax({
        type: "GET",
        url: `https://pj3giwgl4g.execute-api.us-east-1.amazonaws.com/prod/api/v1/sku_info?Sku=${sku}`,
        dataType: 'json',
        success: function ( product ) {
            if( product.ProductName )
                createSchema( product )
        }
    });
}

function createSchema( product ){
    var schema = document.createElement('script');
    schema.type = 'application/ld+json';
    
    /*Parse data*/
    const jsonSchema = {
        "@context": "http://schema.org/",
        "@type": "Product",
        image: `${product.ImageUrl}`,
        name: `${product.ProductName}`,
        sku: `${product.Id}`,
        brand: {
            "@type": 'Brand',
            name: `${product.BrandName}`
        },
        description: `${product.ProductName}`,
        offers: {
            url: `https://cemaco.com${product.DetailUrl}`,
            "@type": "Offer",
            priceCurrency: "GTQ",
        }
    };
    
    // Set price
    jsonSchema.offers.price = 0;
    
    // Set stock
    jsonSchema.offers.availability = 'http://schema.org/OutOfStock'    
    
    /*Insert schema in header*/
    schema.text = JSON.stringify(jsonSchema);
    document.querySelector('head').appendChild(schema);
}