var btn = document.querySelector(".btn");
var priceDisplay = document.querySelector(".currentPrice");
var lastRefresh = document.querySelector('.lastRefresh')


var value;

function whichCurrency(){
  if (document.getElementById("_GBP").checked == true) {
        value = "GBP";
    }
    else if (document.getElementById("_EUR").checked == true) {
        value = "EUR";
    }
    else if (document.getElementById("_USD").checked == true) {
        value = "USD";
    }
    else {
      value = "USD";
    }
}

btn.addEventListener("click", function(){

  whichCurrency();


  var XHR = new XMLHttpRequest();

  XHR.onreadystatechange = function(){
    if(XHR.readyState == 4 && XHR.status == 200){
      var data = JSON.parse(XHR.responseText);
      var price = data.bpi[value].rate;
      priceDisplay.innerText = price + " " + value;
      lastRefresh.innerHTML = Date();
    }
  }


  var url = "https://api.coindesk.com/v1/bpi/currentprice.json"
  XHR.open("GET", url);
  XHR.send();
});
