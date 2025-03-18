const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
    windowMs: 1 * 60 * 1000, // 1 minute
    max: 20, // Limit each IP to 20 requests per minute
    message: { error: "Too many requests, please try again later." }
});

module.exports = limiter;
