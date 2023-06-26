const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = 3000
const mongoose = require('mongoose');
const dotenv = require('dotenv');
// Load environment variables from .env file
dotenv.config();
// Require the route modules
const usersRouter = require('./routes/users');
const mediasRouter = require('./routes/medias');

// Add body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Connect to MongoDB using mongoose
mongoose.connect(process.env.MONGO_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true
    })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });

// Use the route modules in your application
app.use('/api/users', usersRouter);
app.use('/api/media', mediasRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})  