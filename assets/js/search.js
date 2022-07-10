async function search(ss) {
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

      var sr = document.createElement("div");

      var searchOutput =
        '<div class="card h-100 mb-3">' +
        '<div class="card-body">' +
        '<h4 class="card-title">' +
        product.name +
        "</h4>" +
        '<p class="card-text">' +
        product.excerpt +
        "</p>" +
        "</div>" +
        '<div class="card-footer text-end">' +
        '<a href="product.html?id=' +
        product.id +
        '">View Item</a>' +
        "</div>" +
        "</div>";

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
}