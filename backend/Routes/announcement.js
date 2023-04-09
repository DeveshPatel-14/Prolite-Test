const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const Announcement = require('../models/Announcement')

//ROUTE 1: Create an announcement
router.post('/createannouncement', [
    body('title', 'Enter a valid name').isLength({ min: 3 }),
    body('description'),
    body('creatorName'),
    body('creatorEmail'),
  ], async (req, res) => {
    try {
      // Create a new annoucement
      announcement = await Announcement.create({
        title: req.body.title,
        description: req.body.description,
        creatorName: req.body.creatorName,
        creatorEmail: req.body.creatorEmail,
        
      });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  })
