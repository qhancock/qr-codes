var QRCode = require("qrcode");

QRCode.toString("https://google.com", {type:"terminal", errorCorrectionLevel:"H", version:5}, function(err, url) {
	console.log(url);
	console.log(err);
});
