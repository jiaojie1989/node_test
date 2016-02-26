var express = require('express');
var utility = require('utility');
var bodyParser = require('body-parser');
var multer= require('multer');

var app = express();
var router = express.Router();

router.post('/', function(req, res) {
    var q = req.query.hello;
    console.log(req.params);
    console.log(req.query);
    console.log(req.body);
    if (undefined !== q) {
        var md5Value = utility.md5(q);
    } else {
        var md5Value = 'empty';
    }
    res.send(md5Value);
});

app.use(router);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(multer());

app.listen(9999, function(req, res) {
    console.log('listening on port 9999 ...');
});
