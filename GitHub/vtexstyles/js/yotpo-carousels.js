async function wait(n) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, n * 1000);
  });
}

async function checkYotpo(f, timeoutMs) {
  return new Promise((resolve, reject) => {
    var timeWas = new Date();

    var waitF = setInterval(function () {
      if (f()) {
        console.log("Yotpo found after", new Date() - timeWas, "ms");
        if (typeof yotpo !== "undefined") {
          if (yotpo.initialized === true) {
            yotpo.refreshWidgets();
            yotpo.refreshWidgets();
            console.log("yotpo refreshed");
          }
        }
        clearInterval(waitF);
        resolve();
      } else if (new Date() - timeWas > timeoutMs) {
        // Timeout
        console.log("Didn't find after", new Date() - timeWas, "ms");
        clearInterval(waitF);
        reject();
      }
    }, 20);
  });
}

(async function runCheckY() {
  const producRating = document.querySelector(".product-detail__rating");
  const productReview = document.querySelector(".yotpo.yotpo-main-widget");

  if (producRating && productReview) {
    producRating.style.display = "none";
    productReview.style.display = "none";
  }

  await wait(7);
  await checkYotpo(
    () =>
      document.querySelector(
        ".resultItemsWrapper .slick-track .product-item__wrapper"
      ),
    10000
  );

  if (producRating && productReview) {
    producRating.style.display = "block";
    productReview.style.display = "block";
  }
})();
