const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({

    items:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('itemsList',itemSchema);