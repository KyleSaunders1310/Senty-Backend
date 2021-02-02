const express = require('express');
const Word = require('./models/word');
const Sentence = require('./models/sentence');

const router = express.Router();

router.get('/getWordsByType/:type', async (req, res) => {
    try {
        const words = await Word.find({type: req.params.type});
        res.json(words);
    } catch (error) {
        res.json({message: err});
    }
});

router.get('/getSentences', async (req, res) => {
    try {
        const sentences = await Sentence.find();
        res.json(sentences);
    } catch (error) {
        res.json({message: err});
    }
});

router.get('/getTypes', async (req, res) => {
    try {
        const words = await Word.find().distinct('type');
        res.json(words);
    } catch (error) {
        res.json({message: err});
    }
});

router.post('/addWord',  async (req, res) => {
    const word = new Word({
        word: req.body.word,
        type: req.body.type
    });

    try{
        const savedWord = await word.save();
        res.json(savedWord);
    }catch (err){
        res.json({message: err});
    }

});

router.post('/addSentence', async (req, res) => {
    const sentence = new Sentence({
        sentence: req.body.sentence
    });

    try{
        const savedSentence = await sentence.save();
        res.json(savedSentence);
    }catch (err){
        res.json({message: err});
    }
})

module.exports = router;