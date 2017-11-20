// var express = require('express');
// var app = express();

// app.get('/', function(request, response) {
//   console.log("url accessed");
//   console.log("request", request);
//   console.log("response", response);
//   // response.render('pages/index')
// });

// app.post('/brivo', function(request, response){
// 	console.log(request);
// });

// app.listen(process.env.PORT, function() {
//   console.log('Node app is running on port', app.get('port'));
// });


const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => console.log("page loaded"))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
