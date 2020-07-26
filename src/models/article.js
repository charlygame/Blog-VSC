const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
    title: { type: String, default: '', trim: true, maxlength: 400},
    content: { type: String, default: '', trim: true, maxlength: 1000},
    tags: { type: [], default: []},
    category: { type: String },
    cover: { type: String, default: ''},
    brief: { type: String, default: ''},
    like: { type: Number, default: 0 },
    watch: { type: Number, default: 0 },
    createAt: { type: Date, default: Date.now }
});

/**
 * Validations 
 * 验证
 */
ArticleSchema.path('title').required(true, 'Article title cannot be blank');
ArticleSchema.path('content').required(true, 'Article content cannot be blank');

ArticleSchema.methods = {
    
}

ArticleSchema.statics = {

}

mongoose.model('Article', ArticleSchema);