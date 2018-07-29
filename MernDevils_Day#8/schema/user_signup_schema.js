var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var user_signup_schema = new Schema({
    user_name:{type:String, unique:true},
    user_email:{type:String, unique:true},
    User_phone:{type:String,unique:true},
    user_password:{type:String},
    user_deleted:{type:Boolean,default:false}
}); 

module.exports = mongoose.model('User', user_signup_schema);