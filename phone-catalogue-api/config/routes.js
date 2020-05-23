const express = require('express');
const router = express.Router();
const controller = require('../controllers/base.controller');
const phonesController = require('../controllers/phone.controller');

router.get('/', controller.base);

//phone methods
router.get('/phones', phonesController.list);

module.exports = router;