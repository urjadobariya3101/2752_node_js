const mongoose = require('mongoose');

const catagorySchema = new mongoose.Schema(
    {
        catagory_name : {
            type : String,
            trim : true
        },
        catagory_desc : {
            type : String,
            trim : true
        },
        is_active : {
            type : Boolean,
            default : true
        }
    },
    {
        trimstamp : true,
        versionKey : true,
    }
);

const catagory = mongoose.model('catagory',catagorySchema)
module.exports = catagory;