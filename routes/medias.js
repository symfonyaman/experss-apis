// routes/users.js
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Media = require('../models/media');
const upload = require('../helpers/mediaupload');

//make the services for CRUD
router
    .get('/', async (req, res) => {
        try {
            // Extract pagination parameters from the query string
            const page = parseInt(req.query.page) || 1; // default to page 1
            const limit = parseInt(req.query.limit) || 10; // default to limit 10
        
            // Calculate the skip value based on the page and limit
            const skip = (page - 1) * limit;
        
            // Fetch the Media with pagination
            const medias = await Media.find()
              .skip(skip)
              .limit(limit);
        
            // Fetch the total count of Media (for pagination metadata)
            const totalCount = await Media.countDocuments();
        
            res.status(200).json({
              medias,
              page,
              limit,
              totalCount
            });
        } catch (error) {
            res.status(500).json({ error: 'Failed to fetch media' });
        }
    })
    .post('/', upload.single('file'), async (req, res) => {
        // Access the uploaded file information
        const file = req.file;

        if (!file) {
          return res.status(400).json({ error: 'No file uploaded' });
        }

        // Create a new media object
        const newMedia = new Media({
          fileName: file.originalname,
          filePath: file.path
        });

        try {
          // Save the media object to the database
          const savedMedia = await newMedia.save();
      
          res.status(200).json({ message: 'File uploaded successfully', media: savedMedia });
        } catch (error) {
          res.status(500).json({ error: 'Failed to save media to the database' });
        }


        
    })
    .put('/', async (req, res) => {})
    .delete('/', async (req, res) => {})
    
// Export the router instance
module.exports = router;