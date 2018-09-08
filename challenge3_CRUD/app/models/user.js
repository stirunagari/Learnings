var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

//User model lives here
var UserSchema   = new Schema({
    name: { type : String , required : true },
    email: { type : String , unique : true, required : true },
    status : { type : String, required: true },
    gender : { type : String },
    address : { type : String }
    
});

module.exports = mongoose.model('User', UserSchema);