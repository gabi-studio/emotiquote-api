const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const Quote = require('./models/Quote');
const quoteRoutes = require('./routes/quoteRoutes');
const rateLimiter = require('./middlewares/rateLimiter');
const path = require('path');


dotenv.config();
connectDB();

const app = express();


// Middleware
app.use(cors());
app.use(express.json());
app.use(rateLimiter);

// View Engine
app.set('view engine', 'pug');


// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Home Route - Displays Buttons
app.get('/', (req, res) => {
    res.render('index', { emotions: ["joy", "sadness", "fear", "anger", "disgust"] });
});

// API Routes
app.use('/api/quotes', quoteRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
