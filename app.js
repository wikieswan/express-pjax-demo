var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var multer = require('multer'); 
var partials = require('express-partials');
var pjax = require('express-pjax');
var routes = require('./route');

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(multer()); 





app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(partials());
app.use(pjax());
app.use(express.static(__dirname + '/public'));

// Routes

app.get('/', routes.index);
app.get('/dinosaurs', routes.dinosaurs);
app.get('/aliens', routes.aliens);


var port = 3000;
app.listen(port);
console.log("Express server listening on port %d in %s mode", port, app.settings.env)
