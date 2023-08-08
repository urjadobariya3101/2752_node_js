const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
    {
        first_name : {
            type : String,
            trim : true
        },
        last_name : {
            type : String,
            trim : true
        },
        email : {
            type : String,
            trim : true
        },
        password : {
            type : String
        },
        is_active : {
            type : Boolean,
            default : true
        }
    },
    {
        timestamps : true,
        versionKey : true
    }
);

const user = mongoose.model('User',UserSchema);
module.exports = user;