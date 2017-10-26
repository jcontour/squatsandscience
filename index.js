var express = require('express');
var app = express();

app.get('/', function(request, response) {
  console.log("url accessed");
  console.log("request", request);
  console.log("response", response);
  // response.render('pages/index')
});

app.post('/brivo', function(request, response){
	console.log(request);
});

app.listen(process.env.PORT, function() {
  console.log('Node app is running on port', app.get('port'));
});
