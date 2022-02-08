(async() => {
    /*Await until button is defined on website*/
    while(!document.querySelector('footer button')){
        await new Promise(resolve => setTimeout(resolve, 1000))
    }
    /*Await until button is defined on website*/
        
    $("footer button").appendTo(".vtex-pageHeader__container .mt7 .vtex-pageHeader__title");
})()