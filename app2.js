var express = require('express');
var utility = require('utility');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/', function(req, res) {
    var q = req.query.hello;
    console.log(req.body);
    if (undefined !== q) {
        var md5Value = utility.md5(q);
    } else {
        var md5Value = 'empty';
    }
    res.send(md5Value);
});

app.listen(9999, function(req, res) {
    console.log('listening on port 9999 ...');
});
