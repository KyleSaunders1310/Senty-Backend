const mongoose = require('mongoose');

const WordSchema = mongoose.Schema({
    word: String,
    type: String
});

module.exports = mongoose.model('Word', WordSchema)
