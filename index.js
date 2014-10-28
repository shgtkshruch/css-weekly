var http = require('http');
var cheerio = require('cheerio');
var async = require('async');

module.exports = function (issueNumber, callback) {
  function getHtml(cb) {
    var url = 'http://css-weekly.com/issue-' + issueNumber + '/';

    http.get(url, function (res) {
      var html;
      res.on('data', function (data) {
        html += data;
      });

      res.on('end', function (err) {
        if (err) {
          cb(err);
        }
        cb(null, html);
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

      article.cat = $(this).parent().children('h2').first().text() || 'Article & Tutorials';

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
    callback(result);
  });
}

