const express = require('express');
const expensesController = require('../controllers/expensesController');
const protect = require('../middleware/authMiddleware');

const router = express.Router();
router.post('/', expensesController);

module.exports = router;
