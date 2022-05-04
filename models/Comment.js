const mongoose = require('mongoose')

const CommentSchema= mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    comment:{
        type: String,
        required: true,
    },
    like:{
        type:Number,
        required: false,
    }

    
})
module.exports = mongoose.model('comments', CommentSchema);