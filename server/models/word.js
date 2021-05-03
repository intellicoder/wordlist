const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name: {type: String},
    meaning: {type: String}
})

module.exports = mongoose.model('Word',schema);