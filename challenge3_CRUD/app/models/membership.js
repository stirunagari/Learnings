var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

//Membership model lives here
var MembershipSchema   = new Schema({
    group_id : {type: Schema.Types.ObjectId, ref: 'Group',required : true },
    expiration : { type : String , required : true },
    status : { type : String , required : true },
    user_id : {type: Schema.Types.ObjectId, ref: 'User', required : true }
});

module.exports = mongoose.model('Membership', MembershipSchema);