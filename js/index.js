debug = true
binance_api = "https://api.binance.com/api/v3"

function btc_usdt(){
    url = binance_api + "/exchangeInfo?symbol=BTCUSDT"
    $.ajax({
        type: 'GET', url: url, contentType:"application/json; charset=utf-8", xhrFields: { withCredentials: true}, crossDomain: true,
        success: function(response) {
            json_response = JSON.parse(response)
            logla(json_response)
        },
        error: function(response) {
            logla(response)	
        }
    })
}


function logla(ne) {
	if (debug) {
		console.log(ne)
	}
}
