# CSS WEEKLY

Get CSS WEEKLY issues.

## Introduction

Get first issue.

```js
var issue = require('css-weekly')(1);
var article = issue.articles(1);

article.title
//=> Off Canvas

article.body
//=> A multi-device web layout pattern explained from conceptual and technical point of view...

article.source
//=> Jason Weaver

article.url
//=> http://jasonweaver.name/lab/offcanvas/
```

## API

require('css-weekly')(issue number);

issue.articles(article number);

article.title
article.body
article.source
article.url

## LICENSE
MIT
