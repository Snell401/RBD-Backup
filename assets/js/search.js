/*async function search(ss) {
  let resultcount = 0;
  let searchstring = ss;
  let products = await fetch(
    "https://api.reflowhq.com/v1/stores/2080824911/products/?perpage=100"
  ).then((r) => r.json());
    
    
    let products2 = await fetch(
    "https://api.reflowhq.com/v1/stores/2080824911/products/?page=2&perpage=100"
  ).then((r) => r.json());
    
 productsmerged = products.data.concat(products2.data);

     
   productsmerged.forEach(function (product) {
    const cts = JSON.stringify(product).toLowerCase();
       //cts convert to string

    let result = cts.includes(searchstring.toLowerCase());
     if (result) {
      resultcount++;
      let div = document.createElement("div");
      let h = document.createElement("h1");
      div.append(product.name, h);

      var pname = product.name
            if (pname.length < 25 ) {
                var name = pname
            } else {
                var name = pname.slice(0, 25) + ' ...'
            }
            var price = product.priceFormatted.replace('.00','').replace(',','.')

            var sr = document.createElement("div");
            sr.setAttribute('class', 'reflow-product-list ref-cards col-12 col-sm-6 col-md-4 col-lg-3"')

            var searchOutput = `     
            <div class="ref-products d-flex">
                <a class="ref-product" href="/product.html?data=`+ product.id + `">
                    <img class="ref-image"
                        src="`+product.media[0].src.md+`"
                        loading="lazy" height="155px"/>
                    <div class="ref-product-data ms-0 ps-0">
                    <p class="ref-price mb-2"><b>`+ price + `</b></p>
                        <div class="ref-product-info">
                            <h5 class="ref-name mb-0"><strong>`+ name + `</strong></h5>
                            <p class="ref-excerpt">`+ product.excerpt.slice(0, 50) + ' ...' + `</p>
                        </div>
                    </div>
                </a>
            </div>
            `

            sr.innerHTML = searchOutput;

      document.getElementById("searchResults").append(sr);
    }
  });

  if (resultcount < 1) {
    document
      .getElementById("searchResults")
      .append("Keine Ergebnisse für: " + searchstring);
  } else {
    document
      .getElementById("searchResults")
      .append("Sie haben " + resultcount + " Ergebnis(e) für " + searchstring);
  }
}

const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});
let searchphrase = params.search;
if (searchphrase.length < 2) {
  document
    .getElementById("searchResults")
    .append("Bitte geben Sie einen längeren Suchbegriff ein");
} else {
  search(searchphrase);
}*/