var app = require('express')();
var bodyParser = require('body-parser');
var multer = require('multer'); 
var utility = require('utility');
var formData = require('connect-multiparty')();

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(formData);

//app.use(multer()); // for parsing multipart/form-data

app.post('/', function (req, res) {
        //query/body/params
        console.log(req.body);
        //console.log(req.params);
        //console.log(req.query);
        //res.json(req.body);
        var q = req.body.hello;
        var ret;
        if (undefined == q) {
            ret = 'empty';
        } else {
            ret = utility.md5(q);
        }
        //res.sendStatus(200);
        res.send(ret);
})

app.listen(9999, '0.0.0.0');
