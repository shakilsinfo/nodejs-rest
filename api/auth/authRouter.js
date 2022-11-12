const { login } = require('./authController');
const router = require('express').Router();

router.post('/', login);

module.exports = router;