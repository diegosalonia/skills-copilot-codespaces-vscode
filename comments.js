// Create web server

// Import modules
const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const { Comment } = require('../models');
const { asyncHandler } = require('../middleware/async-handler');
const { authenticateUser } = require('../middleware/auth-user');

// GET route that returns a list of comments
router.get('/', asyncHandler(async (req, res) => {
    const comments = await Comment.findAll();
    res.json(comments);
}));

// GET route that returns a comment by id
router.get('/:id', asyncHandler(async (req, res) => {
    const comment = await Comment.findByPk(req.params.id);
    res.json(comment);
}));
