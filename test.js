var cssWeekly = require('./index');
var assert = require('assert');

describe('css weekly', function () {

  describe('issue 1', function () {
    var article;

    describe('top article', function () {
      before(function (done) {
        cssWeekly(1, function (issue) {
          article = issue.articles[0];
          done();
        });
      });

      it('article.title should return "Off Canvas".', function () {
        assert.deepEqual(article.title, 'Off Canvas');
      });

      it('article.body should return correct body.', function () {
        assert.deepEqual(article.body.substr(0, 14), 'A multi-device');
        assert.deepEqual(article.body.substr(-9, 9), 'popular).');
      });

      it('article.image should return correct image url.', function () {
        assert.deepEqual(article.image, 'http://css-weekly.com/wp-content/uploads/2013/01/off-canvas.jpg');
      });

      it('article.source should return "Jason Weaver".', function () {
        assert.deepEqual(article.source, 'Jason Weaver');
      });

      it('article.url should return "http://jasonweaver.name/lab/offcanvas/".', function () {
        assert.deepEqual(article.url, 'http://jasonweaver.name/lab/offcanvas/');
      });

      it('article.cat should return "Article & Tutorials".', function () {
        assert.deepEqual(article.cat, 'Articles & Tutorials');
      });
    });
  });

  describe('issue 100', function () {
    var article;

    describe('tools article', function () {
      before(function (done) {
        cssWeekly(100, function (issue) {
          article = issue.articles[3];
          done();
        });
      });

      it('article.title should return "Making Embedded Content Work In Responsive Design".', function () {
        assert.deepEqual(article.title, 'Making Embedded Content Work In Responsive Design');
      });

      it('article.body should return correct body.', function () {
        assert.deepEqual(article.body.substr(0, 6), 'Rachel');
        assert.deepEqual(article.body.substr(-9), 'viewport.');
      });

      it('article.image should return correct image url.', function () {
        assert.deepEqual(article.image, 'http://css-weekly.com/wp-content/uploads/2014/03/making-embedded-content-work-in-responsive-design.jpg');
      });

      it('article.source should return "Rachel McCollin".', function () {
        assert.deepEqual(article.source, 'Rachel McCollin');
      });

      it('article.url should return correct url.', function () {
        assert.deepEqual(article.url, 'http://mobile.smashingmagazine.com/2014/02/27/making-embedded-content-work-in-responsive-design/');
      });

      it('article.cat should return "Article & Tutorials".', function () {
        assert.deepEqual(article.cat, 'Articles & Tutorials');
      });
    });
  });

});

