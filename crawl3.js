var express = require('express');
var originRequest = require('request');
var iconv = require('iconv-lite');
var url = 'http://finance.sina.com.cn';
var cheerio = require('cheerio');
var app = express();
var headers = {  
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.65 Safari/537.36'
}

function request(url, headers, callback) {  
    var options = {
            url: url,
            encoding: null,
            headers: headers
            }
    originRequest(options, callback);
}

app.get('/', function(req, res) {
    function myfunc(error, response, body) {
        var html = iconv.decode(body, 'gb2312');
        console.log(body);
        res.send(html);
    }
    request(url, headers, myfunc);
});

app.listen(3333, function() {
    console.log('listening on port 3333');
});
