const mongoose = require('mongoose');

const quotesSchema = new mongoose.Schema({
    
        id:{

        },
        category:{
            type:String
        },
        body:{
            type:String
        },
        by:{
            type:String
        }


});

module.exports = mongoose.model('Quotes',quotesSchema);
