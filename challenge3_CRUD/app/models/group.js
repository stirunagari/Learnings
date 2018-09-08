var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

//Group model lives here
var GroupSchema   = new Schema({
    name: { type : String ,required : true },
    description: { type : String },
    status : { type: String, required : true}
});

module.exports = mongoose.model('Group', GroupSchema);