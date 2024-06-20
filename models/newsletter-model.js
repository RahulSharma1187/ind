const mongoose = require('mongoose');

const newsletterSchema = new mongoose.Schema({
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

const Newsletter = new mongoose.model("newsletter", newsletterSchema);
module.exports = Newsletter;