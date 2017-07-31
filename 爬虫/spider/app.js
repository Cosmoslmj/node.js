var express = require('express');
var app = express();
var request = require('request');
const cheerio = require('cheerio');
app.get('/',function(req, res) {
 request('http://www.jikexueyuan.com', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    $ = cheerio.load(body);//当前的$，是拿到整个body的前端选择器
    res.json({
      'Classnum': $('.list-show ul li').length
    });
  }
});
});
app.listen(3000);
