const mongoose = require('mongoose');
const { wrap: async } = require('co');
const Article = mongoose.model('Article');
const only = require('only')

/**
 * Create an article
 */
exports.create = async(function*(req, res) {

    console.log(req.body);    
    const article = new Article(only(req.body, 'title tags content'));
    article.save();
    // console.log('保存完毕');
    res.send('保存完毕');
});

