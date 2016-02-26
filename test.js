var originRequest = require('request')  
var iconv = require('iconv-lite')  
var url = 'http://finance.sina.com.cn'
var headers = {  
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.65 Safari/537.36'
}

function request (url, callback) {  
      var options = {
              url: url,
              encoding: null,
              headers: headers
              }
      originRequest(options, callback)
}

request(url, function (err, res, body) {  
            var html = iconv.decode(body, 'gb2312')
            console.log(html)
})
