const express = require('express');
const { errorTest } = require('../controllers/testController');

const router = express.Router();

router.get('/error', errorTest);

module.exports = router;
