# CSS WEEKLY

Get CSS WEEKLY issues.

## Introduction

Get first issue.

```js
var cssWeekly = require('css-weekly');
var issue = cssWeekly(1, function (issue) {
  var article = issue.articles(0);

  issue.title
  //=> Issue #1

  issue.date
  //=> March 26th, 2012

  article.title
  //=> Off Canvas

  article.body
  //=> A multi-device web layout pattern explained from conceptual...

  article.image
  //=> http://css-weekly.com/wp-content/uploads/2013/01/off-canvas.jpg

  article.source
  //=> Jason Weaver

  article.url
  //=> http://jasonweaver.name/lab/offcanvas/

  article.cat
  //=> Articles & Tutorials
});
```

## API

### issue
issue.title

issue.date

issue.articles

### article
article = issue.articles(article index);

article.title

article.body

article.image

article.source

article.url

article.cat

## LICENSE
MIT
