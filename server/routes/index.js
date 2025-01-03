const router = require('express').Router();
const mainController = require('../controllers/mainController');


router.get('/', mainController.homepage);
router.get('/about', mainController.about);
//router.get('/', mainController.homepage);

module.exports = router;