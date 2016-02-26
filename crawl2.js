var superagent = require('superagent');
var cheerio = require('cheerio');
var iconv = require('iconv-lite');
var url = 'http://www.163.com/'
iconv.extendNodeEncodings();
//var url = 'http://www.ziroom.com/index.html'

function request(url, callback) {
    superagent.get(url)
        .buffer()
        .parse(binaryParser)
        .end(callback);
}

function binaryParser(res, callback) {
    res.setEncoding('binary');
    res.data = '';
    res.on('data', function (chunk) {
        res.data += chunk;
    });
    res.on('end', function () {
        callback(null, new Buffer(res.data, 'binary'));
    });
}



request(url, function(err, res) {
    if (err) {
        return next(err)
    }
    console.log(res.body)
    //console.log(res.header)
    //console.log(res.type)
    //console.log(res.charset)
    //console.log(res.buffered)
//    for(property in res) {
        //console.log(property);
//        if ('res' == property) {
//            for(property in res.res) {
//                console.log(property);
//                console.log(typeof res.res[property])
//            }
//        }
//    }

    //console.log(res.text);
    //console.log(res.text)
    html = iconv.decode(res.body, 'gb2312')
    console.log(html)
})

