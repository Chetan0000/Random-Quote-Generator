const express = require('express');

const router = express.Router();
const homeController = require('../controllers/homecontrollers');

router.get('/', homeController.home);
router.post('/userInfo',homeController.user);
router.post('/delete', homeController.destroy);

module.exports = router;