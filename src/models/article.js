const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
    title: { type: String, default: '', trim: true, maxlength: 400}
    content: { type: String, default: '', trim: true, maxlength: 1000},
    tags: { type: [] },
    category: { type: ObjectId },
    cover: { type: String },
    brief: { type: String },
    like: { type: Number },
    watch: { type: Number },
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