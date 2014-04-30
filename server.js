var express = require('express');
var path = require('path');

var app = express();

var port = process.env.PORT || 3060;

console.log('DIRNAME: ' + __dirname);
var rootPath = path.normalize(__dirname);

app.set('views', rootPath + '/server/views');
app.set('view engine', 'jade');

app.use(express.static(rootPath + '/public'));

require('./server/config/routes')(app);

app.listen(port);
console.log('App started on ' + port);
exports = module.exports = app;