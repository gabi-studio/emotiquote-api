const Quote = require('../models/Quote');


// GET a random quote
// url: /api/quotes/random
exports.getRandomQuote = async (req, res) => {
    try {
        const count = await Quote.countDocuments();
        const randomIndex = Math.floor(Math.random() * count);
        const randomQuote = await Quote.findOne().skip(randomIndex);
        res.json(randomQuote);
    } catch (err) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

// GET quotes by emotion
// url: /api/quotes/emotion/{emotion}
// current available emotions: joy, sadness, anger, fear, disgust
exports.getQuotesByEmotion = async (req, res) => {
    try {
        const quotes = await Quote.find({ emotion: req.params.emotion });
        res.json(quotes);
    } catch (err) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};


// GET quotes by keyword
// url: /api/quotes/search?keyword={keyword}
// TO DO: test + implement this function
exports.searchQuotes = async (req, res) => {
    try {
        const keyword = req.query.keyword;
        const quotes = await Quote.find({ quote: { $regex: keyword, $options: "i" } });
        res.json(quotes);
    } catch (err) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};
