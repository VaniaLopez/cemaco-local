(async() => {
    /*Await until product variable is defined on website*/
    while(!document.querySelector('.dt-box.dt-box-embedded')){
        await new Promise(resolve => setTimeout(resolve, 1000))
    }
    
    if(typeof addProductToCartList === "function"){
        $('.js-buy-plp').each(function(){
            $(this).off('click').on('click', addProductToCartList);
        });
    }
})()