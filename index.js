const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
	.use(express.static(path.join(__dirname, 'public')))
	.set('views', path.join(__dirname, 'views'))
	.set('view engine', 'ejs')
	.get('/', function(req, res) {
		console.log("loaded");
		res.render('pages/index')
	})
	.post('/brivo', function(req, res) {
		console.log("brivo");
		res.render('pages/brivo')
		// console.log(req)
	})
	.listen(PORT, () => console.log(`Listening on ${ PORT }`))
