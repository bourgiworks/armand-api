const mongoose = require('mongoose');

const articleSchema = mongoose.Schema({
    
    topic:{
        type: String,
        required: true
    },
    content: {
        type: String,
        require:true
    },
    date :{
        type: Date,
        default: Date.now
    },
    image:{
        type:String,
        required:false
    }
    
})
module.exports = mongoose.model('personals', articleSchema);