const express = require('express');
const router = express.Router();

const controller = require('../controllers/wordsController');

// words route:
router.route('/words').get(controller.getTenWords);

module.exports = router;
