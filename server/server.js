const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');

// load env vars
dotenv.config({ path: './config/config.env' });

// Connect to database
connectDB();

const app = express();

// Body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Enable cors
app.use(cors());

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', require('./routes/plates'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);