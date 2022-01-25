debug = true
binance_api = "https://api.binance.com/api/v3"

function btc_usdt(){
      var settings = {
        "url": binance_api + "/ticker/price?symbol=BTCUSDT",
        "method": "GET",
        "timeout": 0,
      };
      
      $.ajax(settings).done(function (response) {
          //response = JSON.parse(response)
          price = response["price"]
          price = parseInt(price)
          $(".span_btc_usdt").html(price)

          text_btc_usdt = $("#text_btc_usdt")
          if (text_btc_usdt.val() == "") text_btc_usdt.val(price)
          console.log(response)
      });
}


function logla(ne) {
	if (debug) {
		console.log(ne)
	}
}
