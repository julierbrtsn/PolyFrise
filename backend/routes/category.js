const express = require('express');
const router = express.Router();

const categoryCtrl = require('../controllers/category');


router.get('/', categoryCtrl.getAll);

module.exports = router;