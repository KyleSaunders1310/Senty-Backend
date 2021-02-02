const mongoose = require('mongoose');

const SentenceSchema = mongoose.Schema({
    sentence: String
});

module.exports = mongoose.model('Sentence', SentenceSchema);