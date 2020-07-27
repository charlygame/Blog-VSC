const mongoose = require('mongoose');
const { wrap: async } = require('co');
const Article = mongoose.model('Article');
const only = require('only');
const resFormat = require('../utils/resFormat');

/**
 * Create an article
 */
exports.create = async(function*(req, res) {

    const article = new Article(only(req.body, 'title tags content'));
    article.save();
    res.json(resFormat(200, {}));
});
