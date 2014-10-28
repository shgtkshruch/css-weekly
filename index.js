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
        cb(err);
      }
      cb(null, data);
    });
  });
}

function getIssue(html, cb) {
  var $ = cheerio.load(html);
  var issue = {};
  var articles = [];

  issue.title = $('.newsletter-head > h1').text();
  issue.date = $('.newsletter-head > time').text();

  $('.newsletter-article').each(function (i, elem) {

    if ($(this).prev('.section-title').text().search(/Sponsor/) !== -1) {
      return;
    }

    var article = {};

    article.title = $(this).find('.article-title > a').text();

    article.body = $(this).find('p').text();

    article.url =  $(this).find('.article-title').html().split('"')[1].split('?')[0];

    var img = $(this).find('img').parent().html();
    article.image = img ? img.split('src=')[1].split('"')[1] : null;

    article.cat = $(this).parent().children('h2').first().text() || 'Article & Toutorials';

    article.source = article.cat === 'Tools' ? null : $(this).find('.article-title + a').text();

    articles[i] = article;
  });
  issue.articles = articles;

  cb(null, issue);
}

async.waterfall([
  function (cb) {
    getHtml(cb);
  },
  function (html, cb) {
    getIssue(html, cb);
  }
], function (err, result) {
  if (err) {
    throw err;
  }
  console.log(result);
});
