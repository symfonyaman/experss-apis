const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = 3000
const mongoose = require('mongoose');
const User = require('./models/user');

// Add body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Connect to MongoDB using mongoose
mongoose.connect('mongodb+srv://mgsamankr:hDAHpb2UvTfGZoG3@cluster0.uuzb1rl.mongodb.net/express5', {
    useNewUrlParser: true,
    useUnifiedTopology: true
    })
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });

// Require the route modules
const usersRouter = require('./routes/users');

// Use the route modules in your application
app.use('/api/users', usersRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})  