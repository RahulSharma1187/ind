const mongoose = require('mongoose');

const bookacallSchema = new mongoose.Schema({
    name:{
        type:String,
        require: true,
    },
    contactNO:{
        type:Number,
        require: true,
    },
    email:{
        type:String,
        require: true,
    }
});

const Bookacall = new mongoose.model("bookacall", bookacallSchema);
module.exports = Bookacall;