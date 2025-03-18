const mongoose = require('mongoose');

const QuoteSchema = new mongoose.Schema({
    quote: { type: String, required: true },
    source: { type: String, default: "" },
    emotion: { type: String, required: true }
});

module.exports = mongoose.model('Quote', QuoteSchema, 'quotes');
