const express = require('express');
const QuoteController = require('../controllers/quoteController');

const router = express.Router();

router.get('/random', QuoteController.getRandomQuote);
router.get('/emotion/:emotion', QuoteController.getQuotesByEmotion);
router.get('/search', QuoteController.searchQuotes);

module.exports = router;
