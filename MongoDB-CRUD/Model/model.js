const mongoose = require('mongoose');

//Setting up 'Schema/collections' in named 'itemSchema'
const itemSchema = new mongoose.Schema({
    items:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model('itemsList',itemSchema);