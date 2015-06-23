var express = require('express');
var cors = require('cors');
var cookieParser = require('cookie-parser');
var port = process.env.PORT || 3000;

var spec = require('./base.json');

var app = express();

function clone(a) {
   return JSON.parse(JSON.stringify(a));
}

app.use(cookieParser());
// app.use(function (req, res, next) {
//   console.log(req.rawHeaders);
//   next();
// });


///// We are not using CORS
// app.use(cors({
// 	origin: 'http://localhost:3100',
// 	allowedHeaders: 'origin, josh,authorization, x-requested-with, content-type, accept',
// 	credentials: true,
// 	preflightContinure: true
// }));


app.use(cookieParser());
app.get('/makecookie', function(req,res) {
	var new_cookie = 'random' + Math.ceil(Math.random()*1000);
	res.cookie('swagger', new_cookie);
	var str = 'Set-Cookie: "swagger='+ new_cookie + '"       Cookie: "swagger='+ req.cookies.swagger + '"';
  str += '<br>';
  str += '<b>Set-Cookie</b> is what comes from the server, and <b>Cookie</b> is from the browser\'s request';
  str += '<br>';
  str += 'Note that the last cookie that came in, is the cookie that gets sent... ie; Cookie is the last Set-Cookie';

	//res.status(200).send('Set-Cookie: "'+ new_cookie + '"       Cookie: "'+ req.cookies.swagger + '"');
	var cookie_spec = clone(spec);
	cookie_spec.info.description = str;
	cookie_spec.info.title = 'Cookies!';

	res.status(200).json(cookie_spec);
});

app.get('/cookie', function(req,res) {
	var str = 'Set-Cookie: nothing       Cookie: "swagger='+ req.cookies.swagger + '"';
	var cookie_spec = clone(spec);
	cookie_spec.info.description = str;
	cookie_spec.info.title = 'Cookies!';

	res.status(200).json(cookie_spec);
});

// For serving swagger-ui
app.use(express.static(__dirname));

var server = app.listen(port, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
  console.log('open this URL in a browser... it\'s preset to load the cookie endpont');
  console.log('http://localhost:%s/dist/index.html', port);

});

