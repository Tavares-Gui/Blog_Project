const express = require('express');
const article = require('../src/routes/ArticleRoutes');
const author = require('../src/routes/AuthorRoutes');

module.exports = function (app) {
    app
        .use(express.json())
        .use('/api/article', article)
        .use('/api/author', author)
}