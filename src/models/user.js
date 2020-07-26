const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {type: String, default: ''},
    email: {type: String, default: ''},
    username: {type: String, default: ''},
    password: {type: String, default: ''},
    createAt: {type: Date, default: Date.now},
    salt: {type: String, default: ''}
});

// UserSchema.virtual('password')
//     .set(function (password) {
//         this._password = password;
//         this.salt = 
//     })
//     .get(function () {
//         return this.
//     })
/**
 * 基本验证
 */
// UserSchema.path('name').validate(function(name) {
//     return name.length;    
// }, 'Name cannot be blank');

UserSchema.path('username').validate(function(username) {
    return username.length;
}, 'Username cannot be blank');

UserSchema.path('password').validate(function(password) {
    return password.length;
}, 'Password cannot be blank');


/**
 * Methods
 */
UserSchema.methods = {

    /**
     * 为密码加盐
     */
    // makeSalt: function() {
    //     return
    // }
}

UserSchema.statics = {
    
    load: function (options, cb) {
        options.select = options.select || 'name username';
        return this.findOne(options.criteria)
            .select(options.select)
            .exec(cb);
    },
}

mongoose.model('User', UserSchema);