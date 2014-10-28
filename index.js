var http = require('http');
var cheerio = require('cheerio');
var async = require('async');

var issueNumber = '133';
var url = 'http://css-weekly.com/issue-' + issueNumber + '/';

function getHtml(cb) {
  http.get(url, function (res) {
    var data;
    res.on('data', function (d) {
      data += d;
    });

    res.on('end', function (err) {
      if (err) {
        cd(err);
      }
      cb(null, data);
    });
  });
}

async.waterfall([
  function (cb) {
    getHtml(cb);
  }
], function (err, result) {
  console.log(result);
});
