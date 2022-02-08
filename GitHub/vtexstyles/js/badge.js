async function wait(n) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, n * 1000);
  });
}

(async() => {
    while(!document.querySelector('#y-badges.yotpo-badge')){
        await new Promise(resolve => setTimeout(resolve, 1000))
    }
    document.querySelector('#y-badges.yotpo-badge').style.display = 'none'
    
    /*Await until yotpo variable is defined on website*/
    while(!window.hasOwnProperty('yotpo')){
        await new Promise(resolve => setTimeout(resolve, 1000))
    }
    await wait(1);
    
    yotpo.refreshWidgets()
    
    while(!document.querySelector('#y-badges.yotpo-badge .y-badge')){
        await new Promise(resolve => setTimeout(resolve, 1000))
    }
    document.querySelector('#y-badges.yotpo-badge .y-badge .y-badge-image').src =  '/arquivos/badgeyotpov1.png'
    document.querySelector('#y-badges.yotpo-badge .y-badge .y-badges-certified').innerHTML = 'Opiniones <br><span>certificadas</span>'
    document.querySelector('#y-badges.yotpo-badge .y-badge .y-powered-by').style.display = 'none'

    document.querySelector('#y-badges.yotpo-badge').style.display = 'block'
})();