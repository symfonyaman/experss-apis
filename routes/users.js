// routes/users.js
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/user');
const bcrypt = require('bcrypt');


// Define your routes using the router instance
router
  .get('/', async (req, res) => {
    try {
      // Extract pagination parameters from the query string
      const page = parseInt(req.query.page) || 1; // default to page 1
      const limit = parseInt(req.query.limit) || 10; // default to limit 10
  
      // Calculate the skip value based on the page and limit
      const skip = (page - 1) * limit;
  
      // Fetch the users with pagination
      const users = await User.find()
        .skip(skip)
        .limit(limit);
  
      // Fetch the total count of users (for pagination metadata)
      const totalCount = await User.countDocuments();
  
      res.status(200).json({
        users,
        page,
        limit,
        totalCount
      });
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch users' });
    }
  })
  .post('/', async (req, res) => {
    try { 
      const { name, email, password } = req.body;

      // Check if the email already exists in the database
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ error: 'Email already exists' });
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = new User({
      name,
      email,
      password: hashedPassword
      });

      // Save the user to the database
      const savedUser = await newUser.save();

      res.status(201).json(savedUser);
    } catch (error) {console.log(error)
      res.status(500).json({ error: 'Failed to create user' });
    }
  })
  .patch('/', (req, res) => {
    res.send('User updated');
  })
  .delete('/', (req, res) => {
    res.send('User deleted');
  });

// Export the router instance
module.exports = router;